import { useEffect, useRef, useState } from "react";
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
  CheckCircle2,
  MapPin,
  Search,
  BadgeCheck,
  Handshake,
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
  AboutGallery,
  ServicesGrid,
} from "@/components/site/Blocks";
import { ClientsSection } from "@/components/site/Clients";
import { WhyUsSection } from "@/components/site/WhyUs";
import { CorporateSection, PersonalSection } from "@/components/site/InvestigationSections";
import { aboutContent, approachSteps, faqs, whatsappLink } from "@/lib/site";
import { LogoWatermark, Wordmark } from "@/components/site/Logo";

const title = "Private Investigation & Corporate Intelligence | TRUE DETECTIVE";
const description =
  "TRUE DETECTIVE provides discreet private investigation, surveillance, verification and corporate intelligence services across Tamil Nadu.";

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

const pillars = [
  { term: "Experience", text: "A decade of field work across personal, lifestyle and corporate matters." },
  { term: "Discretion", text: "Your information is handled privately and shared only as appropriate." },
  { term: "Intelligence", text: "Careful research and verification, not guesswork or assumptions." },
  { term: "Results", text: "Clear, fact-based findings you can act on with confidence." },
];

const aboutHighlights = [
  "Over 10 years of hands-on experience across personal, lifestyle and corporate assignments.",
  "Skilled in surveillance, verification, background checks and fact-finding.",
  "Clear findings and practical support, handled with confidentiality and professionalism.",
];

const objectiveSteps = [
  { icon: Search, word: "Find", text: "the facts." },
  { icon: BadgeCheck, word: "Verify", text: "the information." },
  { icon: Handshake, word: "Help", text: "our clients make informed decisions." },
];

function ObjectiveBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-16 overflow-hidden rounded-lg bg-navy px-6 py-10 text-navy-foreground sm:px-12 sm:py-12"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        Our objective is simple
      </p>
      <div className="relative mt-10">
        <div
          aria-hidden
          className="absolute top-7 right-[16.6%] left-[16.6%] hidden h-px bg-navy-foreground/15 md:block"
        >
          {shown && <div className="animate-draw h-full bg-accent" style={{ animationDuration: "2.2s" }} />}
        </div>
        <ol className="relative grid gap-10 md:grid-cols-3">
          {objectiveSteps.map((step, i) => (
            <li
              key={step.word}
              className={`text-center ${shown ? "animate-rise" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.7}s` }}
            >
              <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-navy text-accent ring-2 ring-accent/60">
                {shown && (
                  <span
                    aria-hidden
                    className="animate-ping-once absolute inset-0 rounded-full ring-2 ring-accent"
                    style={{ animationDelay: `${i * 0.7 + 0.3}s` }}
                  />
                )}
                <step.icon className="size-6" strokeWidth={1.6} />
              </span>
              <p className="mt-5 font-display text-2xl text-accent sm:text-3xl">{step.word}</p>
              <p className="mt-1 text-sm text-navy-foreground/75 sm:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const audiences = [
  {
    icon: Users,
    title: "Individuals",
    text: "Discreet help with personal, matrimonial and family concerns.",
  },
  {
    icon: Building2,
    title: "Businesses",
    text: "Verification, fact-finding and intelligence for confident decisions.",
  },
  {
    icon: Scale,
    title: "Legal Professionals",
    text: "Investigation and fact-finding support for disputes and litigation.",
  },
];

// Cards appear one after another the first time the block scrolls into view.
function WhoWeServe() {
  const ref = useRef<HTMLUListElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className="mt-8 grid gap-3 sm:grid-cols-3">
      {audiences.map((a, i) => (
        <li
          key={a.title}
          className={`rounded-lg border border-border bg-card p-4 shadow-sm ${
            shown ? "animate-rise" : "opacity-0"
          }`}
          style={{ animationDelay: `${i * 0.25}s` }}
        >
          <span className="relative flex size-14 items-center justify-center rounded-full bg-navy text-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-card">
            <a.icon className="size-6" strokeWidth={1.6} />
          </span>
          <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
        </li>
      ))}
    </ul>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <LogoWatermark toss className="absolute top-1/2 right-[4%] -z-10 hidden size-[34rem] -translate-y-1/2 lg:block" />
        <div className="container-td py-28 lg:py-40">
          <div className="max-w-3xl">
            <Wordmark
              className="animate-rise block text-3xl sm:text-4xl lg:text-5xl"
              style={{ animationDelay: "3s" }}
              onDark
            />
            <p className="eyebrow animate-rise mt-5">Private Investigation &amp; Corporate Intelligence</p>
            <h1 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-[3.9rem]">
              {["When", "Facts", "Matter,", "We", "Investigate."].map((word, i) => (
                <span
                  key={word}
                  className={`animate-word mr-[0.28em] ${word === "Investigate." ? "text-accent" : ""}`}
                  style={{ animationDelay: `${0.25 + i * 0.16}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p
              className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/70"
              style={{ animationDelay: "1.25s" }}
            >
              Confidential and professional investigative services, including surveillance,
              verification, and fact-finding, for individuals, businesses, and legal professionals
              across Tamil Nadu.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "1.5s" }}>
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">Request a Confidential Consultation</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/services">
                  Explore Our Services <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="mt-14 max-w-3xl">
              <div aria-hidden className="h-px bg-navy-foreground/15">
                <div
                  className="animate-draw h-full bg-accent"
                  style={{ animationDuration: "2.4s", animationDelay: "1.7s" }}
                />
              </div>
              <ol className="mt-8 grid gap-6 sm:grid-cols-3">
                {objectiveSteps.map((step, i) => {
                  const delay = 1.9 + i * 0.6;
                  return (
                    <li
                      key={step.word}
                      className="animate-rise group flex items-start gap-4"
                      style={{ animationDelay: `${delay}s` }}
                    >
                      <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/50 transition-transform duration-300 group-hover:scale-110">
                        <span
                          aria-hidden
                          className="animate-ping-once absolute inset-0 rounded-full ring-2 ring-accent"
                          style={{ animationDelay: `${delay + 0.3}s` }}
                        />
                        <span
                          aria-hidden
                          className="animate-halo absolute inset-0 rounded-full bg-accent/30"
                          style={{ animationDelay: `${delay + 1.4}s` }}
                        />
                        <step.icon className="relative size-5" strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="font-display text-xs tracking-[0.2em] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-0.5 font-display text-xl text-navy-foreground">
                          {step.word}
                        </p>
                        <p className="mt-1 text-sm leading-snug text-navy-foreground/70">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
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
        <div className="container-td">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading eyebrow={aboutContent.eyebrow} title={aboutContent.strapline} />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every assignment starts with listening. We take the time to understand your
                situation, agree on what needs to be established, and then work methodically
                towards accurate, usable answers.
              </p>
              <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {pillars.map((p) => (
                  <div key={p.term} className="rule-accent">
                    <dt className="font-display text-base font-semibold text-foreground">
                      {p.term}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </dd>
                  </div>
                ))}
              </dl>
              <WhoWeServe />
              <ul className="mt-8 space-y-3">
                {aboutHighlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button asChild variant="navy" size="xl">
                  <Link to="/contact">Talk to Our Team Confidentially</Link>
                </Button>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent"
                >
                  More about us
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative lg:pl-6 lg:pb-8">
              <div
                aria-hidden
                className="absolute inset-y-6 right-[-14px] left-10 hidden rounded-lg border-2 border-accent/50 lg:block"
              />
              <div className="relative">
                <AboutGallery className="relative" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-navy/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy-foreground backdrop-blur">
                  <MapPin className="size-3.5 text-accent" /> Tamil Nadu
                </span>
              </div>
            </div>
          </div>

          <ObjectiveBand />
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
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* Corporate */}
      <CorporateSection />

      {/* Individuals */}
      <PersonalSection />

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
      <WhyUsSection />

      {/* Who we serve */}
      <ClientsSection />

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
