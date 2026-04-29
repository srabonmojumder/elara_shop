type BadgeVariant = "sale" | "new" | "bestseller" | "exclusive";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  sale: "bg-accent text-white",
  new: "bg-primary text-white",
  bestseller: "bg-success text-white",
  exclusive: "bg-violet-600 text-white",
};

function getVariant(label: string): BadgeVariant {
  const l = label.toLowerCase();
  if (l.includes("sale")) return "sale";
  if (l.includes("best")) return "bestseller";
  if (l.includes("exclusive")) return "exclusive";
  return "new";
}

export default function Badge({ label, variant, className = "" }: BadgeProps) {
  const v = variant ?? getVariant(label);
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${variantStyles[v]} ${className}`}
    >
      {label}
    </span>
  );
}
