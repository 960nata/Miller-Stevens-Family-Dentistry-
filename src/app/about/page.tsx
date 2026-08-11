import type { Metadata } from "next";
import {
  Button,
  Card,
  ClosingCta,
  DoctorCard,
  Icon,
  PageHero,
  Photo,
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

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <PageHero
        eyebrow="About us"
        title="Fifty-eight years on the same street in South Oklahoma City"
        lead="One practice, family owned since 1967, treating the grandchildren of our first patients."
        breadcrumbs={breadcrumbs}
        image="/images/about-building.avif"
        imageAlt="Our practice building in the Willowbrook Gardens complex"
      />

      {/* Story ---------------------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built one family at a time"
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

          <div className="relative">
            <Photo
              src="/images/about-us.avif"
              alt="Our practice in the Willowbrook Gardens complex on Walker Avenue"
              className="aspect-[4/3] w-full rounded-[2rem]"
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
        <SectionHeading
          eyebrow="Milestones"
          title="From 1967 to today"
          lead="The details changed — the digital X-rays, the sedation suite, the new sterilisers. The way we treat people did not."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item, i) => (
            <li key={item.year}>
              <Card
                hover
                className="group flex h-full flex-col rounded-3xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-tight text-2xl font-semibold tracking-tight text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-9 items-center justify-center rounded-full bg-shell px-3 text-[0.75rem] font-bold text-ink-3 transition-colors duration-300 group-hover:bg-brand-tint group-hover:text-brand">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-tight mt-5 text-[1.125rem] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                  {item.body}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* Philosophy ----------------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Our philosophy"
            title={
              <>
                Dental <span className="text-brand">health</span> care — not
                disease care
              </>
            }
          />

          <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-ink-2">
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

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["Examine", "Thoroughly, with photographs you can see yourself"],
                ["Explain", "In plain language, with the options and the costs"],
                ["Prevent", "So the next visit is shorter than this one"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-hairline/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-md"
                >
                  <h3 className="font-tight font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Safety --------------------------------------------------------- */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Safety & sterilisation"
          title="Our commitment to keeping you safe"
          lead="Infection control is not something patients should have to ask about. Here is exactly what we do."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {safety.map((s) => (
            <li key={s.title}>
              <Card hover className="h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] leading-snug font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                  {s.body}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* Doctors -------------------------------------------------------- */}
      <Section id="dentists">
        <SectionHeading
          eyebrow="Your dentists"
          title="Two dentists. Same two, every visit."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {doctors.map((d) => (
            <li key={d.slug}>
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

      {/* Tour ----------------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="Office tour"
          title="Have a look around before you come in"
          lead="For anxious patients especially, knowing what a room looks like beforehand makes the first visit considerably easier."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["/images/tour-1.avif", "Treatment room"],
            ["/images/tour-2.avif", "Waiting area"],
            ["/images/tour-3.avif", "Sterilisation area"],
          ].map(([src, label]) => (
            <li key={src}>
              <Photo
                src={src}
                alt={label}
                className="aspect-[4/3] w-full rounded-2xl"
                width={900}
                height={700}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <p className="mt-3 text-sm font-medium text-ink-2">{label}</p>
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

      <ClosingCta
        title="Come and meet us"
        body="No commitment, no pressure, and no charge for the examination if you do not find it valuable. That is how we have introduced ourselves since 1967."
      />
    </>
  );
}
