import { Section, SectionHeader } from "./Section";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import aiChip from "@/assets/ai-chip.jpg";
import netGlobe from "@/assets/network-globe.jpg";
import infra from "@/assets/infra-servers.jpg";
import netDash from "@/assets/network-dashboard.png";
import analyticsDash from "@/assets/analytics-dashboard.png";
import devWorkspace from "@/assets/dev-workspace.png";
import netOverview from "@/assets/network-overview.png";

const projects = [
  {
    name: "First Aid",
    tag: "Healthcare AI · Telemedicine",
    img: aiChip,
    desc: "An AI-powered diagnosis and care tracker that connects patients with clinicians. Symptoms and vitals flow through a triage model that proposes differential diagnoses, escalates urgent cases, and surfaces a shared case timeline for the attending doctor.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "WebRTC"],
    outcome: "Real-time triage, shared patient records, secure messaging.",
    accent: "magenta",
  },
  {
    name: "Doclab",
    tag: "AI · Document Generation",
    img: devWorkspace,
    desc: "A generative document studio that drafts contracts, proposals, reports, and structured briefs from a single prompt. A planner outlines the document, retrieval grounds the content in user-supplied context, and export pipelines render polished PDF and DOCX outputs.",
    stack: ["Next.js", "LangChain", "pgvector", "Pandoc"],
    outcome: "Prompt-to-finished document in under a minute.",
    accent: "violet",
  },
  {
    name: "Likeable",
    tag: "Developer Tools · Vibe Coding",
    img: devWorkspace,
    desc: "A vibe-coding tool built on top of Lovable that turns natural-language briefs into clean, dependency-free websites. It scaffolds semantic HTML, modular CSS, and vanilla JavaScript, then iterates with the user through a chat-driven preview loop.",
    stack: ["TypeScript", "Lovable SDK", "Vite", "HTML/CSS/JS"],
    outcome: "Zero-framework sites, ready to host anywhere.",
    accent: "cyan",
  },
  {
    name: "Kuzi",
    tag: "Marketing · Autonomous Agents",
    img: aiChip,
    desc: "An autonomous marketing agent that crawls the open web, qualifies businesses against an ideal-customer profile, drafts personalized outreach, and dispatches sequenced email campaigns for sales, partnerships, and proposals.",
    stack: ["Python", "Playwright", "LangGraph", "Postgres", "Resend"],
    outcome: "Lead discovery, copywriting, and delivery on autopilot.",
    accent: "violet",
  },
  {
    name: "CashHub",
    tag: "Social Platform · EdTech",
    img: analyticsDash,
    desc: "A social platform where members learn how to earn online through curated tutors, industry-specific agents, and ready-to-use toolkits. Feeds, communities, and progress tracking sit alongside revenue-focused playbooks for each industry.",
    stack: ["Next.js", "Supabase", "Stripe", "OpenAI"],
    outcome: "Communities, courses, and monetization tools in one product.",
    accent: "magenta",
  },
  {
    name: "Cosmic Memory",
    tag: "Game · Multiplayer AI",
    img: netGlobe,
    desc: "A card-based memory game spanning one hundred progressive levels. It supports offline pass-and-play, online matchmaking in the style of chess.com, a deterministic robotic opponent, and an adaptive AI rival, each round challenging players to flip the entire deck through paired recall.",
    stack: ["React Native", "WebSockets", "Node.js", "Redis"],
    outcome: "Four opponent modes, 100 levels, global matchmaking.",
    accent: "cyan",
  },
  {
    name: "Linkle",
    tag: "Productivity Suite · In Progress",
    img: netDash,
    desc: "A lightweight clone of the Google ecosystem, Gmail, Gemini, and Search, unified into a single experience. API-driven services replace heavyweight backends, delivering a familiar workflow with a leaner footprint and a consistent interface.",
    stack: ["React", "Gemini API", "Gmail API", "Programmable Search"],
    outcome: "Mail, chat, and search consolidated in one workspace.",
    accent: "violet",
  },
  {
    name: "Selah",
    tag: "Faith · Mobile Experience",
    img: infra,
    desc: "A Bible application with a TikTok-style vertical feed of verses on cinematic 4K backdrops, a curated YouTube stream of services and seminars, a fully downloadable offline Bible, a daily prayer generator, and a chat interface that explains scripture in plain language.",
    stack: ["React Native", "Expo", "Supabase", "OpenAI", "YouTube API"],
    outcome: "Immersive scripture feed with offline-first design.",
    accent: "magenta",
  },
  {
    name: "Grey Analytics",
    tag: "FinTech · Agentic Analysis",
    img: analyticsDash,
    desc: "An auditing platform built on four cooperating agent systems that ingest a company's financial documents, cross-check figures, surface anomalies, and produce a five-page report detailing urgent remediations and longer-term improvement strategies.",
    stack: ["Python", "LangGraph", "DuckDB", "Pandas", "ReportLab"],
    outcome: "Multi-agent audits delivered as executive-ready reports.",
    accent: "cyan",
  },
  {
    name: "Taxinger",
    tag: "Mobility · Real-Time Geolocation",
    img: netOverview,
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

export function Projects() {
  return (
    <Section id="projects" reveal="zoom">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title={<>Systems shipped.<br /><span className="text-gradient-neon">Problems solved.</span></>}
        />
        <a href="#contact" className="glass rounded-xl px-5 py-2.5 text-sm font-medium transition hover:bg-[oklch(0.3_0.1_285/0.4)]">
          Request case studies →
        </a>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} variant="up" delay={(i % 3) * 120}>
          <article className={`group relative h-full overflow-hidden rounded-3xl glass transition hover:-translate-y-1 ${accentRing[p.accent]}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.06_270)] via-transparent to-transparent" />
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground transition group-hover:bg-gradient-neon group-hover:text-background">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_220)]">{p.tag}</div>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border/60 bg-[oklch(0.2_0.08_278/0.4)] px-2 py-1 font-mono text-[10px] text-muted-foreground">{s}</span>
                ))}
              </div>
              <div className="mt-5 border-t border-border/60 pt-4 font-mono text-xs text-foreground/80">
                {p.outcome}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}