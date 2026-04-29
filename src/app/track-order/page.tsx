"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  Search,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  Phone,
  Navigation,
  Star,
  Package,
  CheckCircle2,
  Truck,
  Loader2,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";

// Leaflet must run client-side only — disable SSR for the map.
const DeliveryMap = dynamic(() => import("@/components/map/DeliveryMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-surface-secondary">
      <div className="flex flex-col items-center gap-2 text-text-muted">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Loading map…
        </span>
      </div>
    </div>
  ),
});

type StepStatus = "done" | "current" | "upcoming";

const trackingSteps: { title: string; time: string; status: StepStatus }[] = [
  { title: "Order placed", time: "10:24", status: "done" },
  { title: "Picked & packed", time: "11:02", status: "done" },
  { title: "Rider dispatched", time: "13:45", status: "done" },
  { title: "On the way", time: "Now", status: "current" },
  { title: "Delivered", time: "—", status: "upcoming" },
];

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim() && email.trim()) setShowResult(true);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Track your order"
        title="Where's my package?"
        description="Enter your order number and email, and we'll show you your rider on a live map — in real time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Track Order" }]}
        variant="hero"
      />

      {!showResult && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  Order number
                </span>
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="BT-XXXXXX"
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </label>
              <label className="block">
                <span className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  Email address
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-5">
              <p className="text-xs text-text-muted">
                You'll find your order number in your confirmation email.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors rounded-lg cursor-pointer"
              >
                <Search className="w-4 h-4" />
                Track order
              </button>
            </div>
          </form>
        </section>
      )}

      {showResult && <LiveTracking orderId={orderId} />}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <InfoCard
            icon={Navigation}
            title="Live map tracking"
            text="See your rider move in real time on a real map from our fulfilment hub to your door."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Contact your rider"
            text="Call or message your rider directly for delivery instructions or a gate code."
          />
          <InfoCard
            icon={MessageCircle}
            title="24/7 support"
            text="Something not right? Our team is on standby in the app and by phone."
          />
        </div>
      </section>
    </div>
  );
}

function LiveTracking({ orderId }: { orderId: string }) {
  // 0–100. Ticks forward to simulate a live rider.
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 35; // loop for demo
        return prev + 0.15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const etaMinutes = useMemo(
    () => Math.max(1, Math.round(((100 - progress) / 100) * 18)),
    [progress]
  );

  // Progress bar maps to step transitions (steps 1–4 done, current is step 4)
  const barWidth = useMemo(() => 70 + (progress - 35) * 0.35, [progress]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 animate-fade-in-up">
      <div className="bg-surface border border-border rounded-3xl overflow-hidden shadow-lg">
        {/* ───────────── REAL MAP ───────────── */}
        <div
          className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden"
          style={{ isolation: "isolate", zIndex: 0 }}
        >
          <DeliveryMap progress={progress} />

          {/* Floating status chip */}
          <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 bg-surface/95 backdrop-blur-md rounded-full shadow-md z-[400]">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-success opacity-60" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-success" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-text-primary">
              Live
            </span>
          </div>

          {/* Floating ETA */}
          <div className="pointer-events-none absolute top-4 right-4 bg-surface/95 backdrop-blur-md rounded-2xl shadow-md px-4 py-2.5 z-[400]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
              Arriving in
            </p>
            <p className="text-xl font-extrabold text-text-primary leading-tight tabular-nums">
              {etaMinutes} min
            </p>
          </div>

          {/* Origin/destination labels */}
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 z-[400]">
            <LocationPill label="Pickup" place="Gulshan 2 · Dhaka" dark />
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-text-primary/30 via-accent/40 to-accent/80" />
            <LocationPill label="Drop-off" place="Dhanmondi 27 · Dhaka" accent />
          </div>
        </div>

        {/* ───────────── BOTTOM SHEET ───────────── */}
        <div className="p-5 md:p-7">
          {/* Order header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-border-light">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1">
                Order {orderId?.toUpperCase() || "BT-7X92KM"}
              </p>
              <h2 className="text-xl md:text-2xl font-extrabold text-text-primary">
                Your rider is on the way
              </h2>
              <p className="text-xs text-text-secondary mt-1">
                ETA · <span className="font-semibold text-text-primary">18:34 BST</span>{" "}
                · 4.2 km remaining
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wider rounded-full">
                <Truck className="w-3 h-3" />
                On the way
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="py-5">
            <div className="flex items-center justify-between mb-2">
              {trackingSteps.map((s) => (
                <div key={s.title} className="flex-1 text-center px-0.5">
                  <p
                    className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${
                      s.status === "done"
                        ? "text-success"
                        : s.status === "current"
                          ? "text-accent"
                          : "text-text-muted"
                    }`}
                  >
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative h-1.5 bg-surface-tertiary rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-success to-accent rounded-full transition-all duration-300"
                style={{ width: `${barWidth}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              {trackingSteps.map((s, i) => (
                <div key={i} className="flex-1 flex justify-center">
                  {s.status === "done" ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : s.status === "current" ? (
                    <div className="relative w-4 h-4">
                      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                      <div className="relative w-4 h-4 rounded-full bg-accent" />
                    </div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-surface-tertiary border border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rider card */}
          <div className="bg-surface-secondary rounded-2xl p-4 md:p-5 flex items-center gap-4 border border-border-light">
            <div className="relative shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-xl font-extrabold">
                RH
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-success border-2 border-surface-secondary flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-text-primary truncate">
                  Rahim Hossain
                </p>
                <div className="flex items-center gap-0.5 text-[11px] text-text-muted">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="font-bold text-text-primary">4.9</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary truncate">
                Toyota Axio · <span className="font-mono">DHAKA METRO GA 18-4872</span>
              </p>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-text-muted">
                <MapPin className="w-3 h-3" />
                <span>1.2 km away · Near Rapa Plaza, Dhanmondi</span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href="tel:+8801700000000"
                aria-label="Call rider"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#message"
                aria-label="Message rider"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-surface border border-border text-text-primary flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-4 flex items-center justify-between gap-4 p-4 rounded-2xl border border-border-light">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-text-muted">3 items · ৳ 12,497</p>
                <p className="text-sm font-semibold text-text-primary truncate">
                  Cash on delivery
                </p>
              </div>
            </div>
            <a
              href="#"
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:underline shrink-0"
            >
              View order →
            </a>
          </div>

          {/* Footer strip */}
          <div className="mt-4 pt-4 border-t border-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              Updated just now
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-success" />
              Delivery insured end-to-end
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationPill({
  label,
  place,
  dark,
  accent,
}: {
  label: string;
  place: string;
  dark?: boolean;
  accent?: boolean;
}) {
  const tone = dark
    ? "bg-primary text-white"
    : accent
      ? "bg-accent text-white"
      : "bg-surface/95 text-text-primary";
  return (
    <div
      className={`${tone} backdrop-blur-md shadow-md rounded-full px-3 py-2 flex items-center gap-2 max-w-[45%]`}
    >
      <MapPin className="w-3.5 h-3.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-wider opacity-75 leading-none">
          {label}
        </p>
        <p className="text-xs font-bold leading-tight truncate">{place}</p>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
        <Icon className="w-4 h-4" />
      </div>
      <h3 className="text-sm font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-xs text-text-secondary leading-relaxed">{text}</p>
    </div>
  );
}
