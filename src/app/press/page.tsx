import { Download, ExternalLink, Mail, Newspaper, Quote, Award, TrendingUp, Users } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import CTASection from "@/components/page/CTASection";

const pressFeatures = [
  { outlet: "Vogue", headline: "The Milano-born beauty shop redefining curation", date: "March 2026", href: "#" },
  { outlet: "Harper's BAZAAR", headline: "How Elara Shop became every editor's most-opened tab", date: "January 2026", href: "#" },
  { outlet: "ELLE", headline: "Inside the new flagship on Montenapoleone", date: "November 2025", href: "#" },
  { outlet: "Business of Fashion", headline: "Giulia & Martina Romano on building a category-defining brand", date: "September 2025", href: "#" },
  { outlet: "Financial Times", headline: "Elara Shop raises Series B at €240M valuation", date: "June 2025", href: "#" },
  { outlet: "Wallpaper*", headline: "A beauty store designed like a gallery", date: "April 2025", href: "#" },
];

const assets = [
  { title: "Primary logo pack", description: "SVG + PNG in light and dark variants", size: "2.1 MB" },
  { title: "Brand guidelines", description: "Color, type, photography & voice", size: "8.4 MB" },
  { title: "Founder portraits", description: "High-res images of Giulia & Martina Romano", size: "12.6 MB" },
  { title: "Store photography", description: "Milano flagship interior & exterior", size: "24.2 MB" },
];

const awards = [
  { year: "2026", title: "Retailer of the Year", body: "Global Beauty Awards" },
  { year: "2025", title: "Fastest-Growing EU Beauty Platform", body: "The Drum Awards" },
  { year: "2024", title: "B Corp Certification", body: "B Lab" },
  { year: "2024", title: "Best Digital Experience", body: "Webby Awards" },
];

export default function PressPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Press & Media"
        title="Writing about us? We've got you."
        description="Find media assets, recent coverage, our founding story, and a direct line to our press team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Press" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: Users, value: "2.4M+", label: "Active customers" },
            { icon: TrendingUp, value: "€240M", label: "Series B valuation · 2025" },
            { icon: Award, value: "B Corp", label: "Certified since 2024" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-surface border border-border rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-text-primary">{s.value}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="In the news" title="Recent coverage" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pressFeatures.map((p) => (
            <a
              key={p.headline}
              href={p.href}
              className="group bg-surface border border-border rounded-xl p-6 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  {p.outlet}
                </span>
                <span className="text-[11px] text-text-muted">{p.date}</span>
              </div>
              <p className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                {p.headline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted group-hover:text-accent">
                Read article
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Press kit"
              title="Download our media assets"
              description="Everything you need — logos, photography, and brand guidelines in one place."
            />
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg"
            >
              <Download className="w-4 h-4" />
              Full press kit
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {assets.map((a) => (
              <a
                key={a.title}
                href="#"
                className="group flex items-center justify-between gap-4 p-5 bg-surface border border-border rounded-xl hover:border-accent transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors truncate">
                    {a.title}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{a.description}</p>
                  <p className="text-[11px] text-text-muted mt-1">{a.size}</p>
                </div>
                <Download className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative bg-primary text-white rounded-2xl p-8 md:p-12">
              <Quote className="w-10 h-10 text-accent mb-5" />
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                Elara Shop is what happens when beauty is edited by people who actually love it. Every visit feels like a recommendation from your smartest friend.
              </p>
              <div className="pt-5 border-t border-white/15">
                <p className="text-sm font-bold">Elena Verdini</p>
                <p className="text-xs text-white/70 mt-0.5">Beauty Editor, Vogue Italia</p>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Recognition" title="Awards & milestones" />
              <ul className="mt-6 space-y-4">
                {awards.map((a) => (
                  <li
                    key={`${a.year}-${a.title}`}
                    className="flex items-start gap-4 pb-4 border-b border-border-light last:border-0"
                  >
                    <span className="shrink-0 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                      {a.year}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{a.title}</p>
                      <p className="text-xs text-text-muted mt-0.5">{a.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Press inquiries"
        title="Want to talk?"
        description="Our comms team replies to all press emails within 1 business day."
        actions={[
          { label: "press@elarashop.com", href: "mailto:press@elarashop.com", variant: "primary" },
          { label: "About Elara Shop", href: "/about", variant: "outline" },
        ]}
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
