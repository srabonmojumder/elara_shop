"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Package,
  CreditCard,
  Truck,
  RefreshCw,
  User,
  Tag,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Mail,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import FAQAccordion from "@/components/page/FAQAccordion";
import SectionHeading from "@/components/page/SectionHeading";

const topics = [
  { icon: Package, title: "Orders", description: "Placing, changing, or canceling orders", count: 12, href: "#orders" },
  { icon: Truck, title: "Shipping", description: "Delivery times, carriers, and tracking", count: 9, href: "/shipping" },
  { icon: RefreshCw, title: "Returns", description: "Returns, refunds, and exchanges", count: 8, href: "/returns" },
  { icon: CreditCard, title: "Payments", description: "Accepted methods & secure checkout", count: 7, href: "#payments" },
  { icon: User, title: "Account", description: "Profile, password & preferences", count: 6, href: "#account" },
  { icon: Tag, title: "Promotions", description: "Codes, discounts & loyalty rewards", count: 5, href: "/offers" },
  { icon: Sparkles, title: "Products", description: "Ingredients, how-tos, and routines", count: 11, href: "#products" },
  { icon: HelpCircle, title: "Other", description: "Anything else we can help with", count: 4, href: "/contact" },
];

const faqs = [
  {
    q: "How do I place an order?",
    a: "Add items to your bag, then head to checkout. You can check out as a guest, or sign in for faster checkout and to track your order. Payment is only taken once your order is confirmed.",
  },
  {
    q: "Can I modify or cancel my order after placing it?",
    a: "You can edit or cancel within 30 minutes of ordering from your account page. After that we've usually started packing — reach out to Customer Care and we'll do our best.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Klarna (pay in 3). All payments are encrypted end-to-end and processed by our PCI-DSS-compliant provider.",
  },
  {
    q: "When will I receive my order?",
    a: "Standard delivery is 3–5 business days across the EU, 1–3 days for express. Orders placed before 14:00 CET ship the same day. See our shipping page for full details.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we deliver to 34 countries across Europe, the UK, and North America. International duties and taxes are calculated at checkout so there are no surprise fees.",
  },
  {
    q: "How do I return an item?",
    a: "You have 30 days from delivery. Start a return from your account page, print the prepaid label, and drop the package at any partner location. Refunds land in 5–7 business days after we receive the return.",
  },
  {
    q: "Are your products ethically made?",
    a: "All Elara Shop products are certified ethically made by Fair Trade, and 92% of our range is vegan. We're actively working to reach 100% by 2027.",
  },
  {
    q: "Can I use multiple discount codes?",
    a: "Only one promo code per order, but you can always stack loyalty points and free-shipping thresholds on top of any active code.",
  },
];

export default function HelpPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(q) ||
        (typeof f.a === "string" && f.a.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div>
      <PageHeader
        eyebrow="Help center"
        title="How can we help?"
        description="Answers to the most common questions — and a way to reach a real human when you need one."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Help Center" }]}
        variant="hero"
        align="center"
      >
        <div className="w-full max-w-xl mt-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles…"
              className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-full text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
            />
          </div>
        </div>
      </PageHeader>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="Browse by topic"
          title="Start with a category"
          description="Pick the area that best matches your question — most answers are one click away."
        />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <a
                key={t.title}
                href={t.href}
                className="group bg-surface border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">{t.title}</h3>
                <p className="text-xs text-text-secondary line-clamp-2 mb-3">{t.description}</p>
                <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  {t.count} articles
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
          <SectionHeading
            eyebrow="Popular questions"
            title="Frequently asked"
            description={query ? `Showing ${filtered.length} result${filtered.length === 1 ? "" : "s"}` : undefined}
          />
          {!query && (
            <a
              href="/contact"
              className="text-xs font-semibold text-accent uppercase tracking-wider hover:underline whitespace-nowrap"
            >
              Can't find it? Contact us →
            </a>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-surface-secondary rounded-2xl">
            <HelpCircle className="w-10 h-10 mx-auto mb-3 text-text-muted" />
            <p className="text-sm font-semibold text-text-primary">No articles match "{query}"</p>
            <p className="text-xs text-text-muted mt-1">Try different keywords or contact our team.</p>
          </div>
        ) : (
          <FAQAccordion items={filtered} />
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="bg-surface-secondary rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary mb-2">
              Still need help?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Our customer care team is here Mon–Fri, 9:00–19:00 CET. Average reply under 2 minutes on live chat.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Start a chat
            </a>
            <a
              href="mailto:hello@elarashop.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border text-text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors rounded-lg"
            >
              <Mail className="w-4 h-4" />
              Email us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
