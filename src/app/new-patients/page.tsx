import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Card,
  ClosingCta,
  GuaranteeBox,
  Icon,
  PageHero,
  Photo,
  Section,
  SectionHeading,
} from "@/components/blocks";
import { Faq } from "@/components/interactive";
import { BreadcrumbSchema, FaqSchema } from "@/components/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients — What to Expect",
  description: `What happens at your first visit to our South OKC dental office: a 90–120 minute examination, a findings appointment, and no charge for the exam if you do not find it valuable. Insurance, forms and payment explained.`,
  alternates: { canonical: "/new-patients" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "New Patients", href: "/new-patients" },
];

const faqs = [
  {
    q: "Why does the first appointment take almost two hours?",
    a: "Because a proper examination cannot be done in fifteen minutes. We record a full medical and dental history, examine every tooth and all the soft tissue, screen for oral cancer, check your bite and gums, take the images we need and photograph what we find. Then we talk. Most patients tell us it is the first time anyone has actually explained their own mouth to them.",
  },
  {
    q: "Do I really pay nothing at the first visit?",
    a: "You are not asked to pay for the examination. If our findings and recommendations are not valuable to you, you owe us nothing. If treatment is needed and you decide to go ahead, that is quoted separately and agreed before anything starts.",
  },
  {
    q: "What should I bring with me?",
    a: "Photo ID, your dental insurance card, a list of any medications you take, and the name of your physician. If you have had X-rays taken elsewhere in the last year, ask that office to forward them — it may save you a set.",
  },
  {
    q: "Do you take my insurance?",
    a: "We are a Delta Dental Premier provider and we file claims for most PPO plans. Call the front desk with your plan details before your visit and we will verify your benefits so you know your out-of-pocket cost in advance.",
  },
  {
    q: "What if I cannot pay for everything at once?",
    a: "Tell us. We will prioritise what is urgent, phase the rest over time, and discuss payment arrangements. Nobody here expects you to fund a full treatment plan in one go.",
  },
  {
    q: "I have not seen a dentist in years and I am embarrassed.",
    a: "You will not be lectured. A significant share of our new patients have not been seen in five or ten years, some far longer. We start from today and work forward.",
  },
  {
    q: "Can I complete the paperwork before I arrive?",
    a: "Yes, and we recommend it. The registration and medical history forms can be filled in at home so your appointment time is spent in the chair rather than in the waiting room.",
  },
];

const bring = [
  "Photo ID",
  "Dental insurance card",
  "List of current medications",
  "Your physician's name and number",
  "Previous X-rays, if taken elsewhere within the last year",
  "Any questions you have written down — we would rather you asked",
];

export default function NewPatientsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={faqs} />

      <PageHero
        eyebrow="New patients"
        title="Welcome to the practice"
        lead="Here is exactly what happens when you come to see us for the first time — including what it costs, which is nothing unless you find it valuable."
        breadcrumbs={breadcrumbs}
        image="/images/first-visit.avif"
        imageAlt="A patient's first examination visit"
      />

      {/* Guarantee — elemen paling menonjol di seluruh website ----------- */}
      <Section>
        <GuaranteeBox />
      </Section>

      {/* First & second visit -------------------------------------------- */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Your first two visits"
          title="Two appointments before any treatment begins"
          lead="We do not diagnose and drill on the same day. You get time to think, and we get time to plan properly."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Card className="p-8" hover>
            <div className="flex items-center justify-between">
              <span className="pill-label inline-block">Visit one</span>
              <span className="font-tight text-3xl font-semibold tracking-tight text-brand">
                01
              </span>
            </div>
            <h3 className="font-tight mt-5 text-2xl font-bold tracking-tight text-ink">
              The examination — 90 to 120 minutes
            </h3>
            <p className="mt-4 leading-relaxed text-ink-2">
              Longer than you are used to, and deliberately so. This is the
              appointment that determines everything that follows.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Full medical and dental history",
                "Complete examination of every tooth and all soft tissue",
                "Oral cancer screening",
                "Gum and bone health assessment",
                "Digital X-rays and intraoral photographs",
                "A conversation about what you actually want from your teeth",
              ].map((item) => (
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
          </Card>

          <Card className="p-8" hover>
            <div className="flex items-center justify-between">
              <span className="pill-label inline-block">Visit two</span>
              <span className="font-tight text-3xl font-semibold tracking-tight text-brand">
                02
              </span>
            </div>
            <h3 className="font-tight mt-5 text-2xl font-bold tracking-tight text-ink">
              The findings — your plan, in plain English
            </h3>
            <p className="mt-4 leading-relaxed text-ink-2">
              You sit down with the dentist and go through what we found, using
              your own photographs on the screen.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "What we found, shown on your own images",
                "What is urgent, what can wait, and what needs watching",
                "Every reasonable option — not just the expensive one",
                "Honest costs, with insurance benefits already verified",
                "A treatment sequence that fits your budget and schedule",
                "Time to think it over. No pressure at the desk.",
              ].map((item) => (
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
          </Card>
        </div>
      </Section>

      {/* Forms ----------------------------------------------------------- */}
      <Section id="forms">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Patient forms"
              title="Fill it in at home, not in the waiting room"
              lead="Registration and medical history take about ten minutes. Doing it beforehand means your appointment starts on time and every minute of it is spent on you."
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "calendar",
                  title: "Patient registration",
                  body: "Contact details, insurance and consent",
                },
                {
                  icon: "shield",
                  title: "Medical history",
                  body: "Conditions, medications and allergies",
                },
              ].map((f) => (
                <Card key={f.title} className="p-6" hover>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    {f.body}
                  </p>
                  {/* TODO: ganti href ke PDF / form online setelah klien kirim dokumen */}
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    Request the form
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-3">
              Prefer paper? Arrive fifteen minutes early and we will hand you a
              clipboard — no problem at all.
            </p>
          </div>

          <Card className="bg-brand-tint-2 p-8">
            <h3 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
              <Icon name="check" className="h-5 w-5 text-brand" />
              What to bring
            </h3>
            <ul className="mt-6 space-y-3.5">
              {bring.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.9375rem] text-ink-2"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Insurance ------------------------------------------------------- */}
      <Section tone="surface" id="insurance">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Insurance & payment"
              title="We will tell you the real number before we start"
            />
            <p className="mt-6 leading-relaxed text-ink-2">
              Dental insurance is confusing by design. Our front desk verifies
              your benefits before your appointment so that the figure we quote
              is what you will actually pay — not an estimate that changes when
              the claim comes back.
            </p>
            <div className="mt-8">
              <Button href={site.phoneHref} variant="outline">
                <Icon name="phone" className="h-4 w-4 text-brand" filled />
                Check your benefits — {site.phone}
              </Button>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {site.insurance.map((item) => (
              <li key={item}>
                <Card className="h-full p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink">
                    {item}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Emergency ------------------------------------------------------- */}
      <Section>
        <div className="grid gap-10 rounded-[2rem] border border-line bg-white p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-red-700 uppercase">
              <Icon name="alert" className="h-4 w-4" />
              Dental emergency
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink">
              In pain right now? Call, do not wait it out.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-2">
              Emergency patients do not need to be established with the
              practice. Ring the office and describe what happened — the front
              desk will triage you, tell you what to do in the meantime, and get
              you in as quickly as we can. A knocked-out tooth has the best
              chance of being saved within the first hour.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.phoneHref}>
                <Icon name="phone" className="h-4 w-4" filled />
                Call {site.phone}
              </Button>
              <Button href="/services/emergency-dentistry" variant="outline">
                Emergency care details
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Photo
            src="/images/svc-emergency.avif"
            alt="Emergency dental treatment"
            className="aspect-[4/3] w-full rounded-2xl"
            width={900}
            height={700}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </Section>

      {/* FAQ ------------------------------------------------------------- */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionHeading
            eyebrow="New patient questions"
            title="Everything people ask before their first visit"
            lead="If yours is not here, call the front desk. You do not need an appointment to ask a question."
          />
          <Faq items={faqs} />
        </div>
      </Section>

      <ClosingCta
        title="Book your first visit"
        body="Ninety minutes to two hours, a proper examination, and no charge for it unless you find it valuable. That is the whole offer."
      />
    </>
  );
}
