import { ArrowRight } from "lucide-react";

interface CTAAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: CTAAction[];
  tone?: "dark" | "accent" | "light";
  className?: string;
}

export default function CTASection({
  eyebrow,
  title,
  description,
  actions,
  tone = "dark",
  className = "",
}: CTASectionProps) {
  const toneStyles =
    tone === "accent"
      ? "bg-accent text-white"
      : tone === "light"
        ? "bg-surface-secondary text-text-primary border border-border"
        : "bg-primary text-white";

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl ${toneStyles} px-6 sm:px-10 md:px-16 py-10 md:py-16 text-center`}>
          {eyebrow && (
            <span className={`block text-[11px] font-bold uppercase tracking-[0.2em] mb-3 ${tone === "light" ? "text-accent" : "text-white/80"}`}>
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 max-w-2xl mx-auto">
            {title}
          </h2>
          {description && (
            <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-7 ${tone === "light" ? "text-text-secondary" : "text-white/75"}`}>
              {description}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {actions.map((a, i) => {
                const isPrimary = (a.variant ?? "primary") === "primary";
                const styles =
                  tone === "accent"
                    ? isPrimary
                      ? "bg-white text-accent hover:bg-surface-tertiary"
                      : "border border-white text-white hover:bg-white hover:text-accent"
                    : tone === "light"
                      ? isPrimary
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "border border-primary text-primary hover:bg-primary hover:text-white"
                      : isPrimary
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "border border-white text-white hover:bg-white hover:text-primary";
                return (
                  <a
                    key={i}
                    href={a.href}
                    className={`inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors ${styles}`}
                  >
                    {a.label}
                    {isPrimary && <ArrowRight className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
