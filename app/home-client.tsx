"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ─── Header ─── */
function Header({ cartCount }: { cartCount: number }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
      <Link href="/" className="text-xl font-bold tracking-tight text-white">
        STRIPD
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/cart" className="relative text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold text-black">
              {cartCount}
            </span>
          )}
        </Link>
        <button className="text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

/* ─── Sonar Ripple Background ─── */
function SonarRipples() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {[0, 0.6, 1.2, 1.8, 2.4].map((delay, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/[0.04]"
          style={{
            width: `${(i + 1) * 180}px`,
            height: `${(i + 1) * 180}px`,
            animation: `sonar 4s ease-out infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      <div className="absolute w-[300px] h-[300px] rounded-full border border-white/[0.06]" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.03]" />
    </div>
  );
}

/* ─── Marquee ─── */
function Marquee() {
  const text = "FAST ABSORPTION · ZERO WATER · PRECISION DOSED · ";
  return (
    <div className="w-full bg-white py-5 overflow-hidden my-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array(8).fill(text).map((t, i) => (
          <span key={i} className="text-[11px] font-semibold tracking-[0.2em] uppercase text-black mx-2">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Product Card ─── */
function ProductCard({
  product,
  index,
}: {
  product: any;
  index: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Link
      href={`/product?id=${product.id}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#111111]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative flex items-center justify-center p-8 pb-5">
        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-full bg-red-900/20 blur-2xl" />
          <img
            src={`/products/${product.id}.png`}
            alt={product.name}
            className="relative w-[140px] h-[140px] object-contain"
          />
        </div>
        <div className="absolute top-4 left-4 flex gap-1.5">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-white/70 border border-white/10">
            {product.category}
          </span>
          {index === 0 && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-black bg-white">
              BEST SELLER
            </span>
          )}
        </div>
      </div>

      <div className="px-5 pb-5">
        <h3 className="text-base font-bold tracking-tight text-white">{product.name}</h3>
        <p className="text-[12px] text-white/40 mt-1">{product.tagline}</p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-lg font-bold text-white">$34.99</span>
          <span className="text-[11px] text-white/30">30 oral strips</span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Main Home Client ─── */
export default function HomeClient({ products, categories }: { products: any[]; categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroVisible, setHeroVisible] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-dvh bg-black text-white">
      <Header cartCount={count} />

      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <SonarRipples />
        <div
          className={cn(
            "relative z-10 flex flex-col items-center transition-all duration-1000",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="mb-6 text-[11px] font-medium tracking-[0.25em] uppercase text-white/40">
            13 Formulas · 0 Pills
          </span>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.88] text-white">
            STRIPD
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-light tracking-tight text-white/60 max-w-md">
            The future of supplements is a strip on your tongue.
          </p>
          <p className="mt-3 text-sm text-white/35">
            No pills. No powders. No water. Just dissolve and go.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Formulas
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      <Marquee />

      <section id="products" className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/[0.06] py-4 px-4">
        <div className="mx-auto max-w-lg flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-[12px] font-medium transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/15 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-md">
          <div className="grid grid-cols-1 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-md text-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4 block">
            The Technology
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Why oral strips?
          </h2>
          <div className="mt-10 grid gap-4 text-left">
            {[
              { num: "01", title: "Fast Absorption", desc: "Active ingredients bypass the digestive system and enter directly through the oral mucosa — faster onset, higher bioavailability." },
              { num: "02", title: "Zero Water Required", desc: "No pills to swallow, no shaker cups to clean. Place on your tongue, let it dissolve, and you're done in seconds." },
              { num: "03", title: "Precise Dosing", desc: "Every strip delivers the exact same amount. No measuring scoops, no guessing doses, no inconsistent results." },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6">
                <span className="text-[10px] font-mono font-bold text-white/20 block mb-3">{item.num}</span>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-[12px] leading-relaxed text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
