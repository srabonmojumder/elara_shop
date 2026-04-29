interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
