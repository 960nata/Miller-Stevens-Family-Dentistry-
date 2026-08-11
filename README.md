# Miller & Stevens Family Dentistry — Website

Redesign situs praktik gigi keluarga di South Oklahoma City (berdiri 1967, rating 5.0 dari 1.249 review).
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (22 halaman statis)
npm start        # jalankan hasil build
```

---

## Struktur

```
src/
  lib/site.ts            ← SEMUA data klinik (nama, telepon, alamat, jam, dokter, testimoni)
  lib/services.ts        ← 8 layanan; tiap layanan otomatis jadi 1 halaman SEO
  app/
    page.tsx             Beranda (12 section)
    about/               Tentang Kami — cerita, timeline, filosofi, sterilisasi, dokter, tur
    services/            Index layanan
    services/[slug]/     Template halaman layanan (8 section, digenerate dari data)
    new-patients/        Pasien baru — kunjungan 1 & 2, jaminan, form, asuransi, darurat, FAQ
    contact/             Kontak, peta, jam, form janji temu
    accessibility/       Pernyataan aksesibilitas ADA
    privacy/             Privacy policy (kerangka — wajib ditinjau pengacara klien)
    api/appointment/     Endpoint form (saat ini hanya log; lihat TODO)
    sitemap.ts robots.ts
  components/
    ui.tsx               Button, Card, Section, Icon, Stars, Logo
    blocks.tsx           TrustBar, GuaranteeBox, ServiceCard, DoctorCard, ClosingCta, PageHero, Photo
    interactive.tsx      Slider testimoni, FAQ accordion, lightbox smile gallery (client)
    appointment-form.tsx Form janji temu + validasi
    schema.tsx           Schema.org: Dentist, AggregateRating, FAQPage, BreadcrumbList
scripts/make-placeholders.mjs   Generator gambar placeholder
```

**Prinsip:** hampir semua teks & data ada di `src/lib/`. Untuk mengubah konten, edit dua file itu — tidak perlu menyentuh komponen.

---

## Menambah layanan baru

Tambahkan satu objek di array `services` (`src/lib/services.ts`). Otomatis muncul di:
menu dropdown header, menu mobile, footer, halaman `/services`, sitemap, schema markup,
dan halaman `/services/<slug>` lengkap dengan FAQ schema.

---

## Mengganti gambar placeholder

Semua gambar ada di `public/images/*.svg`. Timpa dengan foto asli **memakai nama file yang sama**
(ekstensi boleh berubah jadi `.jpg`/`.webp` — sesuaikan path di `src/lib/`).
Optimasi `next/image` (AVIF/WebP, lazy load, srcset) langsung aktif.

Regenerate placeholder: `node scripts/make-placeholders.mjs`

---

## ⚠️ TODO SEBELUM GO-LIVE

Data berikut belum terkonfirmasi dan **wajib** ditanyakan ke klien:

| # | Item | Lokasi |
|---|------|--------|
| 1 | **Jam praktik** — sumber riset berbeda di 3 tempat | `src/lib/site.ts` → `hours` |
| 2 | Nomor jalan persis (baru ada "Willowbrook Gardens, S Walker Ave") | `site.address` |
| 3 | Nama resmi praktik + domain final | `site.name`, `site.url` |
| 4 | Email front desk | `site.email` |
| 5 | 2 dokter lagi (pitch menyebut 4 dokter, ±192 tahun pengalaman) | `doctors` |
| 6 | Pendidikan & tahun lulus tiap dokter | `doctors[].highlights` |
| 7 | URL Facebook / Instagram / Google Business Profile | `site.social` |
| 8 | Foto asli: tim, gedung, ruang praktik, before/after | `public/images/` |
| 9 | Izin tertulis pasien untuk foto before/after & testimoni | — |
| 10 | PDF/form online pendaftaran pasien baru | `/new-patients` → tombol "Request the form" |
| 11 | Privacy policy + HIPAA Notice of Privacy Practices resmi | `app/privacy` |
| 12 | Tujuan form janji temu (email? Dentrix? Open Dental?) | `app/api/appointment/route.ts` |

Testimoni saat ini adalah **contoh yang mewakili pola review asli**, bukan kutipan verbatim.
Ganti dengan review asli (dengan izin) sebelum publikasi.

---

## Yang sudah terpasang (bahan pitch)

- **HTTPS-ready** + security headers (HSTS, nosniff, X-Frame-Options, Permissions-Policy) — `next.config.ts`
- **Schema markup** `Dentist` + `AggregateRating` (5.0 / 1.249) + `FAQPage` + `BreadcrumbList`
  → rating bintang bisa muncul langsung di hasil Google
- **SEO**: metadata per halaman, canonical, OpenGraph, sitemap.xml, robots.txt.
  4 halaman prioritas tinggi: Dental Implants · Cosmetic · Emergency · Sedation
- **Special Care Dentistry** — niche bernilai tinggi yang tidak dipromosikan situs lama
- **Booking 24/7** lewat form + honeypot anti-spam
- **Aksesibilitas**: skip-link, focus ring, ARIA pada slider/accordion/lightbox,
  `prefers-reduced-motion`, halaman pernyataan ADA
- **Performa**: seluruh halaman statis (SSG), ±116 kB First Load JS, nol dependensi eksternal
- **Responsif** penuh, telepon selalu terlihat di header
- **Jaminan "tidak puas, tidak bayar"** ditampilkan di hero, beranda, halaman layanan, dan pasien baru
  — sesuai brief, ini elemen paling menonjol di seluruh situs

## Belum dikerjakan

Google Analytics dan klaim listing direktori (YellowPages/GBP) belum dipasang —
keduanya butuh akun klien.
