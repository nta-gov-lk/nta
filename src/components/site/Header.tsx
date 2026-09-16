import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Student Life" },
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-12 w-auto shrink-0 sm:h-14" />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-base">
              National Television Academy
            </span>
            <span className="block truncate text-[11px] text-muted-foreground">
              Sri Lanka Rupavahini Corporation
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary bg-primary-soft" }}
                inactiveProps={{
                  className: "text-foreground/80 hover:text-primary hover:bg-muted",
                }}
                className="rounded-md px-3 py-2 text-sm font-semibold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/apply"
            className="hidden rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Apply Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-md p-2 text-primary hover:bg-muted xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 pb-4 pt-2 xl:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/80" }}
                className="border-b border-border py-3 text-sm font-semibold last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-gold px-4 py-3 text-center text-sm font-bold text-gold-foreground"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
