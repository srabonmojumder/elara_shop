"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";

const channels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "For detailed questions & account help",
    value: "hello@beaute.com",
    href: "mailto:hello@beaute.com",
    meta: "Replies within 24 hours",
  },
  {
    icon: Phone,
    title: "Customer Care",
    description: "Talk to a beauty advisor",
    value: "+39 02 1234 5678",
    href: "tel:+390212345678",
    meta: "Mon–Fri · 9:00–19:00 CET",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant answers while you shop",
    value: "Start a chat",
    href: "#chat",
    meta: "Average wait under 2 minutes",
  },
];

const offices = [
  {
    city: "Milano",
    country: "Italy · HQ",
    address: "Via Montenapoleone 15, 20121 Milano",
    hours: "Mon–Sat · 10:00–20:00",
  },
  {
    city: "Paris",
    country: "France",
    address: "25 Rue du Faubourg Saint-Honoré, 75008",
    hours: "Mon–Sat · 10:00–20:00",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "140 New Bond Street, W1S 2TR",
    hours: "Mon–Sun · 10:00–20:00",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "general",
    orderId: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", topic: "general", orderId: "", message: "" });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions about a product, order, or just looking for a recommendation? Our team is ready to help — pick the channel that works best for you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                className="group bg-surface border border-border rounded-xl p-6 hover:border-accent hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1">{c.title}</h3>
                <p className="text-xs text-text-muted mb-4">{c.description}</p>
                <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {c.value}
                </p>
                <p className="text-[11px] text-text-muted mt-2 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {c.meta}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Send us a message"
              title="Drop us a line"
              description="Fill out the form and we'll get back to you within one business day."
            />

            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Sarah Johnson"
                  />
                </Field>
                <Field label="Email address" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="What's it about?" required>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="general">General inquiry</option>
                    <option value="order">Order help</option>
                    <option value="return">Return or refund</option>
                    <option value="product">Product question</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </Field>
                <Field label="Order ID (optional)">
                  <input
                    type="text"
                    value={form.orderId}
                    onChange={(e) => setForm({ ...form, orderId: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="BT-XXXXXX"
                  />
                </Field>
              </div>

              <Field label="Message" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </Field>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-text-muted">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg disabled:opacity-60 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Message sent
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-surface-secondary border border-border rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-5">
                Our flagship stores
              </h3>
              <ul className="space-y-5">
                {offices.map((o) => (
                  <li key={o.city} className="flex gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">
                        {o.city} <span className="text-text-muted font-normal">· {o.country}</span>
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">{o.address}</p>
                      <p className="text-[11px] text-text-muted mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {o.hours}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-4">
                Follow us
              </h3>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                DM us on social — we reply fast, share tips, and go behind the scenes.
              </p>
              <div className="flex gap-2">
                {[
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-surface-tertiary flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-text-primary mb-2">Need a quick answer?</h3>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                Check our Help Center for instant answers to common questions.
              </p>
              <a
                href="/help"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider hover:underline"
              >
                Visit Help Center →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
