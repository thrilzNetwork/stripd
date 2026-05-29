"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

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

const CART_STORAGE_KEY = "stripd-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addItem = useCallback((item: Omit<CartItem, "quantity"> & { merchandiseId?: string }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const checkout = useCallback(() => {
    // Redirect to Shopify checkout with cart items
    const cartData = encodeURIComponent(JSON.stringify(items));
    window.location.href = `https://0gn1c6-1b.myshopify.com/cart/${cartData}`;
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        checkoutUrl: "",
        loading: !loaded,
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
