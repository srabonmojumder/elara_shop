import type { Metadata } from "next";
import { flashOffers, newArrivals, bestSellers } from "@/data/mock";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryBar from "@/components/home/CategoryBar";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import ProductCarousel from "@/components/home/ProductCarousel";
import PromoBanners from "@/components/home/PromoBanners";
import PromoBanner from "@/components/home/PromoBanner";
import BrandShowcase from "@/components/home/BrandShowcase";
import NewsletterStrip from "@/components/layout/NewsletterStrip";

export const metadata: Metadata = {
  title: "Elara Shop — Premium Fashion, Footwear & Lifestyle",
  description:
    "Discover quietly luxurious fashion, footwear, accessories, and home pieces. Free shipping on orders over €49. New arrivals weekly.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryBar />
      <ProductCarousel
        title="Flash Offers"
        products={flashOffers}
        viewAllHref="/offers/flash"
      />
      <PromoBanners />
      <BrandShowcase />
      <ProductCarousel
        title="New Arrivals"
        products={newArrivals}
        viewAllHref="/products?sort=newest"
      />
      <PromoBanner />
      <ProductCarousel
        title="Best Sellers"
        products={bestSellers}
        viewAllHref="/products?sort=bestselling"
        bgClass="bg-surface-secondary"
      />
      <CategoryShowcase />
      <NewsletterStrip />
    </>
  );
}
