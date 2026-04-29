"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Search, Star, ArrowUpRight, Sparkles, X } from "lucide-react";

type Brand = {
  name: string;
  category: string;
  country: string;
  tagline?: string;
  badge?: "new" | "cult" | "editor" | "clean";
};

const spotlight = [
  {
    name: "Charlotte Tilbury",
    slug: "charlotte-tilbury",
    image: "/images/brands/charlotte-tilbury.jpg",
    tagline: "Makeup with main-character energy",
    category: "Makeup",
    since: "2013",
  },
  {
    name: "La Roche-Posay",
    slug: "la-roche-posay",
    image: "/images/brands/la-roche-posay.jpg",
    tagline: "French pharmacy, derm-approved",
    category: "Skincare",
    since: "1975",
  },
  {
    name: "NARS",
    slug: "nars",
    image: "/images/brands/nars.jpg",
    tagline: "The backstage favorite",
    category: "Makeup",
    since: "1994",
  },
  {
    name: "The Ordinary",
    slug: "the-ordinary",
    image: "/images/brands/the-ordinary.jpg",
    tagline: "Clinical formulas, honest prices",
    category: "Skincare",
    since: "2013",
  },
];

const categories = [
  "All",
  "Skincare",
  "Makeup",
  "Fragrance",
  "Haircare",
  "Body",
  "Luxury",
  "Clean beauty",
];

const allBrands: Brand[] = [
  { name: "Aesop", category: "Skincare", country: "AU", tagline: "Botanically-driven luxury" },
  { name: "Augustinus Bader", category: "Luxury", country: "UK", badge: "cult", tagline: "The Cream, legend-made" },
  { name: "Byredo", category: "Fragrance", country: "SE", badge: "editor", tagline: "Scent as autobiography" },
  { name: "Bobbi Brown", category: "Makeup", country: "US", tagline: "Skin-first classics" },
  { name: "CeraVe", category: "Skincare", country: "US", tagline: "Derm-developed basics" },
  { name: "Charlotte Tilbury", category: "Makeup", country: "UK", badge: "cult", tagline: "Pillow talk everything" },
  { name: "Clinique", category: "Skincare", country: "US", tagline: "Allergy-tested, fragrance-free" },
  { name: "Chanel", category: "Luxury", country: "FR", badge: "editor", tagline: "The OG of chic" },
  { name: "Dior", category: "Luxury", country: "FR", tagline: "Couture in a bottle" },
  { name: "Diptyque", category: "Fragrance", country: "FR", tagline: "Paris in a candle" },
  { name: "Drunk Elephant", category: "Skincare", country: "US", badge: "clean", tagline: "No suspicious six" },
  { name: "Estée Lauder", category: "Skincare", country: "US", tagline: "Advanced Night Repair, always" },
  { name: "Fenty Beauty", category: "Makeup", country: "US", badge: "cult", tagline: "Beauty for everyone" },
  { name: "Fresh", category: "Skincare", country: "US", tagline: "Nature meets science" },
  { name: "Glossier", category: "Makeup", country: "US", tagline: "Skin-first, makeup-second" },
  { name: "Giorgio Armani", category: "Luxury", country: "IT", tagline: "Quiet luxury beauty" },
  { name: "Hermès", category: "Luxury", country: "FR", tagline: "Craft, continued" },
  { name: "Huda Beauty", category: "Makeup", country: "AE", tagline: "Glam, amplified" },
  { name: "ILIA", category: "Clean beauty", country: "US", badge: "clean", tagline: "Clean, conscious color" },
  { name: "Jo Malone", category: "Fragrance", country: "UK", tagline: "Scent to layer" },
  { name: "Kérastase", category: "Haircare", country: "FR", tagline: "Parisian hair rituals" },
  { name: "Kiehl's", category: "Skincare", country: "US", tagline: "Since 1851, still working" },
  { name: "La Mer", category: "Luxury", country: "US", tagline: "Miracle Broth, miracle skin" },
  { name: "La Roche-Posay", category: "Skincare", country: "FR", badge: "editor", tagline: "Sensitive skin, solved" },
  { name: "Le Labo", category: "Fragrance", country: "US", tagline: "Hand-blended, hand-labeled" },
  { name: "Laura Mercier", category: "Makeup", country: "US", tagline: "Flawless Face redefined" },
  { name: "MAC", category: "Makeup", country: "CA", tagline: "All ages, all races, all genders" },
  { name: "Maison Margiela", category: "Fragrance", country: "BE", badge: "editor", tagline: "Replica — memories in a bottle" },
  { name: "NARS", category: "Makeup", country: "US", badge: "cult", tagline: "Orgasm and beyond" },
  { name: "Olaplex", category: "Haircare", country: "US", badge: "cult", tagline: "Bond-building miracle" },
  { name: "Origins", category: "Skincare", country: "US", tagline: "Nature powered, science proven" },
  { name: "Oribe", category: "Haircare", country: "US", tagline: "Salon-grade at home" },
  { name: "Pat McGrath Labs", category: "Makeup", country: "UK", badge: "editor", tagline: "Mothership of glam" },
  { name: "Prada", category: "Fragrance", country: "IT", badge: "new", tagline: "Couture in a spritz" },
  { name: "Rare Beauty", category: "Makeup", country: "US", badge: "cult", tagline: "Soft Pinch, world take" },
  { name: "REN Clean Skincare", category: "Clean beauty", country: "UK", badge: "clean", tagline: "Climate positive, skin positive" },
  { name: "Rituals", category: "Body", country: "NL", tagline: "Slow-luxury rituals" },
  { name: "Sisley", category: "Luxury", country: "FR", tagline: "Phyto-cosmetology mastered" },
  { name: "SK-II", category: "Luxury", country: "JP", badge: "editor", tagline: "Pitera, the holy grail" },
  { name: "Sunday Riley", category: "Skincare", country: "US", tagline: "Good Genes, good skin" },
  { name: "Tom Ford", category: "Luxury", country: "US", tagline: "Unapologetic luxury" },
  { name: "The Ordinary", category: "Skincare", country: "CA", badge: "cult", tagline: "Transparency in every bottle" },
  { name: "Urban Decay", category: "Makeup", country: "US", tagline: "Beauty with an edge" },
  { name: "Viktor & Rolf", category: "Fragrance", country: "NL", tagline: "Fashion's bottled drama" },
  { name: "Yves Saint Laurent", category: "Luxury", country: "FR", badge: "editor", tagline: "Libre, rouge, iconic" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const badgeStyles: Record<string, string> = {
  new: "bg-success/10 text-success",
  cult: "bg-accent/10 text-accent",
  editor: "bg-text-primary text-text-inverse",
  clean: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

const badgeLabels: Record<string, string> = {
  new: "New",
  cult: "Cult",
  editor: "Editor's pick",
  clean: "Clean",
};

export default function BrandsPage() {
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleLetter, setVisibleLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return allBrands.filter((b) => {
      const firstLetter = b.name[0].toUpperCase();
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
      const matchesLetter = !activeLetter || firstLetter === activeLetter;
      const matchesCategory = activeCategory === "All" || b.category === activeCategory;
      return matchesQuery && matchesLetter && matchesCategory;
    });
  }, [query, activeLetter, activeCategory]);

  const grouped = useMemo(() => {
    const map: Record<string, Brand[]> = {};
    filtered.forEach((b) => {
      const letter = b.name[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(b);
    });
    return map;
  }, [filtered]);

  const availableLetters = useMemo(() => {
    return new Set(allBrands.map((b) => b.name[0].toUpperCase()));
  }, []);

  const letterCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    filtered.forEach((b) => {
      const l = b.name[0].toUpperCase();
      counts[l] = (counts[l] ?? 0) + 1;
    });
    return counts;
  }, [filtered]);

  // Scroll-spy: track which letter section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) {
          const letter = visible.target.id.replace("letter-", "");
          setVisibleLetter(letter);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.keys(grouped).forEach((l) => {
      const el = document.getElementById(`letter-${l}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [grouped]);

  const hasFilters = query || activeLetter || activeCategory !== "All";
  const marqueeBrands = allBrands.slice(0, 20).map((b) => b.name);

  return (
    <div>
      {/* Editorial hero */}
      <section className="relative bg-surface-secondary text-text-primary overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-48 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-16 md:pb-20">
          <nav className="flex items-center gap-1 text-xs text-text-muted mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span className="text-text-primary">Brands</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-5">
                <Sparkles className="w-3 h-3" />
                {allBrands.length}+ Brands · Hand-picked
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
                Every brand,<br />
                <span className="italic text-accent">for a reason.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
                Our editors test 400+ launches a year. Only the best ones make this page. No pay-to-play — just the brands we genuinely reach for.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <StatCard value={allBrands.length} label="Brands carried" />
              <StatCard value="27" label="Indie labels" />
              <StatCard value="4.8" label="Avg. rating" icon />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-border-light py-5 overflow-hidden bg-surface">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...marqueeBrands, ...marqueeBrands].map((b, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-text-muted hover:text-text-primary transition-colors"
              >
                {b}
                <span className="ml-12 text-accent">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-2 block">
              Editor's spotlight
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-text-primary">
              Obsessing this month
            </h2>
          </div>
          <a
            href="#directory"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
          >
            Browse all brands
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {spotlight.map((b, i) => (
            <a
              key={b.slug}
              href={`/products?brand=${b.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-surface-tertiary hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                <span className="absolute top-4 left-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-mono text-xs font-bold">
                  0{i + 1}
                </span>

                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 bg-white/15 backdrop-blur rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-current" />
                  {b.category}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-2">
                    Est. {b.since}
                  </p>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                    {b.name}
                  </h3>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed line-clamp-2">
                    {b.tagline}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                    Shop brand
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Search + category filter */}
      <section
        id="directory"
        className="sticky top-[88px] lg:top-24 z-20 bg-surface/95 backdrop-blur border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brands, categories…"
                className="w-full pl-11 pr-4 py-3 bg-surface-secondary border border-border rounded-full text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:bg-surface transition-colors"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
              {categories.map((c) => {
                const active = activeCategory === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-colors cursor-pointer ${
                      active
                        ? "bg-primary text-white border-primary"
                        : "bg-surface border-border text-text-secondary hover:border-accent hover:text-accent"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* A-Z index rail */}
          <aside className="lg:w-52 shrink-0 lg:sticky lg:top-48 lg:self-start">
            {/* Desktop: premium vertical rail */}
            <div className="hidden lg:block bg-surface border border-border rounded-2xl overflow-hidden">
              <div className="px-5 pt-5 pb-3 border-b border-border-light">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1">
                  Index
                </p>
                <p className="text-sm font-bold text-text-primary">Jump to letter</p>
              </div>

              <nav className="p-2 max-h-[60vh] overflow-y-auto scrollbar-none">
                <button
                  onClick={() => setActiveLetter(null)}
                  className={`group w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    !activeLetter
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles
                      className={`w-3.5 h-3.5 ${!activeLetter ? "text-accent" : "text-text-muted"}`}
                    />
                    All brands
                  </span>
                  <span
                    className={`text-[11px] font-bold tabular-nums ${!activeLetter ? "text-accent" : "text-text-muted"}`}
                  >
                    {allBrands.length}
                  </span>
                </button>

                <div className="my-2 h-px bg-border-light" />

                {alphabet.map((l) => {
                  const has = availableLetters.has(l);
                  const count = letterCounts[l] ?? 0;
                  const isActive = activeLetter === l;
                  const isVisible = !activeLetter && visibleLetter === l && count > 0;

                  return (
                    <a
                      key={l}
                      href={has ? `#letter-${l}` : undefined}
                      onClick={(e) => {
                        if (!has) {
                          e.preventDefault();
                          return;
                        }
                        setActiveLetter(isActive ? null : l);
                      }}
                      aria-disabled={!has}
                      className={`group relative w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-accent text-white shadow-sm"
                          : isVisible
                            ? "bg-accent/5 text-accent"
                            : has
                              ? "text-text-primary hover:bg-surface-secondary cursor-pointer"
                              : "text-text-muted/30 cursor-not-allowed"
                      }`}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full"
                          aria-hidden
                        />
                      )}
                      {!isActive && isVisible && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r-full"
                          aria-hidden
                        />
                      )}
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-6 text-center font-mono text-xs ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          {l}
                        </span>
                      </span>
                      {has ? (
                        <span
                          className={`text-[11px] font-bold tabular-nums ${
                            isActive ? "text-white/80" : "text-text-muted"
                          }`}
                        >
                          {count > 0 ? count : <span className="opacity-40">—</span>}
                        </span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-text-muted/20" aria-hidden />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile/tablet: horizontal pill rail */}
            <div className="lg:hidden -mx-4 px-4">
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
                <button
                  onClick={() => setActiveLetter(null)}
                  className={`shrink-0 inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    !activeLetter
                      ? "bg-accent text-white"
                      : "bg-surface border border-border text-text-secondary hover:border-accent"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  All
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      !activeLetter ? "bg-white/20" : "bg-surface-tertiary"
                    }`}
                  >
                    {allBrands.length}
                  </span>
                </button>
                {alphabet.map((l) => {
                  const has = availableLetters.has(l);
                  const count = letterCounts[l] ?? 0;
                  const isActive = activeLetter === l;
                  return (
                    <button
                      key={l}
                      onClick={() => has && setActiveLetter(isActive ? null : l)}
                      disabled={!has}
                      className={`shrink-0 inline-flex items-center gap-1 h-10 min-w-[40px] px-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                        isActive
                          ? "bg-accent text-white"
                          : has
                            ? "bg-surface border border-border text-text-primary hover:border-accent"
                            : "bg-transparent text-text-muted/40 cursor-not-allowed"
                      }`}
                    >
                      {l}
                      {has && count > 0 && (
                        <span
                          className={`text-[9px] font-bold tabular-nums ${
                            isActive ? "text-white/80" : "text-text-muted"
                          }`}
                        >
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Brand list */}
          <div className="flex-1 min-w-0">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-1">
                  {filtered.length} {filtered.length === 1 ? "brand" : "brands"}
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-text-primary">
                  {activeCategory === "All" ? "All brands" : activeCategory}
                  {activeLetter && (
                    <span className="text-text-muted font-normal"> starting with "{activeLetter}"</span>
                  )}
                </h2>
              </div>
              {hasFilters && (
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveLetter(null);
                    setActiveCategory("All");
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </button>
              )}
            </div>

            {Object.keys(grouped).length === 0 ? (
              <div className="text-center py-16 bg-surface-secondary rounded-2xl">
                <Sparkles className="w-10 h-10 mx-auto mb-3 text-text-muted" />
                <p className="text-sm font-semibold text-text-primary">No brands match your filters</p>
                <p className="text-xs text-text-muted mt-1">Try clearing filters or a different keyword.</p>
              </div>
            ) : (
              <div className="space-y-12 md:space-y-14">
                {Object.keys(grouped)
                  .sort()
                  .map((letter) => (
                    <div key={letter} id={`letter-${letter}`} className="scroll-mt-48">
                      <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-border-light">
                        <span className="text-5xl md:text-6xl font-extrabold text-accent leading-none font-mono">
                          {letter}
                        </span>
                        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                          {grouped[letter].length} {grouped[letter].length === 1 ? "brand" : "brands"}
                        </span>
                      </div>

                      <ul className="divide-y divide-border-light">
                        {grouped[letter].map((b, idx) => (
                          <li key={`${letter}-${idx}-${b.name}`}>
                            <a
                              href={`/products?brand=${b.name.toLowerCase().replace(/\s+/g, "-")}`}
                              className="group flex items-center gap-4 py-4 md:py-5 px-3 -mx-3 rounded-lg hover:bg-surface-secondary transition-colors"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <h3 className="text-base md:text-lg font-bold text-text-primary group-hover:text-accent transition-colors truncate">
                                    {b.name}
                                  </h3>
                                  {b.badge && (
                                    <span
                                      className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${badgeStyles[b.badge]}`}
                                    >
                                      {badgeLabels[b.badge]}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-text-secondary line-clamp-1">
                                  {b.tagline}
                                </p>
                              </div>

                              <div className="hidden sm:flex items-center gap-3 text-[11px] text-text-muted shrink-0">
                                <span className="font-mono bg-surface-tertiary text-text-secondary px-2 py-0.5 rounded uppercase tracking-wider">
                                  {b.country}
                                </span>
                                <span className="min-w-[80px] text-right">{b.category}</span>
                              </div>

                              <div className="w-10 h-10 shrink-0 rounded-full bg-surface-tertiary flex items-center justify-center text-text-secondary group-hover:bg-accent group-hover:text-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string | number;
  label: string;
  icon?: boolean;
}) {
  return (
    <div className="flex-1 bg-surface border border-border rounded-xl p-4 md:p-5">
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl md:text-3xl font-extrabold text-text-primary">
          {value}
        </span>
        {icon && <Star className="w-4 h-4 fill-accent text-accent" />}
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mt-1">
        {label}
      </p>
    </div>
  );
}

