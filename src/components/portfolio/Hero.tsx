import { useEffect, useState } from "react";
import { Info, X } from "lucide-react";
const certificateImage = "/Certificate.jpg";

export function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setFlipped((v) => !v), 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-[oklch(0.55_0.27_305/0.25)] blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.65_0.22_220/0.2)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-mono">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[oklch(0.75_0.2_150)]" />
            <span className="text-muted-foreground">An End User Computing Pro</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Digitalizing the
            <br />
            <span className="text-gradient-neon">legacy work</span>
            <br />
            stack.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
            My work spans <span className="font-medium">End User Computing</span>,
            <span className="font-medium"> social media &amp; digital literacy</span>,
            <span className="font-medium"> Artificial Intelligence</span>,
            practical <span className="font-medium">cybersecurity</span>,
            <span className="font-medium"> POPI Act compliance &amp; production readiness</span>.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-neon px-6 py-3.5 text-sm font-semibold text-background shadow-neon transition hover:translate-y-[-2px]">
              Explore My Work →
            </a>
            <a href="#contact" className="glass rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-[oklch(0.3_0.1_285/0.4)]">
              Get in Touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "10+", v: "Domains" },
              { k: "50+", v: "Projects" },
              { k: "24/7", v: "Operations" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-gradient-neon">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="perspective-1000">
            <div
              className={`relative aspect-[4/3] w-full preserve-3d transition-transform duration-[1200ms] ease-in-out ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              {[certificateImage, certificateImage].map((c, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 backface-hidden glass-strong overflow-hidden rounded-3xl p-1 shadow-neon ${
                    i === 1 ? "rotate-y-180" : ""
                  }`}
                >
                  <img
                    src={c}
                    alt="K.C.T. certification"
                    className="h-full w-full select-none rounded-[1.4rem] object-cover pointer-events-none"
                    draggable={false}
                  />
                  {/* transparent shield: blocks right-click + drag, click opens info */}
                  <button
                    type="button"
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => setShowInfo(true)}
                    aria-label="Certificate information"
                    className="absolute inset-0 z-10 cursor-help rounded-[1.4rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showInfo && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-xl animate-in fade-in p-4"
          onClick={() => setShowInfo(false)}
        >
          <div
            className="relative w-full max-w-sm aspect-square glass-strong rounded-3xl p-6 shadow-neon animate-in zoom-in-90 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowInfo(false)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass hover:scale-110 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-neon shadow-glow-violet">
              <Info className="h-6 w-6 text-background" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/90 flex-1">
              This image represents a physical certificate that I own and can provide
              upon request. Personal details may be abstracted for security purposes.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
