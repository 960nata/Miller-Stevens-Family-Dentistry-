import { NextResponse } from "next/server";

/**
 * Endpoint permintaan janji temu.
 *
 * TODO sebelum go-live — sambungkan ke salah satu:
 *   1. Email ke front desk (Resend / SendGrid / Postmark)
 *   2. Software praktik klinik (Dentrix / Eaglesoft / Open Dental)
 *   3. Google Sheet atau CRM sederhana
 *
 * Untuk sekarang request divalidasi lalu dicatat di log server,
 * sehingga form sudah bisa didemokan ke klien tanpa kredensial apa pun.
 *
 * CATATAN KEPATUHAN: jangan pernah menyimpan detail kondisi medis pasien
 * di sistem yang tidak HIPAA-compliant. Form ini sengaja hanya meminta
 * data kontak dan preferensi jadwal.
 */

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  patientType?: string;
  preferredDay?: string;
  preferredTime?: string;
  reason?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot terisi = bot. Balas 200 supaya bot tidak tahu.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();

  if (!name || !phone || !/^[\d\s()+-]{7,}$/.test(phone)) {
    return NextResponse.json(
      { error: "Name and a valid phone number are required." },
      { status: 422 },
    );
  }

  console.log("[appointment request]", {
    name,
    phone,
    email: body.email?.trim() || null,
    patientType: body.patientType ?? null,
    preferredDay: body.preferredDay ?? null,
    preferredTime: body.preferredTime ?? null,
    reason: body.reason?.trim() || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
