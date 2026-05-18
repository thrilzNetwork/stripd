import {
  cartCreate,
  cartLinesAdd,
  cartLinesRemove,
  cartLinesUpdate,
  getCart,
  type ShopifyCart,
} from "./shopify";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CART_ID_KEY = "stripd-shopify-cart-id";

function getCartId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CART_ID_KEY);
}

function setCartId(id: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_ID_KEY, id);
}

function removeCartId() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_ID_KEY);
}

function formatItems(cart: ShopifyCart): CartItem[] {
  return cart.lines.nodes.map((node) => ({
    id: node.id,
    name: node.merchandise.product.title,
    price: Number.parseFloat(node.merchandise.product.title.match(/\$([\d.]+)/)?.[1] || "34.99"),
    quantity: node.quantity,
  }));
}

function getCheckoutUrl(cart: ShopifyCart): string {
  return cart.checkoutUrl;
}

export interface ShopifyCartState {
  items: CartItem[];
  count: number;
  total: number;
  checkoutUrl: string;
  loading: boolean;
}

export class ShopifyCartManager {
  private _items: CartItem[] = [];
  private _checkoutUrl = "";
  private _loading = false;
  private _listeners: (() => void)[] = [];

  get state(): ShopifyCartState {
    return {
      items: this._items,
      count: this._items.reduce((s, i) => s + i.quantity, 0),
      total: this._items.reduce((s, i) => s + i.price * i.quantity, 0),
      checkoutUrl: this._checkoutUrl,
      loading: this._loading,
    };
  }

  private _notify() {
    this._listeners.forEach((cb) => cb());
  }

  subscribe(callback: () => void) {
    this._listeners.push(callback);
    return () => {
      this._listeners = this._listeners.filter((cb) => cb !== callback);
    };
  }

  async load() {
    const cartId = getCartId();
    if (!cartId) return;
    this._loading = true;
    this._notify();
    try {
      const cart = await getCart(cartId);
      if (cart) {
        this._items = formatItems(cart);
        this._checkoutUrl = getCheckoutUrl(cart);
      } else {
        removeCartId();
        this._items = [];
        this._checkoutUrl = "";
      }
    } catch {
      removeCartId();
      this._items = [];
      this._checkoutUrl = "";
    } finally {
      this._loading = false;
      this._notify();
    }
  }

  async addItem(merchandiseId: string, name: string, price: number, quantity = 1) {
    this._loading = true;
    this._notify();
    try {
      const cartId = getCartId();
      if (cartId) {
        const cart = await cartLinesAdd(cartId, [{ merchandiseId, quantity }]);
        this._items = formatItems(cart);
        this._checkoutUrl = getCheckoutUrl(cart);
        setCartId(cart.id);
      } else {
        const cart = await cartCreate([{ merchandiseId, quantity }]);
        this._items = formatItems(cart);
        this._checkoutUrl = getCheckoutUrl(cart);
        setCartId(cart.id);
      }
    } catch (e) {
      console.error("Shopify addItem failed:", e);
    } finally {
      this._loading = false;
      this._notify();
    }
  }

  async removeItem(lineId: string) {
    const cartId = getCartId();
    if (!cartId) return;
    this._loading = true;
    this._notify();
    try {
      const cart = await cartLinesRemove(cartId, [lineId]);
      this._items = formatItems(cart);
      this._checkoutUrl = getCheckoutUrl(cart);
      setCartId(cart.id);
      if (this._items.length === 0) {
        removeCartId();
        this._checkoutUrl = "";
      }
    } catch (e) {
      console.error("Shopify removeItem failed:", e);
    } finally {
      this._loading = false;
      this._notify();
    }
  }

  async updateQuantity(lineId: string, quantity: number) {
    const cartId = getCartId();
    if (!cartId) return;
    this._loading = true;
    this._notify();
    try {
      let cart;
      if (quantity <= 0) {
        cart = await cartLinesRemove(cartId, [lineId]);
      } else {
        cart = await cartLinesUpdate(cartId, [{ id: lineId, quantity }]);
      }
      this._items = formatItems(cart);
      this._checkoutUrl = getCheckoutUrl(cart);
      setCartId(cart.id);
      if (this._items.length === 0) {
        removeCartId();
        this._checkoutUrl = "";
      }
    } catch (e) {
      console.error("Shopify updateQuantity failed:", e);
    } finally {
      this._loading = false;
      this._notify();
    }
  }

  async clearCart() {
    const cartId = getCartId();
    if (!cartId) return;
    this._loading = true;
    this._notify();
    try {
      const lineIds = this._items.map((i) => i.id);
      if (lineIds.length > 0) {
        const cart = await cartLinesRemove(cartId, lineIds);
        this._items = formatItems(cart);
        this._checkoutUrl = getCheckoutUrl(cart);
      }
    } catch (e) {
      console.error("Shopify clearCart failed:", e);
    } finally {
      this._items = [];
      this._checkoutUrl = "";
      removeCartId();
      this._loading = false;
      this._notify();
    }
  }

  checkout() {
    if (this._checkoutUrl) {
      window.location.href = this._checkoutUrl;
    }
  }
}

/** Singleton for app-wide cart. */
let _manager: ShopifyCartManager | null = null;
export function getCartManager(): ShopifyCartManager {
  if (!_manager) _manager = new ShopifyCartManager();
  return _manager;
}
