import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  subject: z.string().max(200).optional().default(""),
  message: z.string().min(1).max(5000),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY not configured");

    const subject = data.subject?.trim() || `New portfolio inquiry from ${data.name}`;
    const html = `
      <div style="font-family: system-ui, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 16px">New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${escape(data.name)}</p>
        <p><strong>Email:</strong> ${escape(data.email)}</p>
        <p><strong>Subject:</strong> ${escape(subject)}</p>
        <hr/>
        <p style="white-space:pre-wrap">${escape(data.message)}</p>
      </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "K.C.T. Portfolio <onboarding@resend.dev>",
        to: ["kuzivakwashetembo8@gmail.com"],
        reply_to: data.email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Resend failed: ${res.status} ${text}`);
    }
    return { ok: true as const };
  });

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}