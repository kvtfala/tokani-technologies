const recipient = "desmond@tokani.com.fj";

function clean(value: unknown, maximum = 2000) {
  return String(value ?? "").trim().slice(0, maximum);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid enquiry." }, { status: 400 });
  }

  if (clean(payload.website)) return Response.json({ ok: true });
  const name = clean(payload.name, 120);
  const business = clean(payload.business, 160);
  const email = clean(payload.email, 254);
  const phone = clean(payload.phone, 80);
  const service = clean(payload.service, 120);
  const contact = clean(payload.contact, 80);
  const details = clean(payload.details, 4000);
  if (!name || !email || !phone || !service || !contact || !details || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "Email delivery is not configured.", fallback: true }, { status: 503 });

  const safe = Object.fromEntries(Object.entries({ name, business: business || "Not provided", email, phone, service, contact, details }).map(([key, value]) => [key, escapeHtml(value)]));
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Tokani Website <onboarding@resend.dev>",
      to: [recipient],
      reply_to: email,
      subject: `New Tokani enquiry — ${business || name} — ${service}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#222"><h1 style="font-size:24px">New Tokani website enquiry</h1><p><strong>Name:</strong> ${safe.name}</p><p><strong>Business:</strong> ${safe.business}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone / WhatsApp:</strong> ${safe.phone}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Preferred contact:</strong> ${safe.contact}</p><hr style="border:0;border-top:1px solid #ddd"><h2 style="font-size:18px">Project details</h2><p style="white-space:pre-wrap">${safe.details}</p></div>`,
    }),
  });
  if (!response.ok) return Response.json({ error: "Email delivery failed." }, { status: 502 });
  return Response.json({ ok: true });
}
