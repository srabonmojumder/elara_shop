import type { Metadata } from "next";
import PolicyLayout from "@/components/page/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Elara Shop collects, uses, and protects your personal information — written plainly, with the details you actually want.",
};


const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <>
        <p>
          Elara Shop SRL (\"Elara Shop\", \"we\", \"our\") is the data controller responsible for your personal information when you visit elarashop.com or shop with us in-store. We're registered in Milano, Italy, VAT IT12345678901, and our EU representative for GDPR purposes is Elara Shop SRL, Via Montenapoleone 15, 20121 Milano.
        </p>
        <p>
          You can reach our Data Protection Officer any time at{" "}
          <a href="mailto:privacy@elarashop.com" className="text-accent hover:underline">privacy@elarashop.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What information we collect",
    content: (
      <>
        <p>We collect three categories of data:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>You give us:</strong> name, email, phone, address, payment details, date of birth (optional), preferences, reviews, photos.</li>
          <li><strong>Automatically:</strong> device type, IP address, browser, pages viewed, time on site, referring URL, cookies.</li>
          <li><strong>From partners:</strong> fraud-detection signals, shipping-status updates from carriers, marketing performance from ad networks.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    content: (
      <>
        <p>We use your data to: process orders, deliver products, issue refunds, personalize recommendations, prevent fraud, run loyalty programs, send marketing emails (with consent), and improve our website and stores.</p>
        <p>We will never sell your personal data to third parties.</p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal basis for processing",
    content: (
      <>
        <p>Under GDPR we process your data only when we have a valid legal basis:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Contract:</strong> to fulfill your order and deliver your products.</li>
          <li><strong>Legitimate interest:</strong> fraud prevention, site analytics, product improvement.</li>
          <li><strong>Consent:</strong> marketing emails, non-essential cookies, personalized ads. You can withdraw consent any time.</li>
          <li><strong>Legal obligation:</strong> tax records, anti-money-laundering, and regulatory requests.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    content: (
      <>
        <p>We share limited data only with processors strictly needed to run our business — and only under signed Data Processing Agreements:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Payment providers (Stripe, PayPal, Klarna)</li>
          <li>Shipping carriers (DHL, UPS, national post offices)</li>
          <li>Cloud infrastructure (AWS EU regions, Cloudflare EU)</li>
          <li>Email & CRM providers (Braze)</li>
          <li>Analytics & advertising (where you've consented)</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    content: (
      <p>We keep your account data for as long as your account is active, plus 3 years. Order records are kept for 10 years for accounting compliance. Marketing data is deleted 2 years after your last interaction. You can request deletion at any time — see your rights below.</p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>Under GDPR and local laws, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access the data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data (\"right to be forgotten\")</li>
          <li>Restrict or object to processing</li>
          <li>Port your data to another service</li>
          <li>Withdraw consent at any time</li>
          <li>Complain to your local data-protection authority (in Italy, the <em>Garante</em>)</li>
        </ul>
        <p>We respond to all rights requests within 30 days. Email <a href="mailto:privacy@elarashop.com" className="text-accent hover:underline">privacy@elarashop.com</a>.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & tracking",
    content: (
      <p>We use cookies and similar technologies — essential ones always, and analytics/marketing ones only with your consent. Read our full <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a> for details and to manage your preferences.</p>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    content: (
      <p>Your data is primarily stored in the EU. Some processors (like certain advertising partners) may transfer data to the US or UK. When this happens, we use Standard Contractual Clauses and additional safeguards required by GDPR to keep your data protected.</p>
    ),
  },
  {
    id: "changes",
    title: "Updates to this policy",
    content: (
      <p>We may update this policy from time to time. Material changes will be communicated by email or a prominent website notice at least 30 days before they take effect.</p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information — in plain language, with nothing buried."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      lastUpdated="April 15, 2026"
      intro={
        <p>
          <strong>TL;DR —</strong> We collect the minimum data we need to run Elara Shop, never sell your information, and you can delete everything with a single email. This policy explains the details.
        </p>
      }
      sections={sections}
    />
  );
}
