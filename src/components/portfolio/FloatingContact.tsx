import { useEffect, useState } from "react";
import { MessageCircle, Phone, Mail, X, Headset } from "lucide-react";
import { Chatbot } from "./Chatbot";

const WHATSAPP_NUMBER = "27694893925";
const PHONE_NUMBER = "+27694893925";
const EMAIL = "dev@kuzivakwashe.online";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // After profile intro finishes (~4s), auto-open the contact menu to
  // showcase the actions, then smoothly close after a few seconds.
  useEffect(() => {
    const openT = setTimeout(() => setOpen(true), 4200);
    const closeT = setTimeout(() => setOpen(false), 8200);
    return () => { clearTimeout(openT); clearTimeout(closeT); };
  }, []);

  const actions = [
    {
      label: "Chat with AI",
      onClick: () => {
        setChatOpen(true);
        setOpen(false);
      },
      icon: Headset,
      glow: "shadow-glow-violet",
    },
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
  ] as Array<{
    label: string;
    icon: typeof MessageCircle;
    glow: string;
    href?: string;
    onClick?: () => void;
  }>;

  return (
    <>
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {actions.map((a, i) => {
        const Icon = a.icon;
        const className = `group grid h-12 w-12 place-items-center rounded-full glass-strong text-foreground backdrop-blur-2xl transition-all duration-300 hover:scale-110 ${a.glow} ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`;
        const style = { transitionDelay: open ? `${i * 60}ms` : "0ms" };
        if (a.onClick) {
          return (
            <button
              key={a.label}
              type="button"
              onClick={a.onClick}
              aria-label={a.label}
              className={className}
              style={style}
            >
              <Icon className="h-5 w-5" />
            </button>
          );
        }
        return (
          <a
            key={a.label}
            href={a.href!}
            target={a.href!.startsWith("http") ? "_blank" : undefined}
            rel={a.href!.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={a.label}
            className={className}
            style={style}
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
    <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}