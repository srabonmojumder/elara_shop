"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  Sparkles,
  Search,
  ArrowUpRight,
  Navigation,
  Star,
  CheckCircle2,
  Droplet,
  Palette,
  Wine,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";

type Store = {
  city: string;
  country: string;
  countryCode: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  todayHours: string;
  image: string;
  services: string[];
  rating: number;
  reviews: number;
  openedYear: number;
  square: string;
  tags: string[];
  featured?: boolean;
};

const stores: Store[] = [
  {
    city: "Milano",
    country: "Italy",
    countryCode: "IT",
    name: "Montenapoleone Flagship",
    address: "Via Montenapoleone 15, 20121 Milano",
    phone: "+39 02 1234 5678",
    hours: "Mon–Sat · 10:00–20:00 · Sun · 11:00–19:00",
    todayHours: "Open until 20:00",
    image: "/images/hero/hero-1.jpg",
    services: ["Skin analysis", "Makeup services", "Beauty bar", "Personal shopping"],
    rating: 4.9,
    reviews: 1284,
    openedYear: 2022,
    square: "420m²",
    tags: ["Flagship", "Skin lab"],
    featured: true,
  },
  {
    city: "Paris",
    country: "France",
    countryCode: "FR",
    name: "Faubourg Saint-Honoré",
    address: "25 Rue du Faubourg Saint-Honoré, 75008",
    phone: "+33 1 23 45 67 89",
    hours: "Mon–Sat · 10:00–20:00 · Sun · Closed",
    todayHours: "Open until 20:00",
    image: "/images/hero/hero-2.jpg",
    services: ["Skin analysis", "Fragrance bar", "Personal shopping"],
    rating: 4.8,
    reviews: 642,
    openedYear: 2023,
    square: "280m²",
    tags: ["Fragrance lab"],
  },
  {
    city: "London",
    country: "United Kingdom",
    countryCode: "UK",
    name: "New Bond Street",
    address: "140 New Bond Street, London W1S 2TR",
    phone: "+44 20 7123 4567",
    hours: "Mon–Sun · 10:00–20:00",
    todayHours: "Open until 20:00",
    image: "/images/hero/hero-3.jpg",
    services: ["Skin analysis", "Makeup services", "Beauty bar", "Fragrance bar", "Personal shopping"],
    rating: 4.9,
    reviews: 918,
    openedYear: 2024,
    square: "360m²",
    tags: ["Beauty bar"],
  },
  {
    city: "Roma",
    country: "Italy",
    countryCode: "IT",
    name: "Via del Corso",
    address: "Via del Corso 312, 00186 Roma",
    phone: "+39 06 9876 5432",
    hours: "Mon–Sat · 10:00–20:00 · Sun · 11:00–19:00",
    todayHours: "Open until 20:00",
    image: "/images/hero/hero-4.jpg",
    services: ["Skin analysis", "Makeup services", "Personal shopping"],
    rating: 4.7,
    reviews: 433,
    openedYear: 2024,
    square: "220m²",
    tags: ["New"],
  },
  {
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
    name: "Calle Serrano",
    address: "Calle de Serrano 48, 28001 Madrid",
    phone: "+34 91 234 56 78",
    hours: "Mon–Sat · 10:00–21:00 · Sun · Closed",
    todayHours: "Open until 21:00",
    image: "/images/hero/hero-1.jpg",
    services: ["Skin analysis", "Makeup services", "Beauty bar"],
    rating: 4.8,
    reviews: 287,
    openedYear: 2025,
    square: "260m²",
    tags: ["New"],
  },
  {
    city: "Berlin",
    country: "Germany",
    countryCode: "DE",
    name: "Kurfürstendamm",
    address: "Kurfürstendamm 195, 10719 Berlin",
    phone: "+49 30 12345678",
    hours: "Mon–Sat · 10:00–20:00 · Sun · Closed",
    todayHours: "Open until 20:00",
    image: "/images/hero/hero-2.jpg",
    services: ["Skin analysis", "Beauty bar", "Personal shopping"],
    rating: 4.7,
    reviews: 204,
    openedYear: 2025,
    square: "240m²",
    tags: ["New"],
  },
];

const countries = [
  { code: "ALL", label: "All countries", count: stores.length },
  { code: "IT", label: "Italy", count: stores.filter((s) => s.countryCode === "IT").length },
  { code: "FR", label: "France", count: stores.filter((s) => s.countryCode === "FR").length },
  { code: "UK", label: "United Kingdom", count: stores.filter((s) => s.countryCode === "UK").length },
  { code: "ES", label: "Spain", count: stores.filter((s) => s.countryCode === "ES").length },
  { code: "DE", label: "Germany", count: stores.filter((s) => s.countryCode === "DE").length },
];

const services = [
  {
    icon: Droplet,
    title: "Skin Analysis",
    detail: "A 30-minute deep-dive with our estheticians — skin type, barrier health, and a tailored routine. Always free.",
    duration: "30 min",
    price: "Complimentary",
  },
  {
    icon: Palette,
    title: "Makeup Services",
    detail: "Event-ready looks or everyday techniques — from our pro artists using your chosen products.",
    duration: "45 min",
    price: "€45 / redeemable in-store",
  },
  {
    icon: Wine,
    title: "Fragrance Bar",
    detail: "A guided olfactory journey with our master perfumers — find your signature scent over a glass of something nice.",
    duration: "60 min",
    price: "Complimentary",
  },
];

export default function StoresPage() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("ALL");
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return stores.filter((s) => {
      const matchesCountry = country === "ALL" || s.countryCode === country;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.city.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q);
      return matchesCountry && matchesQuery;
    });
  }, [query, country]);

  const featured = filtered.find((s) => s.featured);
  const others = filtered.filter((s) => !s.featured);

  return (
    <div>
      <PageHeader
        eyebrow="Store locator"
        title="Step inside Elara Shop"
        description="Six ateliers across Europe — each a space to discover, test, and be advised by our in-house experts. Book ahead or walk in anytime."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Store Locator" }]}
        variant="hero"
      />

      {/* Search + country filter bar */}
      <section className="border-b border-border-light bg-surface sticky top-[88px] lg:top-24 z-20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by city or address…"
                className="w-full pl-11 pr-4 py-3 bg-surface-secondary border border-border rounded-full text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:bg-surface transition-colors"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap">
              {countries.map((c) => {
                const active = country === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => setCountry(c.code)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                      active
                        ? "bg-primary text-white border-primary"
                        : "bg-surface border-border text-text-secondary hover:border-accent hover:text-accent"
                    }`}
                  >
                    {c.label}
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        active ? "bg-white/20" : "bg-surface-tertiary"
                      }`}
                    >
                      {c.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results count */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
            {filtered.length} {filtered.length === 1 ? "location" : "locations"}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">
            {country === "ALL" ? "Every Elara Shop store" : countries.find((c) => c.code === country)?.label}
          </h2>
        </div>
        <a
          href="#visit"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
        >
          What to expect when you visit
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </section>

      {filtered.length === 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center py-16 bg-surface-secondary rounded-3xl">
            <MapPin className="w-10 h-10 mx-auto mb-3 text-text-muted" />
            <p className="text-sm font-semibold text-text-primary">No stores match "{query}"</p>
            <p className="text-xs text-text-muted mt-1">Try a different city or clear the filter.</p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured flagship */}
          {featured && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
              <article className="group relative rounded-3xl overflow-hidden bg-primary text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                  <div className="relative lg:col-span-7 aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={featured.image}
                      alt={featured.name}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:via-black/10 lg:to-transparent" />

                    {/* Floating location pill */}
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-text-primary text-[11px] font-bold uppercase tracking-wider">
                      <span className="relative flex w-2 h-2">
                        <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-success opacity-60" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-success" />
                      </span>
                      {featured.todayHours}
                    </div>

                    {/* Mobile title overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 lg:hidden">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 mb-2">
                        {featured.city} · {featured.country}
                      </p>
                      <h3 className="text-2xl font-extrabold leading-tight">{featured.name}</h3>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 md:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="hidden lg:flex items-center gap-2 mb-5">
                        {featured.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="hidden lg:block text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-3">
                        {featured.city} · {featured.country}
                      </p>
                      <h3 className="hidden lg:block text-3xl xl:text-4xl font-extrabold leading-tight mb-5">
                        {featured.name}
                      </h3>

                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-white text-white" />
                          <span className="text-sm font-bold">{featured.rating}</span>
                        </div>
                        <span className="text-xs text-white/60">
                          ({featured.reviews.toLocaleString()} reviews)
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="text-xs text-white/60">
                          Since {featured.openedYear}
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="text-xs text-white/60">{featured.square}</span>
                      </div>

                      <ul className="space-y-2.5 mb-6">
                        <li className="flex items-start gap-3 text-sm text-white/90">
                          <MapPin className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                          <span>{featured.address}</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white/90">
                          <Phone className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                          <a href={`tel:${featured.phone.replace(/\s/g, "")}`} className="hover:text-white">
                            {featured.phone}
                          </a>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-white/90">
                          <Clock className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                          <span>{featured.hours}</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mb-6 pb-6 border-b border-white/15">
                        {featured.services.map((svc) => (
                          <span
                            key={svc}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/10 text-white text-[11px] font-semibold rounded-full"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#"
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-xl"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        Book appointment
                      </a>
                      <a
                        href="#"
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors rounded-xl"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* Other stores — magazine grid */}
          {others.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {others.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    onMouseEnter={() => setHoveredCity(s.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                    className="group relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-accent hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Country code chip */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-surface/95 backdrop-blur text-text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                        {s.countryCode}
                      </div>

                      {/* Tags */}
                      {s.tags.length > 0 && (
                        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Open status */}
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface/95 backdrop-blur text-text-primary text-[10px] font-semibold rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        {s.todayHours}
                      </div>

                      {/* Hover arrow */}
                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1">
                            {s.country}
                          </p>
                          <h3 className="text-lg font-extrabold tracking-tight text-text-primary group-hover:text-accent transition-colors truncate">
                            {s.city}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-text-muted shrink-0">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span className="font-bold text-text-primary">{s.rating}</span>
                          <span>({s.reviews})</span>
                        </div>
                      </div>

                      <p className="text-xs text-text-secondary line-clamp-1 mb-3">
                        {s.name}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border-light">
                        <div className="flex items-start gap-2 text-[11px] text-text-muted">
                          <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{s.address}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* "What to expect" services — split layout */}
      <section
        id="visit"
        className="bg-surface-secondary py-16 md:py-24 border-t border-border-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-40">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-3">
                What to expect
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
                More than a shop. A space to <span className="text-accent italic">linger</span>.
              </h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                Every Elara Shop store is designed around three services you won't find packaged anywhere else online — and every one of them is free to book.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-light transition-colors rounded-xl"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a visit
              </a>
            </div>

            <div className="lg:col-span-8 space-y-3 md:space-y-4">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group flex gap-5 bg-surface border border-border rounded-2xl p-5 md:p-7 hover:border-accent transition-colors"
                  >
                    <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base md:text-lg font-bold text-text-primary">
                          {s.title}
                        </h3>
                        <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider shrink-0 font-mono">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
                        {s.detail}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-text-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {s.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {s.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
