/**
 * Schema.org markup — ini yang membuat Google menampilkan
 * rating bintang, alamat dan jam praktik langsung di hasil pencarian.
 */
import { doctors, site } from "@/lib/site";
import { services } from "@/lib/services";

const DAY_MAP: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

function to24h(t: string) {
  const [time, meridiem] = t.split(" ");
  const [hRaw, m] = time.split(":");
  let h = Number(hRaw);
  if (meridiem === "PM" && h !== 12) h += 12;
  if (meridiem === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${m}`;
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.url}/#practice`,
    name: site.name,
    description: `A family dental practice serving South Oklahoma City since ${site.established}.`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.established),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Insurance",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    openingHoursSpecification: site.hours
      .filter((h) => h.open)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${DAY_MAP[h.day]}`,
        opens: to24h(h.open!),
        closes: to24h(h.close!),
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    employee: doctors.map((d) => ({
      "@type": "Dentist",
      name: d.name,
      jobTitle: d.role,
    })),
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name,
      url: `${site.url}/services/${s.slug}`,
    })),
    isAcceptingNewPatients: true,
    areaServed: [
      { "@type": "City", name: "Oklahoma City" },
      { "@type": "City", name: "Moore" },
      { "@type": "City", name: "Norman" },
    ],
    sameAs: [site.social.facebook, site.social.instagram, site.social.google],
  };

  return <JsonLd data={data} />;
}

export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.href}`,
        })),
      }}
    />
  );
}
