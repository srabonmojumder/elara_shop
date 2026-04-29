import type { Metadata } from "next";
import { Truck, Zap, Globe, Package, Clock, ShieldCheck, Leaf, MapPin } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FAQAccordion from "@/components/page/FAQAccordion";
import FeatureGrid from "@/components/page/FeatureGrid";
import CTASection from "@/components/page/CTASection";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "Free shipping on orders over €49. Express, standard, and international rates explained — plus what to expect at every step.",
};


const shippingOptions = [
  {
    icon: Truck,
    name: "Standard",
    time: "3–5 business days",
    price: "€4.99",
    free: "Free over €49",
    tone: "default" as const,
    description: "Our everyday option — tracked and insured.",
  },
  {
    icon: Zap,
    name: "Express",
    time: "1–2 business days",
    price: "€9.99",
    free: "Free over €120",
    tone: "accent" as const,
    description: "Priority handling with same-day dispatch before 14:00 CET.",
  },
  {
    icon: Globe,
    name: "International",
    time: "5–10 business days",
    price: "From €14.99",
    free: "Duties shown at checkout",
    tone: "default" as const,
    description: "Ships to 34 countries — all duties calculated upfront.",
  },
];

const zones = [
  { region: "Italy (mainland)", standard: "2–3 days", express: "Next day", price: "€4.99 / Free over €49" },
  { region: "Italy (islands)", standard: "3–5 days", express: "1–2 days", price: "€6.99 / Free over €69" },
  { region: "Western Europe", standard: "3–5 days", express: "1–3 days", price: "€7.99 / Free over €79" },
  { region: "Eastern & Northern Europe", standard: "5–7 days", express: "2–4 days", price: "€9.99 / Free over €99" },
  { region: "United Kingdom", standard: "4–6 days", express: "2–3 days", price: "€12.99 / Free over €99" },
  { region: "United States & Canada", standard: "6–9 days", express: "3–5 days", price: "From €14.99" },
];

const features = [
  { icon: Package, title: "Eco-friendly packaging", description: "100% recyclable or compostable — no plastic fillers, ever." },
  { icon: ShieldCheck, title: "Fully insured", description: "Every parcel insured end-to-end. If something happens, we replace it." },
  { icon: Clock, title: "Same-day dispatch", description: "Orders placed before 14:00 CET ship the same business day." },
  { icon: Leaf, title: "Carbon-neutral", description: "All shipping emissions offset through verified reforestation partners." },
];

const faqs = [
  { q: "When will my order be dispatched?", a: "Orders placed before 14:00 CET Monday–Friday ship the same day. Weekend orders go out Monday morning." },
  { q: "Do you deliver to PO boxes or parcel lockers?", a: "Yes — we deliver to DHL Packstations, InPost lockers, and most national parcel lockers. Choose your preferred option at checkout." },
  { q: "What if I'm not home when delivery arrives?", a: "The carrier will leave a notice with pickup instructions, try to deliver to a neighbor, or redeliver the next business day — whichever you selected at checkout." },
  { q: "Who pays customs duties for international orders?", a: "Duties and import taxes for international orders are calculated at checkout and included in the total. No surprise fees at delivery." },
  { q: "Can I change my delivery address after ordering?", a: "Yes, within 30 minutes of ordering from your account page. After that, contact us quickly — once the parcel is handed to the carrier we can no longer reroute it." },
];

export default function ShippingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Shipping & Delivery"
        title="Fast, tracked, and always on time"
        description="Everything you need to know about how your order reaches you — timelines, options, and what to do if something goes off course."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shipping" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading eyebrow="Options" title="Pick the speed that works for you" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {shippingOptions.map((opt) => {
            const Icon = opt.icon;
            const isAccent = opt.tone === "accent";
            return (
              <div
                key={opt.name}
                className={`relative rounded-2xl p-6 md:p-7 border ${
                  isAccent
                    ? "bg-primary text-white border-primary"
                    : "bg-surface border-border"
                }`}
              >
                {isAccent && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    Most popular
                  </span>
                )}
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                    isAccent ? "bg-white/10 text-white" : "bg-accent/10 text-accent"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isAccent ? "text-white" : "text-text-primary"}`}>
                  {opt.name}
                </h3>
                <p className={`text-xs mb-4 ${isAccent ? "text-white/70" : "text-text-secondary"}`}>
                  {opt.description}
                </p>
                <div className={`flex items-baseline gap-2 mb-3 pb-4 border-b ${isAccent ? "border-white/15" : "border-border-light"}`}>
                  <span className={`text-2xl font-extrabold ${isAccent ? "text-white" : "text-text-primary"}`}>
                    {opt.price}
                  </span>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className={`flex items-center gap-2 ${isAccent ? "text-white/90" : "text-text-secondary"}`}>
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    {opt.time}
                  </li>
                  <li className={`flex items-center gap-2 ${isAccent ? "text-white/90" : "text-text-secondary"}`}>
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    {opt.free}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="Coverage" title="Delivery times & pricing by region" />
        <div className="mt-8 bg-surface border border-border rounded-2xl overflow-hidden">
          <div className="hidden md:grid grid-cols-4 px-6 py-4 bg-surface-secondary border-b border-border text-[11px] font-bold uppercase tracking-wider text-text-muted">
            <span>Region</span>
            <span>Standard</span>
            <span>Express</span>
            <span>Cost</span>
          </div>
          {zones.map((z, i) => (
            <div
              key={z.region}
              className={`grid grid-cols-1 md:grid-cols-4 gap-2 px-6 py-4 text-sm ${
                i !== zones.length - 1 ? "border-b border-border-light" : ""
              }`}
            >
              <span className="font-semibold text-text-primary flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-text-muted md:hidden" />
                {z.region}
              </span>
              <span className="text-text-secondary">
                <span className="md:hidden text-[11px] font-semibold uppercase tracking-wider text-text-muted mr-2">Standard:</span>
                {z.standard}
              </span>
              <span className="text-text-secondary">
                <span className="md:hidden text-[11px] font-semibold uppercase tracking-wider text-text-muted mr-2">Express:</span>
                {z.express}
              </span>
              <span className="text-text-secondary">
                <span className="md:hidden text-[11px] font-semibold uppercase tracking-wider text-text-muted mr-2">Cost:</span>
                {z.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="Included" title="What every order comes with" />
        <div className="mt-8">
          <FeatureGrid items={features} columns={4} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="Questions" title="Shipping FAQs" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        eyebrow="Need to track an order?"
        title="See exactly where your package is"
        description="Get live tracking, dispatch notifications, and carrier updates all in one place."
        actions={[
          { label: "Track your order", href: "/track-order", variant: "primary" },
          { label: "Contact support", href: "/contact", variant: "outline" },
        ]}
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
