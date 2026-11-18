import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Compass,
  Eye,
  FileSearch,
  Lock,
  MapPin,
  Target,
  UserCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, useInView } from "@/components/site/Blocks";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const stats = [
  { value: 10, suffix: "+", label: "Years of hands-on experience" },
  { value: 2, suffix: "", label: "Regions served: Tamil Nadu & Bangalore" },
  { value: services.length, suffix: "", label: "Investigation services under one roof" },
];

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Lock,
    title: "Confidentiality",
    text: "Sensitive information is handled with strict discretion.",
  },
  {
    icon: UserCheck,
    title: "Professional approach",
    text: "Systematic, responsible handling from the first call to the final report.",
  },
  {
    icon: Eye,
    title: "Discreet operations",
    text: "Quiet, careful enquiries that do not draw attention.",
  },
  {
    icon: FileSearch,
    title: "Fact-focused",
    text: "We gather and verify information. We report facts, not guesses.",
  },
  {
    icon: Target,
    title: "Client-focused",
    text: "Every strategy is shaped around your specific objective.",
  },
  {
    icon: MapPin,
    title: "Regional understanding",
    text: "Local knowledge across Tamil Nadu and Bangalore.",
  },
];

const neverDo = [
  "Unlawful surveillance",
  "Hacking or unauthorised access to accounts or devices",
  "Impersonation",
  "Harassment or violation of anyone's legal rights",
];

// Counts up from 0 once, when scrolled into view (instant for reduced motion).
function CountUp({ to, suffix, start }: { to: number; suffix: string; start: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export function WhyUsSection() {
  const [statRef, statShown] = useInView<HTMLDivElement>(0.3);
  const [gridRef, gridShown] = useInView<HTMLDivElement>(0.1);
  const [promiseRef, promiseShown] = useInView<HTMLDivElement>(0.25);

  return (
    <section className="section-y">
      <div className="container-td">
        <SectionHeading
          animate
          align="center"
          eyebrow="Why Us"
          title="Why Clients Choose TRUE DETECTIVE"
          subtitle="Discreet, lawful and fact-based. That is the standard we hold every assignment to."
        />

        {/* Proof points */}
        <div
          ref={statRef}
          className="mx-auto mt-14 grid max-w-4xl divide-y divide-border rounded-lg border border-border bg-card shadow-elegant sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <p className="font-display text-5xl leading-none text-accent">
                <CountUp to={s.value} suffix={s.suffix} start={statShown} />
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div ref={gridRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={cn(
                "group relative overflow-hidden rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-elegant",
                gridShown ? "animate-rise" : "opacity-0",
              )}
              style={{ animationDelay: `${i * 0.09}s` }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-2 right-4 font-display text-6xl leading-none text-foreground/[0.05] transition-colors group-hover:text-accent/20"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <r.icon className="size-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <div className="mt-5 h-[3px] w-8 rounded-full bg-accent transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>

        {/* Promise */}
        <div
          ref={promiseRef}
          className="mt-14 grid gap-10 overflow-hidden rounded-lg bg-navy p-8 text-navy-foreground sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center"
        >
          <div className={promiseShown ? "animate-rise" : "opacity-0"}>
            <p className="eyebrow">Our promise</p>
            <h3 className="mt-4 text-2xl leading-tight text-navy-foreground sm:text-3xl">
              Trust is earned by what we refuse to do.
            </h3>
            <p className="mt-4 text-navy-foreground/70">
              Investigation services are provided subject to applicable laws and regulations.
              TRUE DETECTIVE does not undertake:
            </p>
            <div className="mt-8">
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">
                  <Compass /> Talk to Us Confidentially
                </Link>
              </Button>
            </div>
          </div>
          <ul className="space-y-3">
            {neverDo.map((n, i) => (
              <li
                key={n}
                className={cn(
                  "flex items-center gap-4 rounded-md border border-navy-foreground/10 bg-white/5 px-5 py-4",
                  promiseShown ? "animate-rise" : "opacity-0",
                )}
                style={{ animationDelay: `${0.25 + i * 0.15}s` }}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                  <X className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm sm:text-base">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
