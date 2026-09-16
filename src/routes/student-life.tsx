import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";
import { studentExperience } from "@/data/site";
import acting from "@/assets/acting.jpg";
import dubbing from "@/assets/dubbing.jpg";
import studioA from "@/assets/studio-a.jpg";
import studioB from "@/assets/studio-b.jpg";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life | National Television Academy" },
      {
        name: "description",
        content:
          "Studio environment, media equipment, student showcases and industry workshops at the National Television Academy.",
      },
      { property: "og:title", content: "Student Life at the National Television Academy" },
      { property: "og:description", content: "What it is like to train inside a national broadcaster's studios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentLifePage,
});

const equipment = [
  "Broadcast studio cameras and pedestals",
  "Studio lighting grids and portable kits",
  "Teleprompters and autocue systems",
  "Sound-treated recording booths",
  "Field ENG camera kits",
  "Non-linear editing workstations",
];

const workshops = [
  { title: "Directing for Multi-Camera Drama", note: "Guest session — [PLACEHOLDER date]" },
  { title: "Newsroom Ethics & Accuracy", note: "Guest session — [PLACEHOLDER date]" },
  { title: "Colour Grading for Television", note: "Guest session — [PLACEHOLDER date]" },
  { title: "Building a Professional Showreel", note: "Guest session — [PLACEHOLDER date]" },
];

function StudentLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="Learning inside a working broadcaster"
        intro="Academy life follows the rhythm of production: rehearsals, rigs, recordings and reviews, alongside a trilingual community of performers and technicians."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The Studio Environment"
              title="Your classroom has a lighting grid"
              intro="Students work to studio discipline from week one — call times, comms, floor etiquette and equipment care are taught alongside the craft itself."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={studioA} alt="Anchoring practice in the studio" loading="lazy" className="h-56 w-full rounded-xl object-cover" />
            <img src={studioB} alt="Camera setup during a practical session" loading="lazy" className="mt-8 h-56 w-full rounded-xl object-cover" />
            <img src={acting} alt="Drama rehearsal in progress" loading="lazy" className="h-56 w-full rounded-xl object-cover" />
            <img src={dubbing} alt="Voice recording booth" loading="lazy" className="mt-8 h-56 w-full rounded-xl object-cover" />
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading eyebrow="Experience" title="What your term looks like" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studentExperience.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-background p-6">
              <div className="h-1 w-12 bg-gold" aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Equipment" title="Media equipment you will use" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {equipment.map((e) => (
                <li key={e} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Workshops" title="Industry guest sessions" />
            <ul className="mt-8 space-y-3">
              {workshops.map((w) => (
                <li key={w.title} className="rounded-lg border-l-4 border-primary bg-card p-4">
                  <p className="font-bold">{w.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{w.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-primary">
        <SectionHeading
          light
          align="center"
          eyebrow="Showcase"
          title="Every student leaves with work to show"
          intro="Graduating cohorts screen their teledramas, bulletins and showreels at an end-of-term showcase attended by academy staff and industry guests."
        />
      </Section>
    </>
  );
}
