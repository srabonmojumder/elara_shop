import type { Metadata } from "next";
import { Eye, Keyboard, Volume2, Contrast, MousePointer, Heart } from "lucide-react";
import PolicyLayout from "@/components/page/PolicyLayout";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How we build elarashop.com and our stores to welcome everyone — plus where we fall short and what we're doing about it.",
};


const features = [
  { icon: Keyboard, title: "Full keyboard navigation", description: "Every interactive element is reachable via keyboard with visible focus states." },
  { icon: Eye, title: "Screen-reader optimized", description: "Semantic HTML, ARIA labels, and descriptive alt text throughout." },
  { icon: Contrast, title: "WCAG AA contrast", description: "All text meets or exceeds 4.5:1 contrast ratio against its background." },
  { icon: Volume2, title: "Captioned video", description: "Every product video includes subtitles in English, Italian, French, and German." },
  { icon: MousePointer, title: "Generous tap targets", description: "Interactive elements are at least 44×44 px to reduce mis-taps on mobile." },
  { icon: Heart, title: "Respectful of motion preferences", description: "Animations automatically reduce when you've set \"prefers-reduced-motion\"." },
];

function AccessibilityFeatureGrid() {
  return (
    <div className="not-prose my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div key={f.title} className="bg-surface border border-border rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
              <Icon className="w-4 h-4" />
            </div>
            <p className="text-sm font-bold text-text-primary mb-1">{f.title}</p>
            <p className="text-xs text-text-secondary leading-relaxed">{f.description}</p>
          </div>
        );
      })}
    </div>
  );
}

const sections = [
  {
    id: "commitment",
    title: "Our commitment",
    content: (
      <p>
        Elara Shop is built to be usable by everyone — regardless of vision, mobility, hearing, or cognitive ability. We aim to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA, and we audit every quarter against this bar.
      </p>
    ),
  },
  {
    id: "features",
    title: "What we've built in",
    content: <AccessibilityFeatureGrid />,
  },
  {
    id: "in-store",
    title: "In-store accessibility",
    content: (
      <>
        <p>All Elara Shop flagship stores are:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Wheelchair accessible with step-free entrances</li>
          <li>Equipped with accessible restrooms</li>
          <li>Staffed with advisors trained in inclusive customer service</li>
          <li>Offering quiet hours every Tuesday morning (9:00–11:00) for sensory-sensitive shoppers</li>
        </ul>
        <p>If you need anything specific for your visit, email us at <a href="mailto:access@elarashop.com" className="text-accent hover:underline">access@elarashop.com</a> and we'll plan ahead.</p>
      </>
    ),
  },
  {
    id: "assistive-tech",
    title: "Compatibility",
    content: (
      <>
        <p>Elara Shop is tested to work well with leading assistive technologies:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>NVDA, JAWS, and VoiceOver screen readers</li>
          <li>Dragon NaturallySpeaking voice control</li>
          <li>Browser-level zoom up to 400% without horizontal scrolling</li>
          <li>Reduced-motion and high-contrast OS settings</li>
        </ul>
      </>
    ),
  },
  {
    id: "known-issues",
    title: "Known limitations",
    content: (
      <>
        <p>We're always improving. These items are on our current backlog:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Some user-uploaded review photos lack descriptive alt text (we're adding community-assisted captioning in Q3 2026)</li>
          <li>Certain third-party embedded videos may not be fully captioned — we're moving to a self-hosted player by end of 2026</li>
        </ul>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback & help",
    content: (
      <>
        <p>If you encounter a barrier using Elara Shop, please tell us. We take accessibility reports seriously and commit to responding within 2 business days.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email: <a href="mailto:access@elarashop.com" className="text-accent hover:underline">access@elarashop.com</a></li>
          <li>Phone: +39 02 1234 5678 (Mon–Fri, 9:00–19:00 CET)</li>
          <li>Post: Accessibility Team, Elara Shop SRL, Via Montenapoleone 15, 20121 Milano</li>
        </ul>
      </>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <PolicyLayout
      title="Accessibility Statement"
      description="How we build elarashop.com and our stores to welcome everyone — plus where we fall short and what we're doing about it."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      lastUpdated="April 1, 2026"
      intro={
        <p>
          Style is for everyone — so Elara Shop should be too. This statement explains how we approach accessibility, what we've built, what we haven't yet, and how to reach us if something doesn't work for you.
        </p>
      }
      sections={sections}
    />
  );
}
