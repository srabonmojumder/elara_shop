"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Package,
  MapPin,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  Edit3,
  Plus,
  Truck,
  Eye,
  Star,
  Clock,
  CreditCard,
  Bell,
  Shield,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type Tab = "profile" | "orders" | "addresses" | "wishlist" | "settings";

const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
  { key: "profile", label: "My Profile", icon: User },
  { key: "orders", label: "My Orders", icon: Package },
  { key: "addresses", label: "Addresses", icon: MapPin },
  { key: "wishlist", label: "Wishlist", icon: Heart },
  { key: "settings", label: "Settings", icon: Settings },
];

const mockOrders = [
  { id: "BT-7X92KM", date: "Apr 12, 2026", status: "Delivered", statusColor: "text-success bg-success/10", items: 3, total: 124.97, image: "/images/products/product-01.jpg" },
  { id: "BT-5A38NP", date: "Apr 5, 2026", status: "Shipped", statusColor: "text-[#0070ba] bg-[#0070ba]/10", items: 1, total: 89.0, image: "/images/products/product-16.jpg" },
  { id: "BT-1R67QZ", date: "Mar 28, 2026", status: "Processing", statusColor: "text-warning bg-warning/10", items: 5, total: 213.45, image: "/images/products/product-09.jpg" },
  { id: "BT-9K14WL", date: "Mar 15, 2026", status: "Delivered", statusColor: "text-success bg-success/10", items: 2, total: 57.98, image: "/images/products/product-03.jpg" },
];

const mockAddresses = [
  { id: 1, label: "Home", name: "Sarah Johnson", street: "Via Roma 42, Apt 3B", city: "20121 Milano, Italy", phone: "+39 02 1234 5678", isDefault: true },
  { id: 2, label: "Office", name: "Sarah Johnson", street: "Corso Vittorio Emanuele II 15", city: "00186 Roma, Italy", phone: "+39 06 9876 5432", isDefault: false },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({ orders: true, promos: true, newsletter: false });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <nav className="text-xs text-text-muted mb-6 hidden sm:block">
        <a href="/" className="hover:text-accent">Home</a>
        <span className="mx-2">/</span>
        <span className="text-text-primary">My Account</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* ── Sidebar ── */}
        <aside className="lg:w-[260px] shrink-0">
          <div className="lg:sticky lg:top-28">
            {/* Profile card */}
            <div className="bg-surface border border-border rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl font-bold shrink-0">
                  SJ
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-text-primary truncate">Sarah Johnson</p>
                  <p className="text-xs text-text-muted truncate">sarah.johnson@email.com</p>
                  <p className="text-[10px] text-accent font-medium mt-0.5">Premium Member</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Orders", value: "12" },
                  { label: "Wishlist", value: "8" },
                  { label: "Reviews", value: "5" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface-secondary rounded-lg py-2">
                    <span className="block text-sm font-bold text-text-primary">{s.value}</span>
                    <span className="text-[10px] text-text-muted">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile tab selector */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-full flex items-center justify-between bg-surface border border-border rounded-xl px-4 py-3 mb-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {(() => { const t = tabs.find((t) => t.key === activeTab); return t ? <t.icon className="w-4 h-4 text-accent" /> : null; })()}
                <span className="text-sm font-semibold">{tabs.find((t) => t.key === activeTab)?.label}</span>
              </div>
              <ChevronRight className={`w-4 h-4 text-text-muted transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`} />
            </button>

            {/* Tab list */}
            <nav className={`${mobileMenuOpen ? "block" : "hidden"} lg:block bg-surface border border-border rounded-xl overflow-hidden`}>
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => { setActiveTab(tab.key); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-colors cursor-pointer border-b border-border-light last:border-none ${
                      isActive ? "text-accent bg-accent-light" : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {tab.label}
                    <ChevronRight className="w-3.5 h-3.5 ml-auto text-text-muted" />
                  </button>
                );
              })}
              <a href="/login" className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-error hover:bg-error/5 transition-colors cursor-pointer">
                <LogOut className="w-4 h-4" />
                Sign Out
              </a>
            </nav>
          </div>
        </aside>

        {/* ── Content ── */}
        <div className="flex-1 min-w-0">

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="animate-fade-in-up space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">My Profile</h2>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline cursor-pointer">
                  <Edit3 className="w-3.5 h-3.5" /> Edit Profile
                </button>
              </div>

              <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pb-6 border-b border-border-light">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold shrink-0">
                    SJ
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">Sarah Johnson</h3>
                    <p className="text-sm text-text-secondary">Member since March 2024</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-bold text-accent bg-accent-light rounded-full uppercase tracking-wider">Premium Member</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: "Sarah Johnson" },
                    { label: "Email", value: "sarah.johnson@email.com" },
                    { label: "Phone", value: "+39 02 1234 5678" },
                    { label: "Date of Birth", value: "15 March 1992" },
                    { label: "Gender", value: "Female" },
                    { label: "Language", value: "English (EU)" },
                  ].map((f) => (
                    <div key={f.label} className="bg-surface-secondary rounded-lg p-3">
                      <p className="text-[10px] text-text-muted uppercase tracking-wider font-medium mb-1">{f.label}</p>
                      <p className="text-sm text-text-primary font-medium">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { icon: Package, text: "Order BT-7X92KM delivered", time: "2 days ago", color: "text-success" },
                    { icon: Star, text: "You reviewed Retinol Serum", time: "5 days ago", color: "text-warning" },
                    { icon: Heart, text: "Added Magic Cream to wishlist", time: "1 week ago", color: "text-accent" },
                    { icon: CreditCard, text: "Payment method updated", time: "2 weeks ago", color: "text-text-muted" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className={`w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center ${a.color}`}>
                        <a.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-text-primary">{a.text}</p>
                        <p className="text-[10px] text-text-muted">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === "orders" && (
            <div className="animate-fade-in-up space-y-5">
              <h2 className="text-xl font-bold">My Orders</h2>

              {mockOrders.map((order) => (
                <div key={order.id} className="bg-surface border border-border rounded-xl p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-surface-secondary border border-border-light shrink-0">
                        <Image src={order.image} alt={order.id} fill sizes="56px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">{order.id}</p>
                        <p className="text-xs text-text-muted flex items-center gap-1"><Clock className="w-3 h-3" /> {order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${order.statusColor}`}>
                        {order.status}
                      </span>
                      <span className="text-sm font-bold text-text-primary">{order.total.toFixed(2)} €</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border-light">
                    <p className="text-xs text-text-muted">{order.items} item{order.items > 1 ? "s" : ""}</p>
                    <div className="flex gap-2">
                      {order.status === "Shipped" && (
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold border border-border rounded-lg hover:border-accent hover:text-accent transition-colors cursor-pointer">
                          <Truck className="w-3 h-3" /> Track
                        </button>
                      )}
                      <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold border border-border rounded-lg hover:border-accent hover:text-accent transition-colors cursor-pointer">
                        <Eye className="w-3 h-3" /> Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ADDRESSES TAB */}
          {activeTab === "addresses" && (
            <div className="animate-fade-in-up space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">My Addresses</h2>
                <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors cursor-pointer">
                  <Plus className="w-3.5 h-3.5" /> Add New
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockAddresses.map((addr) => (
                  <div key={addr.id} className={`bg-surface border-2 rounded-xl p-5 relative ${addr.isDefault ? "border-accent" : "border-border"}`}>
                    {addr.isDefault && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-bold text-accent bg-accent-light rounded-full uppercase tracking-wider">Default</span>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm font-bold text-text-primary">{addr.label}</span>
                    </div>
                    <div className="text-sm text-text-secondary space-y-1 mb-4">
                      <p className="font-medium text-text-primary">{addr.name}</p>
                      <p>{addr.street}</p>
                      <p>{addr.city}</p>
                      <p>{addr.phone}</p>
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-border-light">
                      <button className="text-xs font-medium text-accent hover:underline cursor-pointer">Edit</button>
                      {!addr.isDefault && (
                        <>
                          <span className="text-border">|</span>
                          <button className="text-xs font-medium text-text-muted hover:text-accent cursor-pointer">Set as Default</button>
                          <span className="text-border">|</span>
                          <button className="text-xs font-medium text-error hover:underline cursor-pointer">Delete</button>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                {/* Add new card */}
                <button className="border-2 border-dashed border-border rounded-xl p-5 flex flex-col items-center justify-center gap-2 hover:border-accent hover:text-accent transition-colors cursor-pointer min-h-[200px]">
                  <div className="w-10 h-10 rounded-full bg-surface-secondary flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Add New Address</span>
                </button>
              </div>
            </div>
          )}

          {/* WISHLIST TAB */}
          {activeTab === "wishlist" && (
            <div className="animate-fade-in-up space-y-5">
              <h2 className="text-xl font-bold">My Wishlist</h2>
              <p className="text-sm text-text-secondary">
                Your saved items are on the <a href="/wishlist" className="text-accent font-semibold hover:underline">Wishlist page</a>. View, manage, and add items to your cart from there.
              </p>
              <a href="/wishlist" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent-dark transition-colors">
                Go to Wishlist <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="animate-fade-in-up space-y-5">
              <h2 className="text-xl font-bold">Settings</h2>

              {/* Appearance */}
              <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                  {theme === "dark" ? <Moon className="w-4 h-4 text-text-muted" /> : <Sun className="w-4 h-4 text-text-muted" />}
                  Appearance
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">Dark Mode</p>
                    <p className="text-xs text-text-muted mt-0.5">Switch between light and dark theme</p>
                  </div>
                  <button onClick={toggleTheme} className={`relative w-12 h-7 rounded-full transition-colors cursor-pointer ${theme === "dark" ? "bg-accent" : "bg-border"}`}>
                    <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${theme === "dark" ? "left-[22px]" : "left-0.5"}`} />
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-text-muted" />
                  Notifications
                </h3>
                <div className="space-y-4">
                  {[
                    { key: "orders" as const, label: "Order Updates", desc: "Shipping, delivery, and return notifications" },
                    { key: "promos" as const, label: "Promotions", desc: "Sales, discounts, and special offers" },
                    { key: "newsletter" as const, label: "Newsletter", desc: "Weekly style notes and new arrivals" },
                  ].map((n) => (
                    <div key={n.key} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">{n.label}</p>
                        <p className="text-xs text-text-muted mt-0.5">{n.desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications({ ...notifications, [n.key]: !notifications[n.key] })}
                        className={`relative w-12 h-7 rounded-full transition-colors cursor-pointer ${notifications[n.key] ? "bg-accent" : "bg-border"}`}
                      >
                        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${notifications[n.key] ? "left-[22px]" : "left-0.5"}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-text-muted" />
                  Security
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between py-3 border-b border-border-light cursor-pointer group">
                    <div>
                      <p className="text-sm font-medium text-text-primary">Change Password</p>
                      <p className="text-xs text-text-muted mt-0.5">Last changed 3 months ago</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent" />
                  </button>
                  <button className="w-full flex items-center justify-between py-3 border-b border-border-light cursor-pointer group">
                    <div>
                      <p className="text-sm font-medium text-text-primary">Two-Factor Authentication</p>
                      <p className="text-xs text-text-muted mt-0.5">Add an extra layer of security</p>
                    </div>
                    <span className="text-[10px] font-bold text-text-muted bg-surface-secondary px-2 py-0.5 rounded-full uppercase">Off</span>
                  </button>
                  <button className="w-full flex items-center justify-between py-3 cursor-pointer group">
                    <div>
                      <p className="text-sm font-medium text-error">Delete Account</p>
                      <p className="text-xs text-text-muted mt-0.5">Permanently delete your account and data</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-error" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
