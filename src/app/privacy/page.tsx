import type { Metadata } from "next";
import { PageHero, Section } from "@/components/blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

/**
 * PERINGATAN: ini kerangka umum, BUKAN nasihat hukum.
 * TODO: klien harus meminta pengacaranya meninjau teks ini, dan menambahkan
 * HIPAA Notice of Privacy Practices resmi milik praktik sebelum go-live.
 */
export default function PrivacyPage() {
  const sections = [
    {
      title: "What we collect",
      body: "Through this website we collect only what you choose to send us: your name, phone number, optional email address, scheduling preference and a short description of what you would like help with. We do not ask for and you should not send detailed medical information through this form.",
    },
    {
      title: "How we use it",
      body: "Solely to contact you about the appointment you requested and to prepare for your visit. We do not sell, rent or trade your information, and we do not use it for advertising.",
    },
    {
      title: "HIPAA",
      body: "Information you provide once you are a patient of this practice is protected health information governed by HIPAA and by our Notice of Privacy Practices, a copy of which is provided at your first visit and available at the front desk on request.",
    },
    {
      title: "Analytics",
      body: "We use privacy-respecting web analytics to understand which pages are useful — page views, approximate location by city, and the type of device used. This data is aggregated and is not linked to you personally.",
    },
    {
      title: "Cookies",
      body: "This website uses only the cookies necessary for it to function. We do not run advertising or cross-site tracking cookies.",
    },
    {
      title: "Data retention",
      body: "Appointment requests are kept only as long as needed to schedule and prepare for your visit, after which they are handled under our normal patient record retention policy.",
    },
    {
      title: "Your choices",
      body: `You may ask us at any time what information we hold about you, request a correction, or ask us to delete an appointment request. Call ${site.phone} or email ${site.email}.`,
    },
  ];

  return (
    <>
      <style>{`
        .services-hero nav[aria-label="Breadcrumb"] {
          margin-top: 47px;
        }
      `}</style>
      <div className="services-hero">
        <PageHero
          eyebrow="Legal"
          title="Privacy policy"
          lead="What happens to the information you send us through this website."
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Privacy", href: "/privacy" },
          ]}
          actions={false}
          height="430px"
        />
      </div>

      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s, i) => (
            <section
              key={s.title}
              className="rounded-[1.5rem] border border-hairline/80 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-brand/25 md:p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-tight text-[0.8125rem] font-semibold text-aqua">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-tight text-[1.375rem] font-semibold tracking-tight text-ink">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 text-[1rem] leading-[1.8] text-ink-2">
                {s.body}
              </p>
            </section>
          ))}

          <p className="rounded-2xl border border-line bg-surface p-6 text-sm leading-relaxed text-ink-3">
            Questions about this policy? Call{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-brand hover:underline"
            >
              {site.phone}
            </a>{" "}
            or ask at the front desk.
          </p>
        </div>
      </Section>
    </>
  );
}
