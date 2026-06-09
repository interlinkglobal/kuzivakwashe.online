import { Section } from "./Section";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-24" reveal="fade">
      <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-8 sm:p-12 lg:p-16 shadow-neon">
        <div className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-[oklch(0.66_0.27_305/0.3)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-[oklch(0.78_0.18_220/0.25)] blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[oklch(0.78_0.18_220)]">
              <span className="h-px w-8 bg-gradient-neon" />
              Contact
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              What can I <span className="text-gradient-neon">do you for?</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              I'm available for personal and professional projects. Beta testing, website and app development.
              Contact me for a project review.
            </p>

            <ul className="mt-8 space-y-3">
              <li>
                <a href="mailto:hello@kct.dev" className="group flex items-center gap-3 text-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass shadow-glow-violet group-hover:bg-gradient-neon">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@kct.dev
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-3 text-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass shadow-glow-cyan group-hover:bg-gradient-neon">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  linkedin.com/in/kct
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-3 text-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass shadow-glow-magenta group-hover:bg-gradient-neon">
                    <Github className="h-4 w-4" />
                  </span>
                  github.com/kct
                </a>
              </li>
            </ul>
          </div>

          <form
            className="glass rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks, I'll be in touch shortly.");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</span>
                <input required type="text" className="mt-1.5 w-full rounded-xl border border-border bg-[oklch(0.15_0.07_272/0.5)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.66_0.27_305)] focus:ring-1 focus:ring-[oklch(0.66_0.27_305)]" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</span>
                <input required type="email" className="mt-1.5 w-full rounded-xl border border-border bg-[oklch(0.15_0.07_272/0.5)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.66_0.27_305)] focus:ring-1 focus:ring-[oklch(0.66_0.27_305)]" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Subject</span>
              <input type="text" className="mt-1.5 w-full rounded-xl border border-border bg-[oklch(0.15_0.07_272/0.5)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.66_0.27_305)] focus:ring-1 focus:ring-[oklch(0.66_0.27_305)]" />
            </label>
            <label className="mt-4 block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project Details</span>
              <textarea required rows={5} className="mt-1.5 w-full resize-none rounded-xl border border-border bg-[oklch(0.15_0.07_272/0.5)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.66_0.27_305)] focus:ring-1 focus:ring-[oklch(0.66_0.27_305)]" />
            </label>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-neon py-3.5 text-sm font-semibold text-background shadow-neon transition hover:translate-y-[-2px]">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
        <div className="font-mono">© 2026 K.C.T., All systems operational.</div>
        <div className="font-mono">Built with intention · Designed for depth</div>
      </footer>
    </Section>
  );
}