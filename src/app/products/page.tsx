"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { newArrivals, bestSellers, flashOffers } from "@/data/mock";
import ProductCard from "@/components/product/ProductCard";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  Star,
  RotateCcw,
} from "lucide-react";

const allProducts = [...flashOffers, ...newArrivals, ...bestSellers];

const brands = [...new Set(allProducts.map((p) => p.brand))].sort();
const categories = ["All", "Women", "Men", "Footwear", "Bags", "Jewelry", "Home"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under 10 €", min: 0, max: 10 },
  { label: "10 – 25 €", min: 10, max: 25 },
  { label: "25 – 50 €", min: 25, max: 50 },
  { label: "50 – 100 €", min: 50, max: 100 },
  { label: "Over 100 €", min: 100, max: Infinity },
];
const ratingOptions = [4, 3, 2, 1];
const badgeOptions = ["All", "SALE", "NEW", "BEST SELLER", "EXCLUSIVE"];
type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export default function ProductsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedBadge, setSelectedBadge] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [expandedSection, setExpandedSection] = useState<string | null>("category");

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedBrands([]);
    setSelectedPriceRange(0);
    setSelectedRating(0);
    setSelectedBadge("All");
  };

  const activeFilterCount = [
    selectedCategory !== "All",
    selectedBrands.length > 0,
    selectedPriceRange !== 0,
    selectedRating > 0,
    selectedBadge !== "All",
  ].filter(Boolean).length;

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }
    const range = priceRanges[selectedPriceRange];
    if (range.min > 0 || range.max < Infinity) {
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }
    if (selectedRating > 0) {
      result = result.filter((p) => p.rating >= selectedRating);
    }
    if (selectedBadge !== "All") {
      result = result.filter((p) => p.badge === selectedBadge);
    }
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "newest": result.sort((a, b) => b.id - a.id); break;
    }
    return result;
  }, [selectedBrands, selectedPriceRange, selectedRating, selectedBadge, sortBy]);

  const FilterContent = () => (
    <div className="space-y-0">
      {/* Category */}
      <div className="border-b border-border">
        <button onClick={() => toggleSection("category")} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold cursor-pointer">
          Category
          <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${expandedSection === "category" ? "rotate-180" : ""}`} />
        </button>
        {expandedSection === "category" && (
          <div className="pb-4 space-y-1 animate-fade-in-up">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${selectedCategory === cat ? "bg-accent text-white font-medium" : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"}`}>
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b border-border">
        <button onClick={() => toggleSection("price")} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold cursor-pointer">
          Price Range
          <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${expandedSection === "price" ? "rotate-180" : ""}`} />
        </button>
        {expandedSection === "price" && (
          <div className="pb-4 space-y-1 animate-fade-in-up">
            {priceRanges.map((range, i) => (
              <button key={range.label} onClick={() => setSelectedPriceRange(i)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${selectedPriceRange === i ? "bg-accent text-white font-medium" : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"}`}>
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="border-b border-border">
        <button onClick={() => toggleSection("brand")} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold cursor-pointer">
          Brand
          {selectedBrands.length > 0 && (
            <span className="text-[10px] bg-accent text-white px-1.5 py-0.5 rounded-full mr-auto ml-2">{selectedBrands.length}</span>
          )}
          <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${expandedSection === "brand" ? "rotate-180" : ""}`} />
        </button>
        {expandedSection === "brand" && (
          <div className="pb-4 space-y-0.5 max-h-[240px] overflow-y-auto scrollbar-none animate-fade-in-up">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-surface-secondary cursor-pointer transition-colors">
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${selectedBrands.includes(brand) ? "bg-accent border-accent" : "border-border-dark"}`}>
                  {selectedBrands.includes(brand) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-text-secondary">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="border-b border-border">
        <button onClick={() => toggleSection("rating")} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold cursor-pointer">
          Rating
          <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${expandedSection === "rating" ? "rotate-180" : ""}`} />
        </button>
        {expandedSection === "rating" && (
          <div className="pb-4 space-y-1 animate-fade-in-up">
            <button onClick={() => setSelectedRating(0)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${selectedRating === 0 ? "bg-accent text-white font-medium" : "text-text-secondary hover:bg-surface-secondary"}`}>
              All Ratings
            </button>
            {ratingOptions.map((r) => (
              <button key={r} onClick={() => setSelectedRating(r)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${selectedRating === r ? "bg-accent text-white font-medium" : "text-text-secondary hover:bg-surface-secondary"}`}>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < r ? "fill-warning text-warning" : "fill-border text-border"}`} />
                  ))}
                </div>
                <span>& up</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Badge */}
      <div>
        <button onClick={() => toggleSection("badge")} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold cursor-pointer">
          Status
          <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${expandedSection === "badge" ? "rotate-180" : ""}`} />
        </button>
        {expandedSection === "badge" && (
          <div className="pb-4 flex flex-wrap gap-2 animate-fade-in-up">
            {badgeOptions.map((badge) => (
              <button key={badge} onClick={() => setSelectedBadge(badge)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors cursor-pointer ${selectedBadge === badge ? "bg-accent text-white border-accent" : "border-border text-text-secondary hover:border-accent hover:text-accent"}`}>
                {badge}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Header */}
        <div className="mb-6">
          <nav className="text-xs text-text-muted mb-3">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">All Products</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-sm text-text-secondary mt-1">{filtered.length} of {allProducts.length} products</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className={`lg:hidden flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider border rounded-lg transition-colors cursor-pointer ${
                activeFilterCount > 0 ? "border-accent text-accent bg-accent-light" : "border-border hover:border-primary"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-accent text-white rounded-full">{activeFilterCount}</span>
              )}
            </button>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-text-muted hover:text-accent transition-colors cursor-pointer">
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Clear all</span>
              </button>
            )}
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-xs sm:text-sm text-text-secondary border border-border rounded-lg px-2 sm:px-3 py-2 outline-none focus:border-accent cursor-pointer bg-surface">
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Active filter pills */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-5 animate-fade-in-up">
            {selectedCategory !== "All" && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border rounded-full">
                {selectedCategory}
                <button onClick={() => setSelectedCategory("All")} className="hover:text-accent cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedBrands.map((brand) => (
              <span key={brand} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border rounded-full">
                {brand}
                <button onClick={() => toggleBrand(brand)} className="hover:text-accent cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            ))}
            {selectedPriceRange !== 0 && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border rounded-full">
                {priceRanges[selectedPriceRange].label}
                <button onClick={() => setSelectedPriceRange(0)} className="hover:text-accent cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedRating > 0 && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border rounded-full">
                {selectedRating}★ & up
                <button onClick={() => setSelectedRating(0)} className="hover:text-accent cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedBadge !== "All" && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-surface-secondary border border-border rounded-full">
                {selectedBadge}
                <button onClick={() => setSelectedBadge("All")} className="hover:text-accent cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
          </div>
        )}

        {/* Main layout */}
        <div className="flex gap-6 lg:gap-8">
          {/* Desktop Sidebar — sticky */}
          <aside className="hidden lg:block w-[240px] xl:w-[260px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wider">Filters</h2>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-accent font-medium hover:underline cursor-pointer">Clear all</button>
                )}
              </div>
              <div className="max-h-[calc(100vh-160px)] overflow-y-auto scrollbar-none pr-1">
                <FilterContent />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg font-semibold text-text-primary mb-2">No products found</p>
                <p className="text-sm text-text-secondary mb-6">Try adjusting your filters to find what you&apos;re looking for.</p>
                <button onClick={clearFilters} className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors cursor-pointer">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Filter Drawer ── */}
      <div className={`fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300 lg:hidden ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setDrawerOpen(false)} />

      <div className={`fixed top-0 left-0 z-[100] h-full w-[320px] max-w-[85vw] bg-surface shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-accent" />
            <h2 className="text-sm font-bold uppercase tracking-wider">Filters</h2>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-accent text-white rounded-full">{activeFilterCount}</span>
            )}
          </div>
          <button onClick={() => setDrawerOpen(false)} className="p-1.5 text-text-muted hover:text-text-primary transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer body — scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-2">
          <FilterContent />
        </div>

        {/* Drawer footer — sticky bottom */}
        <div className="px-5 py-4 border-t border-border shrink-0 bg-surface">
          <div className="flex gap-3">
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider border border-border rounded-lg text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer">
                Clear All
              </button>
            )}
            <button onClick={() => setDrawerOpen(false)} className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors cursor-pointer">
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
