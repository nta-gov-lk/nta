import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { CourseCard } from "@/components/site/CourseCard";
import { Gallery } from "@/components/site/Gallery";
import { Logo } from "@/components/site/Logo";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { contact, courses, news, stats, studentExperience, timeline, whyChoose } from "@/data/site";
import heroStudio from "@/assets/hero-studio.jpg";
import studioA from "@/assets/studio-a.jpg";
import studioB from "@/assets/studio-b.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "National Television Academy | SLRC Media Training, Sri Lanka" },
      {
        name: "description",
        content:
          "Train in acting, television presenting, camera & lighting and dubbing inside the studios of the Sri Lanka Rupavahini Corporation.",
      },
      { property: "og:title", content: "National Television Academy — Shape Your Future in Television" },
      {
        property: "og:description",
        content: "Practical, studio-based media training from Sri Lanka's national television broadcaster.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroStudio}
          alt="Television studio floor lit for a programme"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-primary/60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:py-32 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Sri Lanka Rupavahini Corporation</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Shape Your Future in Television and Media
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Practical, studio-based training in acting, presenting, camera, lighting and voice — taught by working
              broadcast professionals inside Sri Lanka's national television facilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground transition-colors hover:bg-white"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center rounded-md border-2 border-white/70 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="hidden rounded-2xl bg-white/95 p-6 shadow-2xl lg:block">
            <Logo className="h-44 w-auto" />
          </div>
        </div>
      </section>

      {/* Academy intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The Academy"
              title="Where Media Talent Meets Industry Experience"
              intro="The National Television Academy is the training arm of the Sri Lanka Rupavahini Corporation. Students learn where national television is made — from the studio floor to the gallery, the lighting grid to the dubbing booth."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Programmes are short, intensive and practical. Every course ends with produced work: a teledrama, a live
              bulletin, a lighting portfolio or a voice showreel that begins a professional career.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={studioA} alt="Student presenting from the studio news desk" loading="lazy" className="h-64 w-full rounded-xl object-cover sm:h-80" />
            <img src={studioB} alt="Students operating a broadcast camera" loading="lazy" className="mt-8 h-64 w-full rounded-xl object-cover sm:h-80" />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-primary px-4 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground/85">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <Section>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading eyebrow="Programmes" title="Featured Courses" intro="Four programmes covering performance, presenting, technical craft and voice." />
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            View all courses
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </Section>

      {/* Why choose */}
      <Section className="bg-card">
        <SectionHeading eyebrow="Why the Academy" title="Why Choose the National Television Academy" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => (
            <div key={w.title} className="rounded-xl border border-border bg-background p-6">
              <span className="font-display text-3xl font-extrabold text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Heritage timeline */}
      <Section>
        <SectionHeading eyebrow="Heritage" title="Four Decades of National Broadcasting" intro="The academy stands on the history of the Sri Lanka Rupavahini Corporation." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {timeline.map((t) => (
            <div key={t.year + t.title} className="rounded-xl border-t-4 border-gold bg-card p-6">
              <p className="font-display text-2xl font-extrabold text-primary">{t.year}</p>
              <h3 className="mt-2 font-bold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Admissions CTA */}
      <section className="relative overflow-hidden bg-ink px-4 py-20 text-white">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/50 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Admissions Open</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Turn Your Passion Into a Profession</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Applications are accepted across all four programmes. Choose your course, submit your application and book
            your audition or assessment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/apply" className="rounded-md bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground hover:bg-white">
              Apply Now
            </Link>
            <Link to="/admissions" className="rounded-md border-2 border-white/70 px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-primary">
              Admissions Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Student experience */}
      <Section>
        <SectionHeading eyebrow="Student Experience" title="Life at the Academy" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studentExperience.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-gold" aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </div>
        <Link to="/student-life" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
          Explore student life
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Section>

      {/* News */}
      <Section className="bg-card">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading eyebrow="News & Events" title="Latest from the Academy" />
          <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            All news & events
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <article key={n.id} className="flex flex-col rounded-xl border border-border bg-background p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-bold text-primary-dark">{n.category}</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <CalendarDays className="h-3 w-3" aria-hidden />
                  {n.date}
                </span>
              </div>
              <h3 className="mt-3 font-bold leading-snug">{n.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{n.excerpt}</p>
              <Link to="/news" className="mt-4 text-sm font-bold text-primary hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Gallery preview */}
      <Section>
        <SectionHeading eyebrow="Gallery" title="Inside the Studios" />
        <div className="mt-8">
          <Gallery />
        </div>
        <Link to="/gallery" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
          View full gallery
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Section>

      {/* Contact */}
      <Section className="bg-card" id="contact">
        <SectionHeading eyebrow="Contact" title="Get in Touch" intro="Contact details below are placeholders pending official confirmation." />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-background p-6">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-muted-foreground">{contact.addressLines.join(", ")}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="font-semibold hover:text-primary">
                    {contact.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a href={`mailto:${contact.email}`} className="break-all font-semibold hover:text-primary">
                    {contact.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-muted-foreground">
                    {contact.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gold bg-gold-soft px-6 text-center">
              <MapPin className="h-7 w-7 text-primary" aria-hidden />
              <p className="font-display font-bold text-primary-dark">Interactive map placeholder</p>
              <p className="text-sm text-foreground/70">Add the campus map embed once the address is confirmed.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
