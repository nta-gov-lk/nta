import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>{intro}</p>
      )}
      <div
        className={`mt-6 h-1 w-16 bg-gradient-to-r from-primary to-gold ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:py-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">{intro}</p>
      </div>
    </div>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-dashed border-gold bg-gold-soft px-2 py-0.5 text-xs font-semibold text-primary-dark">
      {children}
    </span>
  );
}

export function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/apply"
      className={`inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground ${className}`}
    >
      Apply Now
    </Link>
  );
}
