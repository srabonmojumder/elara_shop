"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Product } from "@/data/mock";
import ProductCard from "@/components/product/ProductCard";
import { ArrowRight } from "lucide-react";

interface ProductCarouselProps {
  title: string;
  products: Product[];
  viewAllHref?: string;
  bgClass?: string;
}

export default function ProductCarousel({
  title,
  products,
  viewAllHref,
  bgClass = "",
}: ProductCarouselProps) {
  return (
    <section className={bgClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group"
            >
              View All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={12}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 16 },
          }}
          className="!pb-2"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {viewAllHref && (
          <div className="sm:hidden mt-4 text-center">
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
