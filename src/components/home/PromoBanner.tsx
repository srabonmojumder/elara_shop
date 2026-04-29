import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="relative overflow-hidden rounded-lg">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
            <Image
              src="/images/promo/promo-split.jpg"
              alt="Limited time offer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-accent-light p-8 md:p-12 lg:p-16">
            <span className="inline-block w-fit px-3 py-1 text-[10px] font-bold text-accent bg-white uppercase tracking-wider mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight mb-3">
              Up to 40% Off Premium Skincare
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Treat your skin to luxury. Shop our exclusive selection of
              dermatologist-recommended products at unbeatable prices.
            </p>
            <div>
              <Button variant="accent" size="lg">
                Shop the Sale
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
