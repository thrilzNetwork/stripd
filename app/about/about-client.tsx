"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutClient() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-dvh bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          STRIPD
        </Link>
        <Link href="/" className="text-sm font-medium text-white/50 hover:text-white/80 transition">
          Back
        </Link>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/40 mb-6 block">
            Our Story
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-white mb-6">
            The future of supplements is a strip.
          </h1>
          <p className="text-lg sm:text-xl font-light tracking-tight text-white/60 max-w-md mx-auto">
            No pills. No powders. No water. Just dissolve and go.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-md space-y-10">
          <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-4">The Problem</span>
            <p className="text-sm leading-relaxed text-white/60">
              Supplements have been stuck in the past for decades. Giant pills you struggle to swallow. Powders that require shaker cups and measuring scoops. Gummies packed with sugar. Most people give up on their wellness routines not because they don't work, but because they're inconvenient.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-4">The Solution</span>
            <p className="text-sm leading-relaxed text-white/60">
              We asked a simple question: what if taking a supplement was as easy as putting a strip on your tongue? No water fountain required. No measuring. No mess. Just precise dosing that dissolves in seconds and absorbs directly into your bloodstream through the oral mucosa — faster and more efficiently than pills or powders.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-4">Our Mission</span>
            <p className="text-sm leading-relaxed text-white/60">
              STRIPD exists to make daily wellness effortless. We combine cutting-edge oral strip technology with premium, clinically-backed ingredients across 13 targeted formulas. Whether you need better sleep, sharper focus, glowing skin, or a hangover rescue — there's a strip for that.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-4">The Promise</span>
            <div className="grid grid-cols-2 gap-3">
              {["Gluten-Free", "Vegan Friendly", "Halal", "Non-GMO", "Cruelty-Free", "No Sugar"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-white/40 text-center"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
        >
          Explore Formulas
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="mx-auto max-w-md flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white">STRIPD</span>
            <span className="text-[10px] text-white/30">Wellness Dissolved</span>
          </div>
          <span className="text-[11px] text-white/20">© 2026 Stripd</span>
        </div>
      </footer>
    </div>
  );
}
