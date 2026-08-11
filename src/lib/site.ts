/**
 * Single source of truth untuk seluruh data klinik.
 *
 * SEMUA yang ditandai TODO harus dikonfirmasi ke klien sebelum go-live.
 * Ganti di sini saja — otomatis berubah di semua halaman + schema markup.
 */

export const site = {
  name: "Miller & Stevens Family Dentistry", // TODO: konfirmasi nama resmi praktik
  shortName: "Miller & Stevens",
  tagline: "Caring for South OKC Smiles Since 1967",
  established: 1967,
  url: "https://www.millerstevensdental.com", // TODO: domain final

  phone: "(405) 632-5562",
  phoneHref: "tel:+14056325562",
  email: "frontdesk@millerstevensdental.com", // TODO

  address: {
    // TODO: nomor jalan persis — belum ada di riset
    street: "Willowbrook Gardens Complex, S Walker Ave",
    city: "Oklahoma City",
    state: "OK",
    zip: "73139",
    country: "US",
    lat: 35.3853,
    lng: -97.5203,
  },

  directions:
    "Half a mile south of I-240 on Walker Avenue, in the Willowbrook Gardens complex. Free parking lot, wheelchair accessible entrance.",

  // TODO: jam praktik berbeda di 3 sumber — WAJIB dikonfirmasi ke klien
  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "12:00 PM" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ],

  reviews: {
    rating: 5.0,
    count: 1249,
    source: "Demandforce & Google",
  },

  social: {
    facebook: "https://facebook.com/", // TODO
    instagram: "https://instagram.com/", // TODO
    google: "https://g.page/", // TODO
  },

  insurance: [
    "Delta Dental Premier provider",
    "We file claims for most PPO plans",
    "Visa, Mastercard, Discover & American Express",
    "In-house payment arrangements available",
  ],
} as const;

export const doctors = [
  {
    slug: "john-miller",
    name: "Dr. John Wm. Miller, DDS",
    role: "General & Restorative Dentistry",
    photo: "/images/dr-miller.avif",
    bio: "Dr. Miller has spent his career building relationships that span three and four generations of the same South Oklahoma City families. He is known for taking the time to explain every option in plain language, so patients leave understanding exactly what is happening in their mouth and why.",
    highlights: [
      "Doctor of Dental Surgery", // TODO: universitas & tahun lulus
      "Restorative & implant restoration",
      "Continuing education in modern preventive care",
    ],
  },
  {
    slug: "roy-stevens",
    name: "Dr. Roy L. Stevens, DDS",
    role: "General & Cosmetic Dentistry",
    photo: "/images/dr-stevens.avif",
    bio: "Dr. Stevens focuses on comfort-first dentistry — from cosmetic work that looks entirely natural to treating patients who have avoided the dentist for years because of anxiety. Patients regularly mention how calm they felt in his chair.",
    highlights: [
      "Doctor of Dental Surgery", // TODO: universitas & tahun lulus
      "Cosmetic & smile design",
      "Care for anxious and special-needs patients",
    ],
  },
  // TODO: pitch menyebut 4 dokter (±192 tahun pengalaman gabungan).
  // Tambahkan 2 dokter lagi setelah data lengkap diterima dari klien.
] as const;

export const differentiators = [
  {
    title: "Your first visit is 90 to 120 minutes",
    body: "Most offices give you fifteen. We use the time to examine, photograph, listen and actually get to know you — so the plan we build is yours, not a template.",
    icon: "clock",
  },
  {
    title: "Not satisfied? You owe us nothing",
    body: "You are not asked to pay for the first-visit examination. If our findings and recommendations are not valuable to you, there is no charge. None.",
    icon: "shield",
  },
  {
    title: "General anesthesia by a board-certified anesthesiologist",
    body: "For complex cases, severe anxiety, or special-needs patients, sedation is administered by a licensed anesthesiologist — not squeezed in between appointments.",
    icon: "heart",
  },
  {
    title: "A family practice, not a corporate chain",
    body: "The same dentists, the same hygienists, the same front desk. Since 1967 this has been one practice serving one community — nobody is being transferred to another branch next quarter.",
    icon: "home",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I have been terrified of dentists my whole life. They never once made me feel rushed or judged. First time in twenty years I have kept every appointment.",
    author: "Karen M.",
    detail: "Patient since 2019",
  },
  {
    quote:
      "Three generations of my family go here. My mother started seeing them in the seventies and now my daughter sits in the same chair.",
    author: "Robert T.",
    detail: "Patient since 1994",
  },
  {
    quote:
      "The first appointment took almost two hours and I was surprised — until I realised nobody had ever explained my own teeth to me before.",
    author: "Danielle P.",
    detail: "New patient, 2024",
  },
  {
    quote:
      "My son has autism and most offices simply could not manage a cleaning. Here, the staff knew exactly what to do. I nearly cried in the parking lot.",
    author: "Alicia R.",
    detail: "Special care dentistry",
  },
  {
    quote:
      "Cracked a molar on a Saturday. They got me in first thing Monday morning and it did not cost anything close to what I feared.",
    author: "James W.",
    detail: "Emergency visit",
  },
] as const;

export const timeline = [
  {
    year: "1967",
    title: "The doors open",
    body: "The practice is founded in South Oklahoma City with a simple idea: treat dental health, not just dental disease.",
  },
  {
    year: "1980s",
    title: "A second generation of patients",
    body: "Children treated in the first decade begin bringing their own children through the same door.",
  },
  {
    year: "2000s",
    title: "Modern diagnostics",
    body: "Digital imaging, intraoral photography and updated sterilisation protocols meeting ADA, OSHA and CDC standards.",
  },
  {
    year: "2010s",
    title: "Sedation & special care",
    body: "Partnership with a board-certified anesthesiologist opens the practice to patients other offices turn away.",
  },
  {
    year: "Today",
    title: "1,249 five-star reviews",
    body: "Nearly six decades on, still one practice, still family owned, still in South OKC.",
  },
] as const;

export function formatHours() {
  return site.hours.map((h) => ({
    day: h.day,
    label: h.open ? `${h.open} – ${h.close}` : "Closed",
    closed: !h.open,
  }));
}
