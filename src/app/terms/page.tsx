import PolicyLayout from "@/components/page/PolicyLayout";

const sections = [
  {
    id: "agreement",
    title: "Your agreement",
    content: (
      <p>
        By accessing beaute.com or placing an order, you agree to these Terms of Service. If you don't agree, please don't use the site. These terms are governed by Italian law and, where applicable, EU consumer regulations.
      </p>
    ),
  },
  {
    id: "account",
    title: "Your account",
    content: (
      <>
        <p>You may browse BEAUTÉ as a guest, but some features require an account. You agree to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide accurate, current, and complete information</li>
          <li>Keep your password confidential and secure</li>
          <li>Be responsible for all activity under your account</li>
          <li>Notify us immediately of any unauthorized use</li>
        </ul>
      </>
    ),
  },
  {
    id: "orders",
    title: "Orders & pricing",
    content: (
      <>
        <p>When you place an order, you're making an offer to purchase. The contract is formed when we send your order confirmation email. We reserve the right to decline orders in rare cases (e.g., product unavailable, pricing error, suspected fraud).</p>
        <p>Prices include VAT where applicable and are shown in EUR. We try hard to get pricing right, but if a clear error appears, we'll contact you before shipping.</p>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment",
    content: (
      <p>Payment is taken when your order is confirmed. We accept Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, and Klarna. All payments are processed by PCI-DSS-compliant providers — we don't store your card details.</p>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & delivery",
    content: (
      <p>Full details are on our <a href="/shipping" className="text-accent hover:underline">Shipping page</a>. Risk of loss passes to you when the carrier hands the package to you or your designated recipient — until then, damage or loss is on us.</p>
    ),
  },
  {
    id: "returns",
    title: "Returns & refunds",
    content: (
      <p>You have 30 days from delivery to return eligible items for a full refund. See our <a href="/returns" className="text-accent hover:underline">Returns page</a> for the process and eligibility.</p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>All content on BEAUTÉ — text, images, logos, design, code — is owned by BEAUTÉ or our partners and protected by EU and international copyright law. You may browse and print for personal use, but may not reproduce, modify, or redistribute without written permission.</p>
    ),
  },
  {
    id: "user-content",
    title: "Reviews & user content",
    content: (
      <p>When you post a review, photo, or comment, you grant BEAUTÉ a worldwide, non-exclusive, royalty-free license to use it for promotional and editorial purposes, crediting your display name. We moderate content and may remove anything abusive, misleading, or unlawful.</p>
    ),
  },
  {
    id: "warranties",
    title: "Warranties & liability",
    content: (
      <>
        <p>Products are sold with the statutory warranties required by EU consumer law. Within the limits permitted by law:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>BEAUTÉ is not liable for indirect or consequential damages beyond the value of the order.</li>
          <li>We don't warrant that beaute.com will be uninterrupted or error-free, though we'll always work to keep it reliable.</li>
          <li>Nothing in these terms limits your statutory consumer rights.</li>
        </ul>
      </>
    ),
  },
  {
    id: "disputes",
    title: "Disputes & governing law",
    content: (
      <p>These terms are governed by Italian law. EU consumers may also invoke the mandatory protections of their country of residence. You can use the European Commission's ODR platform at <a href="https://ec.europa.eu/consumers/odr" className="text-accent hover:underline">ec.europa.eu/consumers/odr</a> for out-of-court dispute resolution.</p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>We may update these terms from time to time. Material changes will be emailed to account holders 30 days in advance, and a visible notice posted on the homepage.</p>
    ),
  },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      description="The fine print — written in plain language so you don't need a lawyer to read it."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      lastUpdated="April 15, 2026"
      intro={
        <p>
          These terms are between you and BEAUTÉ SRL. They cover how you can use our website, place orders, and interact with us. Nothing here limits your rights under EU consumer law.
        </p>
      }
      sections={sections}
    />
  );
}
