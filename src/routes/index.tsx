import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  FileSearch,
  Briefcase,
  EyeOff,
  ArrowRight,
  Building2,
  Users,
  Scale,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SectionHeading,
  CtaRow,
  ConfidentialityBanner,
  LocationSection,
} from "@/components/site/Blocks";
import { aboutContent, services, approachSteps, faqs, whatsappLink } from "@/lib/site";
import heroImage from "@/assets/hero-city.jpg";
import documentsImage from "@/assets/documents.jpg";
import corporateImage from "@/assets/corporate.jpg";

const title = "Private Investigation & Corporate Intelligence | TRUE DETECTIVE";
const description =
  "TRUE DETECTIVE provides discreet private investigation, surveillance, verification and corporate intelligence services across Tamil Nadu and Bangalore.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const trust = [
  {
    icon: ShieldCheck,
    title: "Confidential",
    text: "Sensitive assignments are handled with discretion.",
  },
  {
    icon: FileSearch,
    title: "Evidence-Based",
    text: "We focus on facts, verification and reliable information.",
  },
  {
    icon: Briefcase,
    title: "Professional",
    text: "Every assignment is approached systematically.",
  },
  {
    icon: EyeOff,
    title: "Discreet",
    text: "We understand the importance of confidentiality in sensitive matters.",
  },
];

const why = [
  {
    title: "Confidentiality",
    text: "Sensitive information is handled with strict discretion.",
  },
  {
    title: "Professional Approach",
    text: "Every assignment is handled systematically and responsibly.",
  },
  {
    title: "Discreet Operations",
    text: "We understand the importance of maintaining confidentiality during sensitive enquiries.",
  },
  {
    title: "Fact-Focused",
    text: "Our work is centered on gathering and verifying relevant information.",
  },
  {
    title: "Client-Focused",
    text: "Investigation strategies are aligned with the client's specific objectives.",
  },
  {
    title: "Regional Understanding",
    text: "We operate across Tamil Nadu and Bangalore and understand the local environment.",
  },
];

const clients = [
  {
    icon: Users,
    title: "Individuals",
    text: "Personal investigations, matrimonial matters and confidential enquiries.",
  },
  {
    icon: Building2,
    title: "Businesses",
    text: "Corporate investigations, employee verification, fraud concerns and due diligence.",
  },
  {
    icon: Scale,
    title: "Legal Professionals",
    text: "Fact finding and investigation support related to legal matters.",
  },
  {
    icon: Network,
    title: "Organizations",
    text: "Corporate intelligence, risk investigation and brand protection.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImage}
          alt="City business district at dusk, viewed through a high-rise window"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="container-td py-28 lg:py-40">
          <div className="max-w-3xl animate-rise">
            <p className="eyebrow">Private Investigation &amp; Corporate Intelligence</p>
            <h1 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-[3.9rem]">
              When Facts Matter, We Investigate.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/70">
              Confidential and professional investigative services, including surveillance,
              verification, and fact-finding, for individuals, businesses, and legal professionals
              across Tamil Nadu.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">Request a Confidential Consultation</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/services">
                  Explore Our Services <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-b border-border bg-card">
        <div className="container-td grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div
              key={t.title}
              className="border-border px-1 py-10 sm:px-6 lg:border-l lg:first:border-l-0"
            >
              <t.icon className="size-5 text-accent" />
              <h3 className="mt-5 text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-y">
        <div className="container-td grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow={aboutContent.eyebrow} title={aboutContent.strapline} />
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
            <div className="mt-8">
              <Button asChild variant="navy" size="xl">
                <Link to="/contact">Talk to Our Team Confidentially</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-elegant">
            <img
              src={documentsImage}
              alt="Investigator reviewing confidential case documents"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-surface">
        <div className="container-td section-y">
          <SectionHeading
            eyebrow="Services"
            title="Our Investigation Services"
            subtitle="Professional investigation and intelligence solutions for personal, legal and corporate requirements."
          />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-card p-8 transition-colors hover:bg-navy hover:text-navy-foreground"
              >
                <div className="h-px w-10 bg-accent" />
                <h3 className="mt-6 text-lg leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-navy-foreground/70">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="section-y">
        <div className="container-td grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-lg shadow-elegant lg:order-1">
            <img
              src={corporateImage}
              alt="Corporate boardroom prepared for a confidential briefing"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="For Business"
              title="Protect Your Business With Better Intelligence"
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Business risks are not always visible.</p>
              <p>
                Internal misconduct, fraudulent activity, conflicts of interest, undisclosed
                relationships and commercial risks can impact organizations significantly.
              </p>
              <p>
                TRUE DETECTIVE helps businesses investigate concerns, verify information and
                understand potential risks through discreet and structured investigation.
              </p>
            </div>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {[
                "Corporate investigations",
                "Fraud investigations",
                "Employee verification",
                "Kickback investigations",
                "Conflict-of-interest investigations",
                "Due diligence",
                "Brand protection",
                "Corporate intelligence",
                "Litigation support",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button asChild variant="navy" size="xl">
                <Link to="/corporate-intelligence">Discuss a Corporate Requirement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Individuals */}
      <section className="border-y border-border bg-surface">
        <div className="container-td section-y grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Private Investigations"
              title="When Personal Matters Require Answers"
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Personal situations can involve uncertainty, conflicting information and difficult
                decisions.
              </p>
              <p>
                TRUE DETECTIVE provides discreet investigation and fact-finding services for
                individuals dealing with sensitive personal matters.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="navy" size="xl">
                <Link to="/private-investigations">Speak With Us Confidentially</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-px self-start bg-border sm:grid-cols-2">
            {[
              "Matrimonial investigations",
              "Background verification",
              "Personal enquiries",
              "Surveillance",
              "Relationship-related fact finding",
              "Identity verification",
              "Address verification",
              "Asset-related enquiries where legally permissible",
            ].map((i) => (
              <li key={i} className="bg-card p-5 text-sm leading-relaxed">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Due diligence */}
      <section className="section-y">
        <div className="container-td">
          <div className="grid gap-10 rounded-lg border border-border bg-card p-10 shadow-elegant lg:grid-cols-[1fr_1fr] lg:items-center lg:p-14">
            <SectionHeading eyebrow="Due Diligence" title="Know Who You Are Dealing With" />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Before entering into an important business relationship, partnership, investment or
                transaction, understanding the available facts can be critical.
              </p>
              <p>
                Our due diligence services help clients gather and verify relevant information to
                support informed decision-making.
              </p>
              <div className="pt-2">
                <Button asChild variant="accent" size="xl">
                  <Link to="/contact">Request Due Diligence Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-td section-y">
          <SectionHeading
            eyebrow="Our Approach"
            title="A Structured Approach to Investigation"
            onDark
          />
          <ol className="mt-14 grid gap-px bg-navy-foreground/10 lg:grid-cols-5">
            {approachSteps.map((s) => (
              <li key={s.number} className="bg-navy p-7">
                <span className="font-display text-sm tracking-[0.2em] text-accent">
                  {s.number}
                </span>
                <h3 className="mt-4 text-lg text-navy-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/60">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="section-y">
        <div className="container-td">
          <SectionHeading eyebrow="Why Us" title="Why Clients Choose TRUE DETECTIVE" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div
                key={w.title}
                className="rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-elegant"
              >
                <h3 className="text-base font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-y border-border bg-surface">
        <div className="container-td section-y">
          <SectionHeading eyebrow="Clients" title="Who We Work With" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-card p-7">
                <c.icon className="size-5 text-accent" />
                <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConfidentialityBanner />

      {/* FAQ */}
      <section className="section-y">
        <div className="container-td grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Questions Clients Often Ask" />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <LocationSection />

      {/* Final CTA */}
      <section className="section-y">
        <div className="container-td text-center">
          <SectionHeading
            align="center"
            eyebrow="Get in touch"
            title="Let's Discuss Your Requirement Confidentially"
            subtitle="Tell us briefly about your requirement and our team will contact you to discuss the appropriate next steps."
          />
          <div className="mt-10 flex justify-center">
            <CtaRow />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Prefer messaging?{" "}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="underline">
              Chat with us on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
