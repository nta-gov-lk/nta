import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { contact, languages } from "@/data/site";

const socialIcons = {
  Facebook,
  YouTube: Youtube,
  Instagram,
  LinkedIn: Linkedin,
} as const;

export function TopBar() {
  const [lang, setLang] = useState("en");

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-2 text-xs sm:flex sm:flex-wrap sm:justify-between">
        <p className="min-w-0 truncate font-medium tracking-wide opacity-95">{contact.tagline}</p>

        <div className="flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-2">
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hidden items-center gap-1.5 hover:text-gold md:flex">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden items-center gap-1.5 hover:text-gold md:flex">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {contact.email}
          </a>

          <div className="flex items-center overflow-hidden rounded-full border border-primary-foreground/30">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                  lang === l.code ? "bg-gold text-gold-foreground" : "hover:bg-primary-foreground/10"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {contact.socials.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <a key={s.label} href={s.href} aria-label={s.label} className="opacity-90 hover:text-gold hover:opacity-100">
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
