import { Link } from "@tanstack/react-router";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#infrastructure", label: "Systems" },
  { href: "#ecosystem", label: "Stack" },
  { href: "#journey", label: "Journey" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-neon shadow-glow-violet">
              <span className="font-display text-sm font-bold text-background">K</span>
            </span>
            <span className="font-display text-base font-semibold tracking-tight">K.C.T.</span>
            <span className="ml-1 hidden text-xs font-mono text-muted-foreground sm:inline">// IT Specialist</span>
          </Link>
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-xl bg-gradient-neon px-4 py-2 text-sm font-medium text-background shadow-glow-violet transition hover:opacity-90"
          >
            Let's Connect →
          </a>
        </nav>
      </div>
    </header>
  );
}