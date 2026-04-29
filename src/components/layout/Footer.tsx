"use client";

import { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronDown,
  MapPin,
} from "lucide-react";
import {
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  PaypalIcon,
  ApplePayIcon,
  GooglePayIcon,
  KlarnaIcon,
} from "@/components/ui/PaymentIcons";

const footerSections = [
  {
    title: "Customer Service",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Track Your Order", href: "/track-order" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Affiliate Program", href: "/affiliates" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Offers & Promos",
    links: [
      { label: "Current Promotions", href: "/offers" },
      { label: "Flash Deals", href: "/offers/flash" },
      { label: "Student Discount", href: "/student" },
      { label: "Referral Program", href: "/referral" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Beauty Tips", href: "/blog/beauty-tips" },
      { label: "Brand Directory", href: "/brands" },
      { label: "Store Locator", href: "/stores" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];


export default function Footer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 lg:gap-10">
          {footerSections.map((section, index) => (
            <div key={section.title} className="border-b border-border-light md:border-none">
              <button
                onClick={() => toggleSection(index)}
                className="md:hidden w-full flex items-center justify-between py-3.5 cursor-pointer"
              >
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <h3 className="hidden md:block text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
                {section.title}
              </h3>

              <ul
                className={`md:block overflow-hidden transition-all duration-300 ${
                  expandedIndex === index
                    ? "max-h-96 pb-3"
                    : "max-h-0 md:max-h-none"
                }`}
              >
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-1.5 md:py-1 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="/" className="flex items-center gap-2 shrink-0">
                  <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                    <span className="text-white font-extrabold text-[10px]">B</span>
                  </div>
                  <span className="text-sm font-extrabold tracking-tight">
                    BEAUTÉ
                  </span>
                </a>
              </div>
              <span className="text-xs text-text-muted hidden sm:inline">|</span>
              <div className="hidden sm:flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-surface-tertiary flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <VisaIcon className="w-10 h-6" />
              <MastercardIcon className="w-10 h-6" />
              <AmexIcon className="w-10 h-6" />
              <PaypalIcon className="w-10 h-6" />
              <ApplePayIcon className="w-10 h-6" />
              <GooglePayIcon className="w-10 h-6" />
              <KlarnaIcon className="w-10 h-6" />
            </div>

            <div className="flex items-center gap-2 text-xs text-text-muted">
              <MapPin className="w-3 h-3" />
              <span>EU — English</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-[11px] text-text-muted text-center">
            © 2026 BEAUTÉ. All rights reserved. BEAUTÉ is a registered
            trademark. All product names, logos, and brands are property of
            their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
