import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { site } from "@/lib/site";

function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* Button                                                                      */
/* -------------------------------------------------------------------------- */

type ButtonVariant = "primary" | "outline" | "ghost" | "white";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.9375rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] whitespace-nowrap";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white shadow-[0_8px_24px_-8px_rgba(10,28,37,0.5)] hover:bg-ink/90 hover:shadow-[0_12px_32px_-8px_rgba(10,28,37,0.6)]",
  outline:
    "border border-hairline bg-white text-ink hover:border-aqua/50 hover:text-ink",
  ghost: "text-ink hover:bg-shell",
  white:
    "bg-white text-ink shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)] hover:bg-shell",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">) {
  const cls = cx(buttonBase, buttonVariants[variant], className);

  if (href) {
    const external = href.startsWith("tel:") || href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Layout primitives                                                           */
/* -------------------------------------------------------------------------- */

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface" | "tint" | "ink" | "cream";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    tint: "bg-brand-tint-2",
    cream: "bg-sand-tint",
    ink: "bg-ink text-white",
  };
  return (
    <section id={id} className={cx("py-16 md:py-24", tones[tone], className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  muted,
  lead,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** Ekor judul dua nada — abu-abu, seperti judul section di homepage. */
  muted?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="pill-label mb-2 inline-flex">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-aqua"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cx(
          "font-tight mt-3 text-[1.75rem] leading-[1.12] font-normal sm:text-[2.25rem] md:text-[2.75rem]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
        {muted ? (
          <>
            {" "}
            <span className={invert ? "text-white/45" : "text-mute"}>
              {muted}
            </span>
          </>
        ) : null}
      </h2>
      {lead ? (
        <p
          className={cx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            invert ? "text-white/75" : "text-ink-2",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-[1.75rem] border border-hairline/80 bg-white p-6 shadow-sm sm:p-8",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stars                                                                       */
/* -------------------------------------------------------------------------- */

export function Stars({
  count = 5,
  className,
  size = 16,
}: {
  count?: number;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cx("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.28 5.53.72-4.07 3.9 1.03 5.6L10 14.3l-4.96 2.7 1.03-5.6L2 7.5l5.53-.72L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Icon set — inline SVG, no external requests                                 */
/* -------------------------------------------------------------------------- */

const paths: Record<string, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.4-2.9 8.2-7 9-4.1-.8-7-4.6-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 7a4 4 0 0 1 7 3.7c0 4.9-7 9.3-7 9.3z" />,
  home: (
    <>
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5z" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M2.5 20a5.5 5.5 0 0 1 11 0M14.5 20a4 4 0 0 1 7 0" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
    </>
  ),
  tooth: (
    <path d="M8 3.5c1.4 0 1.9.8 4 .8s2.6-.8 4-.8c2.2 0 3.5 1.8 3.5 4.4 0 2.4-1 3.6-1.6 6.3-.5 2.4-.6 6.3-2.6 6.3-1.7 0-1.5-4.2-3.3-4.2s-1.6 4.2-3.3 4.2c-2 0-2.1-3.9-2.6-6.3C5.5 11.5 4.5 10.3 4.5 7.9 4.5 5.3 5.8 3.5 8 3.5z" />
  ),
  star: <path d="M12 3l2.8 6 6.2.8-4.6 4.3 1.2 6.2L12 17.4 6.4 20.3l1.2-6.2L3 9.8 9.2 9 12 3z" />,
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />,
  alert: (
    <>
      <path d="M12 4l9 16H3l9-16z" />
      <path d="M12 10v4M12 17.5h.01" />
    </>
  ),
  hands: (
    <>
      <path d="M7 13V6.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M10 11.5v-6a1.5 1.5 0 0 1 3 0V12" />
      <path d="M13 12V7.5a1.5 1.5 0 0 1 3 0V14c0 3.9-2.2 7-6 7s-6-2.6-6-6.5c0-1.2.6-1.9 1.5-1.9S7 13.3 7 14.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
      <path d="M3 12.5L12 17l9-4.5M3 16.5L12 21l9-4.5" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5a3.5 3.5 0 0 1 0 6.9M17 14.2a6.5 6.5 0 0 1 4.5 5.8" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.8L7 21l5-2.5L17 21l-1.5-7.2" />
    </>
  ),
  quote: (
    <path d="M9 5c-3 1.4-5 4.3-5 8.2 0 3.3 1.9 5.3 4.3 5.3 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.2-3.4-.4 0-.8.1-1 .2.3-2 1.7-3.7 3.5-4.6L9 5zm9 0c-3 1.4-5 4.3-5 8.2 0 3.3 1.9 5.3 4.3 5.3 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.2-3.4-.4 0-.8.1-1 .2.3-2 1.7-3.7 3.5-4.6L18 5z" />
  ),
  wheelchair: (
    <>
      <circle cx="10" cy="4" r="1.6" />
      <path d="M10 7v5h5l3 7" />
      <path d="M14.5 13.5A5.5 5.5 0 1 1 8 10.2" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M10 16V8h2.8a2.6 2.6 0 0 1 0 5.2H10" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  const d = paths[name] ?? paths.check;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {d}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Logo                                                                        */
/* -------------------------------------------------------------------------- */

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label={`${site.name} — home`}
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white p-0.5 shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/images/logo.avif"
          alt={`${site.name} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="leading-none">
        <span
          className={cx(
            "block text-[1.0625rem] font-semibold tracking-tight",
            invert ? "text-white" : "text-ink",
          )}
        >
          Miller <span className="font-display font-normal italic">&amp;</span>{" "}
          Stevens
        </span>
        <span
          className={cx(
            "mt-1 block text-[0.6875rem] font-medium tracking-[0.16em] uppercase",
            invert ? "text-white/50" : "text-ink-3",
          )}
        >
          Family Dentistry
        </span>
      </span>
    </Link>
  );
}
