import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { site, whatsappLink, legalDisclaimer } from "@/lib/site";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Corporate Investigations", to: "/corporate" },
  { label: "Individual Investigations", to: "/individuals" },
  { label: "Our Approach", to: "/approach" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-td grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold tracking-[0.2em]">{site.name}</p>
          <p className="mt-2 text-sm text-navy-foreground/60">{site.descriptor}</p>
          <p className="mt-6 max-w-xs font-display text-lg text-navy-foreground/90">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {footerLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-navy-foreground/70 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 text-sm text-navy-foreground/70">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <MessageCircle className="size-4 shrink-0" /> WhatsApp
          </a>
          <p className="flex items-center gap-2">
            <Phone className="size-4 shrink-0" /> {site.phoneDisplay}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="size-4 shrink-0" /> {site.emailDisplay}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0" /> Tamil Nadu
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0" /> Bangalore
          </p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/12">
        <div className="container-td flex flex-col gap-6 py-8">
          <p className="max-w-4xl text-xs leading-relaxed text-navy-foreground/50">
            {legalDisclaimer}
          </p>
          <p className="text-xs text-navy-foreground/50">
            © 2026 TRUE DETECTIVE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
