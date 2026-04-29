"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Clock, Search, ArrowRight, TrendingUp } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";

const categories = ["All", "Skincare", "Makeup", "Haircare", "Fragrance", "Wellness", "Interviews"];

const featured = {
  category: "Skincare",
  title: "The science behind your 3-step routine — and why order actually matters",
  excerpt: "A dermatologist explains why skincare order isn't marketing — it's chemistry. Get the actual reasons your serum should come before moisturizer.",
  author: "Dr. Elena Moretti",
  date: "April 14, 2026",
  readTime: "7 min",
  image: "/images/categories/skincare.jpg",
  href: "/blog/beauty-tips",
};

const posts = [
  { category: "Makeup", title: "10 runway-inspired looks you can wear on a Tuesday", excerpt: "Off-runway, everyday-ready. Our editors break down the season's most wearable trends.", author: "Sofia Esposito", date: "April 12, 2026", readTime: "6 min", image: "/images/categories/makeup.jpg" },
  { category: "Haircare", title: "Why bond repair is the only haircare trend worth believing in", excerpt: "The science, the products, and the honest reviews — from someone with bleach-damaged hair.", author: "Giulia Romano", date: "April 8, 2026", readTime: "9 min", image: "/images/categories/haircare.jpg" },
  { category: "Fragrance", title: "How to shop for a signature scent without buying 20 bottles first", excerpt: "A step-by-step method we use in-store, written down so you can do it yourself.", author: "Martina Romano", date: "April 5, 2026", readTime: "5 min", image: "/images/categories/perfumes-women.jpg" },
  { category: "Wellness", title: "Your skin barrier is angry. Here's what's actually happening.", excerpt: "Breakouts, redness, dullness — chances are your skin barrier is shouting. Our estheticians walk through the fix.", author: "Dr. Lucia Ferri", date: "April 2, 2026", readTime: "8 min", image: "/images/hero/hero-2.jpg" },
  { category: "Makeup", title: "The 5-product makeup bag: what to pack when you can only bring five things", excerpt: "Trip, wedding, weekend away — the editor's capsule that handles them all.", author: "Sofia Esposito", date: "March 29, 2026", readTime: "4 min", image: "/images/hero/hero-3.jpg" },
  { category: "Interviews", title: "In the studio with Giulia Romano — on building Elara Shop from a 30m² shop", excerpt: "A candid conversation about the early years, the mistakes, and what's next.", author: "Editorial Team", date: "March 25, 2026", readTime: "12 min", image: "/images/hero/hero-4.jpg" },
  { category: "Skincare", title: "Retinol for beginners: everything you need, nothing you don't", excerpt: "Start here before you buy anything. A gentle, actually-useful guide to retinol.", author: "Dr. Elena Moretti", date: "March 21, 2026", readTime: "10 min", image: "/images/hero/hero-1.jpg" },
  { category: "Haircare", title: "How often should you actually wash your hair? (It depends.)", excerpt: "Plus: why the \"training your hair\" trend is mostly a myth.", author: "Giulia Romano", date: "March 18, 2026", readTime: "6 min", image: "/images/categories/haircare.jpg" },
  { category: "Wellness", title: "Sleep is the cheapest anti-aging tool — here's the research", excerpt: "Why 7 hours beats any serum, and what to do when you can't get it.", author: "Dr. Lucia Ferri", date: "March 14, 2026", readTime: "7 min", image: "/images/categories/body.jpg" },
];

export default function BlogPage() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = cat === "All" || p.category === cat;
      const matchesQuery =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [cat, query]);

  return (
    <div>
      <PageHeader
        eyebrow="The Edit"
        title="Beauty writing worth reading"
        description="Interviews, how-tos, deep-dives, and the occasional hot take — written by our editors, dermatologists, and the people behind the brands we love."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <a
          href={featured.href}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
        >
          <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur text-text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
              <TrendingUp className="w-3 h-3 text-accent" />
              Featured
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              {featured.category}
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight group-hover:text-accent transition-colors">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex items-center flex-wrap gap-x-4 gap-y-2 text-xs text-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  EM
                </span>
                {featured.author}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>{featured.date}</span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent group-hover:gap-3 transition-all">
              Read the article
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <SectionHeading
            eyebrow="Latest"
            title={cat === "All" ? "All articles" : cat}
            description={`${filtered.length} article${filtered.length === 1 ? "" : "s"}`}
          />
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-full text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-4 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border whitespace-nowrap transition-colors cursor-pointer ${
                cat === c
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-text-secondary border-border hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-surface-secondary rounded-2xl">
            <p className="text-sm font-semibold text-text-primary">No articles match</p>
            <p className="text-xs text-text-muted mt-1">Try a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((post) => (
              <a
                key={post.title}
                href="/blog/beauty-tips"
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-tertiary">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                  {post.category}
                </p>
                <h3 className="text-base md:text-lg font-bold text-text-primary leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[11px] text-text-muted">
                  <span className="truncate max-w-[50%]">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
