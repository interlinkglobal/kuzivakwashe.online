import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

type Variant = "fade" | "up" | "down" | "left" | "right" | "zoom" | "blur" | "rotate";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal variant="up" className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[oklch(0.78_0.18_220)]">
        <span className="h-px w-8 bg-gradient-neon" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
  reveal,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  reveal?: Variant;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="relative mx-auto max-w-7xl px-5">
        {reveal ? <Reveal variant={reveal}>{children}</Reveal> : children}
      </div>
    </section>
  );
}