import { cn } from "@/lib/utils";

/**
 * TRUE DETECTIVE logo: detective in fedora and trench coat inside a
 * targeting reticle. Source: /logo.png (public folder), a transparent PNG. It is
 * shown in a round navy badge so its white details stay visible on light pages;
 * the artwork is scaled to 88% so the crosshair line tips stay inside the circle.
 */
export function Logo({
  className,
  bare = false,
}: {
  className?: string;
  /** Show the transparent PNG as-is, with no navy badge (for light backgrounds). */
  bare?: boolean;
  /** Kept for compatibility; the badge is navy on every background. */
  onDark?: boolean;
}) {
  if (bare) {
    return (
      <img
        src="/logo.png"
        alt="True Detective logo"
        width={600}
        height={600}
        className={cn(
          "animate-logo-pop aspect-square shrink-0 object-contain transition-transform duration-500 hover:scale-110 hover:rotate-6",
          className,
        )}
      />
    );
  }
  return (
    <span
      className={cn(
        "animate-logo inline-flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy transition-transform duration-500 hover:scale-110 hover:rotate-6",
        className,
      )}
    >
      <img
        src="/logo.png"
        alt="True Detective logo"
        width={600}
        height={600}
        className="size-[88%] object-contain"
      />
    </span>
  );
}

// Reticle geometry in the logo PNG's own 1274x1274 square (it is padded with
// transparent pixels, so the circle's centre is about 638,601).
const drawRings = [
  { rx: 592, ry: 570, delay: 0 },
  { rx: 545, ry: 523, delay: 0.25 },
  { rx: 492, ry: 470, delay: 0.5 },
] as const;
const drawLines = [
  "M628 70V175M628 1030V1130M110 600H190M1090 600H1170",
  "M104 1085L1154 120",
] as const;

/**
 * Large, faded emblem for dark banners. Decorative only.
 * With `toss` (hero intro, 3 seconds): the reticle is drawn on stroke by stroke,
 * then the detective emblem lights up (spotlight reveal) while the drawn lines
 * dissolve into it.
 */
export function LogoWatermark({ className, toss = false }: { className?: string; toss?: boolean }) {
  if (!toss) {
    return (
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        width={600}
        height={600}
        className={cn(
          "animate-breathe pointer-events-none aspect-square select-none object-contain opacity-40",
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
        width={600}
        height={600}
        className="animate-toss absolute inset-0 size-full select-none object-contain opacity-40"
      />
      <svg
        viewBox="0 0 1274 1274"
        className="animate-lines-out absolute inset-0 size-full mix-blend-screen"
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
      >
        {drawRings.map((ring) => (
          <ellipse
            key={ring.rx}
            cx="638"
            cy="601"
            rx={ring.rx}
            ry={ring.ry}
            pathLength={1}
            strokeWidth={ring.rx > 560 ? 8 : 5}
            className="animate-stroke"
            style={{ animationDelay: `${ring.delay}s` }}
          />
        ))}
        {drawLines.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            strokeWidth={5}
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
