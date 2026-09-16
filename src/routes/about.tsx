import { createFileRoute } from "@tanstack/react-router";
import { Building2, Eye, Target } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";
import { timeline } from "@/data/site";
import studioA from "@/assets/studio-a.jpg";
import studioB from "@/assets/studio-b.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the National Television Academy | SLRC Training" },
      {
        name: "description",
        content:
          "History, leadership, vision and facilities of the National Television Academy, the training arm of the Sri Lanka Rupavahini Corporation.",
      },
      { property: "og:title", content: "About the National Television Academy" },
      {
        property: "og:description",
        content:
          "Our history, SLRC affiliation, vision and mission, and the broadcast facilities students train in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const leadership = [
  {
    role: "Director of the Academy",
    name: "[PLACEHOLDER — name]",
    note: "Academic direction and programme oversight.",
  },
  {
    role: "Head of Training",
    name: "[PLACEHOLDER — name]",
    note: "Curriculum, instructors and studio scheduling.",
  },
  {
    role: "Studio Operations Lead",
    name: "[PLACEHOLDER — name]",
    note: "Facilities, equipment and production support.",
  },
];

const facilities = [
  "Broadcast television studios with lighting grids",
  "Production gallery and vision-mixing suite",
  "Sound-treated dubbing and voice recording booths",
  "Non-linear editing suites",
  "Camera and lighting equipment stores",
  "Rehearsal and drama practice rooms",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Academy"
        title="A national broadcaster's classroom"
        intro="The National Television Academy trains media professionals inside the working facilities of the Sri Lanka Rupavahini Corporation — the country's national television broadcaster."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on four decades of national broadcasting"
              intro="Since national television began in Sri Lanka, the corporation has carried the responsibility of producing drama, news and educational programming in Sinhala, Tamil and English. The academy exists to pass that craft on."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Students learn where programmes are actually made. Instructors are working
              professionals — directors, presenters, camera operators, lighting technicians and
              dubbing artists — who teach the standards they are held to on transmission days. That
              proximity to real production is the academy's defining advantage.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={studioA}
              alt="Presenting practice at the studio news desk"
              loading="lazy"
              className="h-72 w-full rounded-xl object-cover"
            />
            <img
              src={studioB}
              alt="Camera and lighting training session"
              loading="lazy"
              className="mt-0 h-72 w-full rounded-xl object-cover sm:mt-8"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              body: "To be Sri Lanka's leading centre for practical television and media education, producing graduates who raise the standard of national broadcasting.",
            },
            {
              icon: Target,
              title: "Our Mission",
              body: "To deliver hands-on, industry-led training in performance, presenting and broadcast technology in all three national languages, inside genuine production facilities.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-background p-8">
              <c.icon className="h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="SLRC Affiliation" title="Our place within the corporation" />
        <div className="mt-10 space-y-6 border-l-2 border-gold pl-6">
          {timeline.map((t) => (
            <div key={t.year + t.title} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-background"
                aria-hidden
              />
              <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                {t.year}
              </p>
              <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading
          eyebrow="Leadership"
          title="Who leads the academy"
          intro="Names and titles below are placeholders pending official confirmation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.role} className="rounded-xl border border-border bg-background p-6">
              <div className="h-1 w-12 bg-gold" aria-hidden />
              <h3 className="mt-4 font-bold text-primary">{p.role}</h3>
              <p className="mt-1 text-sm font-semibold">{p.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Facilities" title="Where you will train" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
            >
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
              <span className="text-sm font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
