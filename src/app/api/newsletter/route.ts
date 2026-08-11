import { NextResponse } from "next/server";

/**
 * Endpoint langganan buletin.
 *
 * TODO sebelum go-live — sambungkan ke penyedia email klien
 * (Mailchimp / Resend Audiences / Constant Contact).
 *
 * Sama seperti /api/appointment: untuk sekarang email divalidasi lalu
 * dicatat di log server agar form bisa didemokan tanpa kredensial.
 */

export async function POST(request: Request) {
  let body: { email?: string; company?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot terisi = bot. Balas 200 supaya bot tidak tahu.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  console.log("[newsletter signup]", {
    email,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
