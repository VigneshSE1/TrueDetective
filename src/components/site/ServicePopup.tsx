import { useEffect, useState } from "react";
import { ArrowLeft, MessageCircle, Phone, X } from "lucide-react";
import { services, site } from "@/lib/site";

const SEEN_KEY = "td-quick-help-seen";
const OTHER = "Something else";
const topics = [...services.map((s) => s.title), OTHER];

function whatsappFor(topic: string) {
  const text =
    topic === OTHER
      ? "Hello TRUE DETECTIVE, I would like to discuss a confidential requirement."
      : `Hello TRUE DETECTIVE, I need help with: ${topic}.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * "Quick help" widget, bottom-right. A round button toggles a small card:
 * step 1 asks what the visitor needs, step 2 offers Call or WhatsApp for that
 * topic. Opens once by itself a few seconds after the first visit of a session.
 */
export function ServicePopup() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // storage unavailable: still show once per page load
    }
    const id = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // ignore
      }
    }, 5000);
    return () => clearTimeout(id);
  }, []);

  const close = () => {
    setOpen(false);
    setTopic(null);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <section
          role="dialog"
          aria-label="Quick help"
          className="animate-rise flex max-h-[calc(100vh-7rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-elegant"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-foreground">Quick help</h2>
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          {topic === null ? (
            <>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Hi, I&apos;m here to help. What do you need assistance with? I&apos;ll point you
                to the fastest way to reach us.
              </p>
              <ul className="mt-4 space-y-2 overflow-y-auto pr-1">
                {topics.map((t) => (
                  <li key={t}>
                    <button
                      type="button"
                      onClick={() => setTopic(t)}
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-left text-sm font-medium transition-colors hover:border-accent hover:bg-navy hover:text-navy-foreground"
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Got it. How would you like to reach us about{" "}
                <strong className="text-foreground">{topic}</strong>?
              </p>
              <a
                href={`tel:+${site.whatsappNumber}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4" /> Call us now
              </a>
              <a
                href={whatsappFor(topic)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
              >
                <MessageCircle className="size-4" /> Message on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setTopic(null)}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                <ArrowLeft className="size-4" /> Choose a different topic
              </button>
            </>
          )}
        </section>
      )}

      <button
        type="button"
        aria-label={open ? "Close quick help" : "Open quick help"}
        aria-expanded={open}
        onClick={() => (open ? close() : setOpen(true))}
        className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
