import { quickCategories } from "@/data/mock";

export default function CategoryBar() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:pl-0 pl-[70px] flex items-center justify-center gap-2 sm:gap-3 py-3 overflow-x-auto scrollbar-none">
          {quickCategories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="shrink-0 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
