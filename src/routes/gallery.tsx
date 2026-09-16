import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { PageHero, Section } from "@/components/site/ui-bits";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | National Television Academy" },
      {
        name: "description",
        content:
          "Photographs of training, acting, presenting, camera & lighting, dubbing sessions, events and facilities.",
      },
      { property: "og:title", content: "Gallery — National Television Academy" },
      {
        property: "og:description",
        content: "Inside the studios: training, productions, events and facilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the academy studios"
        intro="Training sessions, productions, events and facilities. Select a category or open an image to view it full size."
      />
      <Section>
        <Gallery masonry />
      </Section>
    </>
  );
}
