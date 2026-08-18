import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `Our commitment to making both our website and our South Oklahoma City dental office accessible to every patient.`,
  alternates: { canonical: "/accessibility" },
};

/**
 * Standar wajib untuk website layanan kesehatan di AS (ADA Title III).
 * TODO: minta klien meninjau & mengonfirmasi klaim aksesibilitas fisik gedung.
 */
export default function AccessibilityPage() {
  return (
    <>
      <style>{`
        .services-hero nav[aria-label="Breadcrumb"] {
          margin-top: 47px;
        }
      `}</style>
      <div className="services-hero">
        <PageHero
          eyebrow="Accessibility"
          title="Accessibility statement"
          lead="Everyone should be able to use this website and visit this office. Here is what we have done, and how to tell us when we have fallen short."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Accessibility", href: "/accessibility" },
          ]}
          actions={false}
          height="430px"
        />
      </div>

      <Section>
        <div className="max-w-3xl space-y-10 text-[1.0625rem] leading-[1.8] text-ink-2">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Our website
            </h2>
            <p className="mt-4">
              This site is built to conform with the Web Content Accessibility
              Guidelines (WCAG) 2.1 at Level AA. In practice that means:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Every page can be operated with a keyboard alone, with a visible focus indicator",
                "Text meets minimum contrast ratios against its background",
                "All meaningful images carry descriptive alternative text",
                "Headings, landmarks and form labels are marked up for screen readers",
                "Animation is reduced automatically if your device requests it",
                "Text can be resized to 200% without loss of content or function",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Our office
            </h2>
            <p className="mt-4">
              Our practice is on the ground floor with a wheelchair accessible
              entrance and free parking directly outside the door. Caregivers
              are welcome in the treatment room at all times. We offer longer
              appointments and desensitisation visits for patients with sensory
              sensitivities or disabilities — see our{" "}
              <Link
                href="/services/special-care-dentistry"
                className="font-semibold text-brand hover:underline"
              >
                special care dentistry
              </Link>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Tell us if something does not work
            </h2>
            <p className="mt-4">
              If you encounter a barrier on this website or need information in
              another format, please call us on{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-brand hover:underline"
              >
                {site.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-brand hover:underline"
              >
                {site.email}
              </a>
              . We will respond within two business days and provide the
              information you need by another means while we fix the problem.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
