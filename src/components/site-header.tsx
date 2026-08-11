"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Button, Icon, Logo } from "@/components/ui";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: true },
  { label: "About Us", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setPastHero(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Di homepage nav melayang di atas kartu hero gelap (teks putih). Setelah
  // hero terlewati, nav berubah jadi bar putih yang menempel di atas.
  const overlay = isHome && !pastHero;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header
        className={
          overlay
            ? `absolute inset-x-0 z-50 border-b border-transparent bg-transparent transition-all duration-300 ${
                scrolled ? "top-0" : "top-[10px]"
              }`
            : isHome
              ? "fixed inset-x-0 top-0 z-50 border-b border-hairline/80 bg-white/95 shadow-sm backdrop-blur-xl animate-slide-down"
              : `sticky z-50 transition-all duration-300 ${
                  scrolled
                    ? "top-0 border-b border-hairline/80 bg-white/95 shadow-sm backdrop-blur-xl"
                    : "top-[10px] border-b border-hairline/50 bg-white/90 backdrop-blur-md"
                }`
        }
      >
        <div
          className={`flex h-20 items-center justify-between gap-6 ${
            isHome ? "container-wide" : "container-page"
          }`}
        >
          <Logo invert={overlay} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul
              className={`flex items-center gap-1.5 ${
                overlay
                  ? "rounded-full border border-white/20 bg-white/10 p-1.5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md"
                  : ""
              }`}
            >
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.875rem] font-medium transition-colors ${
                        overlay
                          ? active
                            ? "bg-white text-ink shadow-sm"
                            : "text-white/85 hover:text-white"
                          : active
                            ? "bg-shell text-ink font-semibold"
                            : "text-ink-2 hover:bg-shell/80 hover:text-ink"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                      {item.children ? (
                        <svg
                          viewBox="0 0 12 12"
                          className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180"
                          aria-hidden
                        >
                          <path
                            d="M2 4.5L6 8.5L10 4.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : null}
                    </Link>

                    {item.children ? (
                      <div className="invisible fixed inset-x-0 top-24 z-50 flex justify-center opacity-0 transition-all duration-200 before:absolute before:-top-8 before:right-0 before:left-0 before:h-8 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <div className="w-full max-w-3xl rounded-3xl border border-hairline bg-white/98 p-5 shadow-[0_24px_60px_-15px_rgba(10,28,37,0.25)] backdrop-blur-2xl">
                          <div className="flex items-center justify-between px-1 pb-3">
                            <p className="text-xs font-semibold tracking-[0.14em] text-ink-3 uppercase">
                              Our Services
                            </p>
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-brand transition-colors hover:text-brand-2 hover:underline"
                            >
                              View all services →
                            </Link>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group/item flex flex-col items-start gap-3 rounded-2xl p-4 text-left transition-colors hover:bg-surface"
                              >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-transform duration-200 group-hover/item:scale-110">
                                  <Icon name={s.icon} className="h-5 w-5" />
                                </span>
                                <div>
                                  <span className="block text-sm font-semibold text-ink">
                                    {s.shortName}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-snug text-ink-3">
                                    {s.name}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className={`hidden items-center gap-2 rounded-full px-3.5 py-2 text-[0.875rem] font-medium transition-colors xl:inline-flex ${
                overlay
                  ? "text-white/90 hover:text-white"
                  : "text-ink hover:text-brand"
              }`}
            >
              <Icon name="phone" className="h-4 w-4" filled />
              {site.phone}
            </a>

            <span className="hidden sm:block">
              <Button
                href="/contact"
                variant={overlay ? "white" : "primary"}
                className="px-5 py-2.5 text-[0.875rem] font-semibold shadow-sm"
              >
                Book a Call
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                overlay && !open ? "text-white" : "text-ink"
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-4 w-6">
                <span
                  className={`absolute left-0 block h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 block h-0.5 w-6 rounded bg-current transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          scrolled ? "top-20" : "top-[90px]"
        }`}
      >
        <div className="container-wide py-6">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink transition-colors hover:bg-surface"
                >
                  {item.label}
                  <Icon name="arrow" className="h-4 w-4 text-ink-3" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 mb-2 px-4 text-xs font-semibold tracking-[0.14em] text-ink-3 uppercase">
            Our Services
          </p>
          <ul className="grid gap-1 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-ink-2 transition-colors hover:bg-surface"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-tint text-brand">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {s.shortName}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3 pb-10">
            <Button href={site.phoneHref} variant="outline">
              <Icon name="phone" className="h-4 w-4" filled />
              Call {site.phone}
            </Button>
            <Button href="/contact">Request an Appointment</Button>
          </div>
        </div>
      </div>
    </>
  );
}
