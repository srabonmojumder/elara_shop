"use client";

import { useState } from "react";
import { Gift, Mail, Calendar, Sparkles, Heart, Zap, ShieldCheck, InfinityIcon } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FAQAccordion from "@/components/page/FAQAccordion";

const presetAmounts = [25, 50, 75, 100, 150, 250];

const designs = [
  { id: "floral", name: "Floral", gradient: "from-pink-300 via-rose-300 to-amber-200" },
  { id: "midnight", name: "Midnight", gradient: "from-slate-800 via-purple-900 to-rose-900" },
  { id: "blush", name: "Blush", gradient: "from-rose-200 via-pink-200 to-orange-200" },
  { id: "emerald", name: "Emerald", gradient: "from-emerald-700 via-teal-600 to-cyan-500" },
  { id: "gold", name: "Gold", gradient: "from-amber-200 via-yellow-400 to-orange-500" },
  { id: "mono", name: "Classic", gradient: "from-neutral-900 via-neutral-700 to-neutral-500" },
];

const perks = [
  { icon: Zap, title: "Delivered instantly", description: "Email delivery in seconds, or schedule up to 12 months ahead." },
  { icon: InfinityIcon, title: "Never expires", description: "No expiry dates, no hidden fees. Spend it when they're ready." },
  { icon: Sparkles, title: "Stacks with promos", description: "Can be combined with any active sale or loyalty discount." },
  { icon: ShieldCheck, title: "Fully refundable", description: "Unused gift cards are fully refundable within 30 days." },
];

const faqs = [
  { q: "How do gift cards work?", a: "Once sent, your recipient gets a unique code by email. They apply it at checkout — it works like store credit and the balance updates in real time." },
  { q: "Can I schedule a delivery date?", a: "Yes — schedule up to 12 months in advance. Perfect for birthdays, anniversaries, or just-because surprises." },
  { q: "Do gift cards expire?", a: "Never. Our gift cards never expire, have no fees, and the unused balance stays on the recipient's account indefinitely." },
  { q: "Can I buy a physical gift card?", a: "Yes — in any Elara Shop flagship store. Get a beautifully boxed physical card for in-store purchases, or to gift in person." },
  { q: "What if my gift card is lost?", a: "As long as it was sent to a registered email, we can resend it — just contact support with the original purchase details." },
];

export default function GiftCardsPage() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [design, setDesign] = useState(designs[0]);
  const [message, setMessage] = useState("");
  const [delivery, setDelivery] = useState<"now" | "schedule">("now");

  const effectiveAmount = customAmount ? Number(customAmount) || 0 : amount;

  return (
    <div>
      <PageHeader
        eyebrow="Gift cards"
        title="Give the gift of choice"
        description="Digital gift cards delivered in seconds. No expiry, no fees, and they work on every product in the store."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gift Cards" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="lg:sticky lg:top-28 h-fit">
            <div
              className={`relative aspect-[3/2] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${design.gradient}`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative h-full p-5 sm:p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="flex items-center gap-2 mb-4 sm:mb-8">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur rounded flex items-center justify-center">
                      <span className="text-white font-extrabold text-xs sm:text-sm">E</span>
                    </div>
                    <span className="text-base sm:text-lg font-extrabold tracking-tight">Elara Shop</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Gift card
                  </p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-1 sm:mt-2">
                    €{effectiveAmount.toLocaleString()}
                  </p>
                </div>

                {message && (
                  <p className="text-xs sm:text-sm italic text-white/90 line-clamp-2">"{message}"</p>
                )}

                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-0.5 sm:mb-1">
                      Valid
                    </p>
                    <p className="text-xs sm:text-sm font-semibold">Forever</p>
                  </div>
                  <div className="text-right min-w-0">
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-0.5 sm:mb-1">
                      Code
                    </p>
                    <p className="font-mono text-[11px] sm:text-sm truncate">BEAU·XXXX·XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-3">
                Choose amount
              </p>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {presetAmounts.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => {
                      setAmount(a);
                      setCustomAmount("");
                    }}
                    className={`py-3 rounded-lg border text-sm font-bold transition-colors cursor-pointer ${
                      amount === a && !customAmount
                        ? "bg-primary text-white border-primary"
                        : "bg-surface border-border text-text-primary hover:border-accent"
                    }`}
                  >
                    €{a}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  min={10}
                  max={500}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Or enter a custom amount (€10 – €500)"
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-3">
                Design
              </p>
              <div className="grid grid-cols-6 gap-2">
                {designs.map((d) => (
                  <button
                    type="button"
                    key={d.id}
                    onClick={() => setDesign(d)}
                    title={d.name}
                    className={`aspect-square rounded-xl bg-gradient-to-br ${d.gradient} border-2 transition-all cursor-pointer ${
                      design.id === d.id
                        ? "border-accent scale-95 ring-2 ring-accent/30"
                        : "border-transparent hover:scale-95"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Recipient name">
                <input
                  type="text"
                  placeholder="Maria Rossi"
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </Field>
              <Field label="Recipient email">
                <input
                  type="email"
                  placeholder="maria@example.com"
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </Field>
            </div>

            <Field label="Personal message (optional)">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 160))}
                rows={3}
                placeholder="Happy birthday, Maria! Treat yourself 💕"
                className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <span className="text-[11px] text-text-muted mt-1 block text-right">
                {message.length}/160
              </span>
            </Field>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-3">
                When to send
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDelivery("now")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-semibold transition-colors cursor-pointer ${
                    delivery === "now"
                      ? "bg-primary text-white border-primary"
                      : "bg-surface border-border text-text-primary hover:border-accent"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Send now
                </button>
                <button
                  type="button"
                  onClick={() => setDelivery("schedule")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-semibold transition-colors cursor-pointer ${
                    delivery === "schedule"
                      ? "bg-primary text-white border-primary"
                      : "bg-surface border-border text-text-primary hover:border-accent"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Schedule
                </button>
              </div>
              {delivery === "schedule" && (
                <input
                  type="date"
                  className="mt-3 w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
                />
              )}
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-bold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg cursor-pointer"
            >
              <Gift className="w-4 h-4" />
              Add gift card — €{effectiveAmount.toLocaleString()}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-surface-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Elara Shop gift cards"
            title="A gift that actually delivers"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-surface border border-border rounded-xl p-6">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <SectionHeading eyebrow="Questions" title="Gift card FAQs" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
