import { cn } from "@/lib/utils";

/**
 * TRUE DETECTIVE logo: detective in fedora and trench coat inside a
 * targeting reticle. Source image: /logo.png (public folder). Cropped to a
 * circle so it sits cleanly on both light and navy backgrounds.
 */
export function Logo({
  className,
}: {
  className?: string;
  /** Kept for compatibility; the logo has its own navy background. */
  onDark?: boolean;
}) {
  return (
    <img
      src="/logo.png"
      alt="True Detective logo"
      width={512}
      height={512}
      className={cn(
        "animate-logo aspect-square shrink-0 rounded-2xl object-cover transition-transform duration-500 hover:scale-110 hover:rotate-6",
        className,
      )}
    />
  );
}

/**
 * Large, faded emblem for dark banners. Decorative only; blends into the
 * navy background with a soft radial mask.
 * With `toss` (hero intro, 3 seconds): the reticle is drawn on stroke by stroke,
 * then the detective emblem lights up (spotlight reveal) while the drawn lines
 * dissolve into it.
 */
const MASK = "[mask-image:radial-gradient(circle,#000_68%,transparent_92%)]";

// Reticle geometry in the logo's own 940x940 crop (centre 470,470).
const drawRings = [
  { r: 455, delay: 0 },
  { r: 402, delay: 0.25 },
  { r: 352, delay: 0.5 },
] as const;
const drawLines = [
  "M470 15V82M470 858V925M15 470H82M858 470H925",
  "M70 860L870 80",
] as const;

export function LogoWatermark({ className, toss = false }: { className?: string; toss?: boolean }) {
  if (!toss) {
    return (
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        width={512}
        height={512}
        className={cn(
          "animate-breathe pointer-events-none select-none object-contain opacity-40 mix-blend-screen",
          MASK,
          className,
        )}
      />
    );
  }

  return (
    <div aria-hidden className={cn("pointer-events-none relative aspect-square", className)}>
      <img
        src="/logo.png"
        alt=""
        width={512}
        height={512}
        className={cn(
          "animate-toss absolute inset-0 size-full select-none object-contain opacity-40 mix-blend-screen",
          MASK,
        )}
      />
      <svg
        viewBox="0 0 940 940"
        className={cn("animate-lines-out absolute inset-0 size-full mix-blend-screen", MASK)}
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
      >
        {drawRings.map((ring) => (
          <circle
            key={ring.r}
            cx="470"
            cy="470"
            r={ring.r}
            pathLength={1}
            strokeWidth={ring.r > 400 ? 6 : 4}
            className="animate-stroke"
            style={{ animationDelay: `${ring.delay}s` }}
          />
        ))}
        {drawLines.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            strokeWidth={4}
            className="animate-stroke"
            style={{ animationDelay: `${0.9 + i * 0.35}s` }}
          />
        ))}
      </svg>
    </div>
  );
}

/** Styled TRUE DETECTIVE wordmark: "TRUE" in the base colour, "DETECTIVE" in the accent amber. */
export function Wordmark({
  className,
  style,
  onDark = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  onDark?: boolean;
}) {
  return (
    <span
      style={style}
      className={cn(
        "font-display font-extrabold uppercase leading-none tracking-[0.18em]",
        className,
      )}
    >
      <span className={onDark ? "text-navy-foreground" : "text-foreground"}>True</span>{" "}
      <span className="text-accent">Detective</span>
    </span>
  );
}
