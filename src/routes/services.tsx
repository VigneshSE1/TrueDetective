import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaRow, ConfidentialityBanner, SectionHeading } from "@/components/site/Blocks";
import { services } from "@/lib/site";

const title = "Investigation Services | Corporate, Fraud & Matrimonial | TRUE DETECTIVE";
const description =
  "Corporate investigations, fraud investigation, employee verification, due diligence, surveillance, litigation support and matrimonial investigation services in Tamil Nadu and Bangalore.";

export const Route = createFileRoute("/services")({
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
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Investigation Services"
        description="Professional investigation and intelligence solutions for personal, legal and corporate requirements."
      >
        <CtaRow onDark />
      </PageHero>

      <section className="section-y">
        <div className="container-td grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-card p-8 transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              <div className="h-px w-10 bg-accent" />
              <h2 className="mt-6 text-lg leading-snug">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-navy-foreground/70">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-td section-y">
          <SectionHeading
            align="center"
            eyebrow="Next step"
            title="Not sure which service applies to your situation?"
            subtitle="Share a brief outline of your requirement and our team will advise on the appropriate approach."
          />
          <div className="mt-10 flex justify-center">
            <CtaRow />
          </div>
        </div>
      </section>

      <ConfidentialityBanner />
    </>
  );
}
