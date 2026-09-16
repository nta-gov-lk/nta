import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import type { Course } from "@/data/site";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between gap-3 border-b-4 border-gold bg-primary px-5 py-4 text-primary-foreground">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gold">{course.category}</p>
          <h3 className="mt-1 text-lg font-bold leading-snug">{course.title}</h3>
        </div>
        {course.badge && (
          <span className="shrink-0 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-foreground">
            {course.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{course.summary}</p>

        <dl className="mt-5 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <dt className="sr-only">Duration</dt>
            <dd>{course.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <dt className="sr-only">Intake</dt>
            <dd className="text-muted-foreground">{course.intake}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          <Link
            to="/courses/$id"
            params={{ id: course.id }}
            className="inline-flex flex-1 items-center justify-center rounded-md border-2 border-primary px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View Course
          </Link>
          <Link
            to="/apply"
            search={{ course: course.id }}
            className="inline-flex flex-1 items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Apply
          </Link>
        </div>
      </div>
    </article>
  );
}
