"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const posts: Record<string, { title: string; content: string; date: string; category: string }> = {
  "why-oral-strips": {
    title: "Why Oral Strips Are the Future of Supplement Delivery",
    date: "May 8, 2026",
    category: "Science",
    content: `Pills, powders, and gummies have dominated the supplement industry for decades. But oral dissolvable strips are quietly revolutionizing how we think about daily nutrition.

## The Problem with Traditional Supplements

The biggest barrier to consistent supplementation isn't efficacy — it's convenience. Swallowing large pills is uncomfortable for millions of people. Powders require measuring, mixing, and cleanup. Gummies are palatable but often loaded with sugar and limited in dosage capacity.

Studies show that over 50% of supplement users stop their routine within the first three months. The primary reason? It's simply too much hassle.

## How Oral Strips Work

Oral dissolvable strips use a thin-film technology originally developed for breath fresheners. The active ingredients are embedded in a water-soluble polymer matrix that dissolves on contact with saliva.

Once dissolved, the ingredients are absorbed directly through the oral mucosa — the lining of your mouth — bypassing the digestive system entirely. This means:

- **Faster onset**: Sublingual and buccal absorption delivers ingredients to the bloodstream faster than swallowing a pill
- **Higher bioavailability**: Bypassing first-pass metabolism in the liver means more of the active ingredients reach your system
- **No water needed**: Just place on your tongue and go

## Why This Matters for Wellness

Oral strips remove every barrier to consistency. Keep a pack in your pocket, your desk, your gym bag — and you'll never miss a dose again. No water fountain required. No measuring scoops. No excuses.

At STRIPD, we've combined this delivery technology with 13 targeted formulas backed by clinically-studied ingredients. From recovery to focus to sleep, there's a strip designed to make your wellness routine effortless.

The future of supplements isn't a bigger pill — it's no pill at all.`,
  },
  "morning-after-science": {
    title: "The Science Behind Your Morning Recovery",
    date: "May 1, 2026",
    category: "Wellness",
    content: `We've all been there — the morning after a night out, feeling like you've been hit by a truck. But what's actually happening in your body, and how can you support its natural recovery processes?

## What Happens Overnight

When you consume alcohol, your body prioritizes metabolizing it over other processes. This leads to:

1. **Dehydration**: Alcohol is a diuretic, causing increased fluid loss
2. **Inflammation**: Your body mounts an inflammatory response
3. **Oxidative stress**: Free radicals accumulate as alcohol is broken down
4. **Liver strain**: Your liver works overtime to process toxins
5. **Blood sugar fluctuations**: Alcohol can cause blood sugar to drop

## Key Ingredients for Recovery

### Curcuma Longa (Turmeric)
Curcumin, the active compound in turmeric, is well-documented for its antioxidant properties that help combat oxidative stress and support a healthy inflammatory response.

### Andrographis
This traditional herb has been used for centuries in Ayurvedic and traditional medicine. Modern research supports its role in supporting immune function and overall wellness.

### Phyllanthus Species
Both Phyllanthus Niruri and Phyllanthus Emblica are known in traditional medicine for their liver-supportive properties, helping maintain normal liver function and detoxification pathways.

### Vitis Vinifera (Grape Seed)
Rich in proanthocyanidins, grape seed extract provides powerful antioxidant support that helps protect cells from oxidative damage.

## The STRIPD Approach

Our Recover formula combines these ingredients in a precise, fast-dissolving strip. No water needed, no chalky powders — just targeted support that starts working the moment it hits your tongue.

Remember: the best recovery strategy is always moderation and hydration. STRIPD is here to support your body's natural processes, not replace common sense.`,
  },
  "gut-brain-connection": {
    title: "The Gut-Brain Connection: Why Digestive Health Matters",
    date: "Apr 24, 2026",
    category: "Digestive",
    content: `Your gut is often called your "second brain" — and for good reason. The enteric nervous system (ENS) lining your digestive tract contains over 100 million neurons, more than either the spinal cord or peripheral nervous system.

## The Gut-Brain Axis

The gut and brain communicate through a bidirectional network called the gut-brain axis. This involves:

- **The vagus nerve**: A direct neural highway between your gut and brain
- **Neurotransmitters**: About 90% of serotonin — your "feel-good" chemical — is produced in the gut
- **Immune signals**: Gut bacteria influence inflammation throughout your body, including your brain
- **Metabolic pathways**: Gut microbes produce compounds that affect brain function

## Why Probiotics Matter

Beneficial bacteria (probiotics) play a crucial role in maintaining this communication network. They help:

- **Maintain gut barrier integrity**: Preventing "leaky gut" and systemic inflammation
- **Produce short-chain fatty acids**: Fuel for gut cells and signaling molecules for the brain
- **Synthesize vitamins**: Including B vitamins and vitamin K
- **Crowd out harmful bacteria**: Supporting a balanced microbiome

## Prebiotics: Food for Your Good Bacteria

Prebiotics like polydextrose provide the fuel your beneficial bacteria need to thrive. When combined with probiotics, they create a synergistic effect that supports digestive wellness more effectively than either alone.

Our Gut Stripd combines 10 billion CFU of Bifidobacterium lactis with prebiotic polydextrose — all in a convenient mixed berry strip that dissolves on your tongue.`,
  },
  "beauty-from-within": {
    title: "Beauty From Within: Nutrients That Actually Work",
    date: "Apr 17, 2026",
    category: "Beauty",
    content: `You can spend hundreds on serums, creams, and treatments — but true beauty starts from the inside. The nutrients you consume directly affect the health and appearance of your skin, hair, and nails.

## Biotin: The Beauty Vitamin

Biotin (Vitamin B7) is one of the most researched nutrients for hair, skin, and nail health. It plays a crucial role in keratin production — the protein that makes up your hair, skin, and nails.

At 5,000mcg per serving, our Glow Stripd delivers a clinically significant dose that supports:

- Normal hair strength and thickness
- Skin vitality and radiance
- Stronger, less brittle nails

## Folate for Cell Renewal

Folate (Vitamin B9) is essential for DNA synthesis and cell division — processes that are constantly happening in your skin and hair follicles. Adequate folate levels support healthy cell turnover and renewal.

## Vitamin D3: The Sunshine Vitamin

Vitamin D3 receptors are found throughout your skin cells. Adequate vitamin D levels support normal skin barrier function and immune health, helping your skin look and feel its best.

## Collagen and Vitamin E

For those seeking more targeted support, our Renew Stripd combines Collagen Peptides (100mg) with Vitamin E — a powerful antioxidant duo that supports skin elasticity and protects against environmental stressors.

The bottom line: the most effective beauty routine starts with what you put into your body, not just what you put on your skin.`,
  },
  "sleep-hygiene-guide": {
    title: "The Complete Guide to Better Sleep Hygiene",
    date: "Apr 10, 2026",
    category: "Sleep",
    content: `Sleep is the foundation of health — yet millions of people struggle to get quality rest. The science of sleep hygiene offers practical, evidence-based strategies for better sleep.

## The Science of Sleep

Your sleep-wake cycle is regulated by your circadian rhythm — an internal clock influenced by light exposure, eating patterns, and physical activity. Key players include:

- **Melatonin**: The "sleep hormone" that signals your body it's time to rest
- **Adenosine**: A neurotransmitter that builds up during wakefulness, creating "sleep pressure"
- **Cortisol**: The stress hormone that should be lowest at bedtime

## Practical Sleep Hygiene Tips

### 1. Optimize Your Environment
- Keep your bedroom cool (65-68°F / 18-20°C)
- Use blackout curtains or an eye mask
- Minimize noise with earplugs or white noise
- Remove screens 60-90 minutes before bed

### 2. Establish a Routine
- Go to bed and wake up at the same time every day (yes, weekends too)
- Create a 30-minute wind-down ritual (reading, gentle stretching, meditation)
- Avoid caffeine after 2 PM
- Limit alcohol — it may help you fall asleep but disrupts REM sleep

### 3. Nutrition for Sleep
Certain nutrients directly support sleep quality:
- **Melatonin**: Helps regulate your sleep-wake cycle
- **Valerian Root**: Traditionally used to support relaxation
- **Chamomile**: Known for its calming properties
- **Lavender**: Aromatherapy shown to improve sleep quality
- **Magnesium**: Supports GABA receptors and muscle relaxation

## When Supplements Help

Even with perfect sleep hygiene, some nights need extra support. Our Rest Stripd combines Melatonin with Valerian Root, Lavender, Chamomile, and Hibiscus — formulated to help you fall asleep naturally and wake up refreshed, without the grogginess.

Remember: supplements work best as part of a comprehensive sleep routine, not as a replacement for good habits.`,
  },
};

export default function BlogPostDetail({ postId }: { postId: string }) {
  const id = postId;
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  const post = id ? posts[id] : null;

  if (!post) {
    return (
      <div className="min-h-dvh bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">Post not found.</p>
          <Link href="/blog" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          STRIPD
        </Link>
        <Link href="/blog" className="text-sm font-medium text-white/50 hover:text-white/80 transition">
          ← Blog
        </Link>
      </header>

      <article className="pt-28 pb-20 px-6 max-w-md mx-auto">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-white/50 border border-white/10">
              {post.category}
            </span>
            <span className="text-[10px] text-white/30">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-white mb-8">
            {post.title}
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-white/60 leading-relaxed space-y-4">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-lg font-bold text-white mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-base font-semibold text-white mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- **")) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-1">
                    {paragraph.split("\n").map((line, j) => (
                      <li key={j} className="text-sm text-white/60">
                        {line.replace(/^- \*\*(.*?)\*\*:?/, "$1 — ")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>

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
