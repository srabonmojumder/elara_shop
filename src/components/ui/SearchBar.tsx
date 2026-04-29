"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className="w-full pl-11 pr-4 py-2.5 text-sm bg-surface-secondary border border-border rounded-full outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-text-primary placeholder:text-text-muted transition-all"
          />
        </div>
      </div>

      <button
        className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-surface lg:hidden animate-fade-in-up">
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Search className="w-5 h-5 text-text-muted shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products, brands..."
              className="flex-1 text-base outline-none bg-transparent text-text-primary"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-surface-tertiary cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-text-secondary">Popular searches:</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Skincare", "Retinol", "SPF", "Foundation", "Lip Gloss"].map(
                (term) => (
                  <span
                    key={term}
                    className="px-3 py-1.5 text-xs bg-surface-secondary rounded-full text-text-secondary cursor-pointer hover:bg-surface-tertiary"
                  >
                    {term}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
