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
/* Trust bar                                                                   */
/* -------------------------------------------------------------------------- */

export function TrustBar() {
  const items = [
    {
      icon: "star",
      value: `${site.reviews.rating.toFixed(1)} Rating`,
      label: "Average patient score",
    },
    {
      icon: "users",
      value: `${site.reviews.count.toLocaleString()}+ Reviews`,
      label: "Verified patient reviews",
    },
    {
      icon: "award",
      value: `Since ${site.established}`,
      label: "Serving South OKC",
    },
    {
      icon: "shield",
      value: "ADA · OSHA · CDC",
      label: "Sterilisation standards",
    },
  ];

  return (
    <div className="border-b border-line bg-white">
      <div className="container-page">
        <ul className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {items.map((item) => (
            <li
              key={item.value}
              className="flex items-center gap-3.5 px-1 py-6 md:justify-center md:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.9375rem] leading-tight font-semibold text-ink">
                  {item.value}
                </span>
                <span className="mt-0.5 block text-[0.8125rem] text-ink-3">
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
  };
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-hairline/80 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
    >
      <Photo
        src={service.image}
        alt=""
        className="aspect-[4/3] w-full"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
        width={900}
        height={700}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="font-tight mt-4 text-xl font-bold text-ink">
          {service.shortName}
        </h3>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">
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
    <div className="group flex h-full flex-col gap-6 rounded-[1.75rem] border border-hairline/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 sm:flex-row sm:p-7">
      <Photo
        src={doctor.photo}
        alt={doctor.name}
        className="aspect-[4/5] w-full shrink-0 rounded-2xl sm:w-44"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
        width={800}
        height={1000}
        sizes="(max-width: 640px) 100vw, 176px"
      />
      <div className="flex flex-col">
        <h3 className="font-tight text-xl font-bold text-ink">
          {doctor.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-brand">{doctor.role}</p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
          {doctor.bio}
        </p>
        <ul className="mt-5 space-y-2">
          {doctor.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-ink-2">
              <Icon
                name="check"
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
              />
              {h}
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
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumbs?: { name: string; href: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="px-3 pt-3 md:px-4 md:pt-4">
      <div className="relative isolate flex h-[800px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink text-white md:rounded-[2rem]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          unoptimized
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/20"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full lg:w-3/5 -z-10 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent"
        />

        <div className="container-wide relative py-8 md:py-10">
          {breadcrumbs ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md">
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
                      <Link href={c.href} className="text-white/75 transition-colors hover:text-white">
                        {c.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.75rem] font-medium text-white/80 backdrop-blur-md">
            {eyebrow}
          </span>
          <h1 className="font-tight mt-4 max-w-2xl text-3xl font-normal leading-[1.08] tracking-tight text-white sm:text-4xl md:text-[3.25rem]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export { Section, SectionHeading, Card, Button, Icon, Stars };
