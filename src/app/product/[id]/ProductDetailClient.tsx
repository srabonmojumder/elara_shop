"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  Star,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  Check,
  ZoomIn,
  X,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Product } from "@/data/mock";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ProductCarousel from "@/components/home/ProductCarousel";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

const totalImages = 16;

function getGalleryImages(productId: number): string[] {
  const base = ((productId - 1) % totalImages) + 1;
  const indices: number[] = [];
  for (let i = 0; i < 5; i++) {
    indices.push(((base - 1 + i * 3) % totalImages) + 1);
  }
  return indices.map((i) => `/images/products/product-${String(i).padStart(2, "0")}.jpg`);
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "materials" | "reviews">("description");
  const swiperRef = useRef<SwiperType | null>(null);

  // Hover zoom state (desktop)
  const [hoverZoom, setHoverZoom] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 50, y: 50 });

  // Fullscreen lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;
  const images = getGalleryImages(product.id);

  const goToSlide = (i: number) => {
    setActiveIndex(i);
    swiperRef.current?.slideTo(i);
  };

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const lightboxPrev = () => setLightboxIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const lightboxNext = () => setLightboxIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  const handleHoverMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
        <nav className="text-xs text-text-muted mb-3 sm:mb-4 md:mb-6 hidden sm:block">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-accent transition-colors">Products</a>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

          {/* ── LEFT: Image Gallery ── */}
          <div>
            {/* Main Swiper */}
            <div className="relative rounded-xl overflow-hidden border border-border-light bg-surface-secondary group">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                onSwiper={(s) => { swiperRef.current = s; }}
                slidesPerView={1}
                className="aspect-square"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="relative w-full h-full cursor-zoom-in"
                      onClick={() => openLightbox(i)}
                      onMouseEnter={() => setHoverZoom(true)}
                      onMouseLeave={() => setHoverZoom(false)}
                      onMouseMove={handleHoverMove}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - View ${i + 1}`}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={`object-cover transition-transform duration-200 ${
                          hoverZoom && activeIndex === i ? "scale-150" : "scale-100"
                        }`}
                        style={
                          hoverZoom && activeIndex === i
                            ? { transformOrigin: `${hoverPos.x}% ${hoverPos.y}%` }
                            : undefined
                        }
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
                  <span className={`inline-block px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white rounded ${
                    product.badge === "SALE" ? "bg-accent"
                    : product.badge === "BEST SELLER" ? "bg-success"
                    : product.badge === "EXCLUSIVE" ? "bg-violet-600"
                    : "bg-primary"
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Discount */}
              {discount && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 pointer-events-none">
                  <span className="inline-block px-2 py-1 text-[10px] sm:text-xs font-bold text-white bg-accent rounded">
                    -{discount}%
                  </span>
                </div>
              )}

              {/* Counter */}
              <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 bg-primary/60 text-white text-[11px] font-medium rounded-full backdrop-blur-sm pointer-events-none">
                {activeIndex + 1} / {images.length}
              </div>

              {/* Zoom hint */}
              <div className="absolute bottom-3 right-3 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-primary/60 text-white text-[11px] font-medium rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <ZoomIn className="w-3 h-3" />
                Click to zoom
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-none pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`relative w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                    activeIndex === i
                      ? "border-accent shadow-md ring-1 ring-accent/30"
                      : "border-border-light hover:border-border"
                  }`}
                >
                  <Image src={img} alt={`Thumb ${i + 1}`} fill sizes="72px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center justify-between mb-1.5">
                <a href={`/brands/${product.brand.toLowerCase().replace(/\s+/g, "-")}`} className="text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider hover:underline">
                  {product.brand}
                </a>
                <button className="p-1.5 text-text-muted hover:text-text-primary transition-colors cursor-pointer" aria-label="Share">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary leading-tight mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? "fill-warning text-warning" : "fill-border text-border"}`} />
                  ))}
                </div>
                <button onClick={() => setActiveTab("reviews")} className="text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors cursor-pointer">
                  {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                </button>
              </div>

              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-text-primary">{product.price.toFixed(2)} €</span>
                {product.originalPrice && (
                  <span className="text-base sm:text-lg text-text-muted line-through">{product.originalPrice.toFixed(2)} €</span>
                )}
              </div>
              {discount ? (
                <p className="text-xs sm:text-sm font-semibold text-accent mt-1 mb-5">
                  You save {((product.originalPrice || 0) - product.price).toFixed(2)} € ({discount}%)
                </p>
              ) : <div className="mb-5" />}

              <div className="h-px bg-border mb-5" />

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                Discover the considered craft of {product.brand}&apos;s {product.name}.
                Cut from premium materials and finished with care, this piece is built
                to wear well, season after season.
              </p>

              <div className="flex items-stretch gap-2 sm:gap-3 mb-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2.5 sm:px-3 py-2.5 sm:py-3 hover:bg-surface-secondary transition-colors cursor-pointer disabled:opacity-30" disabled={quantity <= 1}>
                    <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <span className="w-8 sm:w-10 text-center text-sm font-semibold select-none">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-2.5 sm:px-3 py-2.5 sm:py-3 hover:bg-surface-secondary transition-colors cursor-pointer">
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${inCart ? "bg-success text-white" : "bg-accent text-white hover:bg-accent-dark active:scale-[0.98]"}`}
                >
                  {inCart ? <><Check className="w-4 h-4" /> Added to Cart</> : <><ShoppingBag className="w-4 h-4" /> Add to Cart</>}
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg border transition-all cursor-pointer ${inWishlist ? "border-accent bg-accent-light text-accent" : "border-border text-text-secondary hover:border-accent hover:text-accent"}`}
                  aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? "fill-accent" : ""}`} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 py-4 sm:py-5 mt-2 bg-surface-secondary rounded-xl px-3 sm:px-4">
                {[
                  { icon: Truck, label: "Free Shipping", sub: "Orders 49€+" },
                  { icon: RotateCcw, label: "Easy Returns", sub: "30 days" },
                  { icon: Shield, label: "Authentic", sub: "100% genuine" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface flex items-center justify-center border border-border-light">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-text-primary leading-tight">{label}</span>
                    <span className="text-[9px] sm:text-[10px] text-text-muted">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="flex border-b border-border overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {(["description", "materials", "reviews"] as const).map((tab) => {
              const label =
                tab === "reviews"
                  ? `Reviews (${product.reviewCount >= 1000 ? `${(product.reviewCount / 1000).toFixed(1)}k` : product.reviewCount})`
                  : tab === "materials"
                  ? "Materials & Care"
                  : "Description";
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer border-b-2 -mb-px whitespace-nowrap ${
                    activeTab === tab ? "border-accent text-accent" : "border-transparent text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="py-6 sm:py-8">
            {activeTab === "description" && (
              <div className="max-w-3xl text-xs sm:text-sm text-text-secondary leading-relaxed space-y-3 sm:space-y-4 animate-fade-in-up">
                <p>Introducing {product.name} by {product.brand} — a piece designed to slip seamlessly into the wardrobe you already love. Cut, sewn, and finished by hand, every detail has been considered to feel as good as it looks.</p>
                <p>Worn solo or layered, the silhouette is clean and forgiving — built to flatter without trying too hard. The kind of piece you reach for again and again.</p>
                <h3 className="text-sm sm:text-base font-bold text-text-primary !mt-5 sm:!mt-6">Fit &amp; Sizing</h3>
                <p>True to size with a relaxed, easy fit. If you&apos;re between sizes, we recommend sizing down for a closer fit or up for a more oversized silhouette. Model is 5&apos;9&quot; / 175cm and wears size S.</p>
              </div>
            )}
            {activeTab === "materials" && (
              <div className="max-w-3xl text-xs sm:text-sm text-text-secondary leading-relaxed animate-fade-in-up">
                <p className="mb-3 sm:mb-4">Considered craft, considered materials. Here&apos;s what&apos;s inside:</p>
                <ul className="space-y-2 sm:space-y-2.5">
                  {[
                    { name: "Premium Materials", desc: "Sourced from accredited mills in Italy and Portugal" },
                    { name: "Hand-Finished", desc: "Final detailing by skilled artisans" },
                    { name: "OEKO-TEX Certified", desc: "Tested for harmful substances at every stage" },
                    { name: "Care Instructions", desc: "Cool gentle wash or dry clean — see garment label" },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-2 sm:gap-2.5">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success shrink-0 mt-0.5" />
                      <span><strong className="text-text-primary">{item.name}</strong> — {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 sm:mt-5 text-[10px] sm:text-xs text-text-muted">Made under fair-labor standards. Packaging is 100% recyclable. Designed to last well beyond the season.</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="max-w-3xl animate-fade-in-up">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 p-4 sm:p-5 bg-surface-secondary rounded-xl border border-border-light">
                  <div className="text-center shrink-0">
                    <span className="text-3xl sm:text-4xl font-extrabold text-text-primary">{product.rating}</span>
                    <div className="flex items-center gap-0.5 mt-1.5 justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? "fill-warning text-warning" : "fill-border text-border"}`} />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-text-muted mt-1 block">{product.reviewCount.toLocaleString()} reviews</span>
                  </div>
                  <div className="flex-1 space-y-1.5 w-full">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pct = star === 5 ? 65 : star === 4 ? 22 : star === 3 ? 8 : star === 2 ? 3 : 2;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs text-text-muted w-3">{star}</span>
                          <Star className="w-3 h-3 fill-warning text-warning" />
                          <div className="flex-1 h-1.5 sm:h-2 bg-border-light rounded-full overflow-hidden">
                            <div className="h-full bg-warning rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-[10px] sm:text-xs text-text-muted w-8">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {[
                  { name: "Sophie L.", date: "2 days ago", rating: 5, text: "Beautifully made — the fabric is even nicer than the photos suggest. Fits exactly as described and I've been wearing it on repeat." },
                  { name: "Maria G.", date: "1 week ago", rating: 4, text: "Great quality and lovely cut. Took one star off only because the colour reads slightly warmer in person. Still happy I bought it." },
                  { name: "Emma R.", date: "2 weeks ago", rating: 5, text: "My third purchase from Elara Shop and they keep getting it right. Quietly luxurious without trying too hard." },
                ].map((review, i) => (
                  <div key={i} className="py-4 sm:py-5 border-b border-border-light last:border-none">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/10 flex items-center justify-center text-[10px] sm:text-xs font-bold text-accent">{review.name.charAt(0)}</div>
                        <div>
                          <span className="text-xs sm:text-sm font-medium text-text-primary block">{review.name}</span>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${j < review.rating ? "fill-warning text-warning" : "fill-border text-border"}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs text-text-muted">{review.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed ml-10 sm:ml-[46px]">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductCarousel title="You May Also Like" products={relatedProducts} viewAllHref="/products" />

      {/* ── Fullscreen Lightbox/Zoom Modal ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col animate-fade-in-up">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0">
            <span className="text-white/70 text-sm font-medium">
              {lightboxIndex + 1} / {images.length}
            </span>
            <button
              onClick={closeLightbox}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image area */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-16 relative min-h-0">
            {/* Prev */}
            <button
              onClick={lightboxPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full max-w-3xl aspect-square mx-auto">
              <Image
                src={images[lightboxIndex]}
                alt={`${product.name} - Zoom view ${lightboxIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next */}
            <button
              onClick={lightboxNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom thumbnails */}
          <div className="flex items-center justify-center gap-2 px-4 py-3 shrink-0">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                  lightboxIndex === i
                    ? "border-white shadow-lg"
                    : "border-white/20 opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img} alt={`Thumb ${i + 1}`} fill sizes="56px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
