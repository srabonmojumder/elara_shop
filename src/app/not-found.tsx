import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-5">
          Page not found
        </h1>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
          The page you&apos;re looking for has moved, been renamed, or never
          existed. Try one of the links below to get back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to homepage
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors rounded-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse all products
          </Link>
        </div>

        <div className="mt-12 pt-10 border-t border-border-light">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-5">
            Or try one of these
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-md mx-auto text-sm">
            {[
              { label: "Women", href: "/women" },
              { label: "Men", href: "/men" },
              { label: "Footwear", href: "/footwear" },
              { label: "Bags", href: "/bags" },
              { label: "Brands", href: "/brands" },
              { label: "Help Center", href: "/help" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
                >
                  <Search className="w-3 h-3" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
