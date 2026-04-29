import { TrendingUp, Wallet, BarChart3, Share2, Link2, Gift, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FAQAccordion from "@/components/page/FAQAccordion";
import CTASection from "@/components/page/CTASection";

const tiers = [
  {
    name: "Creator",
    audience: "Up to 10K followers",
    commission: "10%",
    perks: ["Free product seeding quarterly", "Custom discount code", "Monthly performance dashboard"],
    featured: false,
  },
  {
    name: "Partner",
    audience: "10K – 100K followers",
    commission: "15%",
    perks: ["Free product seeding monthly", "Exclusive launches access", "Dedicated partnership manager", "Co-branded campaign opportunities"],
    featured: true,
  },
  {
    name: "Elite",
    audience: "100K+ followers",
    commission: "20%+",
    perks: ["White-glove onboarding", "Custom contract terms", "Featured on BEAUTÉ editorial", "Paid campaign invitations", "Bespoke gifting"],
    featured: false,
  },
];

const steps = [
  { icon: Users, title: "Apply", description: "Tell us about your audience and content style. We review every application personally." },
  { icon: Link2, title: "Get your links", description: "Once approved, grab custom tracking links and codes for any product on BEAUTÉ." },
  { icon: Share2, title: "Share what you love", description: "Post to your favorite channels — Instagram, TikTok, YouTube, blog. You choose." },
  { icon: Wallet, title: "Get paid", description: "30-day cookie window. Payouts the first week of every month via bank transfer or PayPal." },
];

const benefits = [
  { icon: TrendingUp, title: "Industry-leading rates", description: "Up to 20% commission — higher than most beauty programs." },
  { icon: BarChart3, title: "Real-time analytics", description: "Live dashboard with clicks, conversions, and earnings breakdown." },
  { icon: Gift, title: "Product seeding", description: "Receive new launches before anyone else — free of charge." },
  { icon: ShieldCheck, title: "30-day attribution", description: "Generous cookie window means you get credit for the long decision curve." },
];

const faqs = [
  { q: "Is there a cost to join?", a: "No. The program is completely free to join and you can leave any time." },
  { q: "Do I need a minimum follower count?", a: "Not strictly — we care more about engagement and content quality than numbers. We've approved creators with 2K engaged followers and declined accounts with 500K." },
  { q: "When do I get paid?", a: "Payouts are issued the first week of every month for the previous month's confirmed sales. Minimum payout is €50 — unpaid balances roll over." },
  { q: "Can I combine affiliate links with BEAUTÉ promo codes?", a: "Yes — your audience can use any active site-wide promo on top of your tracking link. Commissions are calculated on the discounted total." },
  { q: "How long is the cookie window?", a: "30 days. If someone clicks your link and purchases within 30 days, you earn commission on that order." },
];

export default function AffiliatesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Affiliate program"
        title="Share the beauty. Earn the rewards."
        description="Turn your love of beauty into a stream of income. Up to 20% commission, real-time analytics, and a partnership team that actually picks up the phone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Affiliate Program" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="How it works"
          title="From application to first payout"
          align="center"
          className="mx-auto"
        />
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative bg-surface border border-border rounded-2xl p-6 text-center"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="w-12 h-12 mx-auto mt-2 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{s.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="Tiers"
          title="Grow with us"
          description="Commissions and perks scale with your reach and performance — transparent from day one."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border ${
                t.featured
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-text-primary border-border"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most popular
                </span>
              )}
              <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-3 ${t.featured ? "text-white/70" : "text-text-muted"}`}>
                {t.audience}
              </p>
              <h3 className={`text-xl font-extrabold mb-4 ${t.featured ? "text-white" : "text-text-primary"}`}>
                {t.name}
              </h3>
              <div className={`flex items-baseline gap-1 pb-5 mb-5 border-b ${t.featured ? "border-white/15" : "border-border-light"}`}>
                <span className={`text-4xl font-extrabold ${t.featured ? "text-white" : "text-text-primary"}`}>
                  {t.commission}
                </span>
                <span className={`text-xs ${t.featured ? "text-white/70" : "text-text-muted"}`}>
                  commission
                </span>
              </div>
              <ul className="space-y-3">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        t.featured ? "text-white" : "text-accent"
                      }`}
                    />
                    <span className={t.featured ? "text-white/90" : "text-text-secondary"}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why BEAUTÉ"
            title="Perks other programs don't offer"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-surface border border-border rounded-xl p-6">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{b.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading eyebrow="Good to know" title="Affiliate FAQs" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        eyebrow="Ready to apply?"
        title="Join 3,200+ BEAUTÉ partners"
        description="Most applications are reviewed within 48 hours. We respond personally — yes, even to the 'no's."
        actions={[
          { label: "Apply now", href: "#apply", variant: "primary" },
          { label: "Ask a question", href: "/contact", variant: "outline" },
        ]}
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
