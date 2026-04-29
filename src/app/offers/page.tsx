import type { Metadata } from "next";
import Image from "next/image";
import { Flame, Tag, Percent, Gift, Clock, ArrowRight, Sparkles } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import CTASection from "@/components/page/CTASection";

export const metadata: Metadata = {
  title: "Offers & Promotions",
  description:
    "Save on the season's best — no maze of terms and conditions. Just edit-worthy deals from the brands we love. Up to 40% off.",
};


const heroOffers = [
  {
    title: "The Spring Edit",
    subtitle: "Up to 40% off the season's most-wanted pieces",
    badge: "Limited time",
    cta: "Shop the edit",
    href: "/products?promo=spring",
    image: "/images/hero/hero-2.jpg",
    featured: true,
  },
  {
    title: "Flash Deals",
    subtitle: "24 hours only — refreshed daily",
    badge: "New every day",
    cta: "See today's drops",
    href: "/offers/flash",
    image: "/images/hero/hero-3.jpg",
  },
];

const offerGrid = [
  { category: "Women", discount: "30%", title: "Tailoring & knits", items: "68 pieces", href: "/products?category=women", image: "/images/categories/women.jpg" },
  { category: "Men", discount: "25%", title: "Linen & layering", items: "52 pieces", href: "/products?category=men", image: "/images/categories/men.jpg" },
  { category: "Footwear", discount: "20%", title: "Heritage & modern", items: "34 pieces", href: "/products?category=footwear", image: "/images/categories/footwear.jpg" },
  { category: "Bags", discount: "35%", title: "Leather goods edit", items: "41 pieces", href: "/products?category=bags", image: "/images/categories/bags.jpg" },
];

const codes = [
  {
    code: "SPRING40",
    description: "40% off orders over €120 — sitewide",
    expires: "Apr 30, 2026",
    highlight: true,
  },
  {
    code: "FRESH25",
    description: "25% off your first order",
    expires: "Ongoing",
    highlight: false,
  },
  {
    code: "FREESHIP",
    description: "Free express shipping on orders over €79",
    expires: "Ongoing",
    highlight: false,
  },
];

const perks = [
  { icon: Gift, title: "Welcome gift", description: "20% off + free leather card holder with your first order" },
  { icon: Sparkles, title: "Early access", description: "Shop new arrivals 48 hours before anyone else" },
  { icon: Tag, title: "Birthday treat", description: "A handpicked piece on us, every year on your birthday" },
  { icon: Percent, title: "Member pricing", description: "Exclusive loyalty tier discounts stacked with any promo" },
];

export default function OffersPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Offers & promotions"
        title="Edit-worthy deals, handpicked"
        description="Save on the season's best — no maze of terms and conditions, no sneaky exclusions. Just real offers from the brands we love."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Offers" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {heroOffers.map((o, i) => (
            <a
              key={o.title}
              href={o.href}
              className={`group relative rounded-2xl overflow-hidden ${
                o.featured ? "lg:col-span-2 aspect-[16/9] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
              }`}
            >
              <Image
                src={o.image}
                alt={o.title}
                fill
                sizes={o.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-white">
                <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                  <Flame className="w-3 h-3" />
                  {o.badge}
                </span>
                <h2 className={`font-extrabold ${o.featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} mb-2`}>
                  {o.title}
                </h2>
                <p className="text-sm md:text-base text-white/85 max-w-md mb-5 leading-relaxed">
                  {o.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider self-start group-hover:gap-3 transition-all">
                  {o.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="Active codes"
          title="Grab & go"
          description="Copy, paste at checkout, enjoy. No registration required."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {codes.map((c) => (
            <div
              key={c.code}
              className={`relative rounded-2xl p-6 border-2 border-dashed ${
                c.highlight
                  ? "bg-accent/5 border-accent"
                  : "bg-surface border-border"
              }`}
            >
              {c.highlight && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Best deal
                </span>
              )}
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">
                Promo code
              </p>
              <p className={`font-mono text-2xl font-extrabold mb-3 ${c.highlight ? "text-accent" : "text-text-primary"}`}>
                {c.code}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {c.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border-light">
                <span className="text-[11px] text-text-muted flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {c.expires}
                </span>
                <button
                  type="button"
                  className={`text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors ${
                    c.highlight ? "text-accent hover:text-accent-dark" : "text-text-primary hover:text-accent"
                  }`}
                >
                  Copy code
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="Shop by category" title="Seasonal edits" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offerGrid.map((g) => (
            <a
              key={g.category}
              href={g.href}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src={g.image}
                alt={g.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold">
                -{g.discount}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-1">
                  {g.category}
                </p>
                <p className="text-lg font-extrabold text-white">{g.title}</p>
                <p className="text-xs text-white/70 mt-1">{g.items}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Member perks"
            title="Loyalty that actually rewards"
            description="Free to join. Real perks from day one. No points math required."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-surface border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{p.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Save on specific picks"
        title="Explore more ways to save"
        description="Flash deals, student discounts, referral bonuses, and gift cards — there's a fit for every shopper."
        actions={[
          { label: "Flash deals", href: "/offers/flash", variant: "primary" },
          { label: "Refer a friend", href: "/referral", variant: "outline" },
        ]}
        className="py-16 md:py-24"
      />
    </div>
  );
}
