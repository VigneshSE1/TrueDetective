import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          {navLinks.map((l) => (
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
          ))}
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
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {l.label}
              </Link>
            ))}
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
