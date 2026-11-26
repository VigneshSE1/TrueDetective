import { cn } from "@/lib/utils";

/**
 * TRUE DETECTIVE logo: a navy hexagon with the "TD" monogram inside an amber
 * targeting reticle with a diagonal crosshair line. Source: /logo.png (public folder), a transparent PNG. It is
 * shown in a round navy badge so its white details stay visible on light pages;
 * the artwork is scaled to 84% so the crosshair line tips stay inside the circle.
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
        className="size-[84%] object-contain"
      />
    </span>
  );
}

// Reticle geometry in the logo PNG's own 1254x1254 square (circle centre is
// about 627,615).
const drawRings = [
  { r: 537, delay: 0 },
  { r: 495, delay: 0.25 },
  { r: 422, delay: 0.5 },
] as const;
const drawLines = [
  "M627 150V215M627 1015V1080M150 615H215M1040 615H1105",
  "M110 1110L1135 135",
] as const;

/**
 * Large, faded emblem for dark banners. Decorative only.
 * With `toss` (hero intro, 3 seconds): the reticle is drawn on stroke by stroke,
 * then the emblem lights up (spotlight reveal) while the drawn lines
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
        viewBox="0 0 1254 1254"
        className="animate-lines-out absolute inset-0 size-full mix-blend-screen"
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
      >
        {drawRings.map((ring) => (
          <circle
            key={ring.r}
            cx="627"
            cy="615"
            r={ring.r}
            pathLength={1}
            strokeWidth={ring.r > 500 ? 8 : 5}
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

/**
 * "Uncover the truth" lockup under the logo: amber rules either side, with the
 * words appearing one by one (`delay` is when the first word starts, in seconds).
 */
export function LogoTagline({ className, delay = 0 }: { className?: string; delay?: number }) {
  const words = ["Uncover", "the", "truth"];
  const step = 0.5;
  return (
    <p
      aria-label="Uncover the truth"
      className={cn(
        "flex items-center gap-4 font-display text-sm font-bold uppercase tracking-[0.4em] text-accent sm:text-base",
        className,
      )}
    >
      <span
        aria-hidden
        className="animate-rise h-px w-10 bg-accent/60 sm:w-16"
        style={{ animationDelay: `${delay}s` }}
      />
      <span aria-hidden className="flex gap-[0.6em]">
        {words.map((w, i) => (
          <span
            key={w}
            className="animate-word"
            style={{ animationDelay: `${delay + 0.2 + i * step}s` }}
          >
            {w}
          </span>
        ))}
      </span>
      <span
        aria-hidden
        className="animate-rise h-px w-10 bg-accent/60 sm:w-16"
        style={{ animationDelay: `${delay + 0.2 + words.length * step}s` }}
      />
    </p>
  );
}
