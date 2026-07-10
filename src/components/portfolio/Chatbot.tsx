import { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useServerFn } from "@tanstack/react-start";
import { X, Send, Mail, Phone, Github, Loader2, Check, User, AtSign, MessageSquare } from "lucide-react";
import { sendContactEmail } from "@/lib/contact.functions";

type Field = "name" | "email" | "message";

const FIELD_META: Record<Field, { label: string; placeholder: string; icon: typeof User; type: string; multiline?: boolean }> = {
  name: { label: "What's your name?", placeholder: "e.g. Jane Doe", icon: User, type: "text" },
  email: { label: "Best email to reach you?", placeholder: "you@example.com", icon: AtSign, type: "email" },
  message: { label: "What should I tell Kuzi?", placeholder: "A short message with context, timelines, budget…", icon: MessageSquare, type: "text", multiline: true },
};

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

function AskCard({
  field,
  onSubmit,
  disabled,
}: {
  field: Field;
  onSubmit: (value: string) => void;
  disabled: boolean;
}) {
  const meta = FIELD_META[field];
  const Icon = meta.icon;
  const [value, setValue] = useState("");
  const submit = () => {
    const v = value.trim();
    if (!v || disabled) return;
    onSubmit(v);
  };
  return (
    <div className="mt-2 glass-strong rounded-2xl p-4 space-y-3 text-sm">
      <div className="flex items-center gap-2 font-display font-semibold text-foreground">
        <Icon className="h-4 w-4" /> {meta.label}
      </div>
      {meta.multiline ? (
        <textarea
          autoFocus
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              submit();
            }
          }}
          rows={3}
          placeholder={meta.placeholder}
          className="w-full resize-none rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm outline-none focus:border-[oklch(0.66_0.27_305)] disabled:opacity-60"
        />
      ) : (
        <input
          autoFocus
          disabled={disabled}
          type={meta.type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
          placeholder={meta.placeholder}
          className="w-full rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm outline-none focus:border-[oklch(0.66_0.27_305)] disabled:opacity-60"
        />
      )}
      <button
        type="button"
        onClick={submit}
        disabled={disabled || !value.trim()}
        className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-neon px-3 py-1.5 text-xs font-medium text-background transition hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-3.5 w-3.5" /> Continue
      </button>
    </div>
  );
}

function EmailStatusCard({ state, error }: { state: "sending" | "sent" | "error"; error?: string }) {
  return (
    <div className="mt-2 glass-strong rounded-2xl p-4 text-sm">
      {state === "sending" && (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Sending your message to K.C.T…
        </div>
      )}
      {state === "sent" && (
        <div className="flex items-center gap-2 text-foreground">
          <Check className="h-4 w-4 text-[oklch(0.72_0.18_150)]" />
          Message delivered. K.C.T. will get back to you soon.
        </div>
      )}
      {state === "error" && (
        <div className="space-y-1">
          <div className="font-medium text-foreground">Could not send message.</div>
          <div className="text-xs text-muted-foreground">{error ?? "Please try again or email dev@kuzivakwashe.online directly."}</div>
        </div>
      )}
    </div>
  );
}

const ASK_RE = /\[\[ASK:(name|email|message)\]\]/;
const SEND_RE = /\[\[SEND_EMAIL\]\]/;

function messageText(m: UIMessage) {
  return m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}

export function Chatbot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Collected lead details (kept client-side across the conversation).
  const [details, setDetails] = useState<{ name?: string; email?: string; message?: string }>({});
  const [emailState, setEmailState] = useState<null | { state: "sending" | "sent" | "error"; error?: string }>(null);
  const sentRef = useRef(false);
  const sendEmail = useServerFn(sendContactEmail);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status, emailState]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Find the latest assistant message and detect ASK / SEND_EMAIL directives.
  const lastAssistant = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "assistant") return messages[i];
    }
    return null;
  }, [messages]);

  const askField = useMemo<Field | null>(() => {
    if (!lastAssistant) return null;
    const t = messageText(lastAssistant);
    const m = t.match(ASK_RE);
    return m ? (m[1] as Field) : null;
  }, [lastAssistant]);

  const shouldSend = useMemo(() => {
    if (!lastAssistant) return false;
    return SEND_RE.test(messageText(lastAssistant));
  }, [lastAssistant]);

  // Trigger the Resend server function once when SEND_EMAIL appears.
  useEffect(() => {
    if (!shouldSend || sentRef.current) return;
    const { name, email, message } = details;
    if (!name || !email || !message) return;
    sentRef.current = true;
    setEmailState({ state: "sending" });
    sendEmail({
      data: {
        name,
        email,
        subject: `New inquiry from ${name} via AI concierge`,
        message,
      },
    })
      .then(() => setEmailState({ state: "sent" }))
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : "Unknown error";
        setEmailState({ state: "error", error: msg });
      });
  }, [shouldSend, details, sendEmail]);

  if (!open) return null;

  const busy = status === "submitted" || status === "streaming";

  async function submit() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    await sendMessage({ text });
  }

  function submitAsk(field: Field, value: string) {
    setDetails((d) => ({ ...d, [field]: value }));
    sendMessage({ text: value });
  }

  function renderMessage(m: UIMessage) {
    const text = messageText(m);

    if (SEND_RE.test(text)) {
      const clean = text.replace(SEND_RE, "").replace(ASK_RE, "").trim();
      return (
        <>
          {clean && <p className="whitespace-pre-wrap">{clean}</p>}
          {emailState && <EmailStatusCard state={emailState.state} error={emailState.error} />}
        </>
      );
    }

    const askMatch = text.match(ASK_RE);
    if (askMatch) {
      const field = askMatch[1] as Field;
      const clean = text.replace(ASK_RE, "").trim();
      const alreadyAnswered = !!details[field];
      const isLatest = m.id === lastAssistant?.id;
      return (
        <>
          {clean && <p className="whitespace-pre-wrap">{clean}</p>}
          {!alreadyAnswered && isLatest ? (
            <AskCard field={field} onSubmit={(v) => submitAsk(field, v)} disabled={busy} />
          ) : (
            details[field] && (
              <div className="mt-2 text-xs text-muted-foreground">
                Captured {field}: <span className="text-foreground">{details[field]}</span>
              </div>
            )
          )}
        </>
      );
    }

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
                    "I can contact K.C.T for you",
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
