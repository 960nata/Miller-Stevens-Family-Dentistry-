import type { Metadata } from "next";
import {
  Button,
  Card,
  ClosingCta,
  DoctorCard,
  Icon,
  PageHero,
  Photo,
  ProofStrip,
  Section,
  SectionHeading,
} from "@/components/blocks";
import { BreadcrumbSchema } from "@/components/schema";
import { doctors, site, timeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Practice",
  description: `A family dental practice in South Oklahoma City since ${site.established}. Meet Dr. Miller and Dr. Stevens, learn our approach to dental health care, and see our sterilisation standards.`,
  alternates: { canonical: "/about" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const safety = [
  {
    icon: "shield",
    title: "Instrument sterilisation",
    body: "Every instrument is heat sterilised in an autoclave and biologically monitored — not merely disinfected.",
  },
  {
    icon: "check",
    title: "ADA, OSHA & CDC protocols",
    body: "We follow published infection-control guidance to the letter, and our staff are retrained on it annually.",
  },
  {
    icon: "users",
    title: "Single-use where it matters",
    body: "Barriers, needles, gloves and suction tips are disposed of after every single patient without exception.",
  },
  {
    icon: "award",
    title: "Documented, not assumed",
    body: "Sterilisation cycles are logged. If you would like to see the log, ask — we will show you.",
  },
];

const years = new Date().getFullYear() - site.established;

export default function AboutPage() {
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
        eyebrow="About us"
        title={`${years} years on the same street in South Oklahoma City`}
        lead="One practice, family owned since 1967, treating the grandchildren of our first patients."
        breadcrumbs={breadcrumbs}
        image="/images/about-building.avif"
        imageAlt="Our practice building in the Willowbrook Gardens complex"
        stats={[
          { value: `${years}`, label: "Years on Walker Avenue" },
          { value: "2", label: "Dentists — the only two you will see" },
          {
            value: site.reviews.rating.toFixed(1),
            label: `${site.reviews.count.toLocaleString()} patient reviews`,
          },
        ]}
        actions={false}
        height="430px"
        />
      </div>

      <ProofStrip />

      {/* Story ---------------------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-stretch lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built one family"
              muted="at a time."
            />
            <div className="mt-8 space-y-6 text-[1.0625rem] leading-[1.8] text-ink-2">
              <p>
                When the doors opened in {site.established}, South Oklahoma City
                looked very different. What has not changed is the way this
                practice works: you are seen by a dentist who knows your name,
                who has time to explain what he is looking at, and who is still
                going to be here in ten years.
              </p>
              <p>
                Over five decades that approach has produced something you
                cannot buy — patients who were children in our chair now bring
                their own children, and in a growing number of cases their
                grandchildren. Whole families share one chart room.
              </p>
              <p>
                We have never been part of a dental chain and have never been
                sold to an investment group. That independence is why we can
                spend two hours on a first visit and why we can tell a patient
                honestly that they do not need the treatment somebody else
                recommended.
              </p>
            </div>
          </div>

          <div className="relative h-full">
            <Photo
              src="/images/about-us.avif"
              alt="Our practice in the Willowbrook Gardens complex on Walker Avenue"
              className="h-full w-full object-cover rounded-[2rem]"
              width={1200}
              height={900}
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink/60 via-transparent to-transparent"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:right-auto sm:max-w-[17rem]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua text-white">
                <Icon name="pin" className="h-4.5 w-4.5" />
              </span>
              <p className="text-[0.8125rem] leading-snug text-white">
                One address, one family, since {site.established}.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline ------------------------------------------------------- */}
      <Section tone="surface">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Milestones"
            title="From 1967"
            muted="to today."
            className="max-w-xl"
          />
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
            The details changed — the digital X-rays, the sedation suite, the
            new sterilisers. The way we treat people did not.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((item, i) => {
            const last = i === timeline.length - 1;
            return (
              <li key={item.year} className="group flex flex-col animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                {/* Rel tahun */}
                <div className="flex items-center gap-3">
                  <span
                    className={`font-tight flex h-9 shrink-0 items-center rounded-full px-3.5 text-[0.8125rem] font-semibold transition-colors duration-300 ${
                      last
                        ? "bg-aqua text-white"
                        : "bg-white text-brand ring-1 ring-hairline group-hover:bg-brand group-hover:text-white group-hover:ring-brand"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    aria-hidden
                    className={`h-px flex-1 ${last ? "bg-transparent" : "bg-hairline"}`}
                  />
                  {!last ? (
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-hairline transition-colors duration-300 group-hover:bg-aqua"
                    />
                  ) : null}
                </div>

                <div className="mt-4 flex flex-1 flex-col rounded-[1.25rem] border border-hairline/80 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand/30 group-hover:shadow-[0_16px_40px_-16px_rgba(10,28,37,0.14)]">
                  <span className="font-tight text-[0.75rem] font-semibold text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-tight mt-2 text-[1.0625rem] leading-snug font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-2">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Safety --------------------------------------------------------- */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Safety & sterilisation"
          title="Our commitment"
          muted="to keeping you safe."
          lead="Infection control is not something patients should have to ask about. Here is exactly what we do."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {safety.map((s, i) => (
            <li key={s.title} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/40 hover:bg-white hover:shadow-lg h-full">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-all duration-300 group-hover:bg-brand/20" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[1.0625rem] leading-snug font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                    {s.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Doctors -------------------------------------------------------- */}
      <Section id="dentists">
        <SectionHeading
          eyebrow="Your dentists"
          title="Two dentists."
          muted="The same two, every visit."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {doctors.map((d, i) => (
            <li key={d.slug} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <DoctorCard doctor={d} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Team ----------------------------------------------------------- */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <Photo
              src="/images/about-us.avif"
              alt="Our hygienists and front desk team"
              className="aspect-[3/2] w-full rounded-[2rem]"
              width={1200}
              height={800}
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink/60 via-transparent to-transparent"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:right-auto sm:max-w-[18rem]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua text-white">
                <Icon name="users" className="h-4.5 w-4.5" />
              </span>
              <p className="text-[0.8125rem] leading-snug text-white">
                Most of this team has been here for years, not months.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The rest of the team"
              title="The people patients actually write reviews about"
              lead="Read our reviews and you will notice something: the hygienists and the front desk get named as often as the dentists do. That is not an accident — most of them have been here for years."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Hygienists who remember what you talked about last visit",
                "A front desk that will fight your insurance company for you",
                "Assistants trained to work with anxious and special-needs patients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Philosophy ----------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="Our philosophy"
          title={
            <>
              Dental <span className="text-brand">health</span> care — not
              disease care
            </>
          }
        />

        <div className="mt-12 space-y-6 text-[1.0625rem] leading-[1.8] text-ink-2">
          <p>
            Most dentistry is reactive: something hurts, you come in, it gets
            fixed. That model treats disease. It does not produce health, and
            it guarantees you will be back.
          </p>
          <p>
            We would rather find the crack before it splits the tooth, catch
            the gum inflammation before it costs you bone, and show you the
            photograph of what we are seeing so you understand why it
            matters. Patients who understand their own mouth make better
            decisions — and need less treatment over a lifetime.
          </p>
          <p>
            It is a slower way to practise dentistry and it is the reason your
            first visit takes two hours. We think the arithmetic works out in
            your favour.
          </p>
        </div>
      </Section>

      {/* Tour ----------------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="Office tour"
          title="Have a look around"
          muted="before you come in."
          lead="For anxious patients especially, knowing what a room looks like beforehand makes the first visit considerably easier."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["/images/tour-1.avif", "Treatment room", "Where the work happens"],
            [
              "/images/first-visit.avif",
              "Reception & front desk",
              "Where the insurance gets sorted",
            ],
            [
              "/images/feature-treatment.avif",
              "Chairside technology",
              "Digital imaging you see yourself",
            ],
          ].map(([src, label, note]) => (
            <li
              key={src}
              className="group relative overflow-hidden rounded-[1.5rem]"
            >
              <Photo
                src={src}
                alt={label}
                className="aspect-[4/3] w-full rounded-[1.5rem]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                width={900}
                height={700}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <span>
                  <span className="font-tight block text-[1.0625rem] font-semibold text-white">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[0.75rem] text-white/70">
                    {note}
                  </span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-aqua">
                  <Icon name="sparkle" className="h-3.5 w-3.5" filled />
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/contact">Schedule your first visit</Button>
          <Button href="/new-patients" variant="outline">
            What to expect as a new patient
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Philosophy Cards ------------------------------------------------ */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ["Examine", "Thoroughly, with photographs you can see yourself", "search"],
            ["Explain", "In plain language, with the options and the costs", "users"],
            ["Prevent", "So the next visit is shorter than this one", "shield"],
          ].map(([title, body, icon]) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-hairline/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand/5 blur-2xl transition-all duration-300 group-hover:bg-brand/10" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon name={icon as any} className="h-5 w-5" />
                </div>
                <h3 className="font-tight mt-4 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Come and meet us"
        body="No commitment, no pressure, and no charge for the examination if you do not find it valuable. That is how we have introduced ourselves since 1967."
      />
    </>
  );
}
