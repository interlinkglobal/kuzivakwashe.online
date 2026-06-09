import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    name: "First Aid",
    tag: "Healthcare AI · Telemedicine",
    desc: "An AI-powered diagnosis and care tracker that connects patients with clinicians. Symptoms and vitals flow through a triage model that proposes differential diagnoses, escalates urgent cases, and surfaces a shared case timeline for the attending doctor.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "WebRTC"],
    outcome: "Real-time triage, shared patient records, secure messaging.",
    accent: "magenta",
  },
  {
    name: "Doclab",
    tag: "AI · Document Generation",
    desc: "A generative document studio that drafts contracts, proposals, reports, and structured briefs from a single prompt. A planner outlines the document, retrieval grounds the content in user-supplied context, and export pipelines render polished PDF and DOCX outputs.",
    stack: ["Next.js", "LangChain", "pgvector", "Pandoc"],
    outcome: "Prompt-to-finished document in under a minute.",
    accent: "violet",
  },
  {
    name: "Likeable",
    tag: "Developer Tools · Vibe Coding",
    desc: "A vibe-coding tool built on top of Lovable that turns natural-language briefs into clean, dependency-free websites. It scaffolds semantic HTML, modular CSS, and vanilla JavaScript, then iterates with the user through a chat-driven preview loop.",
    stack: ["TypeScript", "Lovable SDK", "Vite", "HTML/CSS/JS"],
    outcome: "Zero-framework sites, ready to host anywhere.",
    accent: "cyan",
  },
  {
    name: "Kuzi",
    tag: "Marketing · Autonomous Agents",
    desc: "An autonomous marketing agent that crawls the open web, qualifies businesses against an ideal-customer profile, drafts personalized outreach, and dispatches sequenced email campaigns for sales, partnerships, and proposals.",
    stack: ["Python", "Playwright", "LangGraph", "Postgres", "Resend"],
    outcome: "Lead discovery, copywriting, and delivery on autopilot.",
    accent: "violet",
  },
  {
    name: "CashHub",
    tag: "Social Platform · EdTech",
    desc: "A social platform where members learn how to earn online through curated tutors, industry-specific agents, and ready-to-use toolkits. Feeds, communities, and progress tracking sit alongside revenue-focused playbooks for each industry.",
    stack: ["Next.js", "Supabase", "Stripe", "OpenAI"],
    outcome: "Communities, courses, and monetization tools in one product.",
    accent: "magenta",
  },
  {
    name: "Cosmic Memory",
    tag: "Game · Multiplayer AI",
    desc: "A card-based memory game spanning one hundred progressive levels. It supports offline pass-and-play, online matchmaking in the style of chess.com, a deterministic robotic opponent, and an adaptive AI rival, each round challenging players to flip the entire deck through paired recall.",
    stack: ["React Native", "WebSockets", "Node.js", "Redis"],
    outcome: "Four opponent modes, 100 levels, global matchmaking.",
    accent: "cyan",
  },
  {
    name: "Linkle",
    tag: "Productivity Suite · In Progress",
    desc: "A lightweight clone of the Google ecosystem, Gmail, Gemini, and Search, unified into a single experience. API-driven services replace heavyweight backends, delivering a familiar workflow with a leaner footprint and a consistent interface.",
    stack: ["React", "Gemini API", "Gmail API", "Programmable Search"],
    outcome: "Mail, chat, and search consolidated in one workspace.",
    accent: "violet",
  },
  {
    name: "Selah",
    tag: "Faith · Mobile Experience",
    desc: "A Bible application with a TikTok-style vertical feed of verses on cinematic 4K backdrops, a curated YouTube stream of services and seminars, a fully downloadable offline Bible, a daily prayer generator, and a chat interface that explains scripture in plain language.",
    stack: ["React Native", "Expo", "Supabase", "OpenAI", "YouTube API"],
    outcome: "Immersive scripture feed with offline-first design.",
    accent: "magenta",
  },
  {
    name: "Grey Analytics",
    tag: "FinTech · Agentic Analysis",
    desc: "An auditing platform built on four cooperating agent systems that ingest a company's financial documents, cross-check figures, surface anomalies, and produce a five-page report detailing urgent remediations and longer-term improvement strategies.",
    stack: ["Python", "LangGraph", "DuckDB", "Pandas", "ReportLab"],
    outcome: "Multi-agent audits delivered as executive-ready reports.",
    accent: "cyan",
  },
  {
    name: "Taxinger",
    tag: "Mobility · Real-Time Geolocation",
    desc: "A real-time, location-based marketplace that pairs taxis with nearby passengers. Map APIs render live hotspots, while pulsing pings broadcast driver and rider positions so both sides can converge on the nearest match in seconds.",
    stack: ["React Native", "Mapbox", "Supabase Realtime", "PostGIS"],
    outcome: "Live two-sided matching with sub-second location updates.",
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
                  className="relative min-w-0 shrink-0 grow-0 basis-[90%] px-3 sm:basis-[70%] md:basis-[55%] lg:basis-[48%]"
                >
                  <div
                    className={`relative w-full transition-all duration-500 ease-out ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.82] opacity-40"
                    }`}
                  >
                    {/* floating glowing orbs behind the glass */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                      <div
                        className={`absolute -top-10 -left-8 h-40 w-40 rounded-full bg-gradient-to-br ${accentGradient[p.accent]} opacity-60 blur-3xl animate-float`}
                      />
                      <div
                        className={`absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-gradient-to-br ${accentGradient[p.accent]} opacity-50 blur-3xl animate-pulse-glow`}
                      />
                      <div className="absolute right-10 top-1/3 h-20 w-20 rounded-full bg-[oklch(0.78_0.18_220)] opacity-30 blur-2xl animate-float" style={{ animationDelay: "1.2s" }} />
                    </div>

                    <article
                      className="relative flex w-full flex-col overflow-hidden rounded-3xl glass p-8 backdrop-blur-3xl lg:p-10"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_220)]">
                            {p.tag}
                          </div>
                          <h3 className="mt-1.5 font-display text-2xl font-semibold leading-tight sm:text-3xl">{p.name}</h3>
                        </div>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass text-foreground">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-border/60 bg-[oklch(0.2_0.08_278/0.5)] px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 border-t border-border/60 pt-4 font-mono text-xs leading-snug text-foreground/80">
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