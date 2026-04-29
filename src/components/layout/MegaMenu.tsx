"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/mock";

export default function MegaMenu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveIndex(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav ref={navRef} className="hidden lg:block border-t border-border bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={handleLeave}
            >
              <a
                href={item.href}
                className={`relative flex items-center gap-1.5 px-3 xl:px-4 py-3 text-xs xl:text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                  activeIndex === index
                    ? "text-accent"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                {item.featured && (
                  <span
                    className={`relative flex w-1.5 h-1.5 ${
                      activeIndex === index ? "opacity-0" : ""
                    }`}
                    aria-hidden
                  >
                    <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                )}
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}
                <span
                  aria-hidden
                  className={`absolute left-3 right-3 xl:left-4 xl:right-4 bottom-0 h-0.5 bg-accent rounded-full transition-transform duration-200 origin-center ${
                    activeIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>

              {item.children && activeIndex === index && (
                <div
                  className="absolute top-full left-0 min-w-[600px] bg-surface shadow-xl border border-border z-50 animate-fade-in-up"
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={handleLeave}
                >
                  <div className="grid grid-cols-3 gap-0 p-6">
                    {item.children.map((column) => (
                      <div key={column.title} className="pr-6">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-3 pb-2 border-b border-border">
                          {column.title}
                        </h3>
                        <ul className="space-y-1.5">
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                className="block text-sm text-text-secondary hover:text-accent transition-colors py-0.5"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
