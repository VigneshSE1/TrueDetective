import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

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
      <Button asChild variant={onDark ? "onDark" : "outline"} size="xl">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle /> Chat on WhatsApp
        </a>
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
