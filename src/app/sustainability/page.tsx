import Image from "next/image";
import {
  Leaf,
  Recycle,
  Sun,
  Droplet,
  Truck,
  Heart,
  Package,
  Building2,
  Award,
  TreePine,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FeatureGrid from "@/components/page/FeatureGrid";
import CTASection from "@/components/page/CTASection";

const impactStats = [
  { value: "100%", label: "Carbon-neutral shipping", detail: "Every parcel, offset through verified reforestation" },
  { value: "0", label: "Single-use plastics", detail: "In our packaging since January 2024" },
  { value: "87%", label: "Renewable energy", detail: "Across our warehouses & offices" },
  { value: "1.2M", label: "Trees planted", detail: "Through our partnership with One Tree Planted" },
];

const pillars = [
  { icon: Recycle, title: "Circular packaging", description: "100% recyclable, compostable, or reusable — no plastic fillers, ever. We ship in paper, cornstarch peanuts, and FSC-certified boxes." },
  { icon: TreePine, title: "Forest-positive", description: "One tree planted for every order placed, in partnership with One Tree Planted. We've planted 1.2M+ trees so far." },
  { icon: Sun, title: "Renewable energy", description: "87% of our operations run on renewables. Target: 100% across all facilities by end of 2027." },
  { icon: Droplet, title: "Water-conscious", description: "We audit water use across our supply chain and prioritize brands with closed-loop water systems." },
  { icon: Truck, title: "Low-emission logistics", description: "Electric last-mile delivery in Milano, Paris, and London. Rail over air wherever possible." },
  { icon: Heart, title: "People-first", description: "Living wage across our team, B Corp certified standards at every partner, and 1% of revenue to women's education." },
];

const materials = [
  { name: "Recycled paper mailers", detail: "FSC-certified, 80% post-consumer recycled", percent: 65 },
  { name: "Recycled cardboard boxes", detail: "100% recyclable, no plastic tape", percent: 30 },
  { name: "Compostable mailers", detail: "PLA corn-starch based, home-compostable", percent: 5 },
];

const roadmap = [
  { year: "2024", title: "B Corp certification", done: true },
  { year: "2025", title: "100% plastic-free packaging", done: true },
  { year: "2026", title: "Carbon neutral across all scopes", done: true },
  { year: "2027", title: "100% renewable energy globally", done: false },
  { year: "2030", title: "Net zero — not offset, reduced", done: false },
];

export default function SustainabilityPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Sustainability"
        title="Beautiful things, beautifully made"
        description="Beauty shouldn't cost the earth — literally. Here's how we're making every step of the BEAUTÉ journey lighter on the planet, and the people on it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {impactStats.map((s) => (
            <div
              key={s.label}
              className="bg-surface border border-border rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center text-success mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-text-primary">{s.value}</p>
              <p className="text-xs font-semibold text-text-primary mt-1">{s.label}</p>
              <p className="text-[11px] text-text-muted mt-2 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/hero/hero-3.jpg"
              alt="Sustainability"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Our approach"
              title="Less greenwashing, more groundwork"
              description="We don't publish targets we can't defend. This page is audited every quarter, and last updated April 2026."
            />
            <div className="mt-5 space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                Since day one, BEAUTÉ has been built with sustainability baked into the business, not bolted on after. We vet every brand we carry on packaging, ingredients, labor, and claims — and we say no, a lot.
              </p>
              <p>
                We also know we're not perfect. Some materials don't have a green alternative yet. Some supply chains are opaque. We publish what's working, what isn't, and what we're doing next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="Six pillars"
          title="How we show up"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <FeatureGrid items={pillars} columns={3} />
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packaging breakdown"
            title="What arrives at your door"
            description="100% plastic-free since January 2024. Here's exactly what you'll find inside your BEAUTÉ box."
          />
          <div className="mt-8 space-y-4">
            {materials.map((m) => (
              <div key={m.name} className="bg-surface border border-border rounded-xl p-5">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div>
                    <p className="text-sm font-bold text-text-primary">{m.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{m.detail}</p>
                  </div>
                  <span className="text-xl font-extrabold text-text-primary">{m.percent}%</span>
                </div>
                <div className="w-full h-2 bg-surface-tertiary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-success rounded-full transition-all"
                    style={{ width: `${m.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <SectionHeading
          eyebrow="Roadmap"
          title="What's next"
          description="We publish where we are, where we're going, and what's off track — every single quarter."
        />
        <ol className="mt-10 relative">
          <span className="absolute left-5 top-0 bottom-0 w-px bg-border" aria-hidden />
          {roadmap.map((m) => (
            <li key={m.year} className="relative pl-16 pb-8 last:pb-0">
              <span
                className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  m.done
                    ? "bg-success text-white"
                    : "bg-surface border-2 border-dashed border-border text-text-muted"
                }`}
              >
                {m.done ? <Award className="w-4 h-4" /> : m.year.slice(-2)}
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                    m.done ? "text-success" : "text-text-muted"
                  }`}
                >
                  {m.year}
                </span>
                {m.done && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-success/10 text-success px-2 py-0.5 rounded">
                    Achieved
                  </span>
                )}
              </div>
              <p className="text-base font-bold text-text-primary">{m.title}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection
        eyebrow="Want the receipts?"
        title="Read our full impact report"
        description="100+ pages, audited by third parties. Honest about what's working and what's not."
        actions={[
          { label: "Download 2025 report", href: "#", variant: "primary" },
          { label: "Our story", href: "/about", variant: "outline" },
        ]}
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
