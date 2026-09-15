import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, CtaRow, ConfidentialityBanner } from "@/components/site/Blocks";
import { privateInvestigationsContent } from "@/lib/site";

const title = "Private Investigations | Matrimonial & Personal Enquiries | TRUE DETECTIVE";
const description =
  "Discreet pre-matrimony and post-matrimony investigation services, background verification and confidential personal enquiries across Tamil Nadu.";

export const Route = createFileRoute("/private-investigations")({
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
  component: PrivateInvestigations,
});

function PrivateInvestigations() {
  const { hero, intro, matrimony, services } = privateInvestigationsContent;

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
          <SectionHeading
            eyebrow="Matrimonial Investigations"
            title="Pre-Matrimony & Post-Matrimony Investigations"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {matrimony.map((m) => (
              <div
                key={m.title}
                className="rounded-lg border border-border bg-card p-8 shadow-elegant"
              >
                <h3 className="text-xl">{m.title}</h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="eyebrow">Why</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.why}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">What We Do</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.what}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">How We Do It</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.how}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-td">
          <SectionHeading eyebrow="Scope" title="Private Investigation Services" />
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
