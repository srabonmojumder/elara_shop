import Image from "next/image";
import { promoBanners } from "@/data/mock";

export default function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {promoBanners.map((banner) => (
          <a
            key={banner.id}
            href={banner.href}
            className="group relative block overflow-hidden rounded-lg aspect-[2/1]"
          >
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm sm:text-base font-bold leading-snug">
                {banner.alt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
