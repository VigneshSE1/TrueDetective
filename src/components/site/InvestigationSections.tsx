import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Clock,
  EyeOff,
  FileText,
  Heart,
  Lock,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Slideshow, useInView, type Slide } from "@/components/site/Blocks";
import { cn } from "@/lib/utils";
import corporatePhoto from "@/assets/corporate.jpg";
import ledgerImage from "@/assets/about/slide-7.svg";
import whiteCollarImage from "@/assets/about/slide-16.svg";
import theftImage from "@/assets/about/slide-17.svg";
import briberyImage from "@/assets/about/slide-18.svg";
import brandImage from "@/assets/about/slide-14.svg";
import dueDiligenceImage from "@/assets/about/slide-15.svg";

import documentsPhoto from "@/assets/documents.jpg";
import surveillancePhoto from "@/assets/surveillance.jpg";
import matrimonialImage from "@/assets/about/slide-1.svg";
import postMarriageImage from "@/assets/about/slide-9.svg";
import missingPersonImage from "@/assets/about/slide-4.svg";
import surveillanceImage from "@/assets/about/slide-2.svg";
import identityImage from "@/assets/about/slide-19.svg";

type Point = { icon: LucideIcon; title: string; text: string };

type SectionConfig = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  items: string[];
  slides: Slide[];
  ctaLabel: string;
  whatEyebrow: string;
  whatTitle: string;
  what: Point[];
  whyTitle: string;
  why: Point[];
  reverse?: boolean;
  tinted?: boolean;
};

const slides: Slide[] = [
  {
    src: corporatePhoto,
    alt: "Corporate boardroom prepared for a confidential briefing",
    caption: "Confidential corporate briefings",
  },
  {
    src: ledgerImage,
    alt: "Illustration of a ledger with flagged entries under a magnifying glass",
    caption: "Corporate & fraud investigations",
  },
  {
    src: whiteCollarImage,
    alt: "Illustration of a ledger with an inflated chart, a briefcase and handcuffs",
    caption: "White-collar crime investigations",
  },
  {
    src: theftImage,
    alt: "Illustration of warehouse shelves with a missing box under a security camera",
    caption: "Theft in companies",
  },
  {
    src: briberyImage,
    alt: "Illustration of unbalanced scales above an envelope of cash passed between two people",
    caption: "Bribery investigations",
  },
  {
    src: brandImage,
    alt: "Illustration of a trademark shield with a genuine and a counterfeit product",
    caption: "Brand protection & counterfeit tracing",
  },
  {
    src: dueDiligenceImage,
    alt: "Illustration of a verified document and a company building",
    caption: "Due diligence & verification",
  },
];

const businessServices = [
  "Corporate investigations",
  "Fraud investigations",
  "Employee verification",
  "White-collar crime investigations",
  "Theft in companies",
  "Bribery investigations",
  "Due diligence",
  "Brand protection",
  "Corporate intelligence",
  "Litigation support",
];

const whatWeDo: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Investigate the concern",
    text: "We look into suspected fraud, white-collar crime, theft and bribery, quietly and without disrupting your business.",
  },
  {
    icon: BadgeCheck,
    title: "Verify the information",
    text: "We cross-check employees, partners, vendors and claims against records and independent enquiries.",
  },
  {
    icon: Target,
    title: "Understand the risk",
    text: "Through due diligence, corporate intelligence and brand protection, we show where the real exposure lies.",
  },
  {
    icon: FileText,
    title: "Report and support",
    text: "You receive clear, structured findings, and support for your legal team where litigation is involved.",
  },
];

const whyUs: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Lock,
    title: "Discreet & confidential",
    text: "Your concern stays between you and our team.",
  },
  {
    icon: ShieldCheck,
    title: "Lawful, fact-based methods",
    text: "We stay within the law and report only what we can verify.",
  },
  {
    icon: Clock,
    title: "10+ years of experience",
    text: "Hands-on work across corporate and personal assignments.",
  },
  {
    icon: EyeOff,
    title: "Structured approach",
    text: "A clear process from first conversation to final report.",
  },
  {
    icon: FileText,
    title: "Reports you can act on",
    text: "Plain findings that leadership and lawyers can use.",
  },
  {
    icon: MapPin,
    title: "Local presence",
    text: "Based in Chennai, serving Tamil Nadu and Bangalore.",
  },
];

const personalSlides: Slide[] = [
  {
    src: documentsPhoto,
    alt: "Investigator reviewing confidential case documents",
    caption: "Discreet case documentation",
  },
  {
    src: matrimonialImage,
    alt: "Illustration of wedding rings with background verification checks",
    caption: "Pre-matrimonial verification",
  },
  {
    src: postMarriageImage,
    alt: "Illustration of separated rings with a magnifying glass between two people",
    caption: "Post-marriage and relationship enquiries",
  },
  {
    src: missingPersonImage,
    alt: "Illustration of a map with a tracked route and location pin",
    caption: "Missing person tracing",
  },
  {
    src: surveillancePhoto,
    alt: "Field observation during a surveillance assignment",
    caption: "Surveillance & discreet observation",
  },
  {
    src: surveillanceImage,
    alt: "Illustration of a camera lens and viewfinder over a city skyline",
    caption: "Photo & video evidence",
  },
  {
    src: identityImage,
    alt: "Illustration of an ID card and a house with verified checks",
    caption: "Identity & address verification",
  },
];

const personalItems = [
  "Matrimonial investigations",
  "Background verification",
  "Personal enquiries",
  "Surveillance",
  "Relationship-related fact finding",
  "Identity verification",
  "Address verification",
  "Asset-related enquiries where legally permissible",
];

const personalWhat: Point[] = [
  {
    icon: MessageCircle,
    title: "Listen and understand",
    text: "We start with a private conversation to understand your situation and what you need to know.",
  },
  {
    icon: Search,
    title: "Investigate discreetly",
    text: "Surveillance, background checks and relationship-related fact-finding, carried out quietly and within the law.",
  },
  {
    icon: BadgeCheck,
    title: "Verify the facts",
    text: "Identity, address, background and claims are cross-checked, so you get facts and not rumours.",
  },
  {
    icon: FileText,
    title: "Report confidentially",
    text: "A clear report shared only with you, so you can decide what to do next.",
  },
];

const personalWhy: Point[] = [
  {
    icon: Lock,
    title: "Discreet & confidential",
    text: "Your personal matter stays between you and our team.",
  },
  {
    icon: Heart,
    title: "Handled with care",
    text: "Sensitive situations are treated with respect and understanding.",
  },
  {
    icon: ShieldCheck,
    title: "Lawful, fact-based methods",
    text: "We stay within the law and report only what we can verify.",
  },
  {
    icon: Clock,
    title: "10+ years of experience",
    text: "Hands-on work across personal, lifestyle and corporate assignments.",
  },
  {
    icon: FileText,
    title: "Clear, honest findings",
    text: "Plain reports that help you make an informed decision.",
  },
  {
    icon: MapPin,
    title: "Local presence",
    text: "Based in Chennai, serving Tamil Nadu and Bangalore.",
  },
];

function InvestigationSection({
  eyebrow,
  title,
  intro,
  items,
  slides,
  ctaLabel,
  whatEyebrow,
  whatTitle,
  what,
  whyTitle,
  why,
  reverse = false,
  tinted = false,
}: SectionConfig) {
  const [listRef, listShown] = useInView<HTMLUListElement>(0.2);
  const [doRef, doShown] = useInView<HTMLDivElement>(0.2);
  const [whyRef, whyShown] = useInView<HTMLDivElement>(0.15);

  return (
    <section className={cn("section-y", tinted && "border-y border-border bg-surface")}>
      <div className="container-td">
        {/* Intro + slideshow */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className={cn("order-2", reverse ? "lg:order-2" : "lg:order-1")}>
            <Slideshow slides={slides} />
          </div>
          <div className={cn("order-1", reverse ? "lg:order-1" : "lg:order-2")}>
            <SectionHeading animate eyebrow={eyebrow} title={title} />
            <div className="mt-6 space-y-4 text-muted-foreground">{intro}</div>
            <ul ref={listRef} className="mt-8 grid gap-2 sm:grid-cols-2">
              {items.map((item, i) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-start gap-2 text-sm text-foreground",
                    listShown ? "animate-rise" : "opacity-0",
                  )}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button asChild variant="navy" size="xl">
                <Link to="/contact">{ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What TRUE DETECTIVE will do */}
        <div className="mt-24">
          <SectionHeading animate align="center" eyebrow={whatEyebrow} title={whatTitle} />
          <div ref={doRef} className="relative mt-14">
            <div
              aria-hidden
              className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block"
            >
              {doShown && (
                <div
                  className="animate-draw h-full bg-accent"
                  style={{ animationDuration: "2.4s" }}
                />
              )}
            </div>
            <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {what.map((step, i) => (
                <li
                  key={step.title}
                  className={cn("text-center", doShown ? "animate-rise" : "opacity-0")}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <span
                    className={cn(
                      "relative mx-auto flex size-14 items-center justify-center rounded-full bg-navy text-accent ring-4",
                      tinted ? "ring-surface" : "ring-background",
                    )}
                  >
                    {doShown && (
                      <span
                        aria-hidden
                        className="animate-ping-once absolute inset-0 rounded-full ring-2 ring-accent"
                        style={{ animationDelay: `${i * 0.5 + 0.3}s` }}
                      />
                    )}
                    <step.icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <p className="mt-2 font-display text-sm tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Why TRUE DETECTIVE */}
        <div className="mt-24 overflow-hidden rounded-lg bg-navy px-6 py-12 text-navy-foreground sm:px-12 sm:py-14">
          <SectionHeading animate onDark eyebrow="Why TRUE DETECTIVE" title={whyTitle} />
          <div
            ref={whyRef}
            className="mt-12 grid gap-px bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {why.map((w, i) => (
              <div
                key={w.title}
                className={cn(
                  "group bg-navy p-7 transition-colors duration-300 hover:bg-white/5",
                  whyShown ? "animate-rise" : "opacity-0",
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-accent-foreground">
                  <w.icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-navy-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CorporateSection() {
  return (
    <InvestigationSection
      eyebrow="For Business"
      title="Protect Your Business With Better Intelligence"
      intro={
        <>
          <p className="text-lg font-semibold text-foreground">
            Business risks are not always visible.
          </p>
          <p>
            Internal misconduct, fraudulent activity, conflicts of interest, undisclosed
            relationships and commercial risks can impact organizations significantly.
          </p>
          <p>
            TRUE DETECTIVE helps businesses investigate concerns, verify information and understand
            potential risks through discreet and structured investigation.
          </p>
        </>
      }
      items={businessServices}
      slides={slides}
      ctaLabel="Discuss a Corporate Requirement"
      whatEyebrow="What We Will Do"
      whatTitle="What TRUE DETECTIVE Will Do For Your Business"
      what={whatWeDo}
      whyTitle="Why Businesses Trust Us With Sensitive Matters"
      why={whyUs}
    />
  );
}

export function PersonalSection() {
  return (
    <InvestigationSection
      eyebrow="Private Investigations"
      title="When Personal Matters Require Answers"
      intro={
        <>
          <p className="text-lg font-semibold text-foreground">
            Personal situations can involve uncertainty, conflicting information and difficult
            decisions.
          </p>
          <p>
            TRUE DETECTIVE provides discreet investigation and fact-finding services for
            individuals dealing with sensitive personal matters.
          </p>
        </>
      }
      items={personalItems}
      slides={personalSlides}
      ctaLabel="Speak With Us Confidentially"
      whatEyebrow="What We Will Do"
      whatTitle="What TRUE DETECTIVE Will Do For You"
      what={personalWhat}
      whyTitle="Why Families Trust Us With Personal Matters"
      why={personalWhy}
      reverse
      tinted
    />
  );
}
