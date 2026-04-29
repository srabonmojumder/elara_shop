"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQ {
  q: string;
  a: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQ[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className={`divide-y divide-border-light border-y border-border-light ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                {item.q}
              </span>
              <span className="shrink-0 w-8 h-8 rounded-full bg-surface-tertiary flex items-center justify-center text-text-secondary group-hover:bg-accent group-hover:text-white transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-text-secondary leading-relaxed max-w-2xl pr-12">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
