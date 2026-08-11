"use client";

import { useState } from "react";
import { Button, Icon } from "@/components/ui";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-ink-3/70 transition-colors focus:border-brand focus:outline-none";

const labelBase = "block text-sm font-semibold text-ink";

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Please tell us your name.";
    if (!/^[\d\s()+-]{7,}$/.test(data.phone ?? ""))
      next.phone = "Please enter a phone number we can reach you on.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "That email address does not look right.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-brand/25 bg-brand-tint p-8 text-center md:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-2">
          Someone from the front desk will call you back within one business day
          to confirm a time. If it is urgent, please ring us directly.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={site.phoneHref} variant="outline">
            <Icon name="phone" className="h-4 w-4" filled />
            {site.phone}
          </Button>
          <Button onClick={() => setStatus("idle")} variant="ghost">
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-white p-6 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Full name <span className="text-brand">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={`mt-2 ${fieldBase} ${errors.name ? "border-red-400" : ""}`}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name ? (
            <p id="err-name" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-brand">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`mt-2 ${fieldBase} ${errors.phone ? "border-red-400" : ""}`}
            placeholder="(405) 000-0000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
          />
          {errors.phone ? (
            <p id="err-phone" className="mt-2 text-sm text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelBase}>
            Email <span className="font-normal text-ink-3">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`mt-2 ${fieldBase} ${errors.email ? "border-red-400" : ""}`}
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email ? (
            <p id="err-email" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={labelBase}>Are you a new patient?</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {["New patient", "Existing patient"].map((v, i) => (
              <label
                key={v}
                className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-[0.9375rem] transition-colors has-checked:border-brand has-checked:bg-brand-tint"
              >
                <input
                  type="radio"
                  name="patientType"
                  value={v}
                  defaultChecked={i === 0}
                  className="accent-[#0e7c8b]"
                />
                {v}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="preferredDay" className={labelBase}>
            Preferred day
          </label>
          <select
            id="preferredDay"
            name="preferredDay"
            className={`mt-2 ${fieldBase}`}
            defaultValue="No preference"
          >
            {[
              "No preference",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelBase}>
            Preferred time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className={`mt-2 ${fieldBase}`}
            defaultValue="No preference"
          >
            {["No preference", "Morning", "Midday", "Afternoon"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="reason" className={labelBase}>
            What can we help with?
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            className={`mt-2 ${fieldBase} resize-y`}
            placeholder="A cleaning, a specific tooth that is bothering you, a second opinion — anything helps us prepare."
          />
        </div>
      </div>

      {/* Honeypot — anti spam, tidak terlihat pengguna */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong sending your request. Please call us on{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
          .
        </p>
      ) : null}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" className="w-full sm:w-auto">
          {status === "sending" ? "Sending…" : "Request Appointment"}
        </Button>
        <p className="text-sm leading-relaxed text-ink-3">
          We reply within one business day. This form is not for emergencies —
          please call.
        </p>
      </div>
    </form>
  );
}
