import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon, Photo, Stars } from "@/components/blocks";
import { HoverCard } from "@/components/hover-card";
import { formatHours, doctors, site, testimonials } from "@/lib/site";
import { featuredServices, services } from "@/lib/services";
import { HeroImage } from "@/components/hero-image";

export const metadata: Metadata = {
  title: `Dentist in South Oklahoma City | ${site.tagline}`,
  description: `A family dental practice on Walker Avenue since ${site.established}. Rated ${site.reviews.rating} by ${site.reviews.count.toLocaleString()} patients. Your first examination costs nothing if you do not find it valuable. Call ${site.phone}.`,
  alternates: { canonical: "/" },
};

const years = new Date().getFullYear() - site.established;

/* Empat tahap perawatan — strip di bawah hero */
const journey = [
  {
    step: "01",
    label: "Smile Assessment",
    note: "90–120 minutes",
    icon: "clock",
    description:
      "Full examination, oral health evaluation & imaging with zero pressure.",
  },
  {
    step: "02",
    label: "Care Planning",
    note: "Findings visit",
    icon: "award",
    description:
      "Detailed walkthrough of your photos, treatment options & clear costs.",
  },
  {
    step: "03",
    label: "Treatment Process",
    note: "At your pace",
    icon: "heart",
    description:
      "Gentle, expert dental care tailored to your comfort and schedule.",
  },
  {
    step: "04",
    label: "Dental Maintenance",
    note: "Every 6 months",
    icon: "sparkle",
    description:
      "Routine preventive care & cleanings to keep your smile healthy for life.",
  },
];

/* Chip layanan di sudut kanan bawah hero */
const heroChips = featuredServices.slice(0, 5);

/* Pembeda praktik — grid kecil di section Feature Treatment */
const proofPoints = [
  { icon: "clock", label: "90–120 min first visit" },
  { icon: "shield", label: "Free exam unless valuable" },
  { icon: "heart", label: "Anesthesiologist on staff" },
  { icon: "home", label: `Family owned since ${site.established}` },
];

/* Kartu sorotan perawatan — gambar ditimpa supaya tiga kartu tidak kembar */
const highlightImages: Record<string, string> = {
  "cosmetic-dentistry": "/images/smile-1.avif",
  "dental-implants": "/images/svc-implants.avif",
  "sedation-dentistry": "/images/svc-sedation.avif",
};

const highlights = services
  .filter((s) => s.seoPriority)
  .slice(0, 3)
  .map((s) => ({
    slug: s.slug,
    tag: s.shortName,
    title: s.name,
    body: s.tagline,
    image: highlightImages[s.slug] ?? s.image,
    meta: `${s.duration.visits} · ${s.duration.time}`,
  }));

/* Tinggi batang grafik "Today's Appointment Progress" */
const progressBars = [
  34, 52, 42, 66, 48, 76, 56, 86, 60, 44, 70, 54, 38, 62, 46, 72, 50, 64, 40,
  58, 36, 54, 44, 30,
];

/* Foto pasien untuk klaster avatar (tanpa nama — aset placeholder) */
const patientFaces = [
  "/images/smile-3.avif",
  "/images/smile-2.avif",
  "/images/smile-4.avif",
];

export default function HomePage() {
  const hours = formatHours();
  const lead = doctors[0];

  return (
    <>
      {/* 1 — HERO -------------------------------------------------------- */}
      <section className="p-[7px] md:p-[5px]">
        <div className="relative isolate flex h-[800px] flex-col overflow-hidden rounded-[1.75rem] bg-ink text-white md:rounded-[2rem]">
          <HeroImage />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-full lg:w-2/3 -z-10 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_55%_45%,_transparent_0%,_transparent_30%,_rgba(10,28,37,0.65)_75%,_rgba(10,28,37,0.9)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/80 to-transparent"
          />

          <div className="container-wide flex flex-1 flex-col justify-end pt-[7.5rem] pb-6 md:pt-[10rem] md:pb-8">
            <div className="grid flex-1 items-end gap-12 lg:grid-cols-[minmax(0,32rem)_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 text-[0.75rem] text-white/80 backdrop-blur-md animate-fade-up" style={{ animationDelay: "0ms" }}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-aqua text-white">
                    <Icon name="tooth" className="h-3.5 w-3.5" filled />
                  </span>
                  Accepting new patients in South OKC
                </span>

                <h1 className="font-tight mt-6 text-[2.5rem] leading-[1.03] font-normal sm:text-[3.5rem] lg:text-[4.25rem] animate-fade-up" style={{ animationDelay: "80ms" }}>
                  Family-Friendly
                  <br />
                  Dental Care
                </h1>

                <p className="mt-6 max-w-[24rem] text-[0.875rem] leading-relaxed text-white/65 animate-fade-up" style={{ animationDelay: "160ms" }}>
                  Permanent, natural-looking solutions to replace missing teeth
                  and restore confident, healthy smiles — in the same South OKC
                  practice since {site.established}.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
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

                {/* Kartu bukti kaca */}
                <div className="mt-10 hidden max-w-[19.5rem] items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md transition-colors hover:bg-white/15 sm:flex animate-fade-up" style={{ animationDelay: "400ms" }}>
                  <Photo
                    src="/images/svc-family.avif"
                    alt=""
                    className="h-[4.25rem] w-[4.25rem] shrink-0 rounded-xl"
                    width={300}
                    height={300}
                    sizes="70px"
                  />
                  <div className="min-w-0">
                    <p className="text-[0.8125rem] leading-snug text-white/85">
                      Restore natural, healthy, confident dental growth
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] text-white/65">
                      <Stars count={1} size={12} className="text-aqua" />
                      <span className="font-medium text-white">
                        {site.reviews.rating.toFixed(1)}
                      </span>
                      Rating
                    </p>
                  </div>
                </div>
              </div>

              {/* Chip layanan */}
              <div className="flex flex-col gap-2.5 animate-fade-up lg:items-end lg:pb-2" style={{ animationDelay: "240ms" }}>
                <p className="hidden text-[0.6875rem] tracking-[0.16em] text-white/45 uppercase sm:block lg:text-right">
                  What we treat
                </p>
                <ul className="flex flex-wrap gap-2.5 lg:justify-end">
                  {heroChips.slice(0, 2).map((s) => (
                    <HeroChip key={s.slug} slug={s.slug} label={s.shortName} />
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2.5 lg:justify-end">
                  {heroChips.slice(2, 5).map((s) => (
                    <HeroChip key={s.slug} slug={s.slug} label={s.shortName} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Strip bawah hero */}
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/15 pt-5 text-[0.75rem] text-white/55">
              <span>Your Teeth, Our Science</span>
              <span className="hidden items-center gap-3 md:flex">
                <span>Trusted by</span>
                <span className="font-medium text-white/85">
                  {site.reviews.count.toLocaleString()} patients
                </span>
              </span>
              <a
                href="#journey"
                className="group inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                Scroll for More
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                >
                  <path
                    d="M12 5v14M6 13l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PERJALANAN PERAWATAN ---------------------------------------- */}
      <section id="journey" className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pill-label">Our Process</span>
              <h2 className="font-tight mt-4 text-[2rem] leading-[1.08] font-normal text-ink sm:text-[2.5rem] lg:text-[2.75rem]">
                Four simple steps to your healthiest smile
              </h2>
            </div>
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
              From your very first visit through ongoing care, we guide you with
              complete transparency, time to listen, and zero pressure.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <HoverCard
                key={step.label}
                className="group flex flex-col justify-between rounded-3xl border border-hairline bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-[0_16px_40px_-16px_rgba(10,28,37,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-tight text-2xl font-semibold tracking-tight text-brand">
                      {step.step}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-shell text-ink-2 transition-colors group-hover:bg-brand-tint group-hover:text-brand">
                      <Icon name={step.icon} className="h-4.5 w-4.5" />
                    </span>
                  </div>

                  <h3 className="font-tight mt-5 text-[1.125rem] font-semibold text-ink">
                    {step.label}
                  </h3>

                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                  <span className="text-[0.75rem] font-medium text-ink-3">
                    {step.note}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-shell text-ink-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                    <Icon name="arrow" className="h-3 w-3" />
                  </span>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — TENTANG KAMI ------------------------------------------------ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
            <div>
              <span className="pill-label">About Us</span>

              <div className="mt-8 flex items-center gap-3">
                {doctors.map((d) => (
                  <Photo
                    key={d.slug}
                    src={d.photo}
                    alt={d.name}
                    className="h-[4.5rem] w-[4.5rem] rounded-2xl ring-1 ring-hairline"
                    width={300}
                    height={300}
                    sizes="72px"
                  />
                ))}
              </div>
              <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-3">
                Dr. Miller &amp; Dr. Stevens
                <br />
                the only two dentists you will see
              </p>
            </div>

            <div>
              <p className="font-tight text-[1.625rem] leading-[1.3] sm:text-[2rem] lg:text-[2.375rem] lg:leading-[1.28]">
                <span className="text-ink">
                  We deliver personalized dental treatments with modern{" "}
                </span>
                <span className="text-mute">
                  technology and gentle care ensuring healthy confident smiles
                  for every patient.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "Prevention before repair",
                  "Plain-language explanations",
                  "One record for the whole family",
                ].map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-2 text-[0.8125rem] text-ink-2"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-aqua/15 text-aqua">
                      <Icon name="check" className="h-2.5 w-2.5" />
                    </span>
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Band foto tim + kartu statistik melayang */}
          <div className="relative mt-12 md:mt-14">
            <Photo
              src="/images/about-us.avif"
              alt="The team at our Walker Avenue practice"
              className="aspect-[16/9] w-full rounded-[1.75rem] sm:aspect-[16/7]"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 1140px"
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-ink/55 via-transparent to-transparent"
            />

            <div className="absolute bottom-4 left-4 hidden max-w-[15rem] rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:block">
              <p className="text-[0.8125rem] leading-snug text-white">
                Two dentists, one family practice, {years} years on the same
                street.
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-hairline bg-white p-6 md:absolute md:right-5 md:-bottom-8 md:mt-0 md:w-[26rem] md:p-7 md:shadow-[0_30px_70px_-45px_rgba(10,28,37,0.5)]">
              <div className="flex items-center gap-3">
                <span className="flex -space-x-2">
                  {patientFaces.map((src) => (
                    <Photo
                      key={src}
                      src={src}
                      alt=""
                      className="h-7 w-7 rounded-full ring-2 ring-white"
                      width={120}
                      height={120}
                      sizes="28px"
                    />
                  ))}
                </span>
                <p className="text-[0.75rem] text-ink-3">
                  Thousands Trust Us for Smiles!
                </p>
              </div>

              <dl className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { value: `${years}`, label: "Years in South OKC" },
                  {
                    value: `${(site.reviews.count / 1000)
                      .toFixed(1)
                      .replace(/\.0$/, "")}k+`,
                    label: "Five-Star Reviews",
                  },
                  {
                    value: site.reviews.rating.toFixed(1),
                    star: true,
                    label: "Patient Rating",
                  },
                ].map(({ value, label, star }) => (
                  <div key={label}>
                    <dt className="font-tight text-[1.875rem] leading-none text-ink md:text-[2.25rem]">
                      {value}
                      {star ? (
                        <span className="align-super text-[0.4em] text-aqua">
                          ★
                        </span>
                      ) : null}
                    </dt>
                    <dd className="mt-2 text-[0.6875rem] leading-snug text-ink-3">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — PERAWATAN UNGGULAN ------------------------------------------ */}
      <section className="bg-white pt-4 pb-16 md:pt-16 md:pb-24">
        <div className="container-wide">
          <span className="pill-label">Feature Treatment</span>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div className="flex flex-col">
              <h2 className="font-tight text-[2rem] leading-[1.08] font-normal text-ink md:text-[2.5rem]">
                Advanced Dental Care
                <br />
                for a Healthier Smile
              </h2>
              <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
                Join hundreds of South Oklahoma City patients achieving
                healthier, brighter smiles through expert dental care and
                treatment plans built around them — not around a template.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {proofPoints.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center gap-3 rounded-2xl border border-hairline/80 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                      <Icon name={p.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-[0.8125rem] font-medium leading-snug text-ink">
                      {p.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Kartu dokter */}
              <Link
                href="/about#dentists"
                className="group mt-8 rounded-[1.75rem] border border-hairline/80 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 lg:mt-auto"
              >
                <div className="flex gap-4">
                  <Photo
                    src={lead.photo}
                    alt={lead.name}
                    className="h-32 w-28 shrink-0 rounded-2xl shadow-inner"
                    width={800}
                    height={1000}
                    sizes="112px"
                  />
                  <div className="min-w-0 py-1">
                    <p className="font-tight text-[1.25rem] font-bold text-ink">
                      {lead.name}
                    </p>
                    <p className="mt-1 text-[0.8125rem] font-medium text-ink-3">
                      {lead.role}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[0.75rem] font-semibold text-ink-2">
                      <Stars count={1} size={11} className="text-aqua" />
                      <span className="font-bold text-ink">
                        {site.reviews.rating.toFixed(1)}
                      </span>
                      ({site.reviews.count.toLocaleString()}+ reviews)
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-[0.8125rem] font-bold text-brand transition-colors group-hover:text-brand-dark">
                      Meet the dentists
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 text-aqua transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-[2.25rem] shadow-xl transition-all duration-500 hover:shadow-2xl">
              <Photo
                src="/images/feature-treatment.avif"
                alt="A treatment room at our Walker Avenue practice"
                className="aspect-[4/3.6] w-full rounded-[2.25rem]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-3.5 py-1.5 text-[0.75rem] font-semibold text-ink shadow-md backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
                </span>
                Mon–Thu · {hours[0].label}
              </span>

              {/* Kartu data melayang */}
              <div className="absolute inset-x-3 bottom-3 rounded-[1.75rem] border border-white/40 bg-white/95 p-5 shadow-2xl shadow-ink/15 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="grid grid-cols-2 divide-x divide-hairline">
                  <div className="pr-4">
                    <p className="text-[0.6875rem] font-medium leading-snug text-ink-3">
                      Recommended Checkups per Year
                    </p>
                    <p className="font-tight mt-2 text-[1.75rem] leading-none font-bold text-ink">
                      2{" "}
                      <span className="text-[0.75rem] font-normal text-ink-3">
                        Visits
                      </span>
                    </p>
                  </div>
                  <div className="pl-4">
                    <p className="text-[0.6875rem] font-medium leading-snug text-ink-3">
                      Average Treatment Time
                    </p>
                    <p className="font-tight mt-2 text-[1.75rem] leading-none font-bold text-ink">
                      40{" "}
                      <span className="text-[0.75rem] font-normal text-ink-3">
                        Mins
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-hairline/80 pt-4">
                  <div className="flex items-center justify-between text-[0.6875rem] text-ink-3">
                    <span>Today&apos;s Appointment Progress</span>
                    <span className="font-bold text-ink">60%</span>
                  </div>
                  <div
                    className="mt-3 flex h-12 items-end gap-[2px]"
                    role="img"
                    aria-label="Today's appointment schedule is 60 percent complete"
                  >
                    {progressBars.map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}%` }}
                        className={`flex-1 rounded-t-sm rounded-b-sm transition-all duration-300 ${
                          i < progressBars.length * 0.6
                            ? "bg-aqua"
                            : "bg-hairline"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — SOROTAN PERAWATAN ------------------------------------------- */}
      <section className="bg-shell py-16 md:py-24">
        <div className="container-wide">
          <span className="pill-label">Our Treatments</span>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-tight max-w-2xl text-[1.75rem] leading-[1.18] font-normal md:text-[2.375rem]">
              <span className="text-ink">
                Advanced dental care ensures precision, comfort{" "}
              </span>
              <span className="text-mute">
                and long lasting healthy smiles.
              </span>
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pr-1.5 pl-5 text-[0.875rem] font-medium text-white transition-colors hover:bg-ink/90"
            >
              All treatments
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item, i) => (
              <li key={item.slug}>
                <HoverCard>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white p-3 transition-all duration-300 hover:shadow-[0_28px_60px_-40px_rgba(10,28,37,0.45)]"
                    >
                  <div className="relative">
                    <Photo
                      src={item.image}
                      alt=""
                      className="aspect-[4/3] w-full rounded-[1.125rem]"
                      imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
                      width={900}
                      height={700}
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[0.6875rem] font-medium text-ink backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                    <p className="text-[0.6875rem] text-ink-3">{item.meta}</p>
                    <h3 className="font-tight mt-2 text-[1.125rem] leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-2">
                      {item.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 border-t border-hairline pt-4 text-[0.8125rem] font-medium text-ink">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-aqua text-white transition-transform duration-300 group-hover:translate-x-0.5">
                        <Icon name="arrow" className="h-3 w-3" />
                      </span>
                      Learn More
                    </span>
                  </div>
                </Link>
              </HoverCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — ULASAN PASIEN ----------------------------------------------- */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          {/* Header Atas */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="pill-label">Testimonial</span>
              <h2 className="font-tight mt-4 text-[1.75rem] leading-[1.18] font-normal md:text-[2.375rem]">
                <span className="text-ink">
                  {site.reviews.count.toLocaleString()} reviews,{" "}
                </span>
                <span className="text-mute">
                  and a {site.reviews.rating.toFixed(1)} star average across{" "}
                  {site.reviews.source}.
                </span>
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
                We do not cherry-pick the flattering ones. The pattern is always
                the same: unhurried appointments, honest recommendations, and
                staff who remember your name.
              </p>
            </div>

            {/* Rating Box - Compact Yellow-Orange Badge */}
            <div className="group flex shrink-0 items-center gap-3.5 rounded-xl border border-hairline/80 bg-white p-3 px-4 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
                <span className="font-tight text-lg font-bold leading-none">
                  {site.reviews.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <Stars size={13} className="text-amber-400" />
                  <span className="text-[0.8125rem] font-bold tracking-tight text-ink">5.0 / 5.0 Rating</span>
                </div>
                <span className="mt-0.5 flex items-center gap-1.5 text-[0.7188rem] font-medium text-ink-3">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Icon name="shield" className="h-2.5 w-2.5" />
                  </span>
                  Verified via {site.reviews.source}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Kartu Di Bawah (Grid 1x4 Horizontal) */}
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.slice(0, 4).map((t, i) => (
              <li key={t.author} className="h-full">
                <HoverCard className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-hairline/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-gradient-to-b hover:from-white hover:to-surface/70 hover:shadow-xl hover:shadow-brand/10">
                <div>
                  <div className="flex items-center justify-between">
                    <Icon
                      name="quote"
                      className="h-5 w-5 text-aqua transition-transform duration-300 group-hover:scale-110"
                      filled
                    />
                    <Stars size={12} className="text-amber-400 opacity-80 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-4 flex-1 text-[0.875rem] leading-relaxed text-ink-2 transition-colors group-hover:text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-hairline/80 pt-4">
                  <span className="font-tight flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-shell text-[0.8125rem] font-bold text-ink transition-colors duration-300 group-hover:bg-brand-tint group-hover:text-brand">
                    {t.author.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8125rem] font-bold text-ink transition-colors group-hover:text-brand">
                      {t.author}
                    </span>
                    <span className="block text-[0.6875rem] text-ink-3">
                      {t.detail}
                    </span>
                  </span>
                </div>
              </HoverCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — LOKASI & JAM ------------------------------------------------ */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-wide">
          <div className="overflow-hidden rounded-[1.75rem] bg-shell p-3">
            <div className="grid gap-3 lg:grid-cols-[1.15fr_1fr]">
              <div className="grid grid-rows-[auto_1fr] gap-3">
                <div className="h-[20rem] overflow-hidden rounded-[1.5rem] bg-white lg:h-[22rem]">
                  <iframe
                    title={`Map showing the location of ${site.name}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
                    )}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <Photo
                    src="/images/about-us.avif"
                    alt="The Willowbrook Gardens practice from the street"
                    className="h-full min-h-[10rem] w-full"
                    width={1200}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium text-ink backdrop-blur-sm">
                    Free parking directly outside
                  </span>
                </div>
              </div>

              <div className="flex flex-col rounded-[1.5rem] bg-white p-6 md:p-8">
                <span className="pill-label self-start">Find Us</span>
                <h2 className="font-tight mt-6 text-[1.5rem] leading-snug font-normal text-ink md:text-[1.875rem]">
                  Half a mile south of I‑240 on Walker Avenue
                </h2>

                <address className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2 not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>

                <dl className="mt-6 space-y-2 border-t border-hairline pt-5">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-4 text-[0.875rem]"
                    >
                      <dt className="text-ink-3">{h.day}</dt>
                      <dd className={h.closed ? "text-mute" : "text-ink"}>
                        {h.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
                  {[
                    { icon: "parking", label: "Free parking" },
                    { icon: "wheelchair", label: "Step-free entrance" },
                    { icon: "shield", label: "Delta Dental Premier" },
                  ].map((chip) => (
                    <li
                      key={chip.label}
                      className="inline-flex items-center gap-2 rounded-full bg-shell px-3 py-1.5 text-[0.75rem] text-ink-2"
                    >
                      <Icon name={chip.icon} className="h-3.5 w-3.5 text-aqua" />
                      {chip.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2.5 pt-1">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pr-1.5 pl-5 text-[0.875rem] font-medium text-white transition-colors hover:bg-ink/90"
                  >
                    Book an Appointment
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua text-white transition-transform duration-300 group-hover:translate-x-0.5">
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-[0.875rem] font-medium text-ink transition-colors hover:border-aqua/50"
                  >
                    <Icon name="phone" className="h-4 w-4 text-aqua" filled />
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function HeroChip({ slug, label }: { slug: string; label: string }) {
  return (
    <li>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.8125rem] text-white/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}
