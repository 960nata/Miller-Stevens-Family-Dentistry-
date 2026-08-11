import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { LocalBusinessSchema } from "@/components/schema";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Judul besar homepage memakai grotesque ketat agar cocok dengan referensi desain.
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Dentist in South Oklahoma City`,
    template: `%s | ${site.shortName} Dentistry`,
  },
  description: `Family dentist in South Oklahoma City since ${site.established}. Rated ${site.reviews.rating} by over ${site.reviews.count.toLocaleString()} patients. Implants, cosmetic, sedation and emergency dental care. Call ${site.phone}.`,
  keywords: [
    "dentist south oklahoma city",
    "dentist OKC",
    "dental implants oklahoma city",
    "cosmetic dentist OKC",
    "emergency dentist oklahoma city",
    "sedation dentistry OKC",
    "family dentist 73139",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: `Rated ${site.reviews.rating} stars by ${site.reviews.count.toLocaleString()} patients. A family dental practice in South OKC since ${site.established}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning hanya di <html>/<body>: ekstensi browser
    // (Bitdefender, dsb.) menempelkan atribut seperti bis_register / webcrx
    // sebelum React hydrate. Peringatan di komponen lain tetap aktif.
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LocalBusinessSchema />
        <SiteHeader />
        <main id="main" suppressHydrationWarning>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
