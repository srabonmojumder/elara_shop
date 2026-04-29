"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING_THRESHOLD = 49;

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const shippingCost = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 4.99;
  const remaining = FREE_SHIPPING_THRESHOLD - totalPrice;
  const shippingProgress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface-secondary flex items-center justify-center">
          <ShoppingBag className="w-8 h-8 text-text-muted" />
        </div>
        <h1 className="text-2xl font-bold mb-3">Your Cart is Empty</h1>
        <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
          Looks like you haven&apos;t added anything to your cart yet.
          Browse our collection and find something you love.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors"
        >
          Start Shopping
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
        <span className="text-text-primary">Shopping Cart</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Shopping Cart <span className="text-text-muted font-normal text-lg">({totalItems})</span>
        </h1>
        <button
          onClick={clearCart}
          className="text-xs font-medium text-text-muted hover:text-accent transition-colors cursor-pointer uppercase tracking-wider"
        >
          Clear All
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-0">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-border text-xs font-bold text-text-muted uppercase tracking-wider">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {items.map(({ product, quantity }) => {
            const lineTotal = product.price * quantity;
            return (
              <div
                key={product.id}
                className="grid grid-cols-12 gap-4 py-5 border-b border-border-light items-center animate-fade-in-up"
              >
                <div className="col-span-12 md:col-span-6 flex gap-4">
                  <a
                    href={`/product/${product.id}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-surface-secondary rounded overflow-hidden shrink-0 border border-border-light"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </a>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                      {product.brand}
                    </p>
                    <a
                      href={`/product/${product.id}`}
                      className="text-sm font-medium text-text-primary hover:text-accent transition-colors line-clamp-2"
                    >
                      {product.name}
                    </a>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mt-2 flex items-center gap-1 text-[11px] text-text-muted hover:text-accent transition-colors cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2 text-center">
                  <span className="md:hidden text-[10px] text-text-muted uppercase block mb-1">Price</span>
                  <span className="text-sm font-medium">{product.price.toFixed(2)} €</span>
                  {product.originalPrice && (
                    <span className="block text-xs text-text-muted line-through">
                      {product.originalPrice.toFixed(2)} €
                    </span>
                  )}
                </div>

                <div className="col-span-4 md:col-span-2 flex justify-center">
                  <div className="flex items-center border border-border rounded">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-1.5 hover:bg-surface-secondary transition-colors cursor-pointer"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-1.5 hover:bg-surface-secondary transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2 text-right">
                  <span className="md:hidden text-[10px] text-text-muted uppercase block mb-1">Total</span>
                  <span className="text-sm font-bold">{lineTotal.toFixed(2)} €</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-surface-secondary border border-border-light rounded-lg p-5 sticky top-32">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-5">
              Order Summary
            </h2>

            <div className="mb-4 p-3 bg-surface rounded border border-border-light">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-text-muted" />
                {remaining > 0 ? (
                  <span className="text-xs text-text-secondary">
                    Add <strong className="text-accent">{remaining.toFixed(2)} €</strong> more for free shipping
                  </span>
                ) : (
                  <span className="text-xs text-success font-medium">
                    You qualify for free shipping!
                  </span>
                )}
              </div>
              <div className="w-full h-1.5 bg-border-light rounded-full overflow-hidden">
                <div
                  className="h-full bg-success rounded-full transition-all duration-500"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            <div className="space-y-3 text-sm mb-5">
              <div className="flex justify-between">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium">{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Shipping</span>
                <span className={`font-medium ${shippingCost === 0 ? "text-success" : ""}`}>
                  {shippingCost === 0 ? "FREE" : `${shippingCost.toFixed(2)} €`}
                </span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-extrabold text-lg">
                  {(totalPrice + shippingCost).toFixed(2)} €
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors text-center mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="block text-center text-xs font-medium text-text-secondary hover:text-accent transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
