import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Download, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, Placeholder, Section, SectionHeading } from "@/components/site/ui-bits";
import {
  admissionFaqs,
  admissionSteps,
  eligibility,
  intakeDates,
  requiredDocuments,
} from "@/data/site";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | National Television Academy" },
      {
        name: "description",
        content:
          "How to apply to the National Television Academy: application steps, eligibility, documents, intake dates and fees.",
      },
      { property: "og:title", content: "Admissions — National Television Academy" },
      {
        property: "og:description",
        content: "Step-by-step guidance on applying, eligibility and key intake dates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="How to join the academy"
        intro="Applications are made online, followed by an audition, screen test or aptitude assessment depending on the programme you choose."
      />

      <Section>
        <SectionHeading eyebrow="Step by Step" title="The application process" />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {admissionSteps.map((s) => (
            <li key={s.step} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-base font-bold text-primary-foreground">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/apply"
            className="rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground hover:bg-primary hover:text-primary-foreground"
          >
            Start your application
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download prospectus
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Prospectus PDF placeholder — attach the official document here.
        </p>
      </Section>

      <Section className="bg-card">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Eligibility" title="Who can apply" />
            <ul className="mt-8 space-y-3">
              {eligibility.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Documents" title="What to prepare" />
            <ul className="mt-8 space-y-3">
              {requiredDocuments.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Key Dates"
              title="Intake calendar"
              intro="All dates are placeholders until the intake calendar is confirmed."
            />
            <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
              {intakeDates.map((d) => (
                <li
                  key={d.label}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-4"
                >
                  <span className="flex min-w-0 items-center gap-2 text-sm font-semibold">
                    <CalendarDays className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span className="truncate">{d.label}</span>
                  </span>
                  <Placeholder>{d.value}</Placeholder>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Fees"
              title="Course fees"
              intro="Fee levels are set per intake and confirmed in your offer letter."
            />
            <div className="mt-8 rounded-xl border-2 border-dashed border-gold bg-gold-soft p-8">
              <p className="font-display text-lg font-bold text-primary-dark">
                Fee schedule placeholder
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Insert the official fee table here, including registration fee, tuition per
                programme, any studio or materials levy, and available instalment plans.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex justify-between gap-4 border-b border-gold/40 pb-2">
                  <span>Registration fee</span> <Placeholder>[PLACEHOLDER]</Placeholder>
                </li>
                <li className="flex justify-between gap-4 border-b border-gold/40 pb-2">
                  <span>Certificate programmes</span> <Placeholder>[PLACEHOLDER]</Placeholder>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Diploma programmes</span> <Placeholder>[PLACEHOLDER]</Placeholder>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHeading eyebrow="Questions" title="Admissions FAQ" />
        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {admissionFaqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-sm font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
