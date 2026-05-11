"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    id: "why-oral-strips",
    title: "Why Oral Strips Are the Future of Supplement Delivery",
    excerpt: "Pills, powders, and gummies have dominated the supplement industry for decades. But oral dissolvable strips are changing everything — here's why.",
    category: "Science",
    date: "May 8, 2026",
    readTime: "4 min read",
  },
  {
    id: "morning-after-science",
    title: "The Science Behind Your Morning Recovery",
    excerpt: "What actually happens to your body after a night out? We break down the ingredients that help you bounce back faster.",
    category: "Wellness",
    date: "May 1, 2026",
    readTime: "5 min read",
  },
  {
    id: "gut-brain-connection",
    title: "The Gut-Brain Connection: Why Digestive Health Matters",
    excerpt: "Your gut is often called your 'second brain' — and for good reason. Learn how your digestive health impacts everything from mood to immunity.",
    category: "Digestive",
    date: "Apr 24, 2026",
    readTime: "6 min read",
  },
  {
    id: "beauty-from-within",
    title: "Beauty From Within: Nutrients That Actually Work",
    excerpt: "Topical products only go skin-deep. Discover the supplements that nourish your hair, skin, and nails from the inside out.",
    category: "Beauty",
    date: "Apr 17, 2026",
    readTime: "4 min read",
  },
  {
    id: "sleep-hygiene-guide",
    title: "The Complete Guide to Better Sleep Hygiene",
    excerpt: "Struggling with restless nights? From melatonin timing to wind-down routines, here's your science-backed sleep optimization playbook.",
    category: "Sleep",
    date: "Apr 10, 2026",
    readTime: "7 min read",
  },
];

const categories = ["All", "Science", "Wellness", "Digestive", "Beauty", "Sleep"];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setSubscribing(false);
      setEmail("");
    }, 800);
  };

  return (
    <div className="min-h-dvh bg-black text-white">
      {/* Header */}
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
          </Link>
          <Link href="/" className="text-sm font-medium text-white/50 hover:text-white/80 transition">
            Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/40 mb-6 block">
          The Stripd Blog
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-white mb-6">
          Wellness, Dissolved.
        </h1>
        <p className="text-base sm:text-lg font-light tracking-tight text-white/60 max-w-md mx-auto">
          Science-backed insights, wellness tips, and everything you need to know about the future of supplementation.
        </p>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-md rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6">
          {subscribed ? (
            <div className="text-center py-4">
              <svg className="w-10 h-10 mx-auto mb-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <p className="text-sm font-semibold text-white mb-1">You're in!</p>
              <p className="text-xs text-white/40">Welcome to the Stripd newsletter. We'll send you the latest posts and exclusive offers.</p>
            </div>
          ) : (
            <>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-2">Never miss a post</span>
              <p className="text-xs text-white/50 mb-4">Get the latest wellness insights delivered to your inbox every week.</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-full border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-white/40 transition"
                />
                <button
                  type="submit"
                  disabled={subscribing || !email}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-50 shrink-0"
                >
                  {subscribing ? "Sending..." : "Subscribe"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/[0.06] py-4 px-4">
        <div className="mx-auto max-w-lg flex items-center justify-center gap-2.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-[12px] font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/15 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-md space-y-5">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#111111]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-white/50 border border-white/10">
                  {post.category}
                </span>
                <span className="text-[10px] text-white/30">{post.date}</span>
                <span className="text-[10px] text-white/20">·</span>
                <span className="text-[10px] text-white/30">{post.readTime}</span>
              </div>
              <h2 className="text-base font-bold tracking-tight text-white mb-2 group-hover:text-white/90 transition">
                {post.title}
              </h2>
              <p className="text-[12px] leading-relaxed text-white/40">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
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
