"use client";

import Image from "next/image";
import { ShoppingBag, Heart, Star, Check } from "lucide-react";
import type { Product } from "@/data/mock";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative flex flex-col w-full bg-surface border border-border-light hover:border-border hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-surface-secondary">
        <a href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Top row: badge left, wishlist right */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-1.5 sm:p-2 z-10">
          <div className="flex flex-col gap-1">
            {product.badge && <Badge label={product.badge} />}
            {discount && (
              <span className="inline-block px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-accent bg-surface border border-accent rounded-sm w-fit">
                -{discount}%
              </span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
            className={`p-1 sm:p-1.5 rounded-full transition-all cursor-pointer shrink-0 ${
              inWishlist
                ? "text-accent bg-accent-light"
                : "text-text-muted bg-surface/80 hover:text-accent hover:bg-accent-light"
            }`}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${inWishlist ? "fill-accent" : ""}`} />
          </button>
        </div>

        {/* Desktop hover add-to-cart */}
        <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden xl:block">
          <button
            onClick={() => addToCart(product)}
            className={`w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase tracking-wider  transition-colors cursor-pointer ${
              inCart ? "bg-success text-white" : "bg-primary text-white hover:bg-accent"
            }`}
          >
            {inCart ? <><Check className="w-3.5 h-3.5" /> In Cart</> : <><ShoppingBag className="w-3.5 h-3.5" /> Add to Cart</>}
          </button>
        </div>
      </div>

      {/* Info */}
      <a href={`/product/${product.id}`} className="flex flex-col flex-1 p-2 sm:p-3">
        <p className="text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
          {product.brand}
        </p>
        <h3 className="text-[11px] sm:text-sm leading-tight sm:leading-snug text-text-primary line-clamp-2 mb-1.5 sm:mb-2 flex-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-1.5 sm:mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                i < Math.floor(product.rating) ? "fill-warning text-warning" : "fill-border text-border"
              }`}
            />
          ))}
          <span className="text-[9px] sm:text-[10px] text-text-muted ml-0.5 sm:ml-1">
            ({product.reviewCount >= 1000 ? `${(product.reviewCount / 1000).toFixed(1)}k` : product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          {product.originalPrice && (
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] sm:text-xs text-text-muted line-through">
                {product.originalPrice.toFixed(2)} €
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-accent">
                (-{discount}%)
              </span>
            </div>
          )}
          <span className="text-sm sm:text-base font-bold text-text-primary">
            {product.price.toFixed(2)} €
          </span>
        </div>
      </a>

      {/* Mobile add-to-cart */}
      <div className="xl:hidden px-2 pb-2 sm:px-3 sm:pb-3 pt-0">
        <button
          onClick={() => addToCart(product)}
          className={`w-full flex items-center justify-center gap-1.5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider  transition-colors cursor-pointer ${
            inCart ? "bg-success text-white" : "bg-primary text-white hover:bg-accent"
          }`}
        >
          {inCart ? <><Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> In Cart</> : <><ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Add to Cart</>}
        </button>
      </div>
    </div>
  );
}
