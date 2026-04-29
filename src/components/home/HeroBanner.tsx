"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroSlides } from "@/data/mock";

export default function HeroBanner() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        speed={800}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-[16/7] sm:aspect-[16/5.5] lg:aspect-[16/5]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-lg">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3 lg:mb-4">
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-5 lg:mb-6 max-w-md">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.cta && (
                      <a
                        href={slide.ctaHref || "#"}
                        className="inline-block px-8 py-3 bg-accent text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors"
                      >
                        {slide.cta}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
