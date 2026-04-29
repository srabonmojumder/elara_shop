import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Elara Shop — Premium Beauty, Skincare & Fragrance",
    template: "%s — Elara Shop",
  },
  description:
    "Elara Shop is a premium beauty, skincare, makeup, and fragrance destination. Discover the world's most coveted brands with free shipping on orders over €49.",
  applicationName: "Elara Shop",
  keywords: [
    "Elara Shop",
    "beauty",
    "skincare",
    "makeup",
    "fragrance",
    "ecommerce",
    "online shop",
  ],
  authors: [{ name: "Elara Shop" }],
  creator: "Elara Shop",
  openGraph: {
    title: "Elara Shop — Premium Beauty, Skincare & Fragrance",
    description:
      "Discover premium beauty, skincare, makeup, and fragrances. Free shipping on orders over €49.",
    siteName: "Elara Shop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elara Shop — Premium Beauty, Skincare & Fragrance",
    description:
      "Discover premium beauty, skincare, makeup, and fragrances. Free shipping on orders over €49.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-surface text-text-primary transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <BackToTop />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
