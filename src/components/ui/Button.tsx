import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light active:scale-[0.98]",
  accent:
    "bg-accent text-white hover:bg-accent-dark active:scale-[0.98]",
  secondary:
    "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
  outline:
    "bg-transparent text-white border border-white hover:bg-white hover:text-primary",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-surface-tertiary",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
