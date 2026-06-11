import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    name: "First Aid",
    tag: "Healthcare AI · Telemedicine",
    desc: "AI triage and care tracker linking patients with clinicians through shared case timelines.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI"],
    outcome: "Real-time triage and secure messaging.",
    accent: "magenta",
  },
  {
    name: "Doclab",
    tag: "AI · Document Generation",
    desc: "Generative studio drafting contracts, proposals and reports from a single prompt.",
    stack: ["Next.js", "LangChain", "pgvector"],
    outcome: "Prompt to polished PDF in under a minute.",
    accent: "violet",
  },
  {
    name: "Likeable",
    tag: "Developer Tools · Vibe Coding",
    desc: "Vibe-coding tool turning natural-language briefs into clean, dependency-free websites.",
    stack: ["TypeScript", "Lovable SDK", "Vite"],
    outcome: "Zero-framework sites, host anywhere.",
    accent: "cyan",
  },
  {
    name: "Kuzi",
    tag: "Marketing · Autonomous Agents",
    desc: "Autonomous agent that finds leads, drafts outreach and ships sequenced email campaigns.",
    stack: ["Python", "Playwright", "LangGraph", "Resend"],
    outcome: "Lead gen and delivery on autopilot.",
    accent: "violet",
  },
  {
    name: "CashHub",
    tag: "Social Platform · EdTech",
    desc: "Social platform teaching members how to earn online with tutors, agents and toolkits.",
    stack: ["Next.js", "Supabase", "Stripe"],
    outcome: "Communities, courses and monetization in one app.",
    accent: "magenta",
  },
  {
    name: "Cosmic Memory",
    tag: "Game · Multiplayer AI",
    desc: "Card memory game across 100 levels with offline, online, robotic and adaptive AI opponents.",
    stack: ["React Native", "WebSockets", "Node.js"],
    outcome: "Four modes, 100 levels, global matchmaking.",
    accent: "cyan",
  },
  {
    name: "Linkle",
    tag: "Productivity Suite · In Progress",
    desc: "Lightweight Google-style suite unifying Gmail, Gemini and Search in one workspace.",
    stack: ["React", "Gemini API", "Gmail API"],
    outcome: "Mail, chat and search in one place.",
    accent: "violet",
  },
  {
    name: "Selah",
    tag: "Faith · Mobile Experience",
    desc: "Bible app with a vertical verse feed, offline scripture, daily prayers and a study chat.",
    stack: ["React Native", "Expo", "Supabase", "OpenAI"],
    outcome: "Immersive scripture, offline-first.",
    accent: "magenta",
  },
  {
    name: "Grey Analytics",
    tag: "FinTech · Agentic Analysis",
    desc: "Four cooperating agents audit financial documents and ship a five-page action report.",
    stack: ["Python", "LangGraph", "DuckDB", "Pandas"],
    outcome: "Multi-agent audits, executive-ready.",
    accent: "cyan",
  },
  {
    name: "Taxinger",
    tag: "Mobility · Real-Time Geolocation",
    desc: "Real-time marketplace pairing taxis with nearby passengers via live map hotspots.",
    stack: ["React Native", "Mapbox", "Supabase Realtime"],
    outcome: "Sub-second two-sided matching.",
    accent: "violet",
  },
];

const accentRing: Record<string, string> = {
  cyan: "shadow-glow-cyan",
  violet: "shadow-glow-violet",
  magenta: "shadow-glow-magenta",
};

const accentGradient: Record<string, string> = {
  cyan: "from-[oklch(0.78_0.18_220)] to-[oklch(0.65_0.22_260)]",
  violet: "from-[oklch(0.65_0.27_300)] to-[oklch(0.55_0.27_280)]",
  magenta: "from-[oklch(0.70_0.32_340)] to-[oklch(0.60_0.28_320)]",
};

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title={<>Systems shipped.<br /><span className="text-gradient-neon">Problems solved.</span></>}
        />
        <a href="#contact" className="glass rounded-xl px-5 py-2.5 text-sm font-medium transition hover:bg-[oklch(0.3_0.1_285/0.4)]">
          Request case studies →
        </a>
      </div>

      <div className="relative mt-14">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y items-stretch">
            {projects.map((p, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={p.name}
                  className="relative min-w-0 shrink-0 grow-0 basis-[92%] px-1.5 sm:basis-[78%] md:basis-[62%] lg:basis-[52%]"
                >
                  <div
                    className={`relative w-full transition-all duration-500 ease-out ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.82] opacity-40"
                    }`}
                  >
                    {/* floating glowing orbs behind the glass */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-tl-3xl rounded-br-3xl">
                      <div
                        className={`absolute -top-10 -left-8 h-40 w-40 rounded-full bg-gradient-to-br ${accentGradient[p.accent]} opacity-60 blur-3xl animate-float`}
                      />
                      <div
                        className={`absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-gradient-to-br ${accentGradient[p.accent]} opacity-50 blur-3xl animate-pulse-glow`}
                      />
                      <div className="absolute right-10 top-1/3 h-20 w-20 rounded-full bg-[oklch(0.78_0.18_220)] opacity-30 blur-2xl animate-float" style={{ animationDelay: "1.2s" }} />
                    </div>

                    <article
                      className="relative flex w-full flex-col overflow-hidden rounded-tl-3xl rounded-br-3xl glass p-8 text-white backdrop-blur-3xl lg:p-10"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_220)]">
                            {p.tag}
                          </div>
                          <h3 className="mt-1.5 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">{p.name}</h3>
                        </div>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-white/85">{p.desc}</p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/90"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 border-t border-white/15 pt-4 font-mono text-xs leading-snug text-white/85">
                          {p.outcome}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous project"
            className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-[oklch(0.3_0.1_285/0.4)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1.5">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to ${p.name}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selected ? "w-6 bg-gradient-neon" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next project"
            className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-[oklch(0.3_0.1_285/0.4)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}