"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Check } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsletter: true,
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string | boolean) => setForm({ ...form, [field]: value });

  const passwordStrength = (): { label: string; color: string; width: string } => {
    const p = form.password;
    if (!p) return { label: "", color: "", width: "0%" };
    let score = 0;
    if (p.length >= 6) score++;
    if (p.length >= 10) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (score <= 1) return { label: "Weak", color: "bg-error", width: "20%" };
    if (score <= 2) return { label: "Fair", color: "bg-warning", width: "40%" };
    if (score <= 3) return { label: "Good", color: "bg-warning", width: "60%" };
    if (score <= 4) return { label: "Strong", color: "bg-success", width: "80%" };
    return { label: "Very Strong", color: "bg-success", width: "100%" };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";
    if (!form.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Enter a valid email";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6) err.password = "Minimum 6 characters";
    if (form.password !== form.confirmPassword) err.confirmPassword = "Passwords do not match";
    if (!form.terms) err.terms = "You must accept the terms";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      window.location.href = "/account";
    }
  };

  const inputClass = (field: string) =>
    `w-full pl-11 pr-4 py-3 text-sm bg-surface border rounded-lg outline-none transition-all text-text-primary placeholder:text-text-muted ${
      errors[field] ? "border-error focus:border-error" : "border-border focus:border-accent focus:ring-1 focus:ring-accent/20"
    }`;

  const strength = passwordStrength();

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center">
            <span className="text-white font-extrabold text-xl">E</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Create Account</h1>
          <p className="text-sm text-text-secondary">Join Elara Shop for exclusive offers and faster checkout</p>
        </div>

        {/* Social */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-text-primary">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-sm font-medium text-text-primary">Twitter</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-text-muted uppercase tracking-wider font-medium">or register with email</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">First Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                <input type="text" placeholder="John" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass("firstName")} />
              </div>
              {errors.firstName && <p className="text-xs text-error mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Last Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                <input type="text" placeholder="Doe" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass("lastName")} />
              </div>
              {errors.lastName && <p className="text-xs text-error mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} />
            </div>
            {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Phone Number <span className="text-text-muted">(optional)</span></label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input type="tel" placeholder="+39 123 456 7890" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("phone")} />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input type={showPassword ? "text" : "password"} placeholder="Create a strong password" value={form.password} onChange={(e) => update("password", e.target.value)} className={`${inputClass("password")} pr-11`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary cursor-pointer">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-error mt-1">{errors.password}</p>}
            {form.password && (
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex-1 h-1.5 bg-border-light rounded-full overflow-hidden mr-3">
                    <div className={`h-full rounded-full transition-all duration-300 ${strength.color}`} style={{ width: strength.width }} />
                  </div>
                  <span className={`text-[10px] font-semibold ${strength.color === "bg-error" ? "text-error" : strength.color === "bg-warning" ? "text-warning" : "text-success"}`}>{strength.label}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-text-muted">
                  <span className={form.password.length >= 6 ? "text-success" : ""}>
                    {form.password.length >= 6 ? <Check className="w-3 h-3 inline mr-0.5" /> : "•"} 6+ characters
                  </span>
                  <span className={/[A-Z]/.test(form.password) ? "text-success" : ""}>
                    {/[A-Z]/.test(form.password) ? <Check className="w-3 h-3 inline mr-0.5" /> : "•"} Uppercase
                  </span>
                  <span className={/[0-9]/.test(form.password) ? "text-success" : ""}>
                    {/[0-9]/.test(form.password) ? <Check className="w-3 h-3 inline mr-0.5" /> : "•"} Number
                  </span>
                  <span className={/[^A-Za-z0-9]/.test(form.password) ? "text-success" : ""}>
                    {/[^A-Za-z0-9]/.test(form.password) ? <Check className="w-3 h-3 inline mr-0.5" /> : "•"} Symbol
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input type={showConfirm ? "text" : "password"} placeholder="Confirm your password" value={form.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)} className={`${inputClass("confirmPassword")} pr-11`} />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary cursor-pointer">
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-xs text-error mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" checked={form.newsletter} onChange={(e) => update("newsletter", e.target.checked)} className="w-4 h-4 rounded border-border text-accent focus:ring-accent mt-0.5" />
              <span className="text-sm text-text-secondary">Send me exclusive offers, new arrivals, and beauty tips</span>
            </label>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" checked={form.terms} onChange={(e) => update("terms", e.target.checked)} className="w-4 h-4 rounded border-border text-accent focus:ring-accent mt-0.5" />
              <span className="text-sm text-text-secondary">
                I agree to the <a href="/terms" className="text-accent font-medium hover:underline">Terms of Service</a> and <a href="/privacy" className="text-accent font-medium hover:underline">Privacy Policy</a>
              </span>
            </label>
            {errors.terms && <p className="text-xs text-error">{errors.terms}</p>}
          </div>

          <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent-dark transition-colors cursor-pointer">
            Create Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-sm text-text-secondary mt-8">
          Already have an account?{" "}
          <a href="/login" className="text-accent font-semibold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}
