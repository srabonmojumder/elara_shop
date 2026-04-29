"use client";

import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/mock";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedIndex(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 z-[80] h-full w-[320px] max-w-[85vw] bg-surface shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-primary">
          <span className="text-lg font-bold text-white tracking-tight">Menu</span>
          <button
            onClick={onClose}
            className="p-1.5 text-white hover:text-white/70 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item, index) => (
            <div key={item.label} className="border-b border-border-light">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium transition-colors cursor-pointer ${
                      item.featured
                        ? "text-accent"
                        : expandedIndex === index
                        ? "text-accent bg-accent-light"
                        : "text-text-primary hover:bg-surface-secondary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="bg-surface-secondary pb-2">
                      {item.children.map((column) => (
                        <div key={column.title} className="px-5 pt-3">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-1.5">
                            {column.title}
                          </p>
                          {column.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={onClose}
                              className="block py-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block px-5 py-3.5 text-sm font-medium text-text-primary hover:bg-surface-secondary hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border bg-surface-secondary">
          <div className="flex gap-3">
            <a
              href="/account"
              className="flex-1 text-center py-2.5 text-xs font-semibold uppercase tracking-wider border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="flex-1 text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-accent hover:bg-accent-dark transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
