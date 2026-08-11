import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Button,
  Card,
  ClosingCta,
  Icon,
  PageHero,
  Photo,
  Section,
  SectionHeading,
  ServiceCard,
} from "@/components/blocks";
import { Faq } from "@/components/interactive";
import { BreadcrumbSchema, FaqSchema } from "@/components/schema";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.name} in South OKC`,
    description: `${service.tagline} ${service.name} at a family dental practice serving South Oklahoma City since ${site.established}. Call ${site.phone}.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.shortName} Dentistry`,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.shortName, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={service.faqs} />

      {/* 1 — HERO ------------------------------------------------------- */}
      <PageHero
        eyebrow={service.seoPriority ? "Specialist care" : "Our services"}
        title={service.name}
        lead={service.tagline}
        breadcrumbs={breadcrumbs}
        image={service.image}
        imageAlt={service.name}
      />

      {/* 2 — WHAT IT IS & WHO FOR --------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What it is"
              title={`Understanding ${service.shortName.toLowerCase()}`}
            />
            <p className="mt-7 text-[1.0625rem] leading-[1.8] text-ink-2">
              {service.intro}
            </p>

            <h3 className="mt-10 text-lg font-semibold text-ink">
              Who this is for
            </h3>
            <ul className="mt-5 space-y-3.5">
              {service.forWho.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.9375rem] text-ink-2"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-28">
            <Photo
              src={service.image}
              alt={service.name}
              className="aspect-[4/3] w-full rounded-[2rem]"
              width={900}
              height={700}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <Card className="mt-6 bg-brand-tint-2">
              <h3 className="flex items-center gap-2.5 font-semibold text-ink">
                <Icon name="clock" className="h-5 w-5 text-brand" />
                What to expect
              </h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-sm text-ink-3">Number of visits</dt>
                  <dd className="mt-0.5 font-semibold text-ink">
                    {service.duration.visits}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-3">Time per appointment</dt>
                  <dd className="mt-0.5 font-semibold text-ink">
                    {service.duration.time}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-line pt-5 text-[0.9375rem] leading-relaxed text-ink-2">
                {service.duration.note}
              </p>
              <div className="mt-6">
                <Button href="/contact" className="w-full">
                  Ask us about {service.shortName.toLowerCase()}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* 3 — BENEFITS --------------------------------------------------- */}
      <Section tone="surface">
        <SectionHeading eyebrow="Benefits" title="What it does for you" />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {service.benefits.map((b) => (
            <li key={b}>
              <Card className="flex h-full items-start gap-4 p-6" hover>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <p className="pt-1.5 text-[1.0625rem] leading-relaxed text-ink">
                  {b}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 — PROCESS ---------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="The process"
          title="Step by step, so nothing is a surprise"
          lead="Most dental anxiety comes from not knowing what happens next. Here is the whole sequence."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <li key={step.title} className="relative">
              {i < service.process.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute top-6 left-12 hidden h-px w-full bg-line lg:block"
                />
              ) : null}
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-lg font-semibold text-brand">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[1.0625rem] leading-snug font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5 — TESTIMONIAL ------------------------------------------------ */}
      <Section tone="tint">
        <figure className="mx-auto max-w-3xl text-center">
          <Icon
            name="quote"
            className="mx-auto h-9 w-9 text-brand/25"
            filled
          />
          <blockquote className="mt-7 text-2xl leading-[1.5] font-medium tracking-tight text-ink md:text-[2rem]">
            &ldquo;{service.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-7 text-[0.9375rem] font-medium text-ink-2">
            — {service.testimonial.author}
          </figcaption>
        </figure>
      </Section>

      {/* 6 — FAQ -------------------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Common questions"
              title={`${service.shortName} questions we hear every week`}
            />
            <p className="mt-6 leading-relaxed text-ink-2">
              Still unsure about something? Ring the front desk on{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-brand hover:underline"
              >
                {site.phone}
              </a>{" "}
              — no appointment needed to ask a question.
            </p>
          </div>

          <Faq items={service.faqs} />
        </div>
      </Section>

      {/* 7 — RELATED ---------------------------------------------------- */}
      <Section tone="surface">
        <SectionHeading eyebrow="Related care" title="You might also need" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </Section>

      {/* 8 — CTA -------------------------------------------------------- */}
      <ClosingCta
        title={`Talk to us about ${service.shortName.toLowerCase()}`}
        body="Bring your questions to the first visit. The examination is on us if you do not find it valuable, so there is nothing to lose by finding out where you stand."
      />
    </>
  );
}
