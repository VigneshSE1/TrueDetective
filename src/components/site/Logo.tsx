import { cn } from "@/lib/utils";

/**
 * TRUE DETECTIVE emblem: a shield holding a magnifying glass with an eye.
 * Shield for protection and trust, the lens for investigation, the eye for
 * observation. `onDark` lightens the shield so it stands out on navy.
 * Standalone files: /logo.svg, /logo-dark.svg, /logo-mark.svg (public folder).
 */
export function Logo({
  className,
  onDark = false,
  ...rest
}: { className?: string; onDark?: boolean } & Omit<React.SVGProps<SVGSVGElement>, "className">) {
  const shield = onDark ? "#1a2750" : "#101a35";
  return (
    <svg
      viewBox="0 0 120 140"
      role="img"
      aria-label="TRUE DETECTIVE emblem"
      className={cn("shrink-0", className)}
      {...rest}
    >
      <path
        d="M60 4L112 22V64C112 98 90 124 60 136C30 124 8 98 8 64V22Z"
        fill={shield}
        stroke="#d4893a"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M60 13L103 28V64C103 92 85 114 60 125C35 114 17 92 17 64V28Z"
        fill="none"
        stroke="#d4893a"
        strokeOpacity=".45"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="56" cy="62" r="27" fill={shield} stroke="#d4893a" strokeWidth="7" />
      <path d="M75.5 81.5L92 98" stroke="#d4893a" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M33 62Q56 42 79 62Q56 82 33 62Z"
        fill="none"
        stroke="#f3e9d8"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="56" cy="62" r="8.5" fill="#d4893a" />
      <circle cx="56" cy="62" r="3.5" fill="#101a35" />
      <circle cx="53.5" cy="59.5" r="1.8" fill="#fff" fillOpacity=".85" />
    </svg>
  );
}
