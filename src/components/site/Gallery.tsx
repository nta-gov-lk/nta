import { useState } from "react";
import { X } from "lucide-react";
import { galleryCategories } from "@/data/site";
import acting from "@/assets/acting.jpg";
import dubbing from "@/assets/dubbing.jpg";
import hero from "@/assets/hero-studio.jpg";
import studioA from "@/assets/studio-a.jpg";
import studioB from "@/assets/studio-b.jpg";

type Shot = { src: string; alt: string; category: string; tall?: boolean };

export const galleryItems: Shot[] = [
  { src: studioA, alt: "Student presenting from the studio news desk", category: "Presenting" },
  { src: acting, alt: "Acting workshop rehearsal on stage", category: "Acting", tall: true },
  { src: studioB, alt: "Students setting up a broadcast camera and lights", category: "Camera & Lighting" },
  { src: dubbing, alt: "Recording booth with microphone and script", category: "Dubbing" },
  { src: hero, alt: "Television studio floor lit for a programme", category: "Facilities", tall: true },
  { src: studioB, alt: "Practical camera training session", category: "Training" },
  { src: studioA, alt: "Anchoring practice with a full crew", category: "Training" },
  { src: acting, alt: "Student showcase performance", category: "Events" },
  { src: hero, alt: "Studio lighting grid and set", category: "Facilities" },
  { src: dubbing, alt: "Voice performance session in progress", category: "Dubbing", tall: true },
  { src: studioB, alt: "Lighting rig workshop", category: "Camera & Lighting" },
  { src: studioA, alt: "Trilingual presenting practice", category: "Presenting" },
];

export function Gallery({ items = galleryItems, masonry = false }: { items?: Shot[]; masonry?: boolean }) {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Shot | null>(null);

  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
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

      <div className={masonry ? "mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4" : "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
        {shown.map((shot, i) => (
          <button
            key={`${shot.src}-${i}`}
            type="button"
            onClick={() => setActive(shot)}
            className={`group relative block w-full overflow-hidden rounded-xl border border-border bg-card ${
              masonry ? "break-inside-avoid" : ""
            }`}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                masonry ? "" : shot.tall ? "h-80" : "h-60"
              }`}
            />
            <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-bold text-primary-foreground">
              {shot.category}
            </span>
          </button>
        ))}
      </div>

      {shown.length === 0 && <p className="mt-8 text-sm text-muted-foreground">No images in this category yet.</p>}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="max-h-[75vh] w-full rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {active.alt} — <span className="text-gold">{active.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
