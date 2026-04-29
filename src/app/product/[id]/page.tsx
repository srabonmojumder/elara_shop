import { flashOffers, newArrivals, bestSellers } from "@/data/mock";
import ProductDetailClient from "./ProductDetailClient";

const allProducts = [...flashOffers, ...newArrivals, ...bestSellers];

export function generateStaticParams() {
  return allProducts.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const product = allProducts.find((p) => p.id === Number(id));
    return {
      title: product ? `${product.name} — Elara Shop` : "Product — Elara Shop",
      description: product
        ? `Shop ${product.brand} ${product.name} at Elara Shop.`
        : "Premium beauty product.",
    };
  });
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-text-secondary mb-6">
          The product you are looking for does not exist or has been removed.
        </p>
        <a href="/products" className="text-accent font-semibold hover:underline">
          Browse All Products
        </a>
      </div>
    );
  }

  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 10);

  return <ProductDetailClient product={product} relatedProducts={related} />;
}
