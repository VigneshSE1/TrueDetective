import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, services, site } from "@/lib/site";
import { serviceStyles } from "@/components/site/Blocks";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/92 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-td flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="group flex items-center leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
              TRUE DETECTIVE
            </span>
            <span className="mt-1 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              {site.descriptor}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((l) =>
            l.to === "/services" ? (
              <div key={l.to} className="group relative">
                <Link
                  to={l.to}
                  activeProps={{ className: "text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="inline-flex items-center gap-1 whitespace-nowrap py-7 text-sm font-medium transition-colors hover:text-foreground"
                >
                  {l.label}
                  <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 z-50 w-[34rem] -translate-x-1/2 translate-y-2 rounded-lg border border-border bg-background p-3 opacity-0 shadow-elegant transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="grid grid-cols-2 gap-1">
                    {services.map((sv) => {
                      const st = serviceStyles[sv.icon];
                      const Icon = st?.icon;
                      return (
                        <li key={sv.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: sv.slug }}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                          >
                            {Icon && (
                              <span
                                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-white"
                                style={{ background: `linear-gradient(135deg, ${st.from}, ${st.to})` }}
                              >
                                <Icon className="size-4" strokeWidth={1.8} />
                              </span>
                            )}
                            {sv.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-2 block rounded-md border-t border-border px-3 pt-3 text-xs font-semibold tracking-widest text-accent uppercase"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden xl:block">
          <Button asChild variant="accent">
            <Link to="/contact">Confidential Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-td flex flex-col py-4">
            {navLinks.map((l) =>
              l.to === "/services" ? (
                <div key={l.to} className="border-b border-border/60">
                  <div className="flex items-center justify-between">
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 py-3 text-sm font-medium text-foreground"
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show services"
                      aria-expanded={mobileServices}
                      onClick={() => setMobileServices((v) => !v)}
                      className="p-3 text-muted-foreground"
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform", mobileServices && "rotate-180")}
                      />
                    </button>
                  </div>
                  {mobileServices && (
                    <ul className="mb-3 ml-3 border-l border-border pl-4">
                      {services.map((sv) => (
                        <li key={sv.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: sv.slug }}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {sv.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
                >
                  {l.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild variant="accent" size="lg">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Confidential Consultation
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
