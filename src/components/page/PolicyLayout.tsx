"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import PageHeader, { Crumb } from "./PageHeader";

export interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyLayoutProps {
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  lastUpdated?: string;
  intro?: React.ReactNode;
  sections: PolicySection[];
}

export default function PolicyLayout({
  title,
  description,
  breadcrumbs,
  lastUpdated,
  intro,
  sections,
}: PolicyLayoutProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div>
      <PageHeader
        eyebrow={lastUpdated ? `Last updated · ${lastUpdated}` : undefined}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        variant="hero"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4">
                On this page
              </p>
              <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible scrollbar-none pb-2 lg:pb-0">
                {sections.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`whitespace-nowrap lg:whitespace-normal text-xs lg:text-sm py-2 px-3 rounded-lg transition-colors border-l-2 ${
                        isActive
                          ? "border-accent text-accent bg-accent/5 font-semibold"
                          : "border-transparent text-text-secondary hover:text-text-primary hover:bg-surface-tertiary"
                      }`}
                    >
                      {s.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          <article className="flex-1 min-w-0 max-w-3xl">
            {intro && (
              <div className="mb-8 p-5 rounded-xl bg-accent/5 border border-accent/20 flex gap-4">
                <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-text-secondary leading-relaxed">{intro}</div>
              </div>
            )}

            <div className="space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 flex items-start gap-3">
                    <span className="text-accent font-mono text-base pt-0.5">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span>{s.title}</span>
                  </h2>
                  <div className="prose-policy text-sm sm:text-base text-text-secondary leading-relaxed space-y-3">
                    {s.content}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border-light text-xs text-text-muted">
              <p>
                Questions about this policy? Contact us at{" "}
                <a href="mailto:privacy@beaute.com" className="text-accent hover:underline">
                  privacy@beaute.com
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
