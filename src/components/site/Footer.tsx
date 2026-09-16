import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, courses } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg bg-white p-3">
            <Logo className="h-20 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            The training academy of the Sri Lanka Rupavahini Corporation, preparing performers,
            presenters and technicians for national television and media.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About the Academy" },
              { to: "/courses", label: "Courses" },
              { to: "/admissions", label: "Admissions" },
              { to: "/student-life", label: "Student Life" },
              { to: "/news", label: "News & Events" },
              { to: "/gallery", label: "Gallery" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Programmes
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {courses.map((c) => (
              <li key={c.id}>
                <Link to="/courses/$id" params={{ id: c.id }} className="hover:text-gold">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span>{contact.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </li>
          </ul>
          <Link
            to="/apply"
            className="mt-5 inline-flex rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground hover:bg-primary hover:text-primary-foreground"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sri Lanka Rupavahini (TV) Corporation. Powered by
            President's Media Division
          </p>
          <p className="text-white/50">
            Contact details, dates and fees shown are placeholders pending confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}
