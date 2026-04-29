import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  badge?: number;
}

export default function IconButton({
  children,
  badge,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`relative p-2 text-text-primary hover:text-accent transition-colors duration-200 cursor-pointer ${className}`}
      {...props}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold text-white bg-accent rounded-full px-1">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  );
}
