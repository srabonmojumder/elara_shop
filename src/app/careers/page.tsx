import type { Metadata } from "next";
import {
  Heart,
  Zap,
  Coffee,
  Plane,
  BookOpen,
  Sparkles,
  FileText,
  MessageCircle,
  Users,
  CheckCircle2,
  Quote,
  Briefcase,
  Globe2,
  Palette,
  ShoppingBag,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FeatureGrid from "@/components/page/FeatureGrid";
import CTASection from "@/components/page/CTASection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the future of fashion with us — 140 people across Milano, Paris, and London building the home of premium fashion online.",
};


const perks = [
  { icon: Heart, title: "Health & wellness", description: "Premium private health, dental, and 1:1 mental health sessions for you and your family." },
  { icon: Plane, title: "Generous time off", description: "30 days paid + public holidays + your birthday + winter shutdown. Actually take it." },
  { icon: BookOpen, title: "€2,000 learning budget", description: "Courses, conferences, books — if it helps you grow, we'll pay for it." },
  { icon: Zap, title: "Equity for everyone", description: "Every permanent role includes stock options. We build it together, we own it together." },
  { icon: Sparkles, title: "40% employee discount", description: "Plus 4 free products every quarter from our brand partners." },
  { icon: Coffee, title: "Beautiful workspace", description: "Milano HQ with rooftop, free lunch, and the best espresso in Brera — we take coffee seriously." },
];

const principles = [
  { title: "Default to curiosity", description: "Ask more questions than you answer. The best ideas live in the follow-up." },
  { title: "Craft wins", description: "We'd rather ship one thing we're proud of than ten we're not." },
  { title: "Write it down", description: "Decisions live in docs, not DMs. Async-first, timezone-friendly." },
  { title: "Kindness over cleverness", description: "Feedback is a gift, given with care. Egos check in at the door." },
];

const teams = [
  { icon: ShoppingBag, title: "Retail & Store Operations", description: "Stylists, store leads, and flagship experience teams across Milano, Paris, and London." },
  { icon: Palette, title: "Creative & Merchandising", description: "Editors, stylists, buyers, and content producers shaping the Elara Shop point of view." },
  { icon: Briefcase, title: "Product, Engineering & Data", description: "Designers and engineers building elarashop.com, our apps, and internal tools." },
  { icon: Globe2, title: "Operations & Supply Chain", description: "Logistics, fulfilment, customer care, and the people who make same-day dispatch possible." },
];

const hiringSteps = [
  { icon: FileText, title: "Apply online", description: "Send your CV, portfolio, or links. One short form — no cover letter required." },
  { icon: MessageCircle, title: "Intro call", description: "A 30-minute chat with our talent team to get to know each other and answer your questions." },
  { icon: Users, title: "Team interviews", description: "2–3 conversations with future teammates. Real problems, no brain teasers, always paid if there's a take-home." },
  { icon: CheckCircle2, title: "Offer & onboarding", description: "Decision within 5 business days. Two-week onboarding with a dedicated buddy." },
];

const testimonials = [
  {
    quote: "The fastest I've ever gone from idea to live product. People here trust each other, and it shows in how we ship.",
    name: "Arianna Conti",
    role: "Senior Product Designer · 2 yrs at Elara Shop",
    initials: "AC",
  },
  {
    quote: "The retail team treats fashion like craft. Every stylist is trained for two full weeks — that's unheard of in this industry.",
    name: "Marcus Lindqvist",
    role: "Store Lead, London · 3 yrs at Elara Shop",
    initials: "ML",
  },
  {
    quote: "I joined as a junior buyer and now lead womenswear for EU. The learning budget wasn't a perk — it was genuinely life-changing.",
    name: "Priya Shah",
    role: "Womenswear Buyer · 4 yrs at Elara Shop",
    initials: "PS",
  },
];

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Careers"
        title="Build the future of fashion with us"
        description="We're 140 people across Milano, Paris, and London — building the home of premium fashion online. Pick up a needle, or a keyboard, and let's make something great."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="How we work"
          title="Our principles"
          description="Four ideas we come back to when things get messy — which, being a company, they often do."
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="bg-surface border border-border rounded-xl p-6"
            >
              <span className="text-3xl font-extrabold text-accent font-mono mb-3 block">
                0{i + 1}
              </span>
              <h3 className="text-base font-bold text-text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Life at Elara Shop"
            title="Perks, benefits & the fine print"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10">
            <FeatureGrid items={perks} columns={3} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="Teams"
          title="Where you might fit"
          description="We hire across four broad areas — each one essential to the Elara Shop experience."
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {teams.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group flex gap-5 bg-surface border border-border rounded-2xl p-6 md:p-7 hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{t.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{t.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="Hiring process"
          title="From first hello to first day"
          description="Four steps, on average 2–3 weeks from application to offer. No surprises, no silence."
          align="center"
          className="mx-auto"
        />

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {hiringSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative bg-surface border border-border rounded-2xl p-6 md:p-7"
              >
                <span className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-surface-tertiary flex items-center justify-center text-text-primary mt-3 mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{s.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In their words"
            title="What our team says"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="bg-surface border border-border rounded-2xl p-6 md:p-7 flex flex-col"
              >
                <Quote className="w-7 h-7 text-accent mb-4" />
                <blockquote className="text-sm text-text-primary leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border-light flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-xs font-bold">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-text-primary truncate">{t.name}</p>
                    <p className="text-[11px] text-text-muted truncate">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to apply?"
        title="We review every application personally"
        description="Send us your CV or portfolio — we'll get back to you within 5 business days, whether or not there's a match."
        actions={[
          { label: "Send an application", href: "mailto:careers@elarashop.com", variant: "primary" },
          { label: "About Elara Shop", href: "/about", variant: "outline" },
        ]}
        className="py-16 md:py-24"
      />
    </div>
  );
}
