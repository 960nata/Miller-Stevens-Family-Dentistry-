import type { Metadata } from "next";
import Link from "next/link";
import {
  ClosingCta,
  GuaranteeBox,
  Icon,
  PageHero,
  Photo,
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <PageHero
        eyebrow="Services"
        title="Everything your family needs, in one office"
        lead="Routine cleanings through to full-mouth reconstruction and general anesthesia — including the patients many practices refer elsewhere."
        breadcrumbs={breadcrumbs}
        image="/images/feature-treatment.avif"
        imageAlt="A treatment room at our Walker Avenue practice"
      />

      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
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
              className="group mt-8 flex items-center gap-4 rounded-[1.75rem] border border-hairline/80 bg-white p-4 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
            >
              <Photo
                src={doctors[0].photo}
                alt={doctors[0].name}
                className="h-20 w-20 shrink-0 rounded-2xl"
                width={300}
                height={300}
                sizes="80px"
              />
              <div className="min-w-0">
                <p className="font-tight text-lg font-bold text-ink">
                  {doctors[0].name}
                </p>
                <p className="mt-0.5 text-[0.8125rem] font-medium text-ink-3">
                  {doctors[0].role}
                </p>
                <p className="mt-2 flex items-center gap-2 text-[0.8125rem] font-bold text-brand transition-colors group-hover:text-brand-dark">
                  Meet the dentists
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 text-aqua transition-transform duration-300 group-hover:translate-x-1"
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
