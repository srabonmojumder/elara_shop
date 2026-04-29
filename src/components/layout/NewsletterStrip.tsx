"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterStrip() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-surface-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Join our Newsletter
          </h2>
          <p className="text-sm text-text-secondary mb-8">
            Subscribe and get exclusive offers, new arrivals, and beauty tips
            delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-success animate-fade-in-up">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium text-sm">
                Thank you for subscribing! Check your inbox for a welcome
                surprise.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            >
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 text-sm border border-border outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="sm:col-span-2 px-4 py-3 text-sm border border-border outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-dark transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[10px] text-text-muted mt-4">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe
            at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
