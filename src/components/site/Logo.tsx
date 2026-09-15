import { cn } from "@/lib/utils";

/**
 * TRUE DETECTIVE monogram — a shield with a magnifying glass.
 * Placeholder mark until an official logo file is supplied.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="TRUE DETECTIVE emblem"
      className={cn("shrink-0", className)}
      fill="none"
    >
      <path
        d="M24 3 42 9.5v11c0 12.4-7.6 21.9-18 24.5C13.6 42.4 6 32.9 6 20.5v-11L24 3Z"
        className="fill-none stroke-current"
        strokeWidth="1.5"
      />
      <circle cx="21" cy="21" r="8" className="stroke-accent" strokeWidth="2.4" fill="none" />
      <line
        x1="26.6"
        y1="26.6"
        x2="34.5"
        y2="34.5"
        className="stroke-accent"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
