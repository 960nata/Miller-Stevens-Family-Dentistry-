import type { Metadata } from "next";
import {
  Button,
  Icon,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/blocks";
import AppointmentForm from "@/components/appointment-form";
import { BreadcrumbSchema } from "@/components/schema";
import { formatHours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Call ${site.phone} or request an appointment online. Half a mile south of I-240 on Walker Avenue in South Oklahoma City. Free parking, wheelchair accessible.`,
  alternates: { canonical: "/contact" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const hours = formatHours();
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  );

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <PageHero
        eyebrow="Contact Us"
        title="Book a Call & Schedule Your Visit"
        lead="Reach out directly by phone for immediate triage, or send us a message below to request a convenient callback."
        breadcrumbs={breadcrumbs}
        image="/images/hero-clinic.avif"
        imageAlt="Our reception area on Walker Avenue"
      />

      {/* Quick contact --------------------------------------------------- */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group flex flex-col justify-between rounded-[1.75rem] border border-hairline/80 bg-white p-7.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-ink text-white shadow-md shadow-ink/20 transition-transform duration-300 group-hover:scale-105">
                <Icon name="phone" className="h-5.5 w-5.5" filled />
              </div>
              <h2 className="font-tight mt-6 text-xl font-bold text-ink">Call us directly</h2>
              <a
                href={site.phoneHref}
                className="mt-2 block text-2xl font-bold tracking-tight text-brand transition-colors hover:text-brand-dark"
              >
                {site.phone}
              </a>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
                Fastest way to reach our desk, and the only way for immediate emergency triage.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-aqua">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
              </span>
              Line Open Mon–Thu
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-[1.75rem] border border-hairline/80 bg-white p-7.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-transform duration-300 group-hover:scale-105">
                <Icon name="pin" className="h-5.5 w-5.5" />
              </div>
              <h2 className="font-tight mt-6 text-xl font-bold text-ink">Visit our practice</h2>
              <address className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2 not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
            >
              Open in Google Maps
              <Icon name="arrow" className="h-3.5 w-3.5 text-aqua transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="group flex flex-col justify-between rounded-[1.75rem] border border-hairline/80 bg-white p-7.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-transform duration-300 group-hover:scale-105">
                <Icon name="clock" className="h-5.5 w-5.5" />
              </div>
              <h2 className="font-tight mt-6 text-xl font-bold text-ink">Office hours</h2>
              <dl className="mt-4 space-y-2 text-[0.875rem]">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 rounded-lg px-2 py-1 transition-colors hover:bg-surface/80">
                    <dt className="font-medium text-ink-3">{h.day.slice(0, 3)}</dt>
                    <dd className={`font-semibold ${h.closed ? "text-mute" : "text-ink"}`}>
                      {h.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Form + map ------------------------------------------------------ */}
      <Section tone="surface" className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="rounded-[2.25rem] border border-hairline/80 bg-white p-8 md:p-10 shadow-sm">
            <SectionHeading
              eyebrow="Request an appointment"
              title="Tell us when suits you"
              lead="Send this any time, day or night. We will call you back within one business day to confirm a time."
            />
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-[2.25rem] border border-hairline/80 bg-white shadow-md">
              <iframe
                title={`Map showing the location of ${site.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 transition-opacity duration-300 group-hover:opacity-95"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full border border-hairline/80 bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-ink hover:text-white hover:scale-105"
              >
                <Icon name="arrow" className="h-3.5 w-3.5 text-aqua" />
                Open Maps
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-hairline/80 bg-white p-7 shadow-sm">
              <h2 className="flex items-center gap-2.5 font-tight text-lg font-bold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                Finding us
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
                {site.directions}
              </p>
              <ul className="mt-6 space-y-3.5 text-[0.9375rem] text-ink-2">
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface text-brand">
                    <Icon name="parking" className="h-3.5 w-3.5" />
                  </span>
                  Free parking directly outside
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface text-brand">
                    <Icon name="wheelchair" className="h-3.5 w-3.5" />
                  </span>
                  Ground floor, step-free entrance
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface text-brand">
                    <Icon name="users" className="h-3.5 w-3.5" />
                  </span>
                  Caregivers and family welcome in the room
                </li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-red-200 bg-red-50/80 p-7 shadow-sm backdrop-blur-sm">
              <h2 className="flex items-center gap-2.5 font-tight text-lg font-bold text-red-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Icon name="alert" className="h-4 w-4" />
                </span>
                Dental emergency?
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-red-900/80">
                Do not wait for a form response. Call the office immediately so we can triage you right now.
              </p>
              <div className="mt-5">
                <Button href={site.phoneHref} className="w-full justify-center">
                  <Icon name="phone" className="h-4 w-4" filled />
                  Call {site.phone} Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
