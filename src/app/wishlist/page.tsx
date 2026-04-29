"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, X, ArrowRight, Star, Check } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface-secondary flex items-center justify-center">
          <Heart className="w-8 h-8 text-text-muted" />
        </div>
        <h1 className="text-2xl font-bold mb-3">Your Wishlist is Empty</h1>
        <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
          Save your favorite products here so you can easily find them later.
          Start browsing and tap the heart icon on any product.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors"
        >
          Explore Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <nav className="text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-text-primary">Wishlist</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        My Wishlist <span className="text-text-muted font-normal text-lg">({items.length})</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((product) => {
          const inCart = isInCart(product.id);
          const discount = product.originalPrice
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : null;

          return (
            <div
              key={product.id}
              className="relative bg-surface border border-border-light  overflow-hidden hover:shadow-md transition-all animate-fade-in-up"
            >
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-surface/90 rounded-full text-text-muted hover:text-accent hover:bg-accent-light transition-colors cursor-pointer"
                aria-label="Remove from wishlist"
              >
                <X className="w-4 h-4" />
              </button>

              <a href={`/product/${product.id}`} className="block">
                <div className="relative aspect-square bg-surface-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${
                          product.badge === "SALE"
                            ? "bg-accent"
                            : product.badge === "BEST SELLER"
                            ? "bg-success"
                            : product.badge === "EXCLUSIVE"
                            ? "bg-violet-600"
                            : "bg-primary"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
              </a>

              <div className="p-4">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <a
                  href={`/product/${product.id}`}
                  className="block text-sm font-medium text-text-primary hover:text-accent transition-colors line-clamp-2 mb-2 min-h-[2.5em]"
                >
                  {product.name}
                </a>

                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "fill-warning text-warning"
                          : "fill-border text-border"
                      }`}
                    />
                  ))}
                  <span className="text-[10px] text-text-muted ml-1">
                    ({product.reviewCount.toLocaleString()})
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-base font-bold text-text-primary">
                    {product.price.toFixed(2)} €
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xs text-text-muted line-through">
                        {product.originalPrice.toFixed(2)} €
                      </span>
                      <span className="text-xs font-bold text-accent">-{discount}%</span>
                    </>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    inCart
                      ? "bg-success text-white"
                      : "bg-primary text-white hover:bg-accent"
                  }`}
                >
                  {inCart ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
