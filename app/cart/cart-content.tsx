"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CartContent() {
  const { items, count, total, removeItem, updateQuantity, clearCart, checkout, loading } = useCart();
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!ready || loading) return <div className="min-h-dvh bg-black text-white" />;

  return (
    <div className="min-h-dvh bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          STRIPD
        </Link>
        <span className="text-sm font-medium text-white/50">Cart ({count})</span>
      </header>

      <div className="pt-20 pb-8 px-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/40 mb-6">Your cart is empty.</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white">{item.name}</h3>
                    <p className="text-[12px] text-white/40">${item.price} each</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 text-sm"
                    >
                      −
                    </button>
                    <span className="text-sm font-medium text-white w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white/30 hover:text-white/60 ml-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.08] pt-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/50">Subtotal</span>
                <span className="text-sm font-bold text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/50">Shipping</span>
                <span className="text-sm text-white">Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
                <span className="text-base font-bold text-white">Total</span>
                <span className="text-xl font-bold text-white">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={checkout}
              className="w-full rounded-full bg-white py-4 text-sm font-bold text-black mb-3"
            >
              Checkout — ${total.toFixed(2)}
            </button>
            <button
              onClick={clearCart}
              className="w-full rounded-full border border-white/20 py-3 text-sm font-medium text-white/60"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
