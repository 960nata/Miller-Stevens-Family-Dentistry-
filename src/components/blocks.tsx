"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button, Card, Icon, Section, SectionHeading, Stars } from "@/components/ui";

/* -------------------------------------------------------------------------- */
/* Photo — swap file di /public/images dengan foto asli, kode tidak berubah     */
/* -------------------------------------------------------------------------- */

export function Photo({
  src,
  alt,
  className = "",
  imgClassName = "",
  width = 1200,
  height = 900,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-tint ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        unoptimized
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Proof strip — kartu bukti tepat di bawah hero halaman dalam                  */
/* -------------------------------------------------------------------------- */

const defaultProof = [
  {
    icon: "star",
    value: `${site.reviews.rating.toFixed(1)} average rating`,
    label: `${site.reviews.count.toLocaleString()} patient reviews`,
  },
  {
    icon: "home",
    value: `Family owned since ${site.established}`,
    label: "One practice, never a chain",
  },
  {
    icon: "clock",
    value: "90–120 minute first visit",
    label: "Time to examine and explain",
  },
  {
    icon: "shield",
    value: "Free unless valuable",
    label: "No charge for the first exam",
  },
];

export function ProofStrip({
  items = defaultProof,
}: {
  items?: { icon: string; value: string; label: string }[];
}) {
  return (
    <div className="bg-white pt-10 md:pt-14">
      <div className="container-wide">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.value}
              className="group flex items-center gap-3.5 rounded-2xl border border-hairline/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name={item.icon} className="h-4.5 w-4.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.875rem] leading-snug font-semibold text-ink">
                  {item.value}
                </span>
                <span className="mt-0.5 block text-[0.75rem] leading-snug text-ink-3">
                  {item.label}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Guarantee — elemen paling menonjol di seluruh website                        */
/* -------------------------------------------------------------------------- */

export function GuaranteeBox({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white md:p-12">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-mid/15 blur-3xl"
      />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-md">
          <Icon name="shield" className="h-4 w-4 text-aqua" />
          Our value guarantee
        </span>

        <p
          className={`mt-6 font-semibold tracking-tight ${
            compact ? "text-2xl md:text-3xl" : "text-[1.75rem] md:text-[2.5rem]"
          } leading-[1.15]`}
        >
          You are not asked to pay for the examination at your first visit.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          If our findings and recommendations are not valuable to you, you owe us
          nothing. No fine print, no conditions, no awkward conversation at the
          front desk.
        </p>

        {!compact ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="white">
              Claim your first visit
            </Button>
            <Button
              href={site.phoneHref}
              variant="ghost"
              className="border border-white/20 text-white hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" filled />
              {site.phone}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Service card                                                                */
/* -------------------------------------------------------------------------- */

export function ServiceCard({
  service,
}: {
  service: {
    slug: string;
    shortName: string;
    tagline: string;
    image: string;
    icon: string;
    duration?: { visits: string; time: string };
  };
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-hairline/80 bg-white p-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_28px_60px_-40px_rgba(10,28,37,0.45)]"
    >
      <div className="relative">
        <Photo
          src={service.image}
          alt=""
          className="aspect-[4/3] w-full rounded-[1.125rem]"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          width={900}
          height={700}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur-sm transition-colors duration-300 group-hover:bg-aqua group-hover:text-white">
          <Icon name={service.icon} className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
        {service.duration ? (
          <p className="text-[0.6875rem] text-ink-3">
            {service.duration.visits} · {service.duration.time}
          </p>
        ) : null}
        <h3 className="font-tight mt-2 text-[1.125rem] leading-snug text-ink">
          {service.shortName}
        </h3>
        <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-2">
          {service.tagline}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 border-t border-hairline pt-4 text-[0.8125rem] font-medium text-ink">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-aqua text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <Icon name="arrow" className="h-3 w-3" />
          </span>
          Learn more
        </span>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Doctor card                                                                 */
/* -------------------------------------------------------------------------- */

export function DoctorCard({
  doctor,
}: {
  doctor: {
    name: string;
    role: string;
    photo: string;
    bio: string;
    highlights: readonly string[];
  };
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[2rem] border border-hairline/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/8 blur-3xl transition-all duration-300 group-hover:bg-brand/12" />

      {/* Photo */}
      <Photo
        src={doctor.photo}
        alt={doctor.name}
        className="aspect-[4/3] w-full"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-7 md:p-9">
        <div>
          <h3 className="font-tight text-2xl font-bold text-ink">
            {doctor.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-brand">
            {doctor.role}
          </p>
        </div>

        <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">
          {doctor.bio}
        </p>

        <ul className="mt-7 space-y-3">
          {doctor.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-[0.8125rem] text-ink-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:scale-110 mt-0.5">
                <Icon name="check" className="h-3 w-3" />
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Closing CTA                                                                 */
/* -------------------------------------------------------------------------- */

export function ClosingCta({
  title = "We are accepting new patients",
  body = "Call us, or send a request and we will ring you back to find a time that works. Your first examination costs you nothing if you do not find it valuable.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section tone="tint">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-14 text-center shadow-xl md:px-16 md:py-20">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-aqua/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
            </span>
            Now booking
          </span>

          <h2 className="font-tight mt-6 text-3xl font-normal tracking-tight text-white md:text-[2.75rem] md:leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">{body}</p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="white">
              <Icon name="calendar" className="h-4 w-4" />
              Request an Appointment
            </Button>
            <Button
              href={site.phoneHref}
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" filled />
              {site.phone}
            </Button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
            <Stars className="text-white" size={14} />
            {site.reviews.rating.toFixed(1)} from{" "}
            {site.reviews.count.toLocaleString()} patient reviews
          </p>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page hero (halaman dalam)                                                   */
/* -------------------------------------------------------------------------- */

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  image = "/images/hero-1.avif",
  imageAlt = "",
  stats,
  actions = true,
  height = "500px",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumbs?: { name: string; href: string }[];
  image?: string;
  imageAlt?: string;
  /** Kartu kaca di kanan hero — maksimal 3 baris supaya muat di 500px. */
  stats?: { value: string; label: string }[];
  /** Baris tombol CTA. Dimatikan di halaman legal. */
  actions?: boolean;
  height?: string;
}) {
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const rect = imageRef.current.getBoundingClientRect();
      const elementTop = window.scrollY + rect.top;
      const distance = scrollY - elementTop;

      if (distance > -window.innerHeight && distance < window.innerHeight) {
        const parallaxAmount = distance * 0.5;
        imageRef.current.style.transform = `translateY(${parallaxAmount}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="p-[7px] md:p-[5px]">
        <div className="relative isolate flex flex-col overflow-hidden rounded-[1.75rem] bg-ink text-white md:rounded-[2rem]" style={{ height }}>
          <div ref={imageRef} className="hero-parallax absolute inset-0 -z-10">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-ink/92 via-ink/55 to-transparent lg:w-3/4"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
          />
          <div
            aria-hidden
            className="absolute -top-24 -right-16 -z-10 h-64 w-64 rounded-full bg-aqua/20 blur-3xl"
          />
          {/* Sisi kanan digelapkan agar kartu statistik tetap terbaca di foto terang */}
          {stats?.length ? (
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 -z-10 hidden w-2/5 bg-gradient-to-l from-ink/70 via-ink/25 to-transparent lg:block"
            />
          ) : null}

          <div className="container-wide relative flex flex-1 flex-col justify-between py-6 md:py-8">
            {breadcrumbs ? (
              <nav aria-label="Breadcrumb">
                <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.75rem] font-medium text-white/75 backdrop-blur-md">
                  {breadcrumbs.map((c, i) => (
                    <li key={c.href} className="flex items-center gap-2">
                      {i > 0 ? (
                        <span aria-hidden className="text-white/40">
                          /
                        </span>
                      ) : null}
                      {i === breadcrumbs.length - 1 ? (
                        <span aria-current="page" className="text-white">
                          {c.name}
                        </span>
                      ) : (
                        <Link
                          href={c.href}
                          className="text-white/70 transition-colors hover:text-white"
                        >
                          {c.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            ) : (
              <span />
            )}

          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,38rem)_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 text-[0.75rem] text-white/80 backdrop-blur-md animate-fade-up" style={{ animationDelay: "0ms" }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-aqua text-white">
                  <Icon name="tooth" className="h-3.5 w-3.5" filled />
                </span>
                {eyebrow}
              </span>

              <h1 className="font-tight mt-4 text-[2rem] leading-[1.06] font-normal tracking-tight text-white sm:text-[2.75rem] md:text-[3.25rem] animate-fade-up" style={{ animationDelay: "80ms" }}>
                {title}
              </h1>

              {lead ? (
                <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-white/70 md:text-base animate-fade-up" style={{ animationDelay: "160ms" }}>
                  {lead}
                </p>
              ) : null}

              {actions ? (
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pr-1.5 pl-6 text-[0.9375rem] font-medium text-ink transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(255,255,255,0.5)] animate-fade-up" style={{ animationDelay: "240ms" }}
                  >
                    Book an Appointment
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua text-white transition-transform duration-300 group-hover:translate-x-0.5">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[0.875rem] font-medium text-white/90 transition-colors hover:border-white/45 hover:bg-white/10 animate-fade-up" style={{ animationDelay: "320ms" }}
                  >
                    <Icon name="phone" className="h-4 w-4" filled />
                    {site.phone}
                  </a>
                </div>
              ) : null}
            </div>

            {stats?.length ? (
              <div className="hidden justify-end lg:flex animate-fade-up" style={{ animationDelay: "240ms" }}>
                <dl className="w-[18rem] space-y-3.5 rounded-2xl border border-white/15 bg-ink/45 p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-float">
                  {stats.slice(0, 3).map((s) => {
                    // Satu kartu satu gaya: kalau ada nilai panjang, semua ditumpuk.
                    const stacked = stats.some((x) => x.value.length > 6);
                    return (
                      <div
                        key={s.label}
                        className={`border-b border-white/10 pb-3.5 last:border-0 last:pb-0 ${
                          stacked
                            ? ""
                            : "flex items-baseline justify-between gap-4"
                        }`}
                      >
                        <dt
                          className={
                            stacked
                              ? "text-[0.6875rem] tracking-[0.14em] text-white/50 uppercase"
                              : "text-[0.75rem] leading-snug text-white/60"
                          }
                        >
                          {s.label}
                        </dt>
                        <dd
                          className={
                            stacked
                              ? "font-tight mt-1.5 text-[1.0625rem] leading-snug text-white"
                              : "font-tight shrink-0 text-[1.5rem] leading-none text-white"
                          }
                        >
                          {s.value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Section, SectionHeading, Card, Button, Icon, Stars };
