import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "card" | "minimal";
  className?: string;
}

export default function FeatureGrid({
  items,
  columns = 3,
  variant = "card",
  className = "",
}: FeatureGridProps) {
  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4 md:gap-6 ${className}`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        const wrapper =
          variant === "card"
            ? "bg-surface border border-border rounded-xl p-6 hover:border-accent hover:shadow-md transition-all"
            : "";
        return (
          <div key={i} className={wrapper}>
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
