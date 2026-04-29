"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, User, Heart, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import SearchBar from "@/components/ui/SearchBar";
import IconButton from "@/components/ui/IconButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
import AnnouncementBar from "./AnnouncementBar";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems: cartCount } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <AnnouncementBar />

        <div className="bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 lg:h-16">
              <div className="flex items-center gap-2">
                <button
                  className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>

                <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Elara Shop — Home">
                  <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm">E</span>
                  </div>
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-text-primary">
                    Elara Shop
                  </span>
                </a>
              </div>

              <SearchBar />

              <div className="flex items-center gap-0.5 sm:gap-1">
                <ThemeToggle />
                <a href="/account" className="hidden sm:block">
                  <IconButton aria-label="Account">
                    <User className="w-5 h-5" />
                  </IconButton>
                </a>
                <a href="/wishlist">
                  <IconButton badge={wishlistCount} aria-label="Wishlist">
                    <Heart className="w-5 h-5" />
                  </IconButton>
                </a>
                <a href="/cart">
                  <IconButton badge={cartCount} aria-label="Cart">
                    <ShoppingBag className="w-5 h-5" />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>

        <MegaMenu />
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
