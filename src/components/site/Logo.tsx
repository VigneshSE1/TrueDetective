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
      className={cn("aspect-square shrink-0 rounded-full object-cover", className)}
    />
  );
}

/**
 * Large, faded emblem for dark banners. Decorative only; blends into the
 * navy background with a soft radial mask.
 */
export function LogoWatermark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      aria-hidden
      width={512}
      height={512}
      className={cn(
        "pointer-events-none select-none object-contain opacity-40 mix-blend-screen",
        "[mask-image:radial-gradient(circle,#000_55%,transparent_72%)]",
        className,
      )}
    />
  );
}
