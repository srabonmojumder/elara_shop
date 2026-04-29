"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Zap, Clock, ArrowRight, Bell } from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";

const flashDeals = [
  { name: "Velvet Matte Lipstick", brand: "Charlotte Tilbury", price: 19.99, original: 38.0, sold: 342, total: 500, image: "/images/products/product-01.jpg" },
  { name: "Vitamin C Serum", brand: "The Ordinary", price: 8.99, original: 17.9, sold: 578, total: 800, image: "/images/products/product-02.jpg" },
  { name: "Hydrating Foundation", brand: "NARS", price: 32.5, original: 55.0, sold: 198, total: 400, image: "/images/products/product-03.jpg" },
  { name: "Repair Mask", brand: "Olaplex", price: 18.0, original: 30.0, sold: 487, total: 600, image: "/images/products/product-04.jpg" },
  { name: "Rose Cream", brand: "Fresh", price: 29.99, original: 55.0, sold: 89, total: 250, image: "/images/products/product-05.jpg" },
  { name: "Eau de Parfum 50ml", brand: "Byredo", price: 99.0, original: 175.0, sold: 112, total: 200, image: "/images/products/product-06.jpg" },
  { name: "Lash Volume Mascara", brand: "Benefit", price: 14.99, original: 28.0, sold: 623, total: 700, image: "/images/products/product-07.jpg" },
  { name: "Eye Contour Cream", brand: "La Mer", price: 89.0, original: 165.0, sold: 76, total: 150, image: "/images/products/product-08.jpg" },
];

function useCountdown() {
  const [time, setTime] = useState({ h: 12, m: 34, s: 56 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) {
          s = 59;
          m--;
          if (m < 0) {
            m = 59;
            h--;
            if (h < 0) {
              h = 23;
            }
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-2xl sm:text-3xl md:text-5xl font-extrabold tabular-nums bg-primary text-white px-2.5 sm:px-3 md:px-5 py-2 md:py-3 rounded-lg min-w-[48px] sm:min-w-[60px] md:min-w-[96px] text-center">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-text-muted mt-2">
        {label}
      </span>
    </div>
  );
}

export default function FlashDealsPage() {
  const time = useCountdown();

  return (
    <div>
      <PageHeader
        eyebrow="Live now · Flash deals"
        title="Flash deals"
        description="24 hours only. Once they're gone, they're gone. Fresh drops every day at midnight CET."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Offers", href: "/offers" }, { label: "Flash Deals" }]}
        variant="hero"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-6 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/80 mb-4">
            <Clock className="w-4 h-4" />
            Next drop in
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <TimeBlock value={time.h} label="Hours" />
            <span className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white/50">:</span>
            <TimeBlock value={time.m} label="Minutes" />
            <span className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white/50">:</span>
            <TimeBlock value={time.s} label="Seconds" />
          </div>
          <p className="text-sm text-white/80 mt-6 max-w-md mx-auto">
            New flash deals drop at midnight CET. Turn on notifications so you don't miss a thing.
          </p>
          <button className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-white text-accent text-xs font-semibold uppercase tracking-wider hover:bg-surface-tertiary transition-colors rounded-full cursor-pointer">
            <Bell className="w-3.5 h-3.5" />
            Notify me
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Today's picks"
          title={`${flashDeals.length} products at rock-bottom prices`}
          description="These are all below dealer cost. Maximum 2 per customer."
        />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {flashDeals.map((d) => {
            const discount = Math.round(((d.original - d.price) / d.original) * 100);
            const progress = Math.round((d.sold / d.total) * 100);
            const almostGone = progress >= 75;
            return (
              <article
                key={d.name}
                className="group relative bg-surface border border-border  overflow-hidden hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square bg-surface-tertiary overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    <Zap className="w-3 h-3" />
                    -{discount}%
                  </span>
                  {almostGone && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-white/95 backdrop-blur text-accent text-[10px] font-bold uppercase tracking-wider rounded">
                      Almost gone
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">
                    {d.brand}
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary line-clamp-2 min-h-[2.5rem] mb-2">
                    {d.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-extrabold text-accent">€{d.price.toFixed(2)}</span>
                    <span className="text-xs text-text-muted line-through">
                      €{d.original.toFixed(2)}
                    </span>
                  </div>

                  <div>
                    <div className="h-1.5 bg-surface-tertiary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          almostGone ? "bg-accent" : "bg-success"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-text-muted mt-1.5 flex items-center justify-between">
                      <span>{d.sold} sold</span>
                      <span>{d.total - d.sold} left</span>
                    </p>
                  </div>

                  <button className="mt-4 w-full py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-light transition-colors  cursor-pointer flex items-center justify-center gap-1.5">
                    Grab now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
