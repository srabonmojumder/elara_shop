"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Clock, Search, ArrowRight, TrendingUp } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";

const categories = ["All", "Style", "Trends", "Craft", "Sustainability", "Lifestyle", "Interviews"];

const featured = {
  category: "Style",
  title: "Building a capsule wardrobe — and why fewer pieces actually means more outfits",
  excerpt: "A stylist explains why capsule dressing isn't marketing — it's mathematics. Twelve well-chosen pieces, ninety distinct looks. Here's the framework.",
  author: "Sofia Esposito",
  date: "April 14, 2026",
  readTime: "7 min",
  image: "/images/categories/women.jpg",
  href: "/blog/style-notes",
};

const posts = [
  { category: "Trends", title: "10 runway looks you can actually wear on a Tuesday", excerpt: "Off-runway, everyday-ready. Our editors break down the season's most wearable trends.", author: "Sofia Esposito", date: "April 12, 2026", readTime: "6 min", image: "/images/categories/men.jpg" },
  { category: "Craft", title: "Why hand-stitched leather still beats anything machine-made", excerpt: "Inside Linea's Tuscan workshop — and why their loafers cost what they do.", author: "Giulia Romano", date: "April 8, 2026", readTime: "9 min", image: "/images/categories/footwear.jpg" },
  { category: "Style", title: "How to find a signature look without buying twenty pieces first", excerpt: "A step-by-step method our stylists use in-store, written down so you can do it yourself.", author: "Martina Romano", date: "April 5, 2026", readTime: "5 min", image: "/images/categories/women.jpg" },
  { category: "Sustainability", title: "What 'made in Portugal' actually means — and why it matters", excerpt: "We visited Verda's Porto workshop. Here's what fair-labour, low-waste production looks like in practice.", author: "Luca Moretti", date: "April 2, 2026", readTime: "8 min", image: "/images/hero/hero-2.jpg" },
  { category: "Trends", title: "The 5-piece travel capsule: dressing well with only five things in the bag", excerpt: "Trip, wedding, weekend away — the editor's capsule that handles them all.", author: "Sofia Esposito", date: "March 29, 2026", readTime: "4 min", image: "/images/hero/hero-3.jpg" },
  { category: "Interviews", title: "In the studio with Giulia Romano — on building Elara Shop from a 30m² boutique", excerpt: "A candid conversation about the early years, the mistakes, and what's next.", author: "Editorial Team", date: "March 25, 2026", readTime: "12 min", image: "/images/hero/hero-4.jpg" },
  { category: "Style", title: "Tailoring for beginners: the 6 rules that actually matter", excerpt: "Start here before you buy your next blazer. A practical, no-nonsense guide to fit.", author: "Marcus Lindqvist", date: "March 21, 2026", readTime: "10 min", image: "/images/hero/hero-1.jpg" },
  { category: "Craft", title: "How to spot quality leather (and the marketing tricks to ignore)", excerpt: "Plus: why grain matters more than country of origin.", author: "Giulia Romano", date: "March 18, 2026", readTime: "6 min", image: "/images/categories/bags.jpg" },
  { category: "Lifestyle", title: "Investment dressing: why one €600 piece beats six €100 ones", excerpt: "The cost-per-wear math that quietly redefined how our editors shop.", author: "Sofia Esposito", date: "March 14, 2026", readTime: "7 min", image: "/images/categories/jewelry.jpg" },
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
        title="Style writing worth reading"
        description="Interviews, how-tos, deep-dives, and the occasional hot take — written by our editors, stylists, and the people behind the brands we love."
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
                href="/blog/style-notes"
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
