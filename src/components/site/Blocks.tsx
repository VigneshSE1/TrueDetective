import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  HeartCrack,
  IdCard,
  UserSearch,
  Eye,
  FileCheck,
  VenetianMask,
  Fingerprint,
  Network,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { aboutGallery, services } from "@/lib/site";
import { LogoWatermark } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import matrimonialImage from "@/assets/about/slide-1.svg";
import surveillanceImage from "@/assets/about/slide-2.svg";
import postMarriageImage from "@/assets/about/slide-9.svg";
import employmentImage from "@/assets/about/slide-3.svg";
import missingPersonImage from "@/assets/about/slide-4.svg";
import corporateIntelligenceImage from "@/assets/about/slide-5.svg";
import documentsImage from "@/assets/about/slide-6.svg";
import corporateInvestigationImage from "@/assets/about/slide-7.svg";
import caseBoardImage from "@/assets/about/slide-8.svg";
import insuranceImage from "@/assets/about/slide-10.svg";
import undercoverImage from "@/assets/about/slide-11.svg";
import litigationImage from "@/assets/about/slide-12.svg";

const galleryImages: Record<(typeof aboutGallery)[number]["image"], string> = {
  matrimonial: matrimonialImage,
  "case-board": caseBoardImage,
  "corporate-investigation": corporateInvestigationImage,
  surveillance: surveillanceImage,
  "corporate-intelligence": corporateIntelligenceImage,
  employment: employmentImage,
  "missing-person": missingPersonImage,
  documents: documentsImage,
};

// Service slug -> illustration used on the service cards and detail pages.
export const serviceImages: Record<string, string> = {
  "pre-matrimonial-verification": matrimonialImage,
  "post-marriage-investigation": postMarriageImage,
  "employment-verification": employmentImage,
  "missing-person-tracing": missingPersonImage,
  surveillance: surveillanceImage,
  "insurance-claim-investigation": insuranceImage,
  "undercover-operations": undercoverImage,
  "fingerprint-handwriting-analysis": documentsImage,
  "corporate-intelligence": corporateIntelligenceImage,
  "litigation-support-fact-finding": litigationImage,
};

// True once the element has scrolled into view (stays true afterwards).
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// Heading whose words rise in one after another. Pass `shown` to be driven by a
// parent (e.g. a grid); otherwise it animates when it scrolls into view.
export function AnimatedTitle({
  text,
  as: Tag = "h2",
  className,
  shown,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  shown?: boolean;
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLHeadingElement>(0.4);
  const visible = shown ?? inView;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          aria-hidden
          className={cn("mr-[0.26em] inline-block", visible ? "animate-word" : "opacity-0")}
          style={{ animationDelay: `${delay + i * 0.09}s` }}
        >
          {w}
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onDark = false,
  animate = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
  animate?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {animate ? (
        <AnimatedTitle
          text={title}
          className={cn(
            "mt-4 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.7rem]",
            onDark ? "text-navy-foreground" : "text-foreground",
          )}
        />
      ) : (
        <h2
          className={cn(
            "mt-4 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.7rem]",
            onDark ? "text-navy-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            onDark ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  animateTitle = false,
  tossLogo = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  animateTitle?: boolean;
  tossLogo?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <LogoWatermark toss={tossLogo} className="absolute top-1/2 right-[4%] -z-10 hidden size-[26rem] -translate-y-1/2 lg:block" />
      <div className="container-td py-20 lg:py-28">
        <div className="max-w-3xl animate-rise">
          <p className="eyebrow">{eyebrow}</p>
          {animateTitle ? (
            <AnimatedTitle
              as="h1"
              text={title}
              className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
              delay={0.15}
            />
          ) : (
            <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          )}
          <p className="mt-6 text-lg leading-relaxed text-navy-foreground/70">{description}</p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CtaRow({
  primaryLabel = "Request a Confidential Consultation",
  onDark = false,
}: {
  primaryLabel?: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="accent" size="xl">
        <Link to="/contact">{primaryLabel}</Link>
      </Button>
    </div>
  );
}

export function ConfidentialityBanner() {
  // The emblem's draw-on intro plays when the banner scrolls into view.
  const [ref, shown] = useInView<HTMLElement>(0.3);
  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-charcoal text-navy-foreground"
    >
      <div className="absolute top-1/2 left-[2rem] -z-10 hidden -translate-y-1/2 opacity-60 lg:block">
        {shown && <LogoWatermark toss className="size-[32rem]" />}
      </div>
      <div className="container-td section-y">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Confidentiality</p>
            <h2 className="mt-4 text-3xl leading-tight text-navy-foreground sm:text-4xl">
              Your Matter. Your Privacy. Our Discretion.
            </h2>
          </div>
          <div className="space-y-4 text-navy-foreground/70">
            <p>
              We understand that investigation assignments can involve highly sensitive personal,
              financial and business information.
            </p>
            <p>Confidentiality and discretion are fundamental to our approach.</p>
            <p>
              Client information is handled carefully and shared only as appropriate, subject to
              applicable law and professional requirements.
            </p>
            <div className="pt-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">Start a Confidential Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type Slide = { src: string; alt: string; caption: string };

// Auto-changing image slideshow with captions and clickable progress bars.
// The active image drifts slowly (Ken Burns) while the others fade out.
export function Slideshow({
  slides,
  className,
  interval = 4000,
}: {
  slides: readonly Slide[];
  className?: string | undefined;
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  const count = slides.length;
  const go = (n: number) => setActive(((n % count) + count) % count);

  // Restarts whenever the slide changes, so a manual click gets a full interval.
  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % count), interval);
    return () => clearTimeout(id);
  }, [active, count, interval]);

  return (
    <div className={cn("overflow-hidden rounded-lg shadow-elegant", className)}>
      <div className="relative aspect-4/3 bg-navy">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-200",
              i === active ? "animate-kenburns opacity-100" : "opacity-0",
            )}
          />
        ))}
        {(["prev", "next"] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
            onClick={() => go(active + (dir === "prev" ? -1 : 1))}
            className={cn(
              "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-navy-foreground ring-1 ring-accent/50 backdrop-blur transition hover:scale-110 hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-accent",
              dir === "prev" ? "left-3" : "right-3",
            )}
          >
            {dir === "prev" ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
          </button>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5 pt-10">
          <p key={active} className="animate-rise text-sm font-medium text-navy-foreground">
            {slides[active]?.caption}
          </p>
          <div className="mt-3 flex gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1}: ${slide.caption}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i === active ? "bg-accent" : "bg-navy-foreground/25",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutGallery({ className }: { className?: string }) {
  const slides = aboutGallery.map((g) => ({
    src: galleryImages[g.image],
    alt: g.alt,
    caption: g.caption,
  }));
  return <Slideshow slides={slides} className={className} />;
}

export function LocationSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="container-td section-y text-center">
        <p className="eyebrow">Serving Clients Across</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Tamil Nadu</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Our primary service area is Tamil Nadu, with assignments in other
          locations considered based on client requirements.
        </p>
      </div>
    </section>
  );
}

export const serviceStyles: Record<string, { icon: LucideIcon; from: string; to: string }> = {
  matrimonial: { icon: HeartHandshake, from: "#ec4899", to: "#e11d48" },
  "post-marriage": { icon: HeartCrack, from: "#fb923c", to: "#dc2626" },
  employment: { icon: IdCard, from: "#3b82f6", to: "#1d4ed8" },
  missing: { icon: UserSearch, from: "#14b8a6", to: "#0e7490" },
  surveillance: { icon: Eye, from: "#8b5cf6", to: "#6d28d9" },
  insurance: { icon: FileCheck, from: "#10b981", to: "#047857" },
  undercover: { icon: VenetianMask, from: "#d946ef", to: "#7e22ce" },
  fingerprint: { icon: Fingerprint, from: "#fbbf24", to: "#d97706" },
  network: { icon: Network, from: "#22d3ee", to: "#2563eb" },
  legal: { icon: Scale, from: "#facc15", to: "#b45309" },
};

// Service cards: an illustration on top, a glowing gradient icon tile in the
// service's own colour, and an animated heading. Cards rise in one after another
// when the grid scrolls into view.
export function ServicesGrid({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const [ref, shown] = useInView<HTMLDivElement>(0.08);

  return (
    <div ref={ref} className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const { icon: Icon, from, to } = serviceStyles[s.icon] ?? {
          icon: Eye,
          from: "#d4893a",
          to: "#b45309",
        };
        const gradient = `linear-gradient(135deg, ${from}, ${to})`;
        const image = serviceImages[s.slug];
        const delay = (i % 6) * 0.08;
        // A lone card in the last row spans the full width (side-by-side layout)
        // instead of leaving empty grey cells.
        const wide = i === services.length - 1 && services.length % 3 === 1;
        return (
          <Link
            key={s.title}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className={cn(
              "group relative flex flex-col overflow-hidden bg-card transition-colors duration-500 hover:bg-navy hover:text-navy-foreground",
              wide && "lg:col-span-3 lg:flex-row",
              shown ? "animate-rise" : "opacity-0",
            )}
            style={{ animationDelay: `${delay}s` }}
          >
            <div
              className={cn(
                "relative aspect-[16/8] overflow-hidden bg-navy",
                wide && "lg:aspect-auto lg:w-1/3 lg:shrink-0",
              )}
            >
              {image && (
                <img
                  src={image}
                  alt={`${s.title} illustration`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                style={{ background: gradient }}
              />
            </div>
            <div
              className={cn(
                "relative flex flex-1 flex-col px-8 pb-8",
                wide && "lg:justify-center lg:pt-8",
              )}
            >
              <div className={cn("relative -mt-7 size-14", wide && "lg:mt-0")}>
                <span
                  aria-hidden
                  className="animate-halo absolute inset-0 rounded-2xl"
                  style={{ background: gradient, animationDelay: `${(i % 4) * 0.5}s` }}
                />
                <span
                  className="relative flex size-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: gradient, boxShadow: `0 10px 24px -8px ${to}` }}
                >
                  <Icon className="size-7 group-hover:animate-wiggle" strokeWidth={1.8} />
                </span>
              </div>
              <AnimatedTitle
                as={headingLevel}
                text={s.title}
                shown={shown}
                delay={delay + 0.2}
                className="mt-5 text-lg leading-snug"
              />
              <div
                className="mt-3 h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-24"
                style={{ background: gradient }}
              />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-navy-foreground/75">
                {s.description}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-colors group-hover:text-accent">
                What we cover
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
