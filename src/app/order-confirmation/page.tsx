"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  Package,
  Truck,
  Mail,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

export default function OrderConfirmationPage() {
  const [copied, setCopied] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    setOrderNumber(
      `BT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-secondary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Success Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            Order Confirmed!
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto">
            Thank you for your purchase. We&apos;ve sent a confirmation email
            with your order details.
          </p>
        </div>

        {/* Order Number */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 mb-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-1">
                Order Number
              </p>
              <p className="text-lg sm:text-xl font-extrabold text-text-primary tracking-wider">
                {orderNumber}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium border border-border rounded-lg hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-success" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 mb-4 animate-fade-in-up">
          <h2 className="text-sm font-semibold mb-5">What Happens Next</h2>
          <div className="space-y-0">
            {[
              {
                icon: Mail,
                title: "Confirmation Email Sent",
                desc: "Check your inbox for order details and receipt.",
                done: true,
              },
              {
                icon: Package,
                title: "Order Processing",
                desc: "We are preparing your items for shipment.",
                done: false,
                active: true,
              },
              {
                icon: Truck,
                title: "Shipped & Delivered",
                desc: "You will receive tracking info via email once shipped.",
                done: false,
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      step.done
                        ? "bg-success text-white"
                        : step.active
                        ? "bg-accent text-white"
                        : "bg-surface-tertiary text-text-muted"
                    }`}
                  >
                    {step.done ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <step.icon className="w-4 h-4" />
                    )}
                  </div>
                  {i < 2 && (
                    <div
                      className={`w-0.5 h-10 my-1 rounded ${
                        step.done ? "bg-success" : "bg-border"
                      }`}
                    />
                  )}
                </div>
                <div className="pb-6">
                  <p
                    className={`text-sm font-medium ${
                      step.done || step.active
                        ? "text-text-primary"
                        : "text-text-muted"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help section */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 mb-8 animate-fade-in-up">
          <h2 className="text-sm font-semibold mb-3">Need Help?</h2>
          <p className="text-sm text-text-secondary mb-4">
            If you have any questions about your order, our customer support
            team is here to help.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/track-order"
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/help"
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/returns"
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              Returns Policy
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent-dark transition-colors text-center"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/products"
            className="flex-1 flex items-center justify-center py-3.5 border border-border text-sm font-semibold uppercase tracking-wider rounded-lg text-text-primary hover:border-accent hover:text-accent transition-colors text-center"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
