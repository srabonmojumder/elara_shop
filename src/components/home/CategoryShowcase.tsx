import Image from "next/image";
import { categories } from "@/data/mock";

export default function CategoryShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
        Top Categories
      </h2>

      <div className="flex gap-3 lg:gap-5 overflow-x-auto scrollbar-none pb-2">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/category/${category.slug}`}
            className="group relative shrink-0 w-[45%] sm:w-[30%] md:w-[calc(100%/6-14px)] overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[9/11]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5">
                <h3 className="text-white font-bold text-sm sm:text-base text-center px-2">
                  {category.name}
                </h3>
                <span className="text-white/60 text-[11px] mt-1">
                  {category.count} products
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
