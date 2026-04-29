# Elara Shop — Premium eCommerce Template

Elara Shop is a premium, production-ready eCommerce template built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4**. It ships with a polished storefront, dark/light mode, a fully working cart and wishlist (localStorage persisted), product detail pages, and 35+ pre-designed pages — ready to deploy or customize.

> Looking for the full step-by-step guide? Open `documentation/index.html` in your browser.

---

## Quick Start

```bash
# 1. install dependencies
npm install

# 2. run the dev server
npm run dev

# 3. open http://localhost:3000
```

### Available Scripts

| Script           | Purpose                                                  |
| ---------------- | -------------------------------------------------------- |
| `npm run dev`    | Start the development server with hot-reload             |
| `npm run build`  | Generate the production static export in `/out`          |
| `npm run start`  | Serve the production build locally                       |
| `npm run lint`   | Run the Next.js linter                                   |
| `npm run deploy` | Build then deploy `/out` to Firebase Hosting (optional)  |

---

## Highlights

- **Next.js 15 App Router** with static export — drop the build on any static host
- **React 19 + TypeScript** with strict types throughout
- **Tailwind CSS 4** using CSS-native `@theme` tokens (no `tailwind.config` file)
- **Dark / Light mode** with system-preference detection + `localStorage` persistence
- **Cart system** — add, remove, update quantity, free-shipping progress bar, persisted
- **Wishlist system** — toggle from any product card or detail page, persisted
- **35+ pages** including homepage, product list, product detail, cart, checkout, account, blog, policies, careers, stores, and more
- **Swiper-powered carousels** — hero, product carousels, brand showcase
- **Fully responsive** — mobile, tablet, and desktop breakpoints
- **SEO-ready** — Next `Metadata` API, OpenGraph, Twitter cards, semantic markup
- **Accessible** — WCAG-aware, keyboard navigation, ARIA labels, semantic landmarks

---

## Pages Included

| Route                   | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `/`                     | Homepage — hero, categories, flash offers, banners, brands    |
| `/products`             | Product listing with filters, sort, grid/list view            |
| `/product/[id]`         | Product detail — gallery, reviews, related products           |
| `/cart`                 | Shopping cart with free-shipping bar and order summary        |
| `/checkout`             | Checkout flow                                                 |
| `/order-confirmation`   | Order confirmation                                            |
| `/wishlist`             | Saved products                                                |
| `/account`, `/login`, `/register` | Customer accounts                                   |
| `/track-order`          | Order tracking                                                |
| `/brands`               | Brand directory                                               |
| `/offers`, `/offers/flash` | Promotional pages                                          |
| `/gift-cards`, `/referral`, `/student`, `/affiliates` | Loyalty / referral pages    |
| `/blog`, `/blog/beauty-tips` | Editorial pages                                          |
| `/about`, `/careers`, `/press`, `/sustainability`, `/stores`, `/contact` | Company pages |
| `/help`, `/shipping`, `/returns`, `/privacy`, `/terms`, `/cookies`, `/accessibility` | Customer service & policies |

---

## Project Structure

```
elara-shop/
├── public/                       # Static assets (images, favicon)
│   └── images/                   # Hero, products, categories, brands, promo
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout, providers, metadata
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Tailwind v4 imports + design tokens
│   │   └── [route]/page.tsx      # Individual pages
│   ├── components/
│   │   ├── layout/               # Header, Footer, MegaMenu, MobileMenu, Newsletter
│   │   ├── home/                 # HeroBanner, CategoryShowcase, ProductCarousel, etc.
│   │   ├── product/              # ProductCard
│   │   ├── page/                 # PageHeader, FAQAccordion, FeatureGrid, PolicyLayout
│   │   ├── ui/                   # Button, Badge, IconButton, ThemeToggle, BackToTop
│   │   └── map/                  # DeliveryMap (Leaflet)
│   ├── context/
│   │   ├── ThemeContext.tsx      # Dark/light mode
│   │   ├── CartContext.tsx       # Cart state
│   │   └── WishlistContext.tsx   # Wishlist state
│   └── data/
│       └── mock.ts               # Demo products, categories, brands, nav, hero slides
├── documentation/                # ThemeForest documentation (open index.html)
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Customization

### Brand Colors

All design tokens live in `src/app/globals.css` inside the `@theme` block. Change the values once and they propagate through every component.

```css
@theme {
  --color-primary: #000000;       /* Dark header / primary surfaces */
  --color-accent: #e21a1f;        /* CTAs, highlights */
  --color-accent-dark: #c41318;   /* Hover states */
  --color-success: #02d071;       /* Free-shipping bar, success */
  /* ...plus surface, text, and border tokens */
}
```

Dark-mode overrides live in the `.dark { … }` block in the same file.

### Replacing Demo Content

Demo products, categories, brands, hero slides, and navigation items are all defined in [src/data/mock.ts](src/data/mock.ts). Wire this file to your real data source (CMS, database, REST/GraphQL API) and the UI will follow.

### Logo

The header and footer logo currently use a colored block with the letter "E". Replace the markup in [src/components/layout/Header.tsx](src/components/layout/Header.tsx) and [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) with your SVG/image to ship your own brand.

### Metadata & SEO

Update site-wide metadata in [src/app/layout.tsx](src/app/layout.tsx). Per-page metadata can be added by exporting a `metadata` object (or `generateMetadata`) from each `page.tsx`.

---

## Tech Stack

| Package           | Version | Purpose                                           |
| ----------------- | ------- | ------------------------------------------------- |
| `next`            | ^15.3.1 | React framework, App Router, static export        |
| `react`           | ^19.1.0 | UI library                                        |
| `tailwindcss`     | ^4.1.4  | Utility-first CSS                                 |
| `swiper`          | ^11.2.x | Touch carousels                                   |
| `lucide-react`    | ^0.469  | Icon set                                          |
| `leaflet`         | ^1.9.4  | Map widget for `DeliveryMap`                      |
| `typescript`      | ^5.8.3  | Type safety                                       |

---

## Browser Support

Latest two versions of Chrome, Firefox, Safari, and Edge. Mobile Safari and Chrome on Android.

---

## Deployment

The template ships with `output: "export"` in `next.config.ts`, so `npm run build` produces a fully static site in `/out` that can be hosted on any static host:

- **Firebase Hosting** — `npm run deploy` (config in `firebase.json`)
- **Vercel / Netlify** — connect the repo and deploy
- **Any CDN / S3 / Nginx** — upload the `/out` folder

---

## Support

For questions about installation, customization, or bugs, please reach out via your ThemeForest profile message system. Include:

1. The exact step / page where you need help
2. A screenshot of any error message
3. Your Node.js version (`node -v`) and operating system

---

## License

This template is sold under the [Envato Market — Standard / Extended License](https://themeforest.net/licenses). See [LICENSE.md](LICENSE.md) for the full terms.

© 2026 Elara Shop. All rights reserved.
