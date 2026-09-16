import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { CourseCard } from "@/components/site/CourseCard";
import { PageHero, Section } from "@/components/site/ui-bits";
import { courses } from "@/data/site";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses | National Television Academy" },
      {
        name: "description",
        content:
          "Acting, television presenting, camera & lighting and dubbing programmes taught inside SLRC broadcast studios.",
      },
      { property: "og:title", content: "Courses at the National Television Academy" },
      {
        property: "og:description",
        content: "Search and filter our acting, presenting, technical and voice programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

const categories = ["All", "Acting", "Presenting", "Technical", "Voice"] as const;
const levels = ["All", "Foundation", "Certificate", "Diploma"] as const;

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [level, setLevel] = useState<string>("All");

  const filtered = useMemo(
    () =>
      courses.filter((c) => {
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q || c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q);
        return (
          matchesQuery &&
          (category === "All" || c.category === category) &&
          (level === "All" || c.level === level)
        );
      }),
    [query, category, level],
  );

  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Courses built around the studio floor"
        intro="Every programme combines craft teaching with scheduled production time in genuine broadcast facilities."
      />

      <Section>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
            <label className="relative block">
              <span className="sr-only">Search courses</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                maxLength={80}
                placeholder="Search courses..."
                className="w-full rounded-md border border-input bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>
            <label className="block text-sm">
              <span className="sr-only">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary lg:w-44"
              >
                {categories.map((c) => (
                  <option key={c}>{c === "All" ? "All categories" : c}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="sr-only">Level</span>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary lg:w-44"
              >
                {levels.map((l) => (
                  <option key={l}>{l === "All" ? "All levels" : l}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {filtered.length} of {courses.length} programmes
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No courses match your search. Try clearing the filters.
          </p>
        )}
      </Section>
    </>
  );
}
