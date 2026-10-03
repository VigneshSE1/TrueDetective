import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  SectionHeading,
  ConfidentialityBanner,
  LocationSection,
  CtaRow,
  AboutGallery,
} from "@/components/site/Blocks";
import { aboutContent, approachSteps } from "@/lib/site";

const title = "About TRUE DETECTIVE | Investigation Agency Tamil Nadu & Bangalore";
const description =
  "Learn how TRUE DETECTIVE approaches private investigation and corporate intelligence - discreet enquiries, verification and fact-based reporting across Tamil Nadu and Bangalore.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Investigation Built Around Facts"
        description="Professional private investigation and corporate intelligence services for clients who need clarity in situations where facts are uncertain."
      >
        <CtaRow primaryLabel="Talk to Our Team Confidentially" onDark />
      </PageHero>

      <section className="section-y">
        <div className="container-td grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">{aboutContent.eyebrow}</p>
            <h2 className="mt-4 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.4rem]">
              {aboutContent.strapline}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {aboutContent.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <blockquote className="rule-accent mt-8 text-foreground">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Our objective is simple
              </p>
              <p className="mt-2 font-display text-xl leading-snug">
                Find the facts. Verify the information. Help our clients make informed decisions.
              </p>
            </blockquote>
            <div className="pt-4">
              <Button asChild variant="navy" size="xl">
                <Link to="/contact">Talk to Our Team Confidentially</Link>
              </Button>
            </div>
          </div>
          <AboutGallery />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-td section-y">
          <SectionHeading eyebrow="How We Work" title="A Structured Approach to Investigation" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {approachSteps.map((s) => (
              <li key={s.number} className="rounded-lg border border-border bg-card p-6">
                <span className="font-display text-sm tracking-[0.2em] text-accent">
                  {s.number}
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ConfidentialityBanner />
      <LocationSection />
    </>
  );
}
