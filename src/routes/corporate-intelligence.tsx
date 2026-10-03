import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, CtaRow, ConfidentialityBanner } from "@/components/site/Blocks";
import { corporateIntelligenceContent } from "@/lib/site";

const title = "Corporate Intelligence | Risk, Fraud & Due Diligence | TRUE DETECTIVE";
const description =
  "Corporate intelligence, due diligence, employee verification and fraud investigation services helping organizations understand risk before it affects the business.";

export const Route = createFileRoute("/corporate-intelligence")({
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
  component: CorporateIntelligence,
});

function CorporateIntelligence() {
  const { hero, intro, why, what, how, services } = corporateIntelligenceContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <CtaRow onDark />
      </PageHero>

      <section className="section-y">
        <div className="container-td max-w-3xl space-y-4 text-muted-foreground">
          {intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-td section-y">
          <SectionHeading eyebrow="Our Approach" title="Why - What We Do - How We Do It" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-7">
              <p className="eyebrow">Why</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{why}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-7">
              <p className="eyebrow">What We Do</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{what}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-7">
              <p className="eyebrow">How We Do It</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{how}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-td">
          <SectionHeading eyebrow="Scope" title="Corporate Intelligence Services" />
          <ul className="mt-10 grid gap-px self-start bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s} className="bg-card p-5 text-sm leading-relaxed">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConfidentialityBanner />
    </>
  );
}
