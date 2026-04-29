import Image from "next/image";
import {
  Sparkles,
  Heart,
  Leaf,
  Users,
  Globe,
  Award,
  ShieldCheck,
  Recycle,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FeatureGrid from "@/components/page/FeatureGrid";
import CTASection from "@/components/page/CTASection";

const stats = [
  { value: "2.4M+", label: "Happy customers" },
  { value: "350+", label: "Curated brands" },
  { value: "34", label: "Countries served" },
  { value: "98%", label: "5-star reviews" },
];

const values = [
  { icon: Heart, title: "Obsessed with quality", description: "Every product we carry is tested by our editors and trusted by pros. If it's not worth your shelf, it's not on ours." },
  { icon: Leaf, title: "Clean & conscious", description: "We favor transparent ingredients, recyclable packaging, and partners who treat the planet like it's borrowed." },
  { icon: Users, title: "Built with experts", description: "Dermatologists, makeup artists, and trichologists guide what makes the cut — not algorithms." },
  { icon: Globe, title: "Inclusive by default", description: "50+ shade ranges. Zero gendered categories. Beauty that reflects every person who walks through our doors." },
];

const milestones = [
  { year: "2018", title: "Founded in Milano", description: "Two sisters opened a 30m² concept store on Via Brera with 40 indie brands." },
  { year: "2020", title: "Went digital", description: "Launched beaute.com during the pandemic — shipped to 12 countries in year one." },
  { year: "2022", title: "First flagship", description: "Opened our flagship on Via Montenapoleone with an in-store skin-analysis lab." },
  { year: "2024", title: "B Corp certified", description: "Joined the global movement redefining success in business." },
  { year: "2026", title: "You, here", description: "2.4M customers, 350+ brands, and just getting started." },
];

const commitments = [
  { icon: Leaf, title: "Carbon neutral", description: "Every order. Every shipment. Offset through verified forest partners." },
  { icon: Recycle, title: "100% recyclable packaging", description: "No plastic fillers, ever. Recyclable or compostable end-to-end." },
  { icon: ShieldCheck, title: "Leaping Bunny certified", description: "Cruelty-free across every brand we carry, no exceptions." },
  { icon: Award, title: "B Corp certified", description: "Meeting the highest standards of verified social & environmental performance." },
];

const team = [
  { name: "Giulia Romano", role: "Co-founder & CEO", initials: "GR" },
  { name: "Martina Romano", role: "Co-founder & Creative Director", initials: "MR" },
  { name: "Sofia Esposito", role: "Head of Merchandising", initials: "SE" },
  { name: "Luca Moretti", role: "Head of Sustainability", initials: "LM" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About BEAUTÉ"
        title="Beauty that feels like home"
        description="We started in a 30m² Milano concept store and grew into Europe's most-loved beauty destination — without losing the handpicked, human feel that started it all."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="relative aspect-[16/9] md:aspect-[16/7] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="BEAUTÉ storefront"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-surface border border-border rounded-xl py-6 px-4"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-text-primary">
                {s.value}
              </p>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-text-muted mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="It started with two sisters and a vision"
              description="In 2018, Giulia and Martina Romano opened BEAUTÉ because they couldn't find a place that treated beauty the way they did — as craft, ritual, and personal expression."
            />
            <div className="mt-5 space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                Eight years later, we're a team of 140 obsessive editors, stylists, and technologists — but the filter is the same one the sisters started with: if it's not worth your shelf, it's not on ours.
              </p>
              <p>
                We curate. We test. We argue about formulas. And we ship the best of what we find to 34 countries, every week.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero/hero-2.jpg"
              alt="Our story"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="What we believe"
          title="Values that guide every decision"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <FeatureGrid items={values} columns={4} />
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Timeline"
            title="How we got here"
            align="center"
            className="mx-auto"
          />
          <ol className="mt-10 relative">
            <span
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border"
              aria-hidden
            />
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={m.year}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 pb-10 last:pb-0`}
                >
                  <span className="absolute left-0 md:left-1/2 top-1 w-8 h-8 md:-translate-x-1/2 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center">
                    {m.year.slice(-2)}
                  </span>
                  <div className={`${isLeft ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
                      {m.year}
                    </p>
                    <h3 className="text-lg font-bold text-text-primary mb-1">{m.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{m.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Our commitments"
              title="We mean it"
              description="Big words are cheap. These are the commitments we track, publish, and measure ourselves against every year."
            />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{c.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{c.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <SectionHeading
          eyebrow="People"
          title="The team behind the shelf"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {team.map((person) => (
            <div
              key={person.name}
              className="text-center bg-surface border border-border rounded-xl p-6"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-xl font-bold">
                {person.initials}
              </div>
              <p className="text-sm font-bold text-text-primary">{person.name}</p>
              <p className="text-xs text-text-muted mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Join the team"
        title="We're hiring across Europe"
        description="From editors to engineers, we're looking for people who love beauty and love building things that last."
        actions={[
          { label: "See open roles", href: "/careers", variant: "primary" },
          { label: "Press inquiries", href: "/press", variant: "outline" },
        ]}
        tone="dark"
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
