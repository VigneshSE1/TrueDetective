import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, ConfidentialityBanner } from "@/components/site/Blocks";
import { mapEmbedSrc, site, whatsappLink } from "@/lib/site";

const title = "Contact Us | Confidential Consultation | TRUE DETECTIVE";
const description =
  "Get in touch with TRUE DETECTIVE for a confidential consultation. Share your name, contact number and requirement and our team will get back to you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof typeof form) => (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.currentTarget.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const summary = [
      `Hello TRUE DETECTIVE, I would like to discuss a confidential requirement.`,
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.message && `Requirement: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(summary)}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Requirement Confidentially"
        description="Share a few details and our team will get back to you to discuss the appropriate next steps."
      />

      <section className="section-y">
        <div className="container-td grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl leading-snug">Get In Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              All enquiries are treated confidentially. Submitting the form opens a pre-filled
              WhatsApp message to our team — you can review it before sending.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Requirement</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Briefly describe your situation. Avoid sharing sensitive details here — our team will follow up confidentially."
                />
              </div>
              <Button type="submit" variant="accent" size="xl" className="w-full sm:w-auto">
                <MessageCircle /> Send via WhatsApp
              </Button>
              {submitted && (
                <p className="text-sm text-muted-foreground">
                  WhatsApp should have opened in a new tab with your details pre-filled. If it
                  didn't,{" "}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    chat with us directly
                  </a>
                  .
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-8 shadow-elegant">
              <h3 className="text-lg font-semibold">Contact Details</h3>
              <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-accent" /> {site.phoneDisplay}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-accent" /> {site.emailDisplay}
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" /> {site.addressDisplay}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border shadow-elegant">
              <iframe
                title="TRUE DETECTIVE location map"
                src={mapEmbedSrc}
                loading="lazy"
                className="h-72 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <ConfidentialityBanner />
    </>
  );
}
