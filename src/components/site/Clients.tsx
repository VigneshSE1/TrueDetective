import { Building2, Network, Scale, Users, type LucideIcon } from "lucide-react";
import { SectionHeading, useInView } from "@/components/site/Blocks";
import { cn } from "@/lib/utils";

const clients: { icon: LucideIcon; title: string; text: string }[] = [
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

export function ClientsSection() {
  const [ref, shown] = useInView<HTMLDivElement>(0.1);

  return (
    <section className="border-y border-border bg-surface">
      <div className="container-td section-y">
        <SectionHeading animate eyebrow="Clients" title="Who We Work With" />
        <div ref={ref} className="relative mt-14">
          {/* Line that draws across the top of the cards */}
          <div
            aria-hidden
            className="absolute -top-5 right-0 left-0 hidden h-px bg-border lg:block"
          >
            {shown && (
              <div
                className="animate-draw h-full bg-accent"
                style={{ animationDuration: "2s" }}
              />
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((c, i) => (
              <div
                key={c.title}
                className={cn(
                  "group relative overflow-hidden rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-elegant",
                  shown ? "animate-rise" : "opacity-0",
                )}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-2 right-4 font-display text-6xl leading-none text-foreground/[0.05] transition-colors group-hover:text-accent/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative size-12">
                  <span
                    aria-hidden
                    className="animate-halo absolute inset-0 rounded-xl bg-accent"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-navy text-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <c.icon className="size-6" strokeWidth={1.6} />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <div className="mt-5 h-[3px] w-8 rounded-full bg-accent transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
