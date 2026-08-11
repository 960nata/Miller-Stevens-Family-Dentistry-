import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Icon } from "@/components/ui";
import { NewsletterForm } from "@/components/interactive";

const practiceLinks = [
  ["About Us", "/about"],
  ["Our Dentists", "/about#dentists"],
  ["New Patients", "/new-patients"],
  ["Insurance & Payment", "/new-patients#insurance"],
  ["Contact & Directions", "/contact"],
] as const;

const legalLinks = [
  ["Accessibility Statement", "/accessibility"],
  ["Privacy Policy", "/privacy"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-shell">
      {/* Buletin */}
      <div className="container-wide pt-16 md:pt-20">
        <div className="relative isolate flex flex-col items-center gap-7 overflow-hidden rounded-[1.75rem] bg-white px-6 py-12 text-center md:px-12 md:py-14">
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -z-10 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-aqua/12 blur-3xl"
          />
          <span className="pill-label">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-aqua/15 text-aqua">
              <Icon name="sparkle" className="h-2.5 w-2.5" filled />
            </span>
            Newsletter
          </span>
          <p className="font-tight max-w-xl text-[1.375rem] leading-snug font-normal text-ink md:text-[1.75rem]">
            Join our newsletter to receive the latest oral health tips, special
            offers and clinic updates.
          </p>
          <NewsletterForm />
          <p className="text-[0.6875rem] text-ink-3">
            One short email a month. No treatment details, ever — unsubscribe in
            a click.
          </p>
        </div>
      </div>

      {/* Sapaan + sosial */}
      <div className="container-wide pt-16 md:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <p className="text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase">
              We&apos;d love to help you with your smile
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-tight mt-4 block text-[1.375rem] text-ink underline decoration-hairline decoration-2 underline-offset-[6px] transition-colors hover:decoration-aqua md:text-[2rem]"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
            >
              <Icon name="phone" className="h-4 w-4 text-aqua" filled />
              {site.phone}
            </a>
          </div>

          <div>
            <p className="text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase">
              Follow Us
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {(
                [
                  ["facebook", site.social.facebook, "Facebook"],
                  ["instagram", site.social.instagram, "Instagram"],
                  ["google", site.social.google, "Google Business Profile"],
                ] as const
              ).map(([key, href, label]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-ink-2 transition-colors hover:border-transparent hover:bg-aqua hover:text-white"
                >
                  <SocialGlyph name={key} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigasi ringkas */}
        <div className="mt-14 grid gap-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Services" className="lg:col-span-2">
            <h2 className="text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase">
              Services
            </h2>
            <ul className="mt-4 grid gap-y-2.5 sm:grid-cols-2 sm:gap-x-8">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[0.875rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Practice">
            <h2 className="text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase">
              Practice
            </h2>
            <ul className="mt-4 space-y-2.5">
              {practiceLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.875rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.6875rem] tracking-[0.18em] text-ink-3 uppercase">
              Visit Us
            </h2>
            <address className="mt-4 text-[0.875rem] leading-relaxed text-ink-2 not-italic">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.875rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Wordmark raksasa */}
      <div className="mt-14 overflow-hidden" aria-hidden>
        <p className="font-tight translate-y-[0.14em] text-center text-[15vw] leading-[0.78] whitespace-nowrap text-ink/[0.07]">
          {site.shortName}
        </p>
      </div>

      <div className="container-wide">
        <div className="flex flex-col gap-3 border-t border-hairline py-6 text-[0.75rem] text-ink-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.established}–{new Date().getFullYear()} {site.name}. All
            rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Sterilisation to ADA, OSHA &amp; CDC standards</span>
            <span aria-hidden className="text-mute">
              •
            </span>
            <span>Wheelchair accessible</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

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
