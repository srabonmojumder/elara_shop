"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) err.email = "Enter a valid email";
    if (!password) err.password = "Password is required";
    else if (password.length < 6) err.password = "Minimum 6 characters";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      window.location.href = "/account";
    }
  };

  const inputClass = (field: string) =>
    `w-full pl-11 pr-4 py-3 text-sm bg-surface border rounded-lg outline-none transition-all text-text-primary placeholder:text-text-muted ${
      errors[field] ? "border-error focus:border-error" : "border-border focus:border-accent focus:ring-1 focus:ring-accent/20"
    }`;

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center">
            <span className="text-white font-extrabold text-xl">B</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Welcome Back</h1>
          <p className="text-sm text-text-secondary">Sign in to your account to continue</p>
        </div>

        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-text-primary">Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-lg hover:bg-surface-secondary transition-colors cursor-pointer">
            <svg
              className="w-5 h-5 text-text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              role="img"
            >
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
            <span className="text-sm font-medium text-text-primary">Continue with Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-text-muted uppercase tracking-wider font-medium">or sign in with email</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass("email")} />
            </div>
            {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-text-secondary">Password</label>
              <a href="/forgot-password" className="text-xs text-accent font-medium hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass("password")} pr-11`}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary cursor-pointer">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-error mt-1">{errors.password}</p>}
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="w-4 h-4 rounded border-border text-accent focus:ring-accent" />
            <span className="text-sm text-text-secondary">Remember me for 30 days</span>
          </label>

          <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-accent-dark transition-colors cursor-pointer">
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-text-secondary mt-8">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-accent font-semibold hover:underline">Create one</a>
        </p>
      </div>
    </div>
  );
}
