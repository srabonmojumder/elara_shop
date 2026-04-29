export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "SALE" | "NEW" | "BEST SELLER" | "EXCLUSIVE";
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  count: number;
}

export interface QuickCategory {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  featured?: boolean;
  children?: NavColumn[];
}

export interface NavColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  href: string;
}

export interface BannerSlide {
  id: number;
  image: string;
  mobileImage?: string;
  title: string;
  subtitle?: string;
  cta?: string;
  ctaHref?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
}

export interface PromoBanner {
  id: number;
  image: string;
  href: string;
  alt: string;
}

export const announcements = [
  "Free shipping on orders over <strong>€49</strong> — Fast & insured delivery",
  "Use code <strong>WELCOME15</strong> for 15% off your first order",
  "Download our app — Exclusive drops & early access",
];

export const quickCategories: QuickCategory[] = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Footwear", href: "/footwear" },
  { label: "Bags", href: "/bags" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "Offers", href: "/offers" },
];

export const navItems: NavItem[] = [
  {
    label: "New In",
    href: "/new",
    children: [
      {
        title: "What's New",
        links: [
          { label: "View All New", href: "/new" },
          { label: "New for Women", href: "/new/women" },
          { label: "New for Men", href: "/new/men" },
          { label: "New Footwear", href: "/new/footwear" },
          { label: "New Accessories", href: "/new/accessories" },
        ],
      },
      {
        title: "Trending Now",
        links: [
          { label: "The Linen Edit", href: "/trending/linen" },
          { label: "Statement Knits", href: "/trending/knits" },
          { label: "Tailoring Reimagined", href: "/trending/tailoring" },
          { label: "Editor's Picks", href: "/trending/editors-picks" },
        ],
      },
    ],
  },
  {
    label: "Offers",
    href: "/offers",
    featured: true,
    children: [
      {
        title: "Current Offers",
        links: [
          { label: "Flash Sale", href: "/offers/flash" },
          { label: "Up to 50% Off", href: "/offers/50-off" },
          { label: "End of Season", href: "/offers/clearance" },
          { label: "Gift Sets", href: "/offers/gift-sets" },
          { label: "Buy More, Save More", href: "/offers/bundle" },
        ],
      },
      {
        title: "Shop by Discount",
        links: [
          { label: "20% Off or More", href: "/offers/20-off" },
          { label: "30% Off or More", href: "/offers/30-off" },
          { label: "40% Off or More", href: "/offers/40-off" },
          { label: "Outlet", href: "/offers/outlet" },
        ],
      },
    ],
  },
  {
    label: "Brands",
    href: "/brands",
    children: [
      {
        title: "Featured Brands",
        links: [
          { label: "View All Brands", href: "/brands" },
          { label: "Atelier Nord", href: "/brands/atelier-nord" },
          { label: "Mira & Co", href: "/brands/mira-co" },
          { label: "Verda", href: "/brands/verda" },
          { label: "Cassis", href: "/brands/cassis" },
        ],
      },
      {
        title: "House Labels",
        links: [
          { label: "Linea", href: "/brands/linea" },
          { label: "Kindred", href: "/brands/kindred" },
          { label: "Saoirse", href: "/brands/saoirse" },
          { label: "Heloise", href: "/brands/heloise" },
        ],
      },
      {
        title: "Premium Atelier",
        links: [
          { label: "Studio Editions", href: "/brands/studio-editions" },
          { label: "Limited Drops", href: "/brands/limited" },
          { label: "Made in Italy", href: "/brands/made-italy" },
          { label: "Crafted in France", href: "/brands/crafted-france" },
        ],
      },
    ],
  },
  {
    label: "Women",
    href: "/women",
    children: [
      {
        title: "Clothing",
        links: [
          { label: "View All Women's", href: "/women" },
          { label: "Dresses", href: "/women/dresses" },
          { label: "Tops & Blouses", href: "/women/tops" },
          { label: "Knitwear", href: "/women/knitwear" },
          { label: "Trousers & Jeans", href: "/women/trousers" },
          { label: "Outerwear", href: "/women/outerwear" },
          { label: "Skirts", href: "/women/skirts" },
        ],
      },
      {
        title: "By Occasion",
        links: [
          { label: "Workwear", href: "/women/workwear" },
          { label: "Weekend", href: "/women/weekend" },
          { label: "Evening", href: "/women/evening" },
          { label: "Holiday Edit", href: "/women/holiday" },
          { label: "Resort", href: "/women/resort" },
        ],
      },
      {
        title: "Footwear & Bags",
        links: [
          { label: "Heels", href: "/women/heels" },
          { label: "Flats & Loafers", href: "/women/flats" },
          { label: "Sneakers", href: "/women/sneakers" },
          { label: "Boots", href: "/women/boots" },
          { label: "Handbags", href: "/women/handbags" },
        ],
      },
    ],
  },
  {
    label: "Men",
    href: "/men",
    children: [
      {
        title: "Clothing",
        links: [
          { label: "View All Men's", href: "/men" },
          { label: "Shirts", href: "/men/shirts" },
          { label: "T-Shirts & Polos", href: "/men/t-shirts" },
          { label: "Knitwear", href: "/men/knitwear" },
          { label: "Trousers & Chinos", href: "/men/trousers" },
          { label: "Outerwear", href: "/men/outerwear" },
          { label: "Suits & Tailoring", href: "/men/suits" },
        ],
      },
      {
        title: "By Occasion",
        links: [
          { label: "Workwear", href: "/men/workwear" },
          { label: "Weekend", href: "/men/weekend" },
          { label: "Black Tie", href: "/men/black-tie" },
          { label: "Holiday", href: "/men/holiday" },
        ],
      },
      {
        title: "Footwear & Accessories",
        links: [
          { label: "Sneakers", href: "/men/sneakers" },
          { label: "Loafers", href: "/men/loafers" },
          { label: "Boots", href: "/men/boots" },
          { label: "Belts", href: "/men/belts" },
          { label: "Wallets", href: "/men/wallets" },
        ],
      },
    ],
  },
  {
    label: "Footwear",
    href: "/footwear",
    children: [
      {
        title: "Shop Women's",
        links: [
          { label: "View All Women's", href: "/footwear/women" },
          { label: "Heels", href: "/footwear/women/heels" },
          { label: "Flats", href: "/footwear/women/flats" },
          { label: "Sneakers", href: "/footwear/women/sneakers" },
          { label: "Boots", href: "/footwear/women/boots" },
          { label: "Sandals", href: "/footwear/women/sandals" },
        ],
      },
      {
        title: "Shop Men's",
        links: [
          { label: "View All Men's", href: "/footwear/men" },
          { label: "Sneakers", href: "/footwear/men/sneakers" },
          { label: "Loafers", href: "/footwear/men/loafers" },
          { label: "Boots", href: "/footwear/men/boots" },
          { label: "Dress Shoes", href: "/footwear/men/dress" },
        ],
      },
    ],
  },
  {
    label: "Bags",
    href: "/bags",
    children: [
      {
        title: "Bags",
        links: [
          { label: "View All Bags", href: "/bags" },
          { label: "Tote Bags", href: "/bags/tote" },
          { label: "Crossbody", href: "/bags/crossbody" },
          { label: "Shoulder", href: "/bags/shoulder" },
          { label: "Clutches", href: "/bags/clutch" },
          { label: "Backpacks", href: "/bags/backpacks" },
        ],
      },
      {
        title: "Small Leather Goods",
        links: [
          { label: "Wallets", href: "/bags/wallets" },
          { label: "Card Holders", href: "/bags/card-holders" },
          { label: "Keychains", href: "/bags/keychains" },
        ],
      },
    ],
  },
  {
    label: "Jewelry",
    href: "/jewelry",
    children: [
      {
        title: "Fine Jewelry",
        links: [
          { label: "View All Jewelry", href: "/jewelry" },
          { label: "Necklaces", href: "/jewelry/necklaces" },
          { label: "Earrings", href: "/jewelry/earrings" },
          { label: "Rings", href: "/jewelry/rings" },
          { label: "Bracelets", href: "/jewelry/bracelets" },
        ],
      },
      {
        title: "Watches",
        links: [
          { label: "Women's Watches", href: "/jewelry/watches/women" },
          { label: "Men's Watches", href: "/jewelry/watches/men" },
          { label: "Limited Editions", href: "/jewelry/watches/limited" },
        ],
      },
    ],
  },
  {
    label: "Home",
    href: "/home",
    children: [
      {
        title: "Living",
        links: [
          { label: "View All Home", href: "/home" },
          { label: "Throws & Blankets", href: "/home/throws" },
          { label: "Cushions", href: "/home/cushions" },
          { label: "Vases", href: "/home/vases" },
          { label: "Candles", href: "/home/candles" },
        ],
      },
      {
        title: "Tabletop",
        links: [
          { label: "Mugs", href: "/home/mugs" },
          { label: "Glassware", href: "/home/glassware" },
          { label: "Serving", href: "/home/serving" },
        ],
      },
    ],
  },
  {
    label: "Gift Sets",
    href: "/gifts",
  },
];

export const heroSlides: BannerSlide[] = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",
    title: "The Spring Edit",
    subtitle: "New-season tailoring, linen, and effortless layering pieces — curated for the everyday.",
    cta: "Shop the Edit",
    ctaHref: "/new",
    align: "left",
    dark: true,
  },
  {
    id: 2,
    image: "/images/hero/hero-2.jpg",
    title: "Up to 40% Off Footwear",
    subtitle: "From heritage loafers to leather sneakers — pieces designed to outlast the season.",
    cta: "Shop the Sale",
    ctaHref: "/offers",
    align: "left",
    dark: true,
  },
  {
    id: 3,
    image: "/images/hero/hero-3.jpg",
    title: "Quiet Luxury, Done Right",
    subtitle: "Discover Atelier Nord, Mira & Co, and the brands defining understated style.",
    cta: "Explore Brands",
    ctaHref: "/brands",
    align: "left",
    dark: true,
  },
  {
    id: 4,
    image: "/images/hero/hero-4.jpg",
    title: "New Season, New Wardrobe",
    subtitle: "Refresh your essentials with our editor-curated must-haves for the weeks ahead.",
    cta: "Discover More",
    ctaHref: "/new",
    align: "left",
    dark: true,
  },
];

export const promoBanners: PromoBanner[] = [
  {
    id: 1,
    image: "/images/promo/promo-1.jpg",
    href: "/offers/flash",
    alt: "Flash Offers — Up to 60% off select pieces",
  },
  {
    id: 2,
    image: "/images/promo/promo-2.jpg",
    href: "/gifts",
    alt: "Gift Sets — Curated gifts for every occasion",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Women",
    slug: "women",
    image: "/images/categories/women.jpg",
    count: 412,
  },
  {
    id: 2,
    name: "Men",
    slug: "men",
    image: "/images/categories/men.jpg",
    count: 298,
  },
  {
    id: 3,
    name: "Footwear",
    slug: "footwear",
    image: "/images/categories/footwear.jpg",
    count: 256,
  },
  {
    id: 4,
    name: "Bags & Accessories",
    slug: "bags",
    image: "/images/categories/bags.jpg",
    count: 189,
  },
  {
    id: 5,
    name: "Jewelry",
    slug: "jewelry",
    image: "/images/categories/jewelry.jpg",
    count: 167,
  },
  {
    id: 6,
    name: "Home & Lifestyle",
    slug: "home",
    image: "/images/categories/home.jpg",
    count: 134,
  },
];

export const brands: Brand[] = [
  { id: 1, name: "Atelier Nord", logo: "/images/brands/atelier-nord.jpg", href: "/brands/atelier-nord" },
  { id: 2, name: "Mira & Co", logo: "/images/brands/mira-co.jpg", href: "/brands/mira-co" },
  { id: 3, name: "Verda", logo: "/images/brands/verda.jpg", href: "/brands/verda" },
  { id: 4, name: "Cassis", logo: "/images/brands/cassis.jpg", href: "/brands/cassis" },
  { id: 5, name: "Linea", logo: "/images/brands/linea.jpg", href: "/brands/linea" },
  { id: 6, name: "Kindred", logo: "/images/brands/kindred.jpg", href: "/brands/kindred" },
  { id: 7, name: "Saoirse", logo: "/images/brands/saoirse.jpg", href: "/brands/saoirse" },
  { id: 8, name: "Heloise", logo: "/images/brands/heloise.jpg", href: "/brands/heloise" },
];

export const flashOffers: Product[] = [
  {
    id: 1,
    name: "Linen Wrap Midi Dress",
    brand: "MIRA & CO",
    price: 119.0,
    originalPrice: 189.0,
    image: "/images/products/product-01.jpg",
    badge: "SALE",
    rating: 4.8,
    reviewCount: 1241,
  },
  {
    id: 2,
    name: "Merino Crew-Neck Knit Sweater",
    brand: "ATELIER NORD",
    price: 98.0,
    originalPrice: 145.0,
    image: "/images/products/product-06.jpg",
    badge: "SALE",
    rating: 4.7,
    reviewCount: 2103,
  },
  {
    id: 3,
    name: "Hand-Stitched Leather Loafers",
    brand: "LINEA",
    price: 189.0,
    originalPrice: 275.0,
    image: "/images/products/product-11.jpg",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 876,
  },
  {
    id: 4,
    name: "Structured Leather Tote — Camel",
    brand: "CASSIS",
    price: 245.0,
    originalPrice: 320.0,
    image: "/images/products/product-16.jpg",
    badge: "SALE",
    rating: 4.7,
    reviewCount: 612,
  },
  {
    id: 5,
    name: "14k Gold Hoop Earrings — Medium",
    brand: "HELOISE",
    price: 168.0,
    originalPrice: 220.0,
    image: "/images/products/product-21.jpg",
    badge: "SALE",
    rating: 4.9,
    reviewCount: 1543,
  },
  {
    id: 6,
    name: "Linen Throw Pillow Set of 2",
    brand: "KINDRED",
    price: 78.0,
    originalPrice: 110.0,
    image: "/images/products/product-26.jpg",
    badge: "SALE",
    rating: 4.5,
    reviewCount: 387,
  },
  {
    id: 7,
    name: "Oversized Cashmere Sweater",
    brand: "VERDA",
    price: 215.0,
    originalPrice: 295.0,
    image: "/images/products/product-02.jpg",
    badge: "SALE",
    rating: 4.8,
    reviewCount: 1872,
  },
  {
    id: 8,
    name: "Linen Button-Down Shirt",
    brand: "ATELIER NORD",
    price: 89.0,
    originalPrice: 125.0,
    image: "/images/products/product-07.jpg",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 943,
  },
  {
    id: 9,
    name: "Italian Leather Sneakers — White",
    brand: "LINEA",
    price: 165.0,
    originalPrice: 225.0,
    image: "/images/products/product-12.jpg",
    badge: "SALE",
    rating: 4.7,
    reviewCount: 2210,
  },
  {
    id: 10,
    name: "Crossbody Mini Bag — Espresso",
    brand: "CASSIS",
    price: 198.0,
    originalPrice: 265.0,
    image: "/images/products/product-17.jpg",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 768,
  },
];

export const newArrivals: Product[] = [
  {
    id: 11,
    name: "Tailored Wool Blazer",
    brand: "MIRA & CO",
    price: 295.0,
    image: "/images/products/product-03.jpg",
    badge: "NEW",
    rating: 4.7,
    reviewCount: 312,
  },
  {
    id: 12,
    name: "Tailored Chino Trouser",
    brand: "VERDA",
    price: 125.0,
    image: "/images/products/product-08.jpg",
    badge: "NEW",
    rating: 4.6,
    reviewCount: 421,
  },
  {
    id: 13,
    name: "Suede Chelsea Boots",
    brand: "SAOIRSE",
    price: 285.0,
    image: "/images/products/product-13.jpg",
    badge: "NEW",
    rating: 4.8,
    reviewCount: 287,
  },
  {
    id: 14,
    name: "Hand-Woven Straw Clutch",
    brand: "MIRA & CO",
    price: 145.0,
    image: "/images/products/product-18.jpg",
    badge: "NEW",
    rating: 4.5,
    reviewCount: 132,
  },
  {
    id: 15,
    name: "Freshwater Pearl Drop Necklace",
    brand: "HELOISE",
    price: 245.0,
    image: "/images/products/product-22.jpg",
    badge: "NEW",
    rating: 4.9,
    reviewCount: 198,
  },
  {
    id: 16,
    name: "Hand-Poured Soy Candle — Bergamot",
    brand: "KINDRED",
    price: 48.0,
    image: "/images/products/product-27.jpg",
    badge: "NEW",
    rating: 4.7,
    reviewCount: 543,
  },
  {
    id: 17,
    name: "Slip Silk Camisole",
    brand: "CASSIS",
    price: 138.0,
    image: "/images/products/product-04.jpg",
    badge: "NEW",
    rating: 4.6,
    reviewCount: 234,
  },
  {
    id: 18,
    name: "Wool Overcoat — Charcoal",
    brand: "ATELIER NORD",
    price: 495.0,
    image: "/images/products/product-09.jpg",
    badge: "EXCLUSIVE",
    rating: 4.9,
    reviewCount: 167,
  },
  {
    id: 19,
    name: "Block-Heel Pumps — Black",
    brand: "LINEA",
    price: 215.0,
    image: "/images/products/product-14.jpg",
    badge: "NEW",
    rating: 4.5,
    reviewCount: 412,
  },
  {
    id: 20,
    name: "Silk Twill Square Scarf",
    brand: "HELOISE",
    price: 168.0,
    image: "/images/products/product-19.jpg",
    badge: "NEW",
    rating: 4.7,
    reviewCount: 256,
  },
];

const bestSellersData: Product[] = [
  {
    id: 21,
    name: "High-Rise Wide-Leg Jeans",
    brand: "VERDA",
    price: 145.0,
    image: "/images/products/product-05.jpg",
    badge: "BEST SELLER",
    rating: 4.7,
    reviewCount: 5234,
  },
  {
    id: 22,
    name: "Pima Cotton Crew Tee — 3 Pack",
    brand: "KINDRED",
    price: 89.0,
    image: "/images/products/product-10.jpg",
    badge: "BEST SELLER",
    rating: 4.8,
    reviewCount: 8721,
  },
  {
    id: 23,
    name: "Espadrille Slides — Natural",
    brand: "MIRA & CO",
    price: 95.0,
    originalPrice: 125.0,
    image: "/images/products/product-15.jpg",
    badge: "BEST SELLER",
    rating: 4.6,
    reviewCount: 3402,
  },
  {
    id: 24,
    name: "Italian Leather Belt — Black",
    brand: "LINEA",
    price: 95.0,
    image: "/images/products/product-20.jpg",
    badge: "BEST SELLER",
    rating: 4.7,
    reviewCount: 2156,
  },
  {
    id: 25,
    name: "Stacking Rings Set of 3",
    brand: "HELOISE",
    price: 198.0,
    image: "/images/products/product-23.jpg",
    badge: "BEST SELLER",
    rating: 4.8,
    reviewCount: 1876,
  },
  {
    id: 26,
    name: "Tennis Bracelet — White Sapphire",
    brand: "HELOISE",
    price: 425.0,
    image: "/images/products/product-24.jpg",
    badge: "BEST SELLER",
    rating: 4.9,
    reviewCount: 1342,
  },
  {
    id: 27,
    name: "Vintage Watch — Brown Leather Strap",
    brand: "SAOIRSE",
    price: 385.0,
    originalPrice: 465.0,
    image: "/images/products/product-25.jpg",
    badge: "SALE",
    rating: 4.8,
    reviewCount: 956,
  },
  {
    id: 28,
    name: "Earthenware Ceramic Vase — Tall",
    brand: "KINDRED",
    price: 88.0,
    image: "/images/products/product-28.jpg",
    badge: "BEST SELLER",
    rating: 4.6,
    reviewCount: 612,
  },
  {
    id: 29,
    name: "Stoneware Mug Set of 4",
    brand: "KINDRED",
    price: 72.0,
    image: "/images/products/product-29.jpg",
    badge: "BEST SELLER",
    rating: 4.7,
    reviewCount: 1432,
  },
  {
    id: 30,
    name: "Cashmere Throw Blanket",
    brand: "VERDA",
    price: 285.0,
    image: "/images/products/product-30.jpg",
    badge: "BEST SELLER",
    rating: 4.9,
    reviewCount: 2103,
  },
];

export const allProducts: Product[] = [];

export function getProductById(id: number): Product | undefined {
  if (allProducts.length === 0) {
    allProducts.push(...flashOffers, ...newArrivals, ...bestSellersData);
  }
  return allProducts.find((p) => p.id === id);
}

export function getRelatedProducts(id: number, limit = 5): Product[] {
  if (allProducts.length === 0) {
    allProducts.push(...flashOffers, ...newArrivals, ...bestSellersData);
  }
  return allProducts.filter((p) => p.id !== id).slice(0, limit);
}

export const bestSellers = bestSellersData;
