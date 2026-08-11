/**
 * Generate branded placeholder images.
 *
 * Setiap file di /public/images/ tinggal DITIMPA dengan foto asli klinik
 * (nama file sama) — tidak ada kode yang perlu diubah.
 *
 *   node scripts/make-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "../public/images");
mkdirSync(outDir, { recursive: true });

// Label ditulis dalam Bahasa Inggris karena mockup ini ditunjukkan ke klien di AS.
const files = [
  ["hero-clinic", 1400, 1000, "Photo: team or treatment room", "a"],
  ["about-building", 1200, 900, "Photo: Willowbrook Gardens office", "b"],
  ["dr-miller", 800, 1000, "Photo: Dr. John Wm. Miller, DDS", "p"],
  ["dr-stevens", 800, 1000, "Photo: Dr. Roy L. Stevens, DDS", "p"],
  ["team", 1200, 800, "Photo: hygienists & front desk", "b"],
  ["tour-1", 900, 700, "Photo: treatment room", "a"],
  ["tour-2", 900, 700, "Photo: waiting area", "b"],
  ["tour-3", 900, 700, "Photo: sterilisation area", "a"],
  ["first-visit", 1100, 850, "Photo: new patient consultation", "b"],
  ["svc-family", 900, 700, "Photo: family & children", "a"],
  ["svc-cosmetic", 900, 700, "Photo: cosmetic smile", "b"],
  ["svc-implants", 900, 700, "Photo: implant model", "a"],
  ["svc-whitening", 900, 700, "Photo: teeth whitening", "b"],
  ["svc-sedation", 900, 700, "Photo: sedation suite", "a"],
  ["svc-emergency", 900, 700, "Photo: emergency care", "b"],
  ["svc-special", 900, 700, "Photo: special care dentistry", "a"],
  ["svc-restorative", 900, 700, "Photo: crowns & bridges", "b"],
  ["smile-1", 700, 560, "Before / After 01", "a"],
  ["smile-2", 700, 560, "Before / After 02", "b"],
  ["smile-3", 700, 560, "Before / After 03", "a"],
  ["smile-4", 700, 560, "Before / After 04", "b"],
];

const schemes = {
  a: { from: "#dceef1", to: "#b9dde3", line: "#0e7c8b", text: "#0a5b66" },
  b: { from: "#eef4f6", to: "#d3e5ea", line: "#14a0b3", text: "#0a5b66" },
  p: { from: "#e9f2f4", to: "#cfe2e7", line: "#0e7c8b", text: "#0a5b66" },
};

const toothMark = `M8 3.5c1.4 0 1.9.8 4 .8s2.6-.8 4-.8c2.2 0 3.5 1.8 3.5 4.4 0 2.4-1 3.6-1.6 6.3-.5 2.4-.6 6.3-2.6 6.3-1.7 0-1.5-4.2-3.3-4.2s-1.6 4.2-3.3 4.2c-2 0-2.1-3.9-2.6-6.3C5.5 11.5 4.5 10.3 4.5 7.9 4.5 5.3 5.8 3.5 8 3.5z`;

for (const [name, w, h, label, key] of files) {
  const c = schemes[key];
  const fontSize = Math.round(Math.min(w, h) * 0.042);
  const markSize = Math.min(w, h) * 0.18;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c.from}"/>
      <stop offset="1" stop-color="${c.to}"/>
    </linearGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="${c.line}" opacity="0.16"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#dots)"/>
  <circle cx="${w * 0.82}" cy="${h * 0.2}" r="${Math.min(w, h) * 0.3}" fill="${c.line}" opacity="0.06"/>
  <circle cx="${w * 0.15}" cy="${h * 0.88}" r="${Math.min(w, h) * 0.22}" fill="${c.line}" opacity="0.05"/>
  <g transform="translate(${w / 2 - markSize / 2} ${h / 2 - markSize * 0.78}) scale(${markSize / 24})">
    <path d="${toothMark}" fill="${c.line}" opacity="0.4"/>
  </g>
  <text x="${w / 2}" y="${h / 2 + markSize * 0.62}" text-anchor="middle"
    font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="${fontSize}"
    font-weight="600" fill="${c.text}" opacity="0.75">${label}</text>
  <text x="${w / 2}" y="${h / 2 + markSize * 0.62 + fontSize * 1.5}" text-anchor="middle"
    font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="${fontSize * 0.72}"
    fill="${c.text}" opacity="0.45">${w} × ${h} — replace with real photo</text>
</svg>
`;

  writeFileSync(resolve(outDir, `${name}.svg`), svg, "utf8");
}

console.log(`✓ ${files.length} placeholder images → public/images/`);
