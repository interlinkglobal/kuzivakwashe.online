import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const WHATSAPP_NUMBER = "15551234567"; // placeholder
const PHONE_NUMBER = "+15551234567";
const EMAIL = "kct@example.com";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: MessageCircle,
      glow: "shadow-glow-cyan",
    },
    {
      label: "Call",
      href: `tel:${PHONE_NUMBER}`,
      icon: Phone,
      glow: "shadow-glow-violet",
    },
    {
      label: "Email",
      href: `mailto:${EMAIL}?subject=${encodeURIComponent("Project inquiry for K.C.T.")}&body=${encodeURIComponent("You can write your message here")}`,
      icon: Mail,
      glow: "shadow-glow-magenta",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {actions.map((a, i) => {
        const Icon = a.icon;
        return (
          <a
            key={a.label}
            href={a.href}
            target={a.href.startsWith("http") ? "_blank" : undefined}
            rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={a.label}
            className={`group grid h-12 w-12 place-items-center rounded-full glass-strong text-foreground backdrop-blur-2xl transition-all duration-300 hover:scale-110 ${a.glow} ${
              open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        className="relative grid h-14 w-14 place-items-center rounded-full glass-strong backdrop-blur-2xl transition-transform duration-300 hover:scale-110"
      >
        <span className="relative grid h-full w-full place-items-center rounded-full">
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </span>
      </button>
    </div>
  );
}