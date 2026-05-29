"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getCartManager, type ShopifyCartState } from "./shopify-cart";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  count: number;
  total: number;
  checkoutUrl: string;
  loading: boolean;
  addItem: (item: Omit<CartItem, "quantity"> & { merchandiseId?: string }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ShopifyCartState>({
    items: [],
    count: 0,
    total: 0,
    checkoutUrl: "",
    loading: false,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const manager = getCartManager();
    const unsubscribe = manager.subscribe(() => {
      setState(manager.state);
    });
    manager.load().then(() => setLoaded(true));
    setState(manager.state);
    return unsubscribe;
  }, []);

  const addItem = useCallback(async (item: Omit<CartItem, "quantity"> & { merchandiseId?: string }) => {
    const manager = getCartManager();
    if (!item.merchandiseId) {
      console.error("No merchandiseId provided for Shopify cart");
      return;
    }
    await manager.addItem(item.merchandiseId, item.name, item.price, 1);
  }, []);

  const removeItem = useCallback(async (id: string) => {
    const manager = getCartManager();
    await manager.removeItem(id);
  }, []);

  const updateQuantity = useCallback(async (id: string, quantity: number) => {
    const manager = getCartManager();
    await manager.updateQuantity(id, quantity);
  }, []);

  const clearCart = useCallback(async () => {
    const manager = getCartManager();
    await manager.clearCart();
  }, []);

  const checkout = useCallback(() => {
    const manager = getCartManager();
    manager.checkout();
  }, []);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        count: state.count,
        total: state.total,
        checkoutUrl: state.checkoutUrl,
        loading: state.loading || !loaded,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
