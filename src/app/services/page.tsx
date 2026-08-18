import type { Metadata } from "next";
import Link from "next/link";
import {
  ClosingCta,
  GuaranteeBox,
  Icon,
  PageHero,
  Photo,
  ProofStrip,
  Section,
  SectionHeading,
  ServiceCard,
} from "@/components/blocks";
import { BreadcrumbSchema } from "@/components/schema";
import { services } from "@/lib/services";
import { doctors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services",
  description: `Family, cosmetic, implant, sedation, emergency and special care dentistry in South Oklahoma City. One practice for the whole family since ${site.established}.`,
  alternates: { canonical: "/services" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

const years = new Date().getFullYear() - site.established;

/* Pembeda praktik — strip di bawah hero */
const proof = [
  {
    icon: "layers",
    value: `${services.length} treatments`,
    label: "All under one roof",
  },
  {
    icon: "moon",
    value: "Anesthesiologist on staff",
    label: "Sedation & general anesthesia",
  },
  {
    icon: "hands",
    value: "Special care welcome",
    label: "Patients others refer elsewhere",
  },
  {
    icon: "alert",
    value: "Same-week emergencies",
    label: "You need not be an existing patient",
  },
];

export default function ServicesPage() {
  const priority = services.filter((s) => s.seoPriority);

  return (
    <>
      <style>{`
        .services-hero nav[aria-label="Breadcrumb"] {
          margin-top: 47px;
        }
      `}</style>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="services-hero">

      <PageHero
        eyebrow="Services"
        title="Everything your family needs, in one office"
        lead="Routine cleanings through to full-mouth reconstruction and general anesthesia — including the patients many practices refer elsewhere."
        breadcrumbs={breadcrumbs}
        image="/images/feature-treatment.avif"
        imageAlt="A treatment room at our Walker Avenue practice"
        stats={[
          { value: `${services.length}`, label: "Treatments offered" },
          { value: `${years}`, label: "Years in South OKC" },
          {
            value: site.reviews.rating.toFixed(1),
            label: `${site.reviews.count.toLocaleString()} patient reviews`,
          },
        ]}
        actions={false}
        height="430px"
      />
      </div>

      <ProofStrip items={proof} />

      {/* Semua layanan --------------------------------------------------- */}
      <Section id="treatments">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our treatments"
            title="One practice for the whole family,"
            muted="from a first cleaning to a full reconstruction."
            className="max-w-2xl"
          />
          <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-2">
            Nothing here is farmed out to a different building or a different
            dentist. The same two dentists who examine you are the ones who do
            the work.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.slug} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap items-center gap-3 border-t border-hairline pt-8">
          <li className="text-[0.75rem] tracking-[0.16em] text-ink-3 uppercase font-semibold">
            Most popular
          </li>
          {priority.map((s, i) => (
            <li key={s.slug} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <Link
                href={`/services/${s.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-hairline/80 bg-white px-4 py-2.5 text-[0.8125rem] font-medium text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand-tint/40 hover:text-brand shadow-sm hover:shadow-md"
              >
                <Icon name={s.icon} className="h-4 w-4 text-aqua transition-colors group-hover:text-brand" />
                {s.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Not sure what you need?"
              title="That is exactly what the first visit is for"
              lead="You do not have to arrive knowing whether you need a crown or an implant. Come in, let us have a proper look, and we will lay out the options with honest costs attached."
            />
            <Link
              href="/about#dentists"
              className="group mt-8 flex items-center gap-5 rounded-[1.75rem] border border-hairline/80 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="relative shrink-0">
                <Photo
                  src={doctors[0].photo}
                  alt={doctors[0].name}
                  className="h-24 w-24 shrink-0 rounded-2xl ring-2 ring-brand/20 transition-all duration-300 group-hover:ring-brand/40"
                  width={300}
                  height={300}
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-tight text-lg font-bold text-ink">
                  {doctors[0].name}
                </p>
                <p className="mt-0.5 text-[0.8125rem] font-medium text-brand">
                  {doctors[0].role}
                </p>
                <p className="mt-3 flex items-center gap-2 text-[0.8125rem] font-bold text-brand transition-colors group-hover:text-brand-dark">
                  Learn more
                  <Icon
                    name="arrow"
                    className="h-4 w-4 text-aqua transition-transform duration-300 group-hover:translate-x-1"
                  />
                </p>
              </div>
            </Link>
          </div>
          <GuaranteeBox compact />
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
