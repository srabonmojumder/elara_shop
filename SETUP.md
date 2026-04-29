# BEAUTÉ — eCommerce Template Setup & Documentation

## Overview

A premium eCommerce template built with **Next.js 15** (App Router) and **Tailwind CSS 4**, inspired by the design language of [Primor.eu](https://www.primor.eu/es_es/) and [LookFantastic.it](https://www.lookfantastic.it/). This template reproduces their visual patterns: dark sticky header, mega menu navigation, Swiper-powered carousels, product cards with hover-reveal add-to-cart, category showcases, promotional banners, multi-column footer with mobile accordion, **dark/light mode**, **functional cart**, **wishlist**, and **product detail pages**.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero carousel, category bar, flash offers, promo banners, brands, new arrivals, best sellers, newsletter |
| `/products` | Product Listing | Grid view with filters, sort dropdown, pagination, grid/list toggle |
| `/product/[id]` | Product Detail | Full product page with image gallery, description/ingredients/reviews tabs, quantity selector, add to cart, wishlist, related products carousel |
| `/cart` | Shopping Cart | Line items with quantity controls, remove, free shipping progress bar, order summary, checkout CTA |
| `/wishlist` | Wishlist | Saved products grid with add-to-cart and remove actions |

---

## Features Implemented

### Dark / Light Mode

- **Toggle button** (Sun/Moon icon) in the header — visible on all screen sizes
- **Automatic detection** of system preference (`prefers-color-scheme: dark`) on first visit
- **Persisted** in `localStorage` so the choice survives page refreshes and sessions
- **CSS custom properties** swap via `.dark` class on `<html>` — all components use semantic tokens (`bg-surface`, `text-text-primary`, `border-border`) that automatically adapt
- **Dark mode color palette**: deep black surfaces (`#0f0f0f`, `#1a1a1a`), light text (`#f0f0f0`), muted borders (`#2e2e2e`), adjusted accent-light for contrast
- Implemented via `@custom-variant dark (&:where(.dark, .dark *))` in Tailwind CSS v4

### Cart System

- **React Context** (`CartProvider`) wrapping the entire app via root layout
- **Add to cart** from product cards (both mobile always-visible and desktop hover-reveal buttons)
- **Add to cart with quantity** from the product detail page
- **Update quantity** with +/- controls on the cart page
- **Remove items** individually or clear entire cart
- **Live badge count** on the cart icon in the header
- **Free shipping progress bar** (threshold: €49) with visual indicator
- **Order summary** with subtotal, shipping calculation, and total
- **Persisted in localStorage** — cart survives page refreshes
- **Visual feedback** — button changes to green "In Cart" / "Added to Cart" state

### Wishlist System

- **React Context** (`WishlistProvider`) wrapping the entire app
- **Toggle wishlist** from heart icon on every product card (fills red when active)
- **Toggle from product detail page** with dedicated wishlist button
- **Wishlist page** with full product cards, remove buttons, and add-to-cart
- **Live badge count** on the wishlist icon in the header
- **Persisted in localStorage**

### Product Detail Page

- **Image gallery** with main image and 4 thumbnail previews
- **Product info**: brand, name, star rating with review count, price with discount
- **Quantity selector** with +/- controls
- **Add to Cart** and **Wishlist** action buttons
- **Trust badges**: Free Shipping, 30-Day Returns, Authentic Products
- **Tabbed content**: Description, Ingredients, Reviews — each with rich content
- **Reviews tab**: aggregate rating bar chart, individual reviews with avatars
- **Related Products carousel** (Swiper) at the bottom
- **Breadcrumb navigation**
- **Static generation** with `generateStaticParams` for all 30 products

---

## Dependencies Installed

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^15.3.1 | React framework with App Router, Image optimization, file-based routing, static generation |
| `react` | ^19.1.0 | UI rendering library |
| `react-dom` | ^19.1.0 | React DOM bindings |
| `lucide-react` | ^0.469.0 | Icon library — 30+ icons used: Search, ShoppingBag, Heart, User, Menu, ChevronDown, Star, ArrowRight, X, CheckCircle, Instagram, Facebook, Twitter, Youtube, MapPin, SlidersHorizontal, Grid3x3, LayoutList, ChevronUp, Sun, Moon, Minus, Plus, Truck, RotateCcw, Shield, Check, Send. Chosen for tree-shakeability and consistent thin-line style matching both reference sites |
| `swiper` | ^11.2.10 | Touch slider/carousel library — powers hero banner, product carousels, and brand showcase. Same library Primor.eu uses. Supports autoplay, navigation, pagination, responsive breakpoints, loop mode, touch/swipe |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | ^5.8.3 | TypeScript compiler for type safety |
| `@types/node` | ^22.15.2 | Node.js type definitions |
| `@types/react` | ^19.1.2 | React type definitions |
| `@types/react-dom` | ^19.1.2 | React DOM type definitions |
| `tailwindcss` | ^4.1.4 | Utility-first CSS framework (v4 with CSS-based `@theme` configuration) |
| `@tailwindcss/postcss` | ^4.1.4 | PostCSS plugin for Tailwind CSS v4 |

---

## Why Each Library Was Chosen

### Swiper.js

- **Primor.eu uses Swiper** directly (`Amasty_BannerSliderHyva/js/swiper.min.js`), ensuring matching behavior
- Supports all needed features: autoplay with configurable delay, loop mode, responsive breakpoints, navigation arrows, pagination bullets, touch/drag
- Better performance than Slick or Owl — no jQuery dependency
- Tree-shakeable modules (only Autoplay, Navigation, Pagination imported)

### Lucide React

- Matches the minimal, thin-line icon style used by both reference sites
- Tree-shakeable (each icon is a separate export)
- 1500+ icons with consistent 24x24 grid, 2px stroke weight
- No font files or sprite sheets

### Tailwind CSS v4

- Both reference sites use Tailwind CSS
- v4 uses CSS-native `@theme` configuration — no `tailwind.config.ts` needed
- Supports `@custom-variant` for dark mode without external plugins
- CSS-first design tokens via custom properties

---

## Project Structure

```
src/
├── app/
│   ├── globals.css                  # Tailwind v4 imports, @theme tokens, dark mode vars, Swiper overrides
│   ├── layout.tsx                   # Root layout — font, providers (Theme/Cart/Wishlist), Header, Footer
│   ├── page.tsx                     # Homepage — all sections assembled
│   ├── cart/
│   │   └── page.tsx                 # Shopping cart page (client component)
│   ├── wishlist/
│   │   └── page.tsx                 # Wishlist page (client component)
│   ├── product/
│   │   └── [id]/
│   │       ├── page.tsx             # Product detail (server — static generation)
│   │       └── ProductDetailClient.tsx  # Product detail UI (client — cart/wishlist hooks)
│   └── products/
│       └── page.tsx                 # Product listing with grid, filters, pagination
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx      # Rotating promotional messages (4s interval)
│   │   ├── Header.tsx               # Dark sticky header — logo, search, theme toggle, icons with live counts
│   │   ├── MegaMenu.tsx             # Multi-column dropdown mega menu (desktop)
│   │   ├── MobileMenu.tsx           # Slide-out drawer with accordion submenus (mobile)
│   │   ├── NewsletterStrip.tsx      # Multi-field subscription form
│   │   └── Footer.tsx               # 5-column footer with mobile accordions, payments, socials
│   ├── home/
│   │   ├── HeroBanner.tsx           # Full-width Swiper carousel (4 slides, 4s autoplay)
│   │   ├── CategoryBar.tsx          # Horizontal pill-style quick category links
│   │   ├── CategoryShowcase.tsx     # Horizontal scrolling category cards with overlays
│   │   ├── ProductCarousel.tsx      # Swiper-powered product slider (reusable)
│   │   ├── PromoBanners.tsx         # Dual side-by-side promotional banners
│   │   ├── PromoBanner.tsx          # Split image/text promotional section
│   │   └── BrandShowcase.tsx        # Auto-playing brand logo carousel
│   ├── product/
│   │   └── ProductCard.tsx          # Product card — image, badge, rating, price, cart/wishlist actions
│   └── ui/
│       ├── Badge.tsx                # SALE / NEW / BEST SELLER / EXCLUSIVE labels
│       ├── Button.tsx               # primary / accent / secondary / outline / ghost variants
│       ├── IconButton.tsx           # Icon wrapper with optional count badge
│       ├── SearchBar.tsx            # Desktop inline + mobile fullscreen search
│       ├── ThemeToggle.tsx          # Dark/light mode toggle button (Sun/Moon)
│       └── BackToTop.tsx            # Scroll-to-top button (appears after 300px)
├── context/
│   ├── ThemeContext.tsx              # Dark/light mode state + localStorage persistence
│   ├── CartContext.tsx               # Cart state: add, remove, update qty, clear, localStorage
│   └── WishlistContext.tsx           # Wishlist state: add, remove, toggle, localStorage
└── data/
    └── mock.ts                      # TypeScript types + 30 products, 6 categories, 8 brands, 10 nav items, 4 hero slides, 2 promo banners, helper functions
```

---

## Dark Mode Implementation

### How It Works

1. `ThemeProvider` in `src/context/ThemeContext.tsx` manages the current theme state
2. On mount, it checks `localStorage` for a stored preference, falls back to `prefers-color-scheme`
3. Adds/removes the `dark` class on `<html>` element
4. CSS custom properties override in `globals.css` using `.dark { }` block swaps all color tokens
5. All components use semantic color tokens (`bg-surface`, `text-text-primary`, `border-border`) that resolve to different values in light vs dark mode

### Dark Mode Color Map

| Token | Light | Dark |
|-------|-------|------|
| `--color-surface` | `#ffffff` | `#0f0f0f` |
| `--color-surface-secondary` | `#fafafa` | `#1a1a1a` |
| `--color-surface-tertiary` | `#f3f4f6` | `#262626` |
| `--color-text-primary` | `#1a1a1a` | `#f0f0f0` |
| `--color-text-secondary` | `#707070` | `#a0a0a0` |
| `--color-border` | `#e5e7eb` | `#2e2e2e` |
| `--color-accent-light` | `#fff1f2` | `#2a1011` |

The `--color-primary` (`#000000`) and `--color-accent` (`#e21a1f`) remain constant across themes — the header and CTAs stay dark/red in both modes.

---

## Cart & Wishlist Architecture

### State Management Pattern

Both cart and wishlist use the same architecture:
- **React Context** with `createContext` providing default values (safe for SSR)
- **Provider component** wraps the app in `layout.tsx`
- **Custom hook** (`useCart()`, `useWishlist()`) for consuming components
- **localStorage persistence** — state is saved on every change and restored on mount
- **`mounted` flag** prevents hydration mismatches (SSR renders with defaults, client hydrates from localStorage)

### Cart API

| Method | Signature | Description |
|--------|-----------|-------------|
| `addToCart` | `(product, quantity?) => void` | Adds product or increments existing quantity |
| `removeFromCart` | `(productId) => void` | Removes product entirely |
| `updateQuantity` | `(productId, quantity) => void` | Sets exact quantity (min: 1) |
| `clearCart` | `() => void` | Removes all items |
| `isInCart` | `(productId) => boolean` | Checks if product is in cart |
| `totalItems` | `number` | Sum of all quantities |
| `totalPrice` | `number` | Sum of price * quantity |

### Wishlist API

| Method | Signature | Description |
|--------|-----------|-------------|
| `addToWishlist` | `(product) => void` | Adds product (no duplicates) |
| `removeFromWishlist` | `(productId) => void` | Removes product |
| `toggleWishlist` | `(product) => void` | Adds if absent, removes if present |
| `isInWishlist` | `(productId) => boolean` | Checks membership |
| `totalItems` | `number` | Count of items |

---

## Design Decisions & How They Match the Reference Sites

### Color System (from Primor.eu CSS variables)

| Token | Value | Reference |
|-------|-------|-----------|
| `--color-primary` | `#000000` | Primor's `--header-bg: #000000` |
| `--color-accent` | `#e21a1f` | Primor's `--featured-header-color: #E21A1F` |
| `--color-accent-dark` | `#c41318` | Derived darker shade for hover states |
| `--color-text-primary` | `#1a1a1a` | Primor's `--topnav-color: #1a1a1a` |
| `--color-text-secondary` | `#707070` | Primor's `--header-border: #707070` |
| `--color-border` | `#e5e7eb` | Both sites use Tailwind gray-200 |
| `--color-surface-secondary` | `#fafafa` | Primor's `--bg-color: #fafafa` |
| `--color-success` | `#02d071` | Primor's shipping progress bar green |

### Header (matches Primor.eu)

- **Black background** (`bg-primary`) matching Primor's `--header-bg: #000000`
- **White text and icons** matching Primor's `--header-color: #FFF`
- **Rounded search bar** on desktop matching Primor's `border-radius: 30px` search
- **Sticky positioning** with scroll-triggered shadow
- **Announcement bar** with rotating messages (Primor cycles promo codes, shipping info)
- **Dark/light mode toggle** — additional feature for the template
- **Live cart/wishlist badge counts** — both reference sites show dynamic counts

### Navigation (matches both sites)

- **Mega menu** with multi-column dropdowns — Primor has 13+ items with AJAX-loaded submenus; LookFantastic has 14 items with 3-5 column mega menus organized by type/concern/ingredient/brand
- **Red accent on "Offers"** — Primor highlights "Promociones" in `--featured-header-color: #E21A1F`
- **Mobile: accordion submenus** — both sites use expandable sections with chevron indicators
- **Uppercase text, tight tracking** — matches both sites' nav typography

### Product Cards (blends both sites)

- **Square aspect ratio** (1:1) — Primor uses 350x350px product images
- **Add-to-cart on hover** (desktop) — Primor: `xl:opacity-0 xl:group-hover:opacity-100`
- **Always visible on mobile** — Primor: `w-full mt-2 xl:mt-0`
- **Wishlist heart icon** — fills red when active, toggles on click
- **"In Cart" state** — button changes to green with checkmark when product is in cart
- **Star ratings + review count** — LookFantastic shows 5-star ratings with numeric count
- **Discount percentage badge** — Primor shows `(-61%)` next to prices
- **Links to product detail** — image and name are clickable

### Product Detail Page (matches LookFantastic)

- **Image gallery** with thumbnails — LookFantastic shows multiple product views
- **Tabbed content** — LookFantastic uses Description/Ingredients/Reviews tabs
- **Star rating breakdown** — bar chart showing distribution across 1-5 stars
- **Individual reviews** with avatars, dates, and star ratings
- **Trust badges** (shipping, returns, authenticity) — both sites show trust signals
- **Related products carousel** — both sites show "You May Also Like" sections

### Cart Page (matches Primor.eu)

- **Free shipping progress bar** — Primor uses green `#02D071` animated width bar
- **Line item controls** — quantity +/- and remove, matching both sites' mini-cart patterns
- **Order summary sidebar** — subtotal, shipping, total calculation

---

## Configuration Files

### `postcss.config.mjs`

Uses `@tailwindcss/postcss` as the PostCSS plugin — the Tailwind v4 way.

### `next.config.ts`

Configures `images.remotePatterns` to allow Unsplash image URLs. Replace with your actual image CDN domain in production.

### `src/app/globals.css`

- Imports Tailwind CSS and Swiper CSS modules
- Defines `@theme` block with all design tokens (colors, fonts)
- Defines `@custom-variant dark` for dark mode support
- Dark mode CSS variable overrides in `.dark` block
- Overrides Swiper navigation and pagination styles
- Utility classes: `.scrollbar-none`, `.line-clamp-2`, `.line-clamp-3`
- Animations: `fadeInUp`, `slideInRight`

---

## Responsive Breakpoints

| Breakpoint | Width | Product Grid | Nav | Category Cards |
|------------|-------|-------------|-----|----------------|
| Mobile | < 640px | 2 columns | Hamburger + drawer | 45% width scroll |
| Tablet | 640-1023px | 3 columns | Hamburger + drawer | 30% width scroll |
| Desktop | 1024px+ | 4-5 columns | Mega menu | Equal width scroll |

---

## Client vs Server Components

| Client Components | Why |
|---|---|
| `ThemeProvider`, `CartProvider`, `WishlistProvider` | React Context providers need client-side state |
| `Header` | Scroll detection, theme/cart/wishlist context consumers |
| `ThemeToggle` | Reads and toggles theme state |
| `AnnouncementBar` | `useEffect` interval for rotating messages |
| `MegaMenu` | Hover state with timeout refs |
| `MobileMenu` | Accordion state, body scroll lock |
| `SearchBar` | Expand/collapse state, input focus |
| `HeroBanner`, `ProductCarousel`, `BrandShowcase` | Swiper requires client-side initialization |
| `ProductCard` | Cart/wishlist hook consumers |
| `ProductDetailClient` | Cart/wishlist hooks, quantity state, tab state |
| `CartPage`, `WishlistPage` | Cart/wishlist hook consumers |
| `NewsletterStrip` | Form submission state |
| `Footer` | Mobile accordion expand/collapse |
| `BackToTop` | Scroll position detection |

Server components: `page.tsx` files for homepage and products listing, `product/[id]/page.tsx` (server wrapper with `generateStaticParams`), `Badge`, `Button`, `CategoryBar`, `CategoryShowcase`, `PromoBanners`, `PromoBanner`.

---

## Performance Notes

- **Static generation**: All 37 pages are statically generated at build time (homepage, products, cart, wishlist, 30 product detail pages, 404)
- **Image optimization**: All images use Next.js `<Image>` with responsive `sizes` attributes
- **Bundle size**: First Load JS shared is ~102 KB (gzipped)
- **Swiper tree-shaking**: Only imports Autoplay, Navigation, and Pagination modules
- **Icon tree-shaking**: Lucide imports only the specific icons used
- **Context safety**: All contexts provide default values, preventing SSR/prerender errors
- **localStorage hydration**: `mounted` flag pattern prevents hydration mismatches
