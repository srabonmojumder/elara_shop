import type { Metadata } from "next";
import {
  RefreshCw,
  PackageCheck,
  PackageX,
  CreditCard,
  ClipboardList,
  Printer,
  Truck,
  Wallet,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";
import FAQAccordion from "@/components/page/FAQAccordion";
import CTASection from "@/components/page/CTASection";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "30-day returns on most items, free for EU & UK. Here's exactly how it works, what's eligible, and how long refunds take.",
};


const steps = [
  {
    icon: ClipboardList,
    title: "Start your return",
    description: "Open My Orders, choose the item you'd like to return, and tell us why — under 60 seconds.",
  },
  {
    icon: Printer,
    title: "Print the label",
    description: "We'll generate a prepaid return label. Print it at home or save the QR code for contactless drop-off.",
  },
  {
    icon: Truck,
    title: "Drop it off",
    description: "Pack the item in its original packaging and drop at any DHL, UPS, or partner location.",
  },
  {
    icon: Wallet,
    title: "Get refunded",
    description: "Refunds land in your original payment method within 5–7 business days of us receiving the return.",
  },
];

const eligibilityOK = [
  "Unworn items with all original tags attached",
  "Items in original packaging and condition",
  "Footwear with the dust bag and box, unworn outdoors",
  "Wrong item received or item arrived damaged",
];

const eligibilityNotOK = [
  "Items marked 'final sale' on the product page",
  "Worn or laundered clothing (hygiene)",
  "Pierced jewelry (earrings) once removed from sealed packaging",
  "Gift cards, downloadable vouchers, and personalized items",
];

const faqs = [
  { q: "How long do I have to return an item?", a: "You have 30 days from delivery to start a return. For holiday orders placed in November or December, we extend the window to January 31 automatically." },
  { q: "Is return shipping free?", a: "Yes — we cover return shipping for all EU & UK customers via our prepaid label. International returns are at your expense unless the item arrived damaged or incorrect." },
  { q: "Can I exchange instead of refund?", a: "Absolutely. Pick 'Exchange' when starting your return and choose your replacement size or shade. We ship the new item as soon as you drop off the old one." },
  { q: "What if my item arrived damaged?", a: "We're so sorry. Open a return within 7 days, select 'Damaged on arrival,' and include a photo. We'll send a replacement at no cost — you don't even need to return the damaged item." },
  { q: "How long until I see my refund?", a: "Once we receive your return, refunds are processed within 2 business days. Your bank may take an additional 3–5 business days to show the credit." },
  { q: "Can I return a gift?", a: "Yes. Enter the order number and the recipient's email from the gift notification, and we'll issue store credit instead of refunding the purchaser." },
];

export default function ReturnsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Returns & Refunds"
        title="Changed your mind? No stress."
        description="30-day free returns across the EU & UK. We make it easy — and we'll always have your back if something's not right."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Returns" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { icon: RefreshCw, value: "30 days", label: "to start a return" },
            { icon: Truck, value: "Free", label: "return shipping in EU & UK" },
            { icon: CreditCard, value: "5–7 days", label: "average refund turnaround" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-surface border border-border rounded-2xl p-6 flex items-center gap-5"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-text-primary leading-tight">
                    {s.value}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <SectionHeading eyebrow="How it works" title="Returns in four simple steps" />

        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative bg-surface border border-border rounded-2xl p-6 group hover:border-accent transition-colors"
              >
                <span className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-surface-tertiary flex items-center justify-center text-text-primary mb-4 mt-2 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{s.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{s.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="Eligibility" title="What can and can't be returned" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-surface border border-success/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center text-success">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Returnable</h3>
            </div>
            <ul className="space-y-3">
              {eligibilityOK.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface border border-accent/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <PackageX className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Not returnable</h3>
            </div>
            <ul className="space-y-3">
              {eligibilityNotOK.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <SectionHeading eyebrow="Questions" title="Returns FAQs" />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        eyebrow="Ready to return?"
        title="Start a return in 60 seconds"
        description="Head to your account to open a return — you'll have a prepaid label in under a minute."
        actions={[
          { label: "Start a return", href: "/account?tab=orders", variant: "primary" },
          { label: "Chat with support", href: "/contact", variant: "outline" },
        ]}
        className="pb-16 md:pb-24"
      />
    </div>
  );
}
