import Image from "next/image";
import { GraduationCap, Percent, Sparkles, ShieldCheck, CheckCircle2, Users, Gift, Clock } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FAQAccordion from "@/components/page/FAQAccordion";
import CTASection from "@/components/page/CTASection";

const perks = [
  { icon: Percent, title: "15% off every order", description: "Automatically applied at checkout — stacks with free shipping." },
  { icon: Gift, title: "Exclusive launches", description: "Student-only early access and giveaways every month." },
  { icon: Sparkles, title: "Free sample bundles", description: "Pick 3 free deluxe samples with every order over €35." },
  { icon: Users, title: "Friend-referral bonus", description: "Earn €10 credit for every friend you bring who's also a student." },
];

const steps = [
  { title: "Verify with Student Beans", description: "Free, secure, and takes under 60 seconds. No uploads needed." },
  { title: "Get your unique code", description: "Delivered to your inbox straight after verification." },
  { title: "Apply at checkout", description: "Paste in the promo box — 15% off every order, every time." },
];

const faqs = [
  { q: "Who qualifies as a student?", a: "Anyone currently enrolled at a university, college, or vocational program in one of our delivery countries. Verification is handled by our partner Student Beans." },
  { q: "How long is the verification valid?", a: "Student status is re-verified annually to make sure discounts go to current students." },
  { q: "Can I combine the discount with sale items?", a: "Yes — your 15% applies on top of any public promotion except sitewide \"up to X% off\" event codes which already use your student discount in their math." },
  { q: "What about graduate students?", a: "Absolutely. Masters, PhD, and postdoc students all qualify." },
  { q: "I graduated. Now what?", a: "Your discount stays active until your next renewal. After that, join our loyalty program — it still unlocks plenty of perks." },
];

export default function StudentPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Student discount"
        title="Real beauty. Student prices."
        description="15% off every order, exclusive launches, and a free sample bundle — because self-care shouldn't be a splurge you regret."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Discount" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent to-accent-dark text-white p-8 md:p-16">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10" aria-hidden />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5" aria-hidden />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-5">
                <GraduationCap className="w-3.5 h-3.5" />
                For students
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-none mb-3">
                15% off
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-2">every single order</p>
              <p className="text-sm md:text-base text-white/85 max-w-md leading-relaxed mb-6">
                Verify once with Student Beans, and save on every order until you graduate.
              </p>
              <a
                href="#verify"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-accent text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-surface-tertiary transition-colors rounded-lg"
              >
                Verify in 60 seconds
                <ShieldCheck className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden md:block">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/categories/makeup.jpg"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="What you get"
          title="Perks beyond the 15%"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{p.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20" id="verify">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps, 60 seconds"
            align="center"
            className="mx-auto"
          />
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative bg-surface border border-border rounded-2xl p-6 md:p-8 text-center"
              >
                <span className="w-12 h-12 mx-auto rounded-full bg-accent text-white text-lg font-extrabold flex items-center justify-center mb-5">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
                {i < steps.length - 1 && (
                  <span className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 w-7 h-7 bg-surface-secondary border border-border rounded-full items-center justify-center text-accent z-10">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 max-w-xl mx-auto text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-bold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg"
            >
              Verify with Student Beans
              <ShieldCheck className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-text-muted mt-4 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              Takes 60 seconds · Free · Handled by Student Beans
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading eyebrow="Questions" title="Student discount FAQs" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        eyebrow="Not a student?"
        title="Still plenty of ways to save"
        description="Sign up for our loyalty program for early access, birthday gifts, and referral rewards."
        actions={[
          { label: "Join loyalty", href: "/register", variant: "primary" },
          { label: "All offers", href: "/offers", variant: "outline" },
        ]}
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
