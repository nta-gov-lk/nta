import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, X } from "lucide-react";
import { PageHero, Section } from "@/components/site/ui-bits";
import { news, type NewsItem } from "@/data/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events | National Television Academy" },
      {
        name: "description",
        content:
          "Intake announcements, workshops, student productions and academy events at the National Television Academy.",
      },
      { property: "og:title", content: "News & Events — National Television Academy" },
      {
        property: "og:description",
        content: "The latest announcements, workshops and student productions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

const categories = ["All", "Intake", "Workshop", "Production", "Announcement"] as const;

function NewsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<NewsItem | null>(null);

  const shown = filter === "All" ? news : news.filter((n) => n.category === filter);

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening at the academy"
        intro="Intake announcements, guest workshops and student production news. All dates shown are placeholders pending confirmation."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground/75 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {shown.map((n) => (
            <article
              key={n.id}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary-dark">
                  {n.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                  {n.date}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug">{n.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {n.excerpt}
              </p>
              <button
                type="button"
                onClick={() => setActive(n)}
                className="mt-5 self-start rounded-md border-2 border-primary px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </Section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-card p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary-dark">
                  {active.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold">{active.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{active.date}</p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActive(null)}
                className="rounded-full p-2 hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{active.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
