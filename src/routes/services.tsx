import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  CtaRow,
  ConfidentialityBanner,
  SectionHeading,
  ServicesGrid,
} from "@/components/site/Blocks";

const title = "Investigation Services | Corporate, Fraud & Matrimonial | TRUE DETECTIVE";
const description =
  "Pre and post-matrimonial investigation, employment verification, missing person tracing, surveillance, insurance claim investigation, corporate intelligence, due diligence and fraud investigation in Tamil Nadu and Bangalore.";

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
        <div className="container-td">
          <ServicesGrid headingLevel="h2" />
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
