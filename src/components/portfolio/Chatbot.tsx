import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { X, Send, Mail, Phone, Github, Loader2 } from "lucide-react";

function ContactCard() {
  return (
    <div className="mt-2 glass-strong rounded-2xl p-4 space-y-2 text-sm">
      <div className="font-display font-semibold text-foreground">Reach K.C.T. directly</div>
      <a href="mailto:dev@kuzivakwashe.online" className="flex items-center gap-2.5 hover:text-[oklch(0.78_0.18_220)] transition">
        <Mail className="h-4 w-4" /> dev@kuzivakwashe.online
      </a>
      <a href="tel:+27694893925" className="flex items-center gap-2.5 hover:text-[oklch(0.66_0.27_305)] transition">
        <Phone className="h-4 w-4" /> +27 69 489 3925
      </a>
      <a href="https://github.com/dev-kuzivakwashe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-[oklch(0.70_0.32_340)] transition">
        <Github className="h-4 w-4" /> github.com/dev-kuzivakwashe
      </a>
    </div>
  );
}

function renderMessage(m: UIMessage) {
  const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
  if (text.includes("[[CONTACT_CARD]]")) {
    const clean = text.replace(/\[\[CONTACT_CARD\]\]/g, "").trim();
    return (
      <>
        {clean && <p className="whitespace-pre-wrap">{clean}</p>}
        <ContactCard />
      </>
    );
  }
  return <p className="whitespace-pre-wrap">{text}</p>;
}

export function Chatbot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const busy = status === "submitted" || status === "streaming";

  async function submit() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    await sendMessage({ text });
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-background/85 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in">
      <div className="relative flex h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl glass-strong shadow-neon animate-in zoom-in-95 duration-300">
        <header className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-neon shadow-glow-violet text-background font-display font-bold">
              K
            </span>
            <div>
              <div className="font-display text-base font-semibold">Ask Kuzi</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">AI Concierge · Online</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="grid h-9 w-9 place-items-center rounded-full glass hover:scale-110 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
          {messages.length === 0 && (
            <div className="grid h-full place-items-center text-center">
              <div className="max-w-sm">
                <div className="font-display text-xl">Hi, I speak for K.C.T.</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ask about web & app development, AI training, graphic design,
                  social media, testing, or how to start a project together.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    "What services do you offer?",
                    "I need a website",
                    "How do I contact Kuzi?",
                  ].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendMessage({ text: q })}
                      className="glass rounded-full px-3 py-1.5 text-xs hover:bg-[oklch(0.3_0.1_285/0.4)] transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-gradient-neon text-background"
                    : "glass text-foreground"
                }`}
              >
                {renderMessage(m)}
              </div>
            </div>
          ))}

          {busy && (
            <div className="flex justify-start">
              <div className="glass rounded-2xl px-4 py-2.5 text-sm text-muted-foreground inline-flex items-center gap-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Thinking…
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="border-t border-border/60 p-3 sm:p-4"
        >
          <div className="flex items-end gap-2 glass rounded-2xl p-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Ask about services, projects, or quotes…"
              rows={1}
              className="flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground max-h-32"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-neon text-background shadow-glow-violet transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}