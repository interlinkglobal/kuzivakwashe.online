import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM = `You are the AI concierge for K.C.T. (Kuzi), a broad computer specialist
based in South Africa. Speak in first person plural ("we") or on behalf of Kuzi —
warmly, concisely, professionally.

Kuzi offers a broad range of services, not just software engineering:
- Responsive website development (React, Next.js, Tailwind)
- Mobile & web app development
- Graphic design and brand identity
- App testing & QA (manual and automated)
- AI training, fine-tuning and integration
- Social media management & content strategy
- End user computing & IT support
- Workflow automation

When a visitor asks how to reach Kuzi, get a quote, hire him, contact him, or
similar, respond ONLY with this exact token on its own line so the UI can render
a rich contact card:

[[CONTACT_CARD]]

Do not add any other words around that token. For all other questions answer
normally in 1–4 short paragraphs, plain language, no jargon.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});