"use client";

import { useState } from "react";
import {
  Gift,
  Share2,
  Mail,
  Copy,
  Wallet,
  Users,
  MessageCircle,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FAQAccordion from "@/components/page/FAQAccordion";

const steps = [
  { icon: Share2, title: "Share your link", description: "Send your unique referral link to a friend who hasn't shopped BEAUTÉ yet." },
  { icon: Gift, title: "They get €15 off", description: "Your friend gets €15 off their first order over €49 — instant gift at checkout." },
  { icon: Wallet, title: "You earn €15", description: "Once their order ships, €15 store credit lands in your account. No cap on referrals." },
];

const tiers = [
  { count: 3, reward: "€45 total · plus a free Clinique 3-step kit" },
  { count: 10, reward: "€150 total · plus a €50 bonus gift card" },
  { count: 25, reward: "€375 total · plus an invite-only VIP event in Milano" },
];

const faqs = [
  { q: "Does my friend need an account?", a: "Yes. They'll create one when they check out — it takes under a minute and locks in the €15 discount." },
  { q: "When do I receive my €15 credit?", a: "Your credit is added within 24 hours of your friend's order being dispatched, assuming no returns or refunds." },
  { q: "Is there a limit on how many friends I can refer?", a: "Nope. Refer as many friends as you'd like — credit stacks in your account and never expires." },
  { q: "What if my friend returns their order?", a: "If the first order is fully refunded, the associated credit is reversed. Partial returns have no effect." },
  { q: "Can I use my referral credit on top of a promo code?", a: "Yes — referral credit works as a payment method, so you can stack it with any active promo." },
];

export default function ReferralPage() {
  const referralLink = "https://beaute.com/r/sarah-j-7x92km";
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Refer a friend"
        title="Give €15. Get €15."
        description="Share BEAUTÉ with friends who haven't shopped with us yet — they get €15 off their first order, and we send you €15 to spend on whatever you love."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Refer a Friend" }]}
        variant="hero"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-10 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-3">
            Your unique referral link
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-surface-secondary border border-border rounded-lg overflow-hidden">
              <span className="text-sm text-text-primary font-mono truncate">{referralLink}</span>
            </div>
            <button
              onClick={copyLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy link
                </>
              )}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-border-light">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-3">
              Or share directly
            </p>
            <div className="flex flex-wrap gap-2">
              <ShareButton icon={Mail} label="Email" href="mailto:?subject=Try BEAUTÉ&body=Take €15 off your first order at BEAUTÉ" />
              <ShareButton icon={MessageCircle} label="Message" href="sms:?body=Take €15 off your first BEAUTÉ order" />
              <ShareButton icon={Instagram} label="Instagram" />
              <ShareButton icon={Facebook} label="Facebook" />
              <ShareButton icon={Twitter} label="Twitter" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps"
          align="center"
          className="mx-auto"
        />
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative bg-surface border border-border rounded-2xl p-6 md:p-8 text-center"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="w-14 h-14 mx-auto mt-2 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="The more you share, the more you earn"
            description="Extra rewards unlock automatically as your referrals grow."
          />
          <ul className="mt-8 space-y-3">
            {tiers.map((t) => (
              <li
                key={t.count}
                className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-accent text-white flex items-center justify-center">
                  <span className="text-lg font-extrabold">{t.count}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text-primary">
                    {t.count} successful referrals
                  </p>
                  <p className="text-xs text-text-secondary mt-1">{t.reward}</p>
                </div>
                <Users className="w-5 h-5 text-text-muted shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "€15", label: "You give" },
            { value: "€15", label: "You get" },
            { value: "No cap", label: "Referrals per account" },
            { value: "∞", label: "Credit expiry" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-surface border border-border rounded-2xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-accent">{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <SectionHeading eyebrow="Questions" title="Referral FAQs" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}

function ShareButton({
  icon: Icon,
  label,
  href = "#",
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-secondary border border-border text-text-primary text-xs font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors rounded-lg"
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}
