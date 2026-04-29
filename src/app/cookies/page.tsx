"use client";

import { useState } from "react";
import { Cookie, ShieldCheck, BarChart3, Megaphone, Save } from "lucide-react";
import PolicyLayout from "@/components/page/PolicyLayout";

interface CookieCategory {
  id: "essential" | "analytics" | "marketing" | "personalization";
  icon: React.ElementType;
  title: string;
  description: string;
  required?: boolean;
  examples: string[];
}

const categories: CookieCategory[] = [
  {
    id: "essential",
    icon: ShieldCheck,
    title: "Essential",
    description: "Required for the site to work — login, cart, checkout, fraud prevention. Can't be disabled.",
    required: true,
    examples: ["session_id", "cart_token", "csrf", "auth"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    description: "Help us understand how you use BEAUTÉ so we can improve. Aggregated, never personally identifying.",
    examples: ["_ga", "_posthog", "sentry_trace"],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    description: "Used to show you relevant ads on other sites and measure how our campaigns perform.",
    examples: ["_fbp", "_gcl_au", "tiktok_clickid"],
  },
  {
    id: "personalization",
    icon: Cookie,
    title: "Personalization",
    description: "Remember your preferences — language, currency, recently viewed products.",
    examples: ["locale", "currency", "recent_products"],
  },
];

function CookiePreferences() {
  const [prefs, setPrefs] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    personalization: true,
  });
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 not-prose my-4">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Manage your preferences</h3>
          <p className="text-xs text-text-muted mt-1">
            Your choices save instantly and can be changed any time.
          </p>
        </div>
        <button
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 2500);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg cursor-pointer shrink-0"
        >
          <Save className="w-3.5 h-3.5" />
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      <div className="space-y-3">
        {categories.map((c) => {
          const Icon = c.icon;
          const enabled = prefs[c.id];
          return (
            <div
              key={c.id}
              className="flex items-start gap-4 p-4 bg-surface-secondary rounded-xl"
            >
              <div className="w-9 h-9 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-bold text-text-primary">{c.title}</p>
                  {c.required && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-surface-tertiary text-text-muted px-2 py-0.5 rounded">
                      Always on
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.examples.map((e) => (
                    <span
                      key={e}
                      className="font-mono text-[10px] bg-surface border border-border text-text-muted px-2 py-0.5 rounded"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                role="switch"
                onClick={() => !c.required && setPrefs({ ...prefs, [c.id]: !enabled })}
                disabled={c.required}
                className={`relative p-0 inline-flex items-center w-11 h-6 rounded-full transition-colors shrink-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-surface-secondary ${
                  enabled ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Toggle ${c.title}`}
                aria-checked={enabled}
              >
                <span
                  aria-hidden
                  className={`block w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    enabled ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const sections = [
  {
    id: "what-is",
    title: "What is a cookie?",
    content: (
      <p>
        A cookie is a small piece of data that a website stores on your device. They help sites remember you between visits, keep you logged in, understand how features are used, and sometimes show relevant ads.
      </p>
    ),
  },
  {
    id: "types",
    title: "Types we use",
    content: (
      <>
        <p>We group cookies into four categories. Essential cookies are always on; the rest are entirely up to you.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Essential</strong> — login, cart, security</li>
          <li><strong>Analytics</strong> — anonymous usage insights</li>
          <li><strong>Marketing</strong> — targeted ads & campaign attribution</li>
          <li><strong>Personalization</strong> — language, currency, recent items</li>
        </ul>
      </>
    ),
  },
  {
    id: "preferences",
    title: "Your preferences",
    content: <CookiePreferences />,
  },
  {
    id: "third-parties",
    title: "Third-party cookies",
    content: (
      <>
        <p>Some cookies come from trusted third parties when you've consented to them:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Google (Analytics 4, Ads)</li>
          <li>Meta (Facebook & Instagram ads)</li>
          <li>TikTok (ads)</li>
          <li>PostHog (product analytics)</li>
          <li>Stripe & PayPal (fraud detection)</li>
        </ul>
        <p>Each has their own privacy policy — we only share the minimum needed to make the feature work.</p>
      </>
    ),
  },
  {
    id: "how-to-manage",
    title: "Managing cookies in your browser",
    content: (
      <p>
        On top of our on-site preferences, every major browser lets you block or delete cookies directly. Note that disabling essential cookies may break parts of BEAUTÉ (like checkout).
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    content: (
      <p>We'll update this page any time we add or remove cookies. The "Last updated" date above always reflects the most recent change.</p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <PolicyLayout
      title="Cookie Policy"
      description="What cookies we use, why, and how to switch them on or off."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      lastUpdated="April 15, 2026"
      intro={
        <p>
          <strong>Quick version —</strong> We use essential cookies to make BEAUTÉ work, and optional ones only if you say yes. Change your mind any time using the toggle panel below.
        </p>
      }
      sections={sections}
    />
  );
}
