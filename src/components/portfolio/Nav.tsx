import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, X } from "lucide-react";
import profileAsset from "@/assets/kct-profile-new.jpg.asset.json";
const profilePic = profileAsset.url;

function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="grid h-9 w-9 place-items-center rounded-full glass text-foreground transition hover:scale-110"
    >
      {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#infrastructure", label: "Systems" },
  { href: "#ecosystem", label: "Stack" },
  { href: "#journey", label: "Journey" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open profile photo"
              className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full ring-1 ring-border/60 transition hover:ring-[oklch(0.66_0.27_305)]"
            >
              <img src={profilePic} alt="Kuzi profile" className="h-full w-full object-cover" />
            </button>
            <Link to="/" className="font-display text-base font-semibold tracking-tight">K.C.T.</Link>
          </div>
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            >
              Let's Connect →
            </a>
          </div>
        </nav>
      </div>
    </header>

    {open && (
      <div
        className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-xl animate-in fade-in"
        onClick={() => setOpen(false)}
      >
        <button
          type="button"
          aria-label="Close profile"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-strong text-foreground transition hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>
        <div
          className="relative max-w-[90vw] animate-in zoom-in-75 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={profilePic}
            alt="Kuzi profile"
            className="max-h-[80vh] w-auto rounded-3xl object-contain shadow-neon"
          />
        </div>
      </div>
    )}
    </>
  );
}