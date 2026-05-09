"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function BackArrow({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

function CartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function MinusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  );
}

function PlusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ProductPageClient({ product }: { product: Product }) {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cart: CartItem[] = JSON.parse(localStorage.getItem("stripd-cart") || "[]");
    setCartCount(cart.reduce((acc, i) => acc + i.quantity, 0));
  }, []);

  const addToCart = () => {
    try {
      const items: CartItem[] = JSON.parse(localStorage.getItem("stripd-cart") || "[]");
      const existing = items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity += qty;
      } else {
        items.push({ id: product.id, name: product.name, price: 34.99, quantity: qty });
      }
      localStorage.setItem("stripd-cart", JSON.stringify(items));
      setCartCount((c) => c + qty);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    } catch {
      // noop
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2 text-white/70 transition-colors hover:text-white">
            <BackArrow />
            <span className="text-sm font-medium tracking-wide">BACK</span>
          </Link>
          <span className="text-lg font-bold tracking-tight">STRIPD</span>
          <Link href="/cart" className="relative text-white">
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 pb-28 pt-6">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
            {product.category}
          </span>
          {product.badges.slice(0, 2).map((badge) => (
            <span key={badge} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/50">
              {badge}
            </span>
          ))}
        </div>

        {/* Product Image */}
        <div className="relative mb-6 flex aspect-square items-center justify-center rounded-3xl border border-white/[0.06] bg-[#0A0A0A]">
          <div className="relative h-64 w-64">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: product.color }}
            />
            <img
              src={`/products/${product.id}.png`}
              alt={product.name}
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Name & Tagline */}
        <h1 className="mb-1 text-3xl font-semibold tracking-tight">{product.name}</h1>
        <p className="mb-4 text-base text-white/50">{product.tagline}</p>

        {/* Price */}
        <div className="mb-6 flex items-baseline gap-3">
          <span className="text-2xl font-semibold">$34.99</span>
          <span className="text-sm text-white/40">{product.amount}</span>
        </div>

        {/* Description */}
        <p className="mb-8 text-[15px] leading-relaxed text-white/60">{product.description}</p>

        {/* Key ingredients */}
        <div className="mb-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Key Ingredients</h3>
          <p className="text-sm leading-relaxed text-white/70">{product.ingredients}</p>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Benefits</h3>
          <ul className="space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Flavor */}
        <div className="mb-8 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Flavor:</span>
          <span className="text-sm text-white/70">{product.flavor}</span>
        </div>
      </div>

      {/* Qty + Add to Cart — sticky bottom */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-white/[0.06] bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center gap-4 p-4">
          {/* Quantity */}
          <div className="flex items-center rounded-xl border border-white/[0.12]">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-3 text-white/60 hover:text-white"
            >
              <MinusIcon />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-semibold">{qty}</span>
            <button
              onClick={() => setQty((q) => Math.min(10, q + 1))}
              className="px-3 py-3 text-white/60 hover:text-white"
            >
              <PlusIcon />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={addToCart}
            className={`flex-1 rounded-xl py-3.5 text-sm font-semibold uppercase tracking-wider transition-all ${
              added
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            {added ? "ADDED ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
