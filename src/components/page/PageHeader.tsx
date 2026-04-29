import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title?: string;
  description?: string;
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  align?: "left" | "center";
  variant?: "default" | "hero";
  className?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
  eyebrow,
  align = "left",
  variant = "default",
  className = "",
  children,
}: PageHeaderProps) {
  const isHero = variant === "hero";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section
      className={`${
        isHero
          ? "bg-surface-secondary border-b border-border"
          : "border-b border-border-light"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            className={`flex flex-wrap items-center gap-1 text-xs text-text-muted mb-5 ${
              align === "center" ? "justify-center" : ""
            }`}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3 h-3 text-text-muted" />}
                {c.href ? (
                  <a href={c.href} className="hover:text-accent transition-colors">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-text-primary">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={`flex flex-col gap-3 ${alignment} ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {eyebrow && (
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
          )}
          {title && (
            <h1
              className={`${
                isHero
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-2xl sm:text-3xl lg:text-4xl"
              } font-extrabold tracking-tight text-text-primary`}
            >
              {title}
            </h1>
          )}
          {description && (
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
