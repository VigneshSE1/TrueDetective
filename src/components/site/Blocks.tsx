import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { aboutGallery } from "@/lib/site";
import { cn } from "@/lib/utils";
import surveillanceImage from "@/assets/surveillance.jpg";
import documentsImage from "@/assets/documents.jpg";
import corporateImage from "@/assets/corporate.jpg";
import heroCityImage from "@/assets/hero-city.jpg";

const galleryImages: Record<(typeof aboutGallery)[number]["image"], string> = {
  surveillance: surveillanceImage,
  documents: documentsImage,
  corporate: corporateImage,
  "hero-city": heroCityImage,
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.7rem]",
          onDark ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-td py-20 lg:py-28">
        <div className="max-w-3xl animate-rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
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
  return (
    <section className="bg-charcoal text-navy-foreground">
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

export function AboutGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % aboutGallery.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg shadow-elegant">
      <div className="relative aspect-4/3">
        {aboutGallery.map((slide, i) => (
          <img
            key={slide.image}
            src={galleryImages[slide.image]}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5 pt-10">
          <p className="text-sm font-medium text-navy-foreground">{aboutGallery[active].caption}</p>
          <div className="mt-3 flex gap-1.5">
            {aboutGallery.map((slide, i) => (
              <button
                key={slide.image}
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

export function LocationSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="container-td section-y text-center">
        <p className="eyebrow">Serving Clients Across</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Tamil Nadu &amp; Bangalore</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Our primary service areas include Tamil Nadu and Bangalore, with assignments in other
          locations considered based on client requirements.
        </p>
      </div>
    </section>
  );
}
