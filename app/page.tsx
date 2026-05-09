import { products, categories } from "@/lib/products";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <span className="text-lg font-bold tracking-tight">STRIPD</span>
          <Link href="/cart" className="relative">
            <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pt-32 pb-20 text-center">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">13 Formulas • 0 Pills</p>
        <h1 className="mb-6 text-6xl font-semibold tracking-tighter">
          STRIPD
        </h1>
        <p className="mb-12 max-w-xs mx-auto text-base leading-relaxed text-white/50">
          The future of supplements is a strip on your tongue.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#formulas" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            Explore Formulas
          </a>
          <a href="#about" className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/5">
            Our Story
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-white/[0.06] py-5 my-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              ZERO WATER • PRECISION DOSED • FAST ABSORPTION • DISCREET • CLINICALLY PROVEN •
            </span>
          ))}
        </div>
      </div>

      {/* Products */}
      <section id="formulas" className="px-5 py-14">
        <p className="mb-8 text-center text-xs uppercase tracking-wider text-white/30">13 Premium Formulas</p>

        <div className="grid gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0A] transition hover:border-white/[0.12]">
              <div className="relative flex items-center justify-center p-8 pb-5">
                <div className="relative">
                  <div
                    className="absolute inset-0 -m-4 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: product.color }}
                  />
                  <img
                    src={`/products/${product.id}.png`}
                    alt={product.name}
                    className="relative z-10 h-40 w-40 object-contain mix-blend-normal"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/40">
                    {product.category}
                  </span>
                  {product.id === "recover" && (
                    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                      Best Seller
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
                <p className="mb-3 text-sm text-white/40">{product.tagline}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-semibold">$34.99</span>
                  <span className="text-xs text-white/30">{product.amount}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-md text-center">
          <h2 className="mb-4 text-2xl font-semibold">Science, Simplified.</h2>
          <p className="mb-6 text-sm leading-relaxed text-white/50">
            Every STRIPD formula is precision-dosed, fast-absorbing, and designed to dissolve on your tongue in seconds. No water. No pills. Just results.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Gluten-Free", "Vegan Friendly", "Halal", "Non-GMO", "Cruelty-Free"].map((b) => (
              <span key={b} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white/40">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
