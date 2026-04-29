"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  MapPin,
  CreditCard,
  ClipboardCheck,
  Lock,
  Truck,
  Package,
  Shield,
  Check,
  ChevronDown,
  Tag,
  ArrowLeft,
  Mail,
  Phone,
  Home,
  Globe,
  User,
  Calendar,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  PaypalIcon,
  KlarnaIcon,
  ApplePayIcon,
  GooglePayIcon,
  CreditCardIcon,
} from "@/components/ui/PaymentIcons";

const FREE_SHIPPING_THRESHOLD = 49;

type Step = "shipping" | "payment" | "review";

const steps: { key: Step; label: string; icon: React.ElementType }[] = [
  { key: "shipping", label: "Shipping", icon: MapPin },
  { key: "payment", label: "Payment", icon: CreditCard },
  { key: "review", label: "Review", icon: ClipboardCheck },
];

interface ShippingForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  state: string;
  zip: string;
  phone: string;
  saveInfo: boolean;
  shippingMethod: "standard" | "express";
}

interface PaymentForm {
  method: "card" | "paypal" | "klarna" | "applepay";
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  billingAddress: "same" | "different";
}

const initialShipping: ShippingForm = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  country: "Italy",
  state: "",
  zip: "",
  phone: "",
  saveInfo: true,
  shippingMethod: "standard",
};

const initialPayment: PaymentForm = {
  method: "card",
  cardNumber: "",
  cardName: "",
  expiry: "",
  cvv: "",
  billingAddress: "same",
};

const paymentMethods = [
  {
    id: "card" as const,
    label: "Credit / Debit Card",
    icon: CreditCardIcon,
    cards: [VisaIcon, MastercardIcon, AmexIcon],
  },
  {
    id: "paypal" as const,
    label: "PayPal",
    icon: PaypalIcon,
    cards: [],
  },
  {
    id: "klarna" as const,
    label: "Klarna",
    icon: KlarnaIcon,
    cards: [],
  },
  {
    id: "applepay" as const,
    label: "Apple Pay",
    icon: ApplePayIcon,
    cards: [],
  },
];

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<Step>("shipping");
  const [shipping, setShipping] = useState<ShippingForm>(initialShipping);
  const [payment, setPayment] = useState<PaymentForm>(initialPayment);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shippingCost =
    totalPrice >= FREE_SHIPPING_THRESHOLD
      ? 0
      : shipping.shippingMethod === "express"
      ? 9.99
      : 4.99;
  const discount = promoApplied ? totalPrice * 0.1 : 0;
  const tax = (totalPrice - discount + shippingCost) * 0.22;
  const grandTotal = totalPrice - discount + shippingCost + tax;

  const stepIndex = steps.findIndex((s) => s.key === currentStep);

  if (items.length === 0 && currentStep !== "review") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-2xl font-bold mb-3">No items to checkout</h1>
        <p className="text-text-secondary text-sm mb-8">Add products to your cart first.</p>
        <a href="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white text-sm font-semibold uppercase tracking-wider hover:bg-accent-dark transition-colors">
          Browse Products
        </a>
      </div>
    );
  }

  const validateShipping = () => {
    const e: Record<string, string> = {};
    if (!shipping.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(shipping.email)) e.email = "Enter a valid email";
    if (!shipping.firstName) e.firstName = "First name is required";
    if (!shipping.lastName) e.lastName = "Last name is required";
    if (!shipping.address) e.address = "Address is required";
    if (!shipping.city) e.city = "City is required";
    if (!shipping.zip) e.zip = "ZIP code is required";
    if (!shipping.phone) e.phone = "Phone is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e: Record<string, string> = {};
    if (payment.method === "card") {
      if (!payment.cardNumber) e.cardNumber = "Card number is required";
      else if (payment.cardNumber.replace(/\s/g, "").length < 16) e.cardNumber = "Enter a valid card number";
      if (!payment.cardName) e.cardName = "Name on card is required";
      if (!payment.expiry) e.expiry = "Expiry date is required";
      if (!payment.cvv) e.cvv = "CVV is required";
      else if (payment.cvv.length < 3) e.cvv = "Enter a valid CVV";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goToStep = (step: Step) => {
    if (step === "payment" && !validateShipping()) return;
    if (step === "review" && !validatePayment()) return;
    setErrors({});
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlaceOrder = () => {
    clearCart();
    window.location.href = "/order-confirmation";
  };

  const formatCard = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 16);
    return v.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "").slice(0, 4);
    if (v.length > 2) return v.slice(0, 2) + " / " + v.slice(2);
    return v;
  };

  const detectCardBrand = (num: string): string => {
    const n = num.replace(/\s/g, "");
    if (n.startsWith("4")) return "visa";
    if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return "mastercard";
    if (n.startsWith("3")) return "amex";
    return "";
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 text-sm bg-surface border rounded-lg outline-none transition-all text-text-primary placeholder:text-text-muted ${
      errors[field]
        ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
        : "border-border focus:border-accent focus:ring-1 focus:ring-accent/20"
    }`;

  const cardBrand = detectCardBrand(payment.cardNumber);

  return (
    <div className="bg-surface-secondary min-h-screen">
      {/* Top bar */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/cart" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to cart</span>
          </a>
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">B</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-text-primary">BEAUTÉ</span>
          </a>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const isActive = step.key === currentStep;
              const isDone = i < stepIndex;
              return (
                <div key={step.key} className="flex items-center">
                  <button
                    onClick={() => isDone && goToStep(step.key)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-accent text-white"
                        : isDone
                        ? "bg-success/10 text-success cursor-pointer hover:bg-success/20"
                        : "text-text-muted"
                    }`}
                    disabled={!isDone && !isActive}
                  >
                    {isDone ? <Check className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                    <span className="hidden sm:inline">{step.label}</span>
                    <span className="sm:hidden">{i + 1}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className="flex items-center mx-1 sm:mx-3">
                      <div className={`w-8 sm:w-12 h-0.5 rounded ${isDone ? "bg-success" : "bg-border"}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left — Form */}
          <div className="lg:col-span-7">

            {/* ── STEP 1: SHIPPING ── */}
            {currentStep === "shipping" && (
              <div className="animate-fade-in-up space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Shipping Information</h2>
                    <p className="text-xs text-text-muted">Where should we deliver your order?</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-text-muted" />
                    Contact Information
                  </h3>
                  <div>
                    <input type="email" placeholder="Email address" value={shipping.email} onChange={(e) => setShipping({ ...shipping, email: e.target.value })} className={inputClass("email")} />
                    {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Address */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Home className="w-4 h-4 text-text-muted" />
                    Shipping Address
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input type="text" placeholder="First name" value={shipping.firstName} onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })} className={inputClass("firstName")} />
                        {errors.firstName && <p className="text-xs text-error mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <input type="text" placeholder="Last name" value={shipping.lastName} onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })} className={inputClass("lastName")} />
                        {errors.lastName && <p className="text-xs text-error mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <input type="text" placeholder="Street address" value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} className={inputClass("address")} />
                      {errors.address && <p className="text-xs text-error mt-1">{errors.address}</p>}
                    </div>
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" value={shipping.apartment} onChange={(e) => setShipping({ ...shipping, apartment: e.target.value })} className={inputClass("apartment")} />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div>
                        <input type="text" placeholder="City" value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} className={inputClass("city")} />
                        {errors.city && <p className="text-xs text-error mt-1">{errors.city}</p>}
                      </div>
                      <input type="text" placeholder="State / Province" value={shipping.state} onChange={(e) => setShipping({ ...shipping, state: e.target.value })} className={inputClass("state")} />
                      <div>
                        <input type="text" placeholder="ZIP / Postal code" value={shipping.zip} onChange={(e) => setShipping({ ...shipping, zip: e.target.value })} className={inputClass("zip")} />
                        {errors.zip && <p className="text-xs text-error mt-1">{errors.zip}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                        <select value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })} className={`${inputClass("country")} pl-10 appearance-none`}>
                          <option>Italy</option><option>Germany</option><option>France</option><option>Spain</option><option>Netherlands</option><option>Belgium</option><option>Austria</option><option>Portugal</option>
                        </select>
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                        <input type="tel" placeholder="Phone number" value={shipping.phone} onChange={(e) => setShipping({ ...shipping, phone: e.target.value })} className={`${inputClass("phone")} pl-10`} />
                        {errors.phone && <p className="text-xs text-error mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer pt-1">
                      <input type="checkbox" checked={shipping.saveInfo} onChange={(e) => setShipping({ ...shipping, saveInfo: e.target.checked })} className="w-4 h-4 rounded border-border text-accent focus:ring-accent" />
                      <span className="text-sm text-text-secondary">Save this information for next time</span>
                    </label>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-text-muted" />
                    Shipping Method
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: "standard" as const, label: "Standard Shipping", time: "5–7 business days", price: totalPrice >= FREE_SHIPPING_THRESHOLD ? "FREE" : "4.99 €" },
                      { id: "express" as const, label: "Express Shipping", time: "2–3 business days", price: "9.99 €" },
                    ].map((method) => (
                      <label key={method.id} onClick={() => setShipping({ ...shipping, shippingMethod: method.id })} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${shipping.shippingMethod === method.id ? "border-accent bg-accent-light" : "border-border hover:border-border-dark"}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center shrink-0">
                            {method.id === "express" ? <Truck className="w-4 h-4 text-accent" /> : <Package className="w-4 h-4 text-text-muted" />}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-text-primary">{method.label}</span>
                            <p className="text-xs text-text-muted mt-0.5">{method.time}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-bold ${method.price === "FREE" ? "text-success" : "text-text-primary"}`}>{method.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button onClick={() => goToStep("payment")} className="w-full py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-xl hover:bg-accent-dark transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Continue to Payment
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* ── STEP 2: PAYMENT ── */}
            {currentStep === "payment" && (
              <div className="animate-fade-in-up space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Payment Method</h2>
                    <p className="text-xs text-text-muted">All transactions are secure and encrypted</p>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="bg-surface border border-border rounded-xl overflow-hidden">
                  {paymentMethods.map((m) => {
                    const isActive = payment.method === m.id;
                    const Icon = m.icon;
                    return (
                      <div key={m.id}>
                        <button
                          onClick={() => setPayment({ ...payment, method: m.id })}
                          className={`w-full flex items-center gap-4 p-4 sm:p-5 border-b border-border last:border-b-0 transition-all cursor-pointer ${isActive ? "bg-accent-light" : "hover:bg-surface-secondary"}`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${isActive ? "border-accent" : "border-border-dark"}`}>
                            {isActive && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                          </div>
                          <Icon className="w-12 h-8 shrink-0" />
                          <div className="text-left flex-1">
                            <span className="text-sm font-semibold text-text-primary">{m.label}</span>
                          </div>
                          {m.cards.length > 0 && (
                            <div className="hidden sm:flex items-center gap-1.5">
                              {m.cards.map((CardIcon, i) => (
                                <CardIcon key={i} className="w-9 h-6" />
                              ))}
                            </div>
                          )}
                        </button>

                        {/* Expanded Card Form */}
                        {isActive && m.id === "card" && (
                          <div className="p-5 sm:p-6 bg-surface-secondary border-b border-border space-y-4 animate-fade-in-up">
                            {/* Accepted cards strip */}
                            <div className="flex items-center gap-2 sm:hidden mb-2">
                              <span className="text-[10px] text-text-muted uppercase tracking-wider font-medium">Accepted:</span>
                              <VisaIcon className="w-8 h-5" />
                              <MastercardIcon className="w-8 h-5" />
                              <AmexIcon className="w-8 h-5" />
                            </div>

                            <div>
                              <label className="block text-xs font-medium text-text-secondary mb-1.5">Card Number</label>
                              <div className="relative">
                                <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                                <input type="text" placeholder="1234 5678 9012 3456" value={payment.cardNumber} onChange={(e) => setPayment({ ...payment, cardNumber: formatCard(e.target.value) })} maxLength={19} className={`${inputClass("cardNumber")} pl-10 pr-24`} />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                  <VisaIcon className={`w-8 h-5 transition-opacity ${cardBrand && cardBrand !== "visa" ? "opacity-30" : "opacity-100"}`} />
                                  <MastercardIcon className={`w-8 h-5 transition-opacity ${cardBrand && cardBrand !== "mastercard" ? "opacity-30" : "opacity-100"}`} />
                                  <AmexIcon className={`w-8 h-5 transition-opacity ${cardBrand && cardBrand !== "amex" ? "opacity-30" : "opacity-100"}`} />
                                </div>
                              </div>
                              {errors.cardNumber && <p className="text-xs text-error mt-1">{errors.cardNumber}</p>}
                            </div>

                            <div>
                              <label className="block text-xs font-medium text-text-secondary mb-1.5">Name on Card</label>
                              <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                                <input type="text" placeholder="Full name as displayed on card" value={payment.cardName} onChange={(e) => setPayment({ ...payment, cardName: e.target.value })} className={`${inputClass("cardName")} pl-10`} />
                              </div>
                              {errors.cardName && <p className="text-xs text-error mt-1">{errors.cardName}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-medium text-text-secondary mb-1.5">Expiry Date</label>
                                <div className="relative">
                                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                                  <input type="text" placeholder="MM / YY" value={payment.expiry} onChange={(e) => setPayment({ ...payment, expiry: formatExpiry(e.target.value) })} maxLength={7} className={`${inputClass("expiry")} pl-10`} />
                                </div>
                                {errors.expiry && <p className="text-xs text-error mt-1">{errors.expiry}</p>}
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-text-secondary mb-1.5">Security Code (CVV)</label>
                                <div className="relative">
                                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                                  <input type="password" placeholder="***" value={payment.cvv} onChange={(e) => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })} maxLength={4} className={`${inputClass("cvv")} pl-10`} />
                                </div>
                                {errors.cvv && <p className="text-xs text-error mt-1">{errors.cvv}</p>}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 pt-1 text-xs text-text-muted">
                              <Lock className="w-3.5 h-3.5 text-success" />
                              <span>Your card details are encrypted and never stored on our servers</span>
                            </div>
                          </div>
                        )}

                        {/* PayPal expanded */}
                        {isActive && m.id === "paypal" && (
                          <div className="p-6 sm:p-8 bg-surface-secondary border-b border-border text-center animate-fade-in-up">
                            <PaypalIcon className="w-20 h-12 mx-auto mb-4" />
                            <p className="text-sm text-text-secondary mb-1">You will be redirected to <strong className="text-[#0070ba]">PayPal</strong> to complete your purchase.</p>
                            <p className="text-xs text-text-muted">Log in with your PayPal account or pay with a card via PayPal.</p>
                          </div>
                        )}

                        {/* Klarna expanded */}
                        {isActive && m.id === "klarna" && (
                          <div className="p-6 sm:p-8 bg-surface-secondary border-b border-border text-center animate-fade-in-up">
                            <KlarnaIcon className="w-20 h-12 mx-auto mb-4" />
                            <p className="text-sm text-text-secondary mb-3">Pay in <strong className="text-text-primary">3 interest-free installments</strong></p>
                            <div className="flex items-center justify-center gap-2 mb-3">
                              {[1, 2, 3].map((n) => (
                                <div key={n} className="flex flex-col items-center bg-surface rounded-lg border border-border px-4 py-2.5">
                                  <span className="text-[10px] text-text-muted uppercase">Month {n}</span>
                                  <span className="text-sm font-bold text-text-primary">{(grandTotal / 3).toFixed(2)} €</span>
                                </div>
                              ))}
                            </div>
                            <p className="text-xs text-text-muted">No additional fees. Subject to approval by Klarna.</p>
                          </div>
                        )}

                        {/* Apple Pay expanded */}
                        {isActive && m.id === "applepay" && (
                          <div className="p-6 sm:p-8 bg-surface-secondary border-b border-border text-center animate-fade-in-up">
                            <ApplePayIcon className="w-20 h-12 mx-auto mb-4" />
                            <p className="text-sm text-text-secondary">Confirm with <strong className="text-text-primary">Face ID</strong> or <strong className="text-text-primary">Touch ID</strong> to pay instantly.</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Billing Address */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Home className="w-4 h-4 text-text-muted" />
                    Billing Address
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: "same" as const, label: "Same as shipping address" },
                      { id: "different" as const, label: "Use a different billing address" },
                    ].map((opt) => (
                      <label key={opt.id} className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${payment.billingAddress === opt.id ? "border-accent bg-accent-light" : "border-border hover:border-border-dark"}`}>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${payment.billingAddress === opt.id ? "border-accent" : "border-border-dark"}`}>
                          {payment.billingAddress === opt.id && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <span className="text-sm text-text-primary">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => { setErrors({}); setCurrentStep("shipping"); }} className="px-6 py-3.5 border border-border text-sm font-semibold uppercase tracking-wider rounded-xl text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer">
                    Back
                  </button>
                  <button onClick={() => goToStep("review")} className="flex-1 py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-xl hover:bg-accent-dark transition-colors cursor-pointer flex items-center justify-center gap-2">
                    Review Order
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: REVIEW ── */}
            {currentStep === "review" && (
              <div className="animate-fade-in-up space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Review Your Order</h2>
                    <p className="text-xs text-text-muted">Confirm everything looks correct before placing your order</p>
                  </div>
                </div>

                {/* Shipping summary */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-text-muted" />
                      Shipping Details
                    </h3>
                    <button onClick={() => setCurrentStep("shipping")} className="text-xs text-accent font-semibold hover:underline cursor-pointer">Edit</button>
                  </div>
                  <div className="text-sm text-text-secondary space-y-1 pl-6">
                    <p className="text-text-primary font-medium">{shipping.firstName} {shipping.lastName}</p>
                    <p>{shipping.address}{shipping.apartment ? `, ${shipping.apartment}` : ""}</p>
                    <p>{shipping.zip} {shipping.city}, {shipping.country}</p>
                    <p className="flex items-center gap-1.5 mt-1"><Mail className="w-3 h-3" /> {shipping.email}</p>
                    <p className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> {shipping.phone}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs bg-surface-secondary rounded-lg px-3 py-2 border border-border-light">
                      <Truck className="w-3.5 h-3.5 text-text-muted" />
                      {shipping.shippingMethod === "express" ? "Express Shipping (2–3 days)" : "Standard Shipping (5–7 days)"}
                    </div>
                  </div>
                </div>

                {/* Payment summary */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-text-muted" />
                      Payment Details
                    </h3>
                    <button onClick={() => setCurrentStep("payment")} className="text-xs text-accent font-semibold hover:underline cursor-pointer">Edit</button>
                  </div>
                  <div className="pl-6">
                    {payment.method === "card" ? (
                      <div className="flex items-center gap-3">
                        {cardBrand === "visa" && <VisaIcon className="w-10 h-7" />}
                        {cardBrand === "mastercard" && <MastercardIcon className="w-10 h-7" />}
                        {cardBrand === "amex" && <AmexIcon className="w-10 h-7" />}
                        {!cardBrand && <CreditCardIcon className="w-10 h-7" />}
                        <div>
                          <span className="text-sm text-text-primary font-medium">•••• •••• •••• {payment.cardNumber.slice(-4)}</span>
                          <p className="text-xs text-text-muted">{payment.cardName} — Exp: {payment.expiry}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        {payment.method === "paypal" && <PaypalIcon className="w-12 h-8" />}
                        {payment.method === "klarna" && <KlarnaIcon className="w-12 h-8" />}
                        {payment.method === "applepay" && <ApplePayIcon className="w-12 h-8" />}
                        <span className="text-sm text-text-primary font-medium capitalize">{payment.method === "applepay" ? "Apple Pay" : payment.method}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Items summary */}
                <div className="bg-surface border border-border rounded-xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold mb-4">Order Items ({totalItems})</h3>
                  <div className="space-y-3">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex gap-3 items-center">
                        <div className="relative w-14 h-14 bg-surface-secondary rounded-lg overflow-hidden shrink-0 border border-border-light">
                          <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover" />
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">{quantity}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-text-muted uppercase tracking-wider">{product.brand}</p>
                          <p className="text-sm text-text-primary line-clamp-1">{product.name}</p>
                        </div>
                        <span className="text-sm font-semibold text-text-primary shrink-0">{(product.price * quantity).toFixed(2)} €</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => { setErrors({}); setCurrentStep("payment"); }} className="px-6 py-3.5 border border-border text-sm font-semibold uppercase tracking-wider rounded-xl text-text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer">
                    Back
                  </button>
                  <button onClick={handlePlaceOrder} className="flex-1 flex items-center justify-center gap-2.5 py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-xl hover:bg-accent-dark transition-colors cursor-pointer">
                    <Lock className="w-4 h-4" />
                    Place Order — {grandTotal.toFixed(2)} €
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right — Order Summary sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 sticky top-28">
              <button onClick={() => setOrderSummaryOpen(!orderSummaryOpen)} className="lg:hidden w-full flex items-center justify-between mb-4 cursor-pointer">
                <h3 className="text-sm font-bold uppercase tracking-wider">Order Summary ({totalItems})</h3>
                <ChevronDown className={`w-4 h-4 transition-transform ${orderSummaryOpen ? "rotate-180" : ""}`} />
              </button>
              <h3 className="hidden lg:block text-sm font-bold uppercase tracking-wider mb-5">Order Summary</h3>

              <div className={`${orderSummaryOpen ? "block" : "hidden"} lg:block`}>
                <div className="space-y-3 mb-5 max-h-[280px] overflow-y-auto scrollbar-none">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex gap-3 items-center">
                      <div className="relative w-12 h-12 bg-surface-secondary rounded-lg overflow-hidden shrink-0 border border-border-light">
                        <Image src={product.image} alt={product.name} fill sizes="48px" className="object-cover" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[9px] font-bold rounded-full flex items-center justify-center">{quantity}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-text-primary line-clamp-1">{product.name}</p>
                        <p className="text-[10px] text-text-muted">{product.brand}</p>
                      </div>
                      <span className="text-xs font-semibold text-text-primary shrink-0">{(product.price * quantity).toFixed(2)} €</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted" />
                      <input type="text" placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-secondary border border-border rounded-lg outline-none focus:border-accent text-text-primary" />
                    </div>
                    <button onClick={() => { if (promoCode.trim()) setPromoApplied(true); }} className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${promoApplied ? "bg-success text-white" : "bg-surface-tertiary text-text-primary hover:bg-accent hover:text-white"}`}>
                      {promoApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-success mt-1.5 flex items-center gap-1">
                      <Check className="w-3 h-3" /> 10% discount applied
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between"><span className="text-text-secondary">Subtotal</span><span className="font-medium">{totalPrice.toFixed(2)} €</span></div>
                {promoApplied && <div className="flex justify-between text-success"><span>Discount (10%)</span><span className="font-medium">-{discount.toFixed(2)} €</span></div>}
                <div className="flex justify-between"><span className="text-text-secondary">Shipping</span><span className={`font-medium ${shippingCost === 0 ? "text-success" : ""}`}>{shippingCost === 0 ? "FREE" : `${shippingCost.toFixed(2)} €`}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Tax (IVA 22%)</span><span className="font-medium">{tax.toFixed(2)} €</span></div>
                <div className="pt-3 border-t border-border flex justify-between"><span className="font-bold text-base">Total</span><span className="font-extrabold text-lg">{grandTotal.toFixed(2)} €</span></div>
              </div>

              <div className="mt-5 pt-5 border-t border-border-light space-y-2.5">
                {[
                  { icon: Lock, text: "SSL Encrypted & Secure Payment" },
                  { icon: Truck, text: "Free Shipping on Orders Over 49 €" },
                  { icon: Shield, text: "30-Day Money-Back Guarantee" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-success shrink-0" />
                    <span className="text-xs text-text-secondary">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border-light">
                <p className="text-[10px] text-text-muted mb-2.5 uppercase tracking-wider font-medium">We Accept</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <VisaIcon className="w-10 h-6" />
                  <MastercardIcon className="w-10 h-6" />
                  <AmexIcon className="w-10 h-6" />
                  <PaypalIcon className="w-10 h-6" />
                  <ApplePayIcon className="w-10 h-6" />
                  <GooglePayIcon className="w-10 h-6" />
                  <KlarnaIcon className="w-10 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
