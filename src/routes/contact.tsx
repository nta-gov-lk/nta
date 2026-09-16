import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero, Section } from "@/components/site/ui-bits";
import { contact } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | National Television Academy" },
      {
        name: "description",
        content: "Contact the National Television Academy: address, phone, email, office hours and inquiry form.",
      },
      { property: "og:title", content: "Contact the National Television Academy" },
      { property: "og:description", content: "Address, phone, email, campus hours and an online inquiry form." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the academy office"
        intro="Reach us by phone, email or the inquiry form. Contact details below are placeholders pending official confirmation."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Academy Address</h2>
              <div className="mt-4 flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                  {contact.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm font-semibold hover:text-primary">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all text-sm font-semibold hover:text-primary">
                  <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Campus Hours</h2>
              <ul className="mt-4 space-y-3">
                {contact.hours.map((h) => (
                  <li key={h.day} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-3 text-sm last:border-0 last:pb-0">
                    <span className="flex min-w-0 items-center gap-2 font-semibold">
                      <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                      <span className="truncate">{h.day}</span>
                    </span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border-2 border-dashed border-gold bg-gold-soft">
              <div className="flex h-64 flex-col items-center justify-center gap-2 px-6 text-center">
                <MapPin className="h-8 w-8 text-primary" aria-hidden />
                <p className="font-display font-bold text-primary-dark">Google Maps embed placeholder</p>
                <p className="text-sm text-foreground/70">
                  Replace this block with the official campus map embed once the location is confirmed.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
