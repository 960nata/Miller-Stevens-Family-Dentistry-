import type { Metadata } from "next";
import {
  Icon,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/blocks";
import AppointmentForm from "@/components/appointment-form";
import { BreadcrumbSchema } from "@/components/schema";
import { site } from "@/lib/site";

function SocialGlyph({ name }: { name: "facebook" | "instagram" | "google" }) {
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.2-1.5 1.5-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.5v3h2.8v8h3.2z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.07 1.07 0 1 1-2.15 0 1.07 1.07 0 0 1 2.15 0zM21 8.9c0-1.5-.4-2.8-1.5-3.9C18.4 3.9 17.1 3.5 15.6 3.5c-1.5-.1-6.2-.1-7.7 0-1.5 0-2.8.4-3.9 1.5S2.5 7.4 2.5 8.9c-.1 1.5-.1 6.2 0 7.7 0 1.5.4 2.8 1.5 3.9s2.4 1.5 3.9 1.5c1.5.1 6.2.1 7.7 0 1.5 0 2.8-.4 3.9-1.5s1.5-2.4 1.5-3.9c.1-1.5.1-6.2 0-7.7zm-1.9 9.3c-.3.8-1 1.5-1.8 1.8-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4c-.8-.3-1.5-1-1.8-1.8-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7c.3-.8 1-1.5 1.8-1.8C7.6 4.5 10.6 4.6 12 4.6s4.4-.1 5.7.4c.8.3 1.5 1 1.8 1.8.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.7h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" />
      <path d="M12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
      <path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6z" />
      <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.7 9.4 5.9 12 5.9z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Call ${site.phone} or request an appointment online. ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}. Free parking, wheelchair accessible.`,
  alternates: { canonical: "/contact" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  );

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <style>{`
        .services-hero nav[aria-label="Breadcrumb"] {
          margin-top: 47px;
        }
      `}</style>
      <div className="services-hero">
        <PageHero
          eyebrow="Contact"
          title="Get in Touch"
          lead="Call us or request an appointment online. We're here to help with any questions you may have."
          breadcrumbs={breadcrumbs}
          image="/images/feature-treatment.avif"
          imageAlt="Contact our dental office"
          stats={[
            { value: site.phone, label: "Call us" },
            { value: `${site.address.city}, ${site.address.state}`, label: "Our location" },
          ]}
          actions={false}
          height="430px"
        />
      </div>

      {/* Contact section with form and info */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Left: Contact Info - Left-Aligned */}
          <div className="flex flex-col justify-center">
            <div className="mb-12 max-w-md">
              <h1 className="font-tight text-[2rem] leading-[1.08] font-normal sm:text-[2.5rem] text-ink mb-4">
                We are always ready to help you and answer your questions
              </h1>
              <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                Get in touch with us today. Our team is here to help with any questions or concerns you may have.
              </p>
            </div>

            <div className="space-y-8 w-full max-w-md">
              {/* Call Center */}
              <div>
                <span className="inline-block text-[0.6875rem] font-semibold text-ink-3 uppercase tracking-[0.16em] mb-3">Call Center</span>
                <a
                  href={site.phoneHref}
                  className="block text-[1.875rem] font-bold text-ink hover:text-brand transition-colors"
                >
                  {site.phone}
                </a>
                <p className="text-[0.875rem] text-ink-2 mt-2 leading-relaxed">
                  Available Monday to Thursday: 8:00 AM – 5:00 PM<br />
                  Friday: 8:00 AM – 12:00 PM
                </p>
              </div>

              {/* Email */}
              <div>
                <span className="inline-block text-[0.6875rem] font-semibold text-ink-3 uppercase tracking-[0.16em] mb-3">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="block text-[1.0625rem] font-bold text-ink hover:text-brand transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <span className="inline-block text-[0.6875rem] font-semibold text-ink-3 uppercase tracking-[0.16em] mb-3">Address</span>
                <address className="text-[0.9375rem] leading-relaxed text-ink-2 not-italic font-medium">
                  {site.address.street}<br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </div>

              {/* Social Networks */}
              <div className="text-left">
                <span className="inline-block text-[0.6875rem] font-semibold text-ink-3 uppercase tracking-[0.16em] mb-4">Social networks</span>
                <div className="flex justify-start gap-3">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/50 text-ink-2 hover:bg-brand hover:text-white hover:border-brand transition-all"
                  >
                    <SocialGlyph name="facebook" />
                  </a>
                  <a
                    href={site.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/50 text-ink-2 hover:bg-brand hover:text-white hover:border-brand transition-all"
                  >
                    <SocialGlyph name="google" />
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/50 text-ink-2 hover:bg-brand hover:text-white hover:border-brand transition-all"
                  >
                    <SocialGlyph name="instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Get in Touch Form */}
          <div className="bg-ink-6 rounded-[2rem] p-8 md:p-12">
            <div className="mb-8">
              <h2 className="font-tight text-[1.75rem] leading-[1.1] font-normal text-ink mb-3">Get in Touch</h2>
              <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                Send us a message and we&apos;ll respond within one business day.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </Section>

      {/* Map section */}
      <Section>
        <div className="mb-8">
          <SectionHeading
            title="Visit us"
            lead="Find us on the map below"
            className="max-w-2xl"
          />
        </div>
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-hairline/80 bg-white shadow-md h-96 lg:h-[500px]">
          <iframe
            title={`Map showing the location of ${site.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 transition-opacity duration-300 group-hover:opacity-90"
          />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer noopener"
            className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full border border-hairline/80 bg-white/98 px-4 py-2.5 text-xs font-semibold text-ink shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-ink hover:text-white hover:scale-105"
          >
            <Icon name="arrow" className="h-4 w-4 text-aqua" />
            Open in Maps
          </a>
        </div>
      </Section>

      {/* Emergency section */}
      <Section>
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="inline-block text-[0.6875rem] font-semibold text-red-600 uppercase tracking-[0.16em] mb-3">Dental emergency</span>
          </div>
          <h2 className="font-tight text-[2rem] leading-[1.08] font-normal sm:text-[2.5rem] text-ink mb-6">
            In pain right now? Call, do not wait it out.
          </h2>
          <div className="space-y-5 mb-8 text-[0.9375rem] leading-relaxed text-ink-2">
            <p>
              Emergency patients do not need to be established with the practice. Ring the office and describe what happened — the front desk will triage you, tell you what to do in the meantime, and get you in as quickly as we can.
            </p>
            <p className="font-semibold text-ink">
              A knocked-out permanent tooth has the best chance of being saved within the first hour.
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-full bg-red-600 py-3 px-8 text-white font-semibold transition-all hover:bg-red-700 hover:shadow-lg"
          >
            <Icon name="phone" className="h-5 w-5" filled />
            Call {site.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
