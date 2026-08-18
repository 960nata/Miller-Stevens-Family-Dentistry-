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
  Stars,
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

      <style>{`
        .services-hero nav[aria-label="Breadcrumb"] {
          margin-top: 47px;
        }
      `}</style>
      <div className="services-hero">
        {/* 1 — HERO ------------------------------------------------------- */}
        <PageHero
          eyebrow={service.seoPriority ? "Specialist care" : "Our services"}
          title={service.name}
          lead={service.tagline}
          breadcrumbs={breadcrumbs}
          image={service.image}
          imageAlt={service.name}
          stats={[
            { value: `${service.process.length}`, label: "Steps, start to finish" },
            { value: service.duration.visits, label: "Course of care" },
            { value: service.duration.time, label: "Time per appointment" },
          ]}
          actions={false}
          height="430px"
        />
      </div>

      {/* 2 — WHAT IT IS & WHO FOR --------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What it is"
              title="Understanding"
              muted={service.shortName.toLowerCase()}
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
        <SectionHeading
          eyebrow="Benefits"
          title="What it does"
          muted="for you."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {service.benefits.map((b) => (
            <li key={b}>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-hairline/80 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 h-full">
                <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/8 blur-2xl transition-all duration-300 group-hover:bg-brand/12" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <p className="pt-1 text-[1.0625rem] leading-relaxed text-ink">
                    {b}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 — PROCESS ---------------------------------------------------- */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The process"
            title="Step by step,"
            muted="so nothing is a surprise."
            className="max-w-xl"
          />
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
            Most dental anxiety comes from not knowing what happens next. Here
            is the whole sequence, from the first phone call onwards.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <li key={step.title} className="group relative flex">
              {i < service.process.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute top-14 -right-6 hidden h-px w-6 bg-hairline lg:block"
                />
              ) : null}
              <div className="flex flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-hairline/80 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand/8 blur-3xl transition-all duration-300 group-hover:bg-brand/12" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white font-tight text-lg font-bold shadow-lg shadow-brand/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <Icon
                        name={i === 0 ? "phone" : i === 1 ? "clock" : i === 2 ? "check" : "sparkle"}
                        className="h-5 w-5"
                      />
                    </span>
                  </div>
                  <h3 className="font-tight text-[1.0625rem] leading-snug font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-2">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5 — TESTIMONIAL ------------------------------------------------ */}
      <Section tone="tint">
        <figure className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white md:px-16 md:py-16">
          <div
            aria-hidden
            className="absolute -top-24 -right-20 -z-10 h-72 w-72 rounded-full bg-aqua/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
          />

          <Icon name="quote" className="mx-auto h-8 w-8 text-aqua" filled />
          <blockquote className="font-tight mx-auto mt-7 max-w-3xl text-[1.375rem] leading-[1.4] font-normal md:text-[2rem]">
            &ldquo;{service.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[0.875rem] text-white/70">
            <span className="font-tight flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[0.875rem] font-semibold text-white ring-1 ring-white/20">
              {service.testimonial.author.charAt(0)}
            </span>
            <span className="font-medium text-white">
              {service.testimonial.author}
            </span>
            <span aria-hidden className="text-white/25">
              /
            </span>
            <Stars size={13} className="text-aqua" />
            <span>
              {site.reviews.rating.toFixed(1)} from{" "}
              {site.reviews.count.toLocaleString()} reviews
            </span>
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
        <SectionHeading
          eyebrow="Related care"
          title="You might"
          muted="also need."
        />
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
