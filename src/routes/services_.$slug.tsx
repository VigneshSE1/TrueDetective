import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Eye, Info } from "lucide-react";
import {
  PageHero,
  CtaRow,
  ConfidentialityBanner,
  SectionHeading,
  serviceStyles,
  serviceImages,
} from "@/components/site/Blocks";
import { services, approachSteps } from "@/lib/site";
import { getServicePage } from "@/lib/service-pages";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const page = getServicePage(params.slug);
    const service = services.find((s) => s.slug === params.slug);
    if (!page || !service) throw notFound();
    return { page, service };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.service.title} in Chennai | TRUE DETECTIVE`
      : "Service | TRUE DETECTIVE";
    const description = loaderData?.service.description ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="section-y">
      <div className="container-td max-w-xl text-center">
        <h1 className="text-3xl">Service not found</h1>
        <p className="mt-4 text-muted-foreground">
          We could not find that service. Please see the full list of what we do.
        </p>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent">
          View all services <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  ),
  component: ServiceDetail,
});

// Renders **phrases** as highlighted, bold key text.
function Highlighted({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <mark
        key={i}
        className="rounded-sm bg-accent/20 px-1 font-semibold text-foreground [box-decoration-break:clone]"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function ServiceDetail() {
  const { page, service } = Route.useLoaderData();
  const { icon: Icon, from, to } = serviceStyles[service.icon] ?? {
    icon: Eye,
    from: "#d4893a",
    to: "#b45309",
  };
  const gradient = `linear-gradient(135deg, ${from}, ${to})`;
  const image = serviceImages[service.slug];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={page.headline}
        animateTitle
      >
        <CtaRow onDark />
      </PageHero>

      {/* Overview */}
      <section className="section-y">
        <div className="container-td grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <span
              className="flex size-20 items-center justify-center rounded-3xl text-white shadow-lg"
              style={{ background: gradient, boxShadow: `0 16px 32px -12px ${to}` }}
            >
              <Icon className="size-10" strokeWidth={1.6} />
            </span>
            <div className="rule-accent mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {page.intro.map((p, i) => (
                <p key={p} className={i === 0 ? "text-xl text-foreground sm:text-[1.35rem]" : ""}>
                  <Highlighted text={p} />
                </p>
              ))}
            </div>
          </div>
          <div className="relative lg:pr-5 lg:pb-5">
            <div
              aria-hidden
              className="absolute inset-y-5 right-0 left-5 hidden rounded-lg border-2 lg:block"
              style={{ borderColor: `${from}88` }}
            />
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              {image && (
                <img
                  src={image}
                  alt={`${service.title} illustration`}
                  width={1600}
                  height={1200}
                  className="animate-kenburns aspect-[4/3] w-full object-cover"
                />
              )}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1.5"
                style={{ background: gradient }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="border-y border-border bg-surface">
        <div className="container-td section-y">
          <SectionHeading animate eyebrow="What We Cover" title={`What is included in ${service.title}`} />
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {page.covers.map((c) => (
              <article key={c.title} className="bg-card p-7">
                <CheckCircle2 className="size-6" style={{ color: from }} />
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
          {page.note && (
            <p className="mt-8 flex gap-3 rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{page.note}</span>
            </p>
          )}
        </div>
      </section>

      {/* Deliverables & audience */}
      <section className="section-y">
        <div className="container-td grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading animate eyebrow="What You Receive" title="Clear findings, confidentially delivered" />
            <ul className="mt-8 space-y-4">
              {page.deliverables.map((d) => (
                <li key={d} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading animate eyebrow="Who This Is For" title="Who we help" />
            <ul className="mt-8 space-y-4">
              {page.forWhom.map((d) => (
                <li key={d} className="flex gap-3">
                  <ArrowRight className="mt-1 size-5 shrink-0 text-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-td section-y">
          <SectionHeading
            animate
            onDark
            eyebrow="Our Approach"
            title="How we handle every assignment"
          />
          <ol className="mt-14 grid gap-px bg-navy-foreground/10 lg:grid-cols-5">
            {approachSteps.map((s) => (
              <li key={s.number} className="bg-navy p-7">
                <p className="font-display text-3xl text-accent">{s.number}</p>
                <h3 className="mt-4 text-lg text-navy-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other services */}
      <section className="section-y">
        <div className="container-td">
          <SectionHeading animate eyebrow="Other Services" title="Explore more of what we do" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <CtaRow />
          </div>
        </div>
      </section>

      <ConfidentialityBanner />
    </>
  );
}
