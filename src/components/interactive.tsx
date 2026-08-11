"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, Stars } from "@/components/ui";

/* -------------------------------------------------------------------------- */
/* Testimonial slider                                                          */
/* -------------------------------------------------------------------------- */

export function TestimonialSlider({
  items,
}: {
  items: readonly { quote: string; author: string; detail: string }[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => setIndex(((next % items.length) + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  return (
    <div
      className="relative min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="overflow-hidden rounded-[2rem] border border-line bg-white"
        aria-roledescription="carousel"
        aria-label="Patient reviews"
      >
        <div
          className="flex transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <figure
              key={item.author}
              className="w-full shrink-0 p-8 md:p-14"
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
            >
              <Icon
                name="quote"
                className="h-8 w-8 text-brand-tint"
                filled
              />
              <blockquote className="mt-6 text-xl leading-[1.6] font-medium text-ink md:text-[1.625rem] md:leading-[1.5]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-base font-semibold text-brand-dark">
                  {item.author.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">
                    {item.author}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-3">
                    {item.detail}
                  </span>
                </span>
                <span className="ml-auto hidden sm:block">
                  <Stars className="text-sand" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Choose review">
          {items.map((item, i) => (
            <button
              key={item.author}
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-brand" : "w-2 bg-line hover:bg-ink-3"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ accordion                                                               */
/* -------------------------------------------------------------------------- */

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-brand-tint-2 md:px-8"
              >
                <span className="text-[1.0625rem] font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-brand text-white"
                      : "bg-surface text-ink-2"
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="px-6 pb-7 md:px-8"
            >
              <p className="max-w-3xl leading-relaxed text-ink-2">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Before / after smile gallery                                                */
/* -------------------------------------------------------------------------- */

export function SmileLightbox({
  images,
}: {
  images: { src: string; label: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((a) => (a === null ? a : (a + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActive((a) =>
          a === null ? a : (a - 1 + images.length) % images.length,
        );
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line"
              aria-label={`Enlarge ${img.label}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.label}
                className="aspect-[5/4] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 text-left text-xs font-semibold text-white">
                {img.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={images[active].label}
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active].src}
            alt={images[active].label}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Newsletter form — dipakai di footer                                         */
/* -------------------------------------------------------------------------- */

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setState("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setState("done");
      setEmail("");
      setMessage("Thank you — you are on the list.");
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <div className="flex items-center gap-2 rounded-full border border-hairline bg-white p-1.5 pl-5">
        <label htmlFor="newsletter-email" className="sr-only">
          Your email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          autoComplete="email"
          className="min-w-0 flex-1 bg-transparent text-[0.875rem] text-ink outline-none placeholder:text-mute"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="shrink-0 rounded-full bg-aqua px-5 py-2.5 text-[0.8125rem] font-medium text-white transition-colors hover:bg-aqua-dark disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 min-h-[1.25rem] pl-1 text-[0.75rem] ${
          state === "error" ? "text-ink" : "text-ink-3"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
