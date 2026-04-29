"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { brands } from "@/data/mock";
import { ArrowRight } from "lucide-react";

export default function BrandShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold">Top Brands</h2>
        <a
          href="/brands"
          className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group"
        >
          View All Brands
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 6, spaceBetween: 20 },
        }}
        loop
        className="!pb-2"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <a
              href={brand.href}
              className="group block border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-md transition-all"
            >
              <div className="relative aspect-[5/2] bg-surface-secondary">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-2 text-center">
                <span className="text-xs font-semibold text-text-primary">
                  {brand.name}
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
