import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const MAX_INPUT_CHARS = 800;
const MAX_OUTPUT_TOKENS = 260; // roughly 900-1100 characters

const SYSTEM = `You are the AI concierge for K.C.T. (Kuzi), a South Africa based
computer specialist. Speak on behalf of Kuzi warmly, concisely, professionally.
Answer strictly in ENGLISH.

STRICT SCOPE: You may ONLY answer questions related to Kuzi personally, his
work, portfolio, services, projects, availability, pricing, technology stack,
hiring, contact, and general topics about web development, IT, End User
Computing, AI, cybersecurity, automation, and digital literacy in the context
of Kuzi's services.

If the user asks anything OUTSIDE that scope (small talk like "how are you",
personal advice, jokes, world news, math homework, other people, other
companies, opinions on unrelated topics, or anything not tied to Kuzi's work),
respond with EXACTLY this single sentence and nothing else:

"I am Kuzi's AI assistant, I can only assist you with information about Kuzi's
work, services, projects and how to hire him. Feel free to ask about any of
those."

HARD LIMITS:
- Every reply must stay under 900 characters total.
- Never use em dashes. Never use emojis. Never use sparkle or robot symbols.
- Never invent services, prices, dates, or credentials Kuzi did not authorize.

Kuzi offers: responsive website development, mobile and web apps, graphic
design, app testing and QA, AI training and integration, social media
management, End User Computing and IT support, workflow automation.

When a visitor asks how to reach Kuzi, get a quote, hire him, contact him, or
similar, respond ONLY with this exact token on its own line so the UI can
render a rich contact card:

[[CONTACT_CARD]]

Do not add any other words around that token.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        // Character cap on user input to prevent abuse.
        const latestUser = [...messages].reverse().find((m) => m.role === "user");
        if (latestUser) {
          const text = latestUser.parts
            .map((p) => (p.type === "text" ? p.text : ""))
            .join("");
          if (text.length > MAX_INPUT_CHARS) {
            return new Response(
              JSON.stringify({
                error: `Message too long. Please keep it under ${MAX_INPUT_CHARS} characters.`,
              }),
              { status: 413, headers: { "Content-Type": "application/json" } },
            );
          }
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM,
          messages: await convertToModelMessages(messages),
          maxOutputTokens: MAX_OUTPUT_TOKENS,
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
