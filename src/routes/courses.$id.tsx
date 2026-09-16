import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Clock, Download, GraduationCap, Wallet } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/site/ui-bits";
import { courses } from "@/data/site";

export const Route = createFileRoute("/courses/$id")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.id === params.id);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Course not found | National Television Academy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { course } = loaderData;
    return {
      meta: [
        { title: `${course.title} | National Television Academy` },
        { name: "description", content: course.summary },
        { property: "og:title", content: `${course.title} — National Television Academy` },
        { property: "og:description", content: course.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();

  return (
    <>
      <div className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/courses"
            className="text-xs font-bold uppercase tracking-widest text-gold hover:underline"
          >
            ← All courses
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold">
              {course.category}
            </span>
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold">
              {course.level}
            </span>
            {course.badge && (
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                {course.badge}
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">{course.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            {course.summary}
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="space-y-12">
            <div>
              <h2 className="brand-rule text-2xl font-bold">Course Overview</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {course.overview}
              </p>
            </div>

            <div>
              <h2 className="brand-rule text-2xl font-bold">Learning Outcomes</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-sm">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="brand-rule text-2xl font-bold">Module Syllabus</h2>
              <ol className="mt-6 space-y-3">
                {course.modules.map((m, i) => (
                  <li
                    key={m.title}
                    className="flex gap-4 rounded-lg border border-border bg-card p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-bold">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="brand-rule text-2xl font-bold">Practical Studio Sessions</h2>
              <ul className="mt-6 space-y-2">
                {course.practical.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="brand-rule text-2xl font-bold">Entry Requirements</h2>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {course.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="brand-rule text-2xl font-bold">Career Paths</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {course.careers.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-primary-soft px-3 py-1.5 text-sm font-semibold text-primary-dark"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="brand-rule text-2xl font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="mt-6">
                {course.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left text-sm font-bold">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                Course Details
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <div>
                    <dt className="font-semibold">Duration</dt>
                    <dd className="text-muted-foreground">{course.duration}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <div>
                    <dt className="font-semibold">Next intake</dt>
                    <dd className="text-muted-foreground">{course.intake}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <div>
                    <dt className="font-semibold">Fees</dt>
                    <dd className="text-muted-foreground">{course.fee}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <div>
                    <dt className="font-semibold">Award</dt>
                    <dd className="text-muted-foreground">
                      {course.level} — National Television Academy
                    </dd>
                  </div>
                </div>
              </dl>

              <Link
                to="/apply"
                search={{ course: course.id }}
                className="mt-6 flex w-full items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-bold text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Apply for this course
              </Link>
              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download syllabus
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Syllabus PDF placeholder — attach the official document here.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
