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
  "Download our app — Exclusive deals & early access",
];

export const quickCategories: QuickCategory[] = [
  { label: "Skincare", href: "/skincare" },
  { label: "Hair Care", href: "/haircare" },
  { label: "Makeup", href: "/makeup" },
  { label: "Fragrance", href: "/fragrance" },
  { label: "Body Care", href: "/body" },
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
          { label: "New Skincare", href: "/new/skincare" },
          { label: "New Makeup", href: "/new/makeup" },
          { label: "New Hair Care", href: "/new/haircare" },
          { label: "New Fragrance", href: "/new/fragrance" },
        ],
      },
      {
        title: "Trending Now",
        links: [
          { label: "K-Beauty", href: "/trending/k-beauty" },
          { label: "Clean Beauty", href: "/trending/clean" },
          { label: "Viral Products", href: "/trending/viral" },
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
          { label: "Clearance", href: "/offers/clearance" },
          { label: "Gift Sets", href: "/offers/gift-sets" },
          { label: "Buy One Get One", href: "/offers/bogo" },
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
        title: "Top Brands",
        links: [
          { label: "View All Brands", href: "/brands" },
          { label: "La Roche-Posay", href: "/brands/la-roche-posay" },
          { label: "CeraVe", href: "/brands/cerave" },
          { label: "The Ordinary", href: "/brands/the-ordinary" },
          { label: "NARS", href: "/brands/nars" },
          { label: "Estée Lauder", href: "/brands/estee-lauder" },
        ],
      },
      {
        title: "Popular Brands",
        links: [
          { label: "Clinique", href: "/brands/clinique" },
          { label: "MAC", href: "/brands/mac" },
          { label: "Drunk Elephant", href: "/brands/drunk-elephant" },
          { label: "Sol de Janeiro", href: "/brands/sol-de-janeiro" },
          { label: "Kérastase", href: "/brands/kerastase" },
          { label: "Charlotte Tilbury", href: "/brands/charlotte-tilbury" },
        ],
      },
      {
        title: "Luxury Brands",
        links: [
          { label: "Dior", href: "/brands/dior" },
          { label: "Chanel", href: "/brands/chanel" },
          { label: "YSL Beauty", href: "/brands/ysl" },
          { label: "Tom Ford", href: "/brands/tom-ford" },
          { label: "Lancôme", href: "/brands/lancome" },
        ],
      },
    ],
  },
  {
    label: "Skincare",
    href: "/skincare",
    children: [
      {
        title: "By Product Type",
        links: [
          { label: "View All Skincare", href: "/skincare" },
          { label: "Cleansers", href: "/skincare/cleansers" },
          { label: "Moisturizers", href: "/skincare/moisturizers" },
          { label: "Serums", href: "/skincare/serums" },
          { label: "Sunscreen & SPF", href: "/skincare/sunscreen" },
          { label: "Eye Cream", href: "/skincare/eye-cream" },
          { label: "Face Masks", href: "/skincare/face-masks" },
          { label: "Toners", href: "/skincare/toners" },
        ],
      },
      {
        title: "By Concern",
        links: [
          { label: "Anti-Aging", href: "/skincare/anti-aging" },
          { label: "Acne & Blemishes", href: "/skincare/acne" },
          { label: "Dark Spots", href: "/skincare/dark-spots" },
          { label: "Dry Skin", href: "/skincare/dry-skin" },
          { label: "Sensitive Skin", href: "/skincare/sensitive" },
          { label: "Pores", href: "/skincare/pores" },
        ],
      },
      {
        title: "By Ingredient",
        links: [
          { label: "Retinol", href: "/skincare/retinol" },
          { label: "Vitamin C", href: "/skincare/vitamin-c" },
          { label: "Hyaluronic Acid", href: "/skincare/hyaluronic-acid" },
          { label: "Niacinamide", href: "/skincare/niacinamide" },
          { label: "Salicylic Acid", href: "/skincare/salicylic-acid" },
          { label: "Peptides", href: "/skincare/peptides" },
        ],
      },
    ],
  },
  {
    label: "Makeup",
    href: "/makeup",
    children: [
      {
        title: "Face",
        links: [
          { label: "View All Makeup", href: "/makeup" },
          { label: "Foundation", href: "/makeup/foundation" },
          { label: "Concealer", href: "/makeup/concealer" },
          { label: "Powder", href: "/makeup/powder" },
          { label: "Blush", href: "/makeup/blush" },
          { label: "Bronzer", href: "/makeup/bronzer" },
          { label: "Primer", href: "/makeup/primer" },
        ],
      },
      {
        title: "Eyes",
        links: [
          { label: "Eyeshadow", href: "/makeup/eyeshadow" },
          { label: "Mascara", href: "/makeup/mascara" },
          { label: "Eyeliner", href: "/makeup/eyeliner" },
          { label: "Eyebrow", href: "/makeup/eyebrow" },
        ],
      },
      {
        title: "Lips",
        links: [
          { label: "Lipstick", href: "/makeup/lipstick" },
          { label: "Lip Gloss", href: "/makeup/lip-gloss" },
          { label: "Lip Liner", href: "/makeup/lip-liner" },
          { label: "Lip Care", href: "/makeup/lip-care" },
        ],
      },
      {
        title: "Tools & Brushes",
        links: [
          { label: "Brush Sets", href: "/makeup/brush-sets" },
          { label: "Sponges", href: "/makeup/sponges" },
          { label: "Setting Spray", href: "/makeup/setting-spray" },
        ],
      },
    ],
  },
  {
    label: "Hair Care",
    href: "/haircare",
    children: [
      {
        title: "By Product Type",
        links: [
          { label: "View All Hair Care", href: "/haircare" },
          { label: "Shampoo", href: "/haircare/shampoo" },
          { label: "Conditioner", href: "/haircare/conditioner" },
          { label: "Hair Masks", href: "/haircare/masks" },
          { label: "Hair Oils", href: "/haircare/oils" },
          { label: "Styling", href: "/haircare/styling" },
        ],
      },
      {
        title: "By Concern",
        links: [
          { label: "Damaged Hair", href: "/haircare/damaged" },
          { label: "Color Treated", href: "/haircare/color-treated" },
          { label: "Hair Loss", href: "/haircare/hair-loss" },
          { label: "Curly Hair", href: "/haircare/curly" },
          { label: "Frizzy Hair", href: "/haircare/frizzy" },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "Hair Dryers", href: "/haircare/dryers" },
          { label: "Straighteners", href: "/haircare/straighteners" },
          { label: "Curling Irons", href: "/haircare/curling" },
        ],
      },
    ],
  },
  {
    label: "Fragrance",
    href: "/fragrance",
    children: [
      {
        title: "Women's Fragrance",
        links: [
          { label: "View All Women's", href: "/fragrance/women" },
          { label: "Eau de Parfum", href: "/fragrance/women/edp" },
          { label: "Eau de Toilette", href: "/fragrance/women/edt" },
          { label: "Gift Sets", href: "/fragrance/women/gift-sets" },
        ],
      },
      {
        title: "Men's Fragrance",
        links: [
          { label: "View All Men's", href: "/fragrance/men" },
          { label: "Eau de Parfum", href: "/fragrance/men/edp" },
          { label: "Eau de Toilette", href: "/fragrance/men/edt" },
          { label: "Aftershave", href: "/fragrance/men/aftershave" },
        ],
      },
      {
        title: "By Brand",
        links: [
          { label: "Dior", href: "/fragrance/dior" },
          { label: "Chanel", href: "/fragrance/chanel" },
          { label: "YSL", href: "/fragrance/ysl" },
          { label: "Jean Paul Gaultier", href: "/fragrance/jpg" },
          { label: "Prada", href: "/fragrance/prada" },
        ],
      },
    ],
  },
  {
    label: "Body & Bath",
    href: "/body",
    children: [
      {
        title: "Body Care",
        links: [
          { label: "View All Body", href: "/body" },
          { label: "Body Lotion", href: "/body/lotion" },
          { label: "Body Wash", href: "/body/wash" },
          { label: "Body Scrubs", href: "/body/scrubs" },
          { label: "Hand Cream", href: "/body/hand-cream" },
          { label: "Deodorant", href: "/body/deodorant" },
        ],
      },
      {
        title: "Sun Care",
        links: [
          { label: "Sunscreen", href: "/body/sunscreen" },
          { label: "After Sun", href: "/body/after-sun" },
          { label: "Self Tanning", href: "/body/self-tan" },
        ],
      },
    ],
  },
  {
    label: "Men",
    href: "/men",
    children: [
      {
        title: "Men's Grooming",
        links: [
          { label: "View All Men's", href: "/men" },
          { label: "Shaving", href: "/men/shaving" },
          { label: "Beard Care", href: "/men/beard" },
          { label: "Skincare", href: "/men/skincare" },
          { label: "Hair Care", href: "/men/haircare" },
          { label: "Body Care", href: "/men/body" },
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
    title: "Summer Skincare Edit",
    subtitle: "Discover our curated selection of SPF, serums, and hydrators for the perfect summer glow.",
    cta: "Shop Now",
    ctaHref: "/skincare",
    align: "left",
    dark: true,
  },
  {
    id: 2,
    image: "/images/hero/hero-2.jpg",
    title: "Up to 40% Off Makeup",
    subtitle: "Premium foundations, palettes, and lip colors from the world's best brands.",
    cta: "Shop the Sale",
    ctaHref: "/offers",
    align: "left",
    dark: true,
  },
  {
    id: 3,
    image: "/images/hero/hero-3.jpg",
    title: "The Fragrance Edit",
    subtitle: "Iconic scents and new launches. Find your signature fragrance today.",
    cta: "Explore Fragrances",
    ctaHref: "/fragrance",
    align: "left",
    dark: true,
  },
  {
    id: 4,
    image: "/images/hero/hero-4.jpg",
    title: "New Season, New Routines",
    subtitle: "Refresh your beauty regimen with our expert-curated must-haves.",
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
    alt: "Flash Offers — Up to 60% off select items",
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
    name: "Perfumes Women",
    slug: "perfumes-women",
    image: "/images/categories/perfumes-women.jpg",
    count: 312,
  },
  {
    id: 2,
    name: "Perfumes Men",
    slug: "perfumes-men",
    image: "/images/categories/perfumes-men.jpg",
    count: 198,
  },
  {
    id: 3,
    name: "Skincare",
    slug: "skincare",
    image: "/images/categories/skincare.jpg",
    count: 456,
  },
  {
    id: 4,
    name: "Makeup",
    slug: "makeup",
    image: "/images/categories/makeup.jpg",
    count: 389,
  },
  {
    id: 5,
    name: "Hair Care",
    slug: "haircare",
    image: "/images/categories/haircare.jpg",
    count: 267,
  },
  {
    id: 6,
    name: "Body & Bath",
    slug: "body",
    image: "/images/categories/body.jpg",
    count: 234,
  },
];

export const brands: Brand[] = [
  { id: 1, name: "La Roche-Posay", logo: "/images/brands/la-roche-posay.jpg", href: "/brands/la-roche-posay" },
  { id: 2, name: "CeraVe", logo: "/images/brands/cerave.jpg", href: "/brands/cerave" },
  { id: 3, name: "The Ordinary", logo: "/images/brands/the-ordinary.jpg", href: "/brands/the-ordinary" },
  { id: 4, name: "NARS", logo: "/images/brands/nars.jpg", href: "/brands/nars" },
  { id: 5, name: "Clinique", logo: "/images/brands/clinique.jpg", href: "/brands/clinique" },
  { id: 6, name: "Charlotte Tilbury", logo: "/images/brands/charlotte-tilbury.jpg", href: "/brands/charlotte-tilbury" },
  { id: 7, name: "Kérastase", logo: "/images/brands/kerastase.jpg", href: "/brands/kerastase" },
  { id: 8, name: "Estée Lauder", logo: "/images/brands/estee-lauder.jpg", href: "/brands/estee-lauder" },
];

export const flashOffers: Product[] = [
  {
    id: 1,
    name: "Advanced Night Repair Synchronized Recovery Complex",
    brand: "ESTÉE LAUDER",
    price: 62.99,
    originalPrice: 98.0,
    image: "/images/products/product-01.jpg",
    badge: "SALE",
    rating: 4.8,
    reviewCount: 2341,
  },
  {
    id: 2,
    name: "Hydrating Facial Cleanser for Normal to Dry Skin",
    brand: "CERAVE",
    price: 9.99,
    originalPrice: 14.5,
    image: "/images/products/product-02.jpg",
    badge: "SALE",
    rating: 4.7,
    reviewCount: 5621,
  },
  {
    id: 3,
    name: "Retinol 0.5% in Squalane Anti-Aging Serum",
    brand: "THE ORDINARY",
    price: 5.8,
    originalPrice: 8.7,
    image: "/images/products/product-03.jpg",
    badge: "SALE",
    rating: 4.5,
    reviewCount: 3892,
  },
  {
    id: 4,
    name: "Matte Velvet Skin Compact Foundation",
    brand: "MAKE UP FOR EVER",
    price: 28.5,
    originalPrice: 42.0,
    image: "/images/products/product-04.jpg",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 1243,
  },
  {
    id: 5,
    name: "Rose Gold Eyeshadow Palette 12 Shades",
    brand: "LUXE COSMETICS",
    price: 32.0,
    originalPrice: 48.0,
    image: "/images/products/product-05.jpg",
    badge: "SALE",
    rating: 4.4,
    reviewCount: 876,
  },
  {
    id: 6,
    name: "Keratin Intensive Repair Hair Mask 250ml",
    brand: "KÉRASTASE",
    price: 28.99,
    originalPrice: 38.0,
    image: "/images/products/product-06.jpg",
    badge: "SALE",
    rating: 4.7,
    reviewCount: 1567,
  },
  {
    id: 7,
    name: "Anthelios UVMune 400 Invisible Fluid SPF50+",
    brand: "LA ROCHE-POSAY",
    price: 14.99,
    originalPrice: 20.0,
    image: "/images/products/product-07.jpg",
    badge: "SALE",
    rating: 4.9,
    reviewCount: 4230,
  },
  {
    id: 8,
    name: "Lip Maximizer Hyaluronic Lip Plumper",
    brand: "DIOR",
    price: 29.99,
    originalPrice: 38.0,
    image: "/images/products/product-08.jpg",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 2104,
  },
  {
    id: 9,
    name: "Volumizing Waterproof Mascara Noir",
    brand: "LANCÔME",
    price: 21.5,
    originalPrice: 30.0,
    image: "/images/products/product-09.jpg",
    badge: "SALE",
    rating: 4.5,
    reviewCount: 1890,
  },
  {
    id: 10,
    name: "Niacinamide 10% + Zinc 1% Oil Control Serum",
    brand: "THE ORDINARY",
    price: 4.99,
    originalPrice: 6.5,
    image: "/images/products/product-10.jpg",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 7812,
  },
];

export const newArrivals: Product[] = [
  {
    id: 11,
    name: "Vitamin C Suspension 23% + HA Spheres 2%",
    brand: "THE ORDINARY",
    price: 5.5,
    image: "/images/products/product-03.jpg",
    badge: "NEW",
    rating: 4.3,
    reviewCount: 1245,
  },
  {
    id: 12,
    name: "Luminous Silk Foundation Long Wear",
    brand: "GIORGIO ARMANI",
    price: 46.5,
    image: "/images/products/product-04.jpg",
    badge: "NEW",
    rating: 4.8,
    reviewCount: 3201,
  },
  {
    id: 13,
    name: "Brazilian Bum Bum Cream 240ml",
    brand: "SOL DE JANEIRO",
    price: 44.0,
    image: "/images/products/product-11.jpg",
    badge: "NEW",
    rating: 4.7,
    reviewCount: 5678,
  },
  {
    id: 14,
    name: "Airwrap Multi-Styler Complete Long",
    brand: "DYSON",
    price: 499.0,
    image: "/images/products/product-09.jpg",
    badge: "EXCLUSIVE",
    rating: 4.5,
    reviewCount: 890,
  },
  {
    id: 15,
    name: "Overnight Recovery Face Mask Intensive",
    brand: "DRUNK ELEPHANT",
    price: 38.0,
    image: "/images/products/product-02.jpg",
    badge: "NEW",
    rating: 4.6,
    reviewCount: 432,
  },
  {
    id: 16,
    name: "Magic Cream Moisturizer 50ml",
    brand: "CHARLOTTE TILBURY",
    price: 75.0,
    image: "/images/products/product-12.jpg",
    badge: "NEW",
    rating: 4.9,
    reviewCount: 2345,
  },
  {
    id: 17,
    name: "Pillow Talk Matte Revolution Lipstick",
    brand: "CHARLOTTE TILBURY",
    price: 34.0,
    image: "/images/products/product-08.jpg",
    badge: "NEW",
    rating: 4.8,
    reviewCount: 4567,
  },
  {
    id: 18,
    name: "Argan Oil Leave-In Treatment 100ml",
    brand: "MOROCCANOIL",
    price: 34.85,
    image: "/images/products/product-13.jpg",
    badge: "NEW",
    rating: 4.7,
    reviewCount: 3456,
  },
  {
    id: 19,
    name: "Sauvage Eau de Parfum 100ml",
    brand: "DIOR",
    price: 99.0,
    image: "/images/products/product-14.jpg",
    badge: "EXCLUSIVE",
    rating: 4.9,
    reviewCount: 8765,
  },
  {
    id: 20,
    name: "Micellar Cleansing Water 400ml",
    brand: "BIODERMA",
    price: 12.99,
    image: "/images/products/product-15.jpg",
    badge: "NEW",
    rating: 4.6,
    reviewCount: 6543,
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

const bestSellersData: Product[] = [
  {
    id: 21,
    name: "Retinol 1% in Squalane High-Strength",
    brand: "THE ORDINARY",
    price: 7.2,
    image: "/images/products/product-10.jpg",
    badge: "BEST SELLER",
    rating: 4.5,
    reviewCount: 9870,
  },
  {
    id: 22,
    name: "Double Wear Stay-in-Place Foundation",
    brand: "ESTÉE LAUDER",
    price: 42.0,
    image: "/images/products/product-04.jpg",
    badge: "BEST SELLER",
    rating: 4.7,
    reviewCount: 12340,
  },
  {
    id: 23,
    name: "La Vie Est Belle Eau de Parfum 75ml",
    brand: "LANCÔME",
    price: 89.0,
    originalPrice: 105.0,
    image: "/images/products/product-16.jpg",
    badge: "BEST SELLER",
    rating: 4.8,
    reviewCount: 7654,
  },
  {
    id: 24,
    name: "Hydra Zen Anti-Stress Moisturizing Cream",
    brand: "LANCÔME",
    price: 52.5,
    image: "/images/products/product-07.jpg",
    badge: "BEST SELLER",
    rating: 4.6,
    reviewCount: 3456,
  },
  {
    id: 25,
    name: "Effaclar Duo+ Global Anti-Blemish Care",
    brand: "LA ROCHE-POSAY",
    price: 16.99,
    image: "/images/products/product-02.jpg",
    badge: "BEST SELLER",
    rating: 4.4,
    reviewCount: 6789,
  },
  {
    id: 26,
    name: "Elixir Ultime L'Huile Originale Hair Oil",
    brand: "KÉRASTASE",
    price: 38.0,
    image: "/images/products/product-13.jpg",
    badge: "BEST SELLER",
    rating: 4.7,
    reviewCount: 2345,
  },
  {
    id: 27,
    name: "Radiant Creamy Concealer 6ml",
    brand: "NARS",
    price: 31.0,
    image: "/images/products/product-05.jpg",
    badge: "BEST SELLER",
    rating: 4.6,
    reviewCount: 5432,
  },
  {
    id: 28,
    name: "Black Opium Eau de Parfum 90ml",
    brand: "YSL BEAUTY",
    price: 95.0,
    originalPrice: 120.0,
    image: "/images/products/product-14.jpg",
    badge: "SALE",
    rating: 4.8,
    reviewCount: 8901,
  },
  {
    id: 29,
    name: "Lash Idôle Mascara Volumizing",
    brand: "LANCÔME",
    price: 27.5,
    image: "/images/products/product-09.jpg",
    badge: "BEST SELLER",
    rating: 4.5,
    reviewCount: 4567,
  },
  {
    id: 30,
    name: "Bum Bum Body Firmeza Oil 100ml",
    brand: "SOL DE JANEIRO",
    price: 42.0,
    image: "/images/products/product-11.jpg",
    badge: "BEST SELLER",
    rating: 4.7,
    reviewCount: 3210,
  },
];

export const bestSellers = bestSellersData;
