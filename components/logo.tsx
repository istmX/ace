import type { HTMLAttributes, SVGProps } from "react";

type LogoProps = {
  markClassName?: string;
  wordmarkClassName?: string;
  showName?: boolean;
} & HTMLAttributes<HTMLSpanElement>;


/**
 * The Ace logo mark: an open A shape finished with a confident check stroke.
 */
export function LogoMark({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <rect x="1" y="1" width="38" height="38" rx="12" fill="currentColor" />
      <path
        d="M11 28.5 18.2 11.8a2 2 0 0 1 3.7 0l4.4 10.1"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m21.2 26.1 3.1 3.1 6.2-7.1"
        stroke="var(--brand-highlight)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showName = true,
  ...props
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-brand-ink ${className ?? ""}`}
      {...props}
    >
      <LogoMark className={`h-10 w-10 shrink-0 text-brand-logo ${markClassName ?? ""}`} />
      {showName && (
        <span
          className={`font-display text-[1.55rem] font-bold leading-none tracking-[-0.065em] ${wordmarkClassName ?? ""}`}
        >
          ace<span className="text-brand-logo">.</span>
        </span>
      )}
    </span>
  );
}

export default Logo;
