import { Section, SectionHeader } from "./Section";
import { ArrowUpRight } from "lucide-react";
import aiChip from "@/assets/ai-chip.jpg";
import netGlobe from "@/assets/network-globe.jpg";
import infra from "@/assets/infra-servers.jpg";

const projects = [
  {
    name: "Sentinel Mesh",
    tag: "Cybersecurity · Networking",
    img: netGlobe,
    desc: "Zero-trust overlay network with identity-aware policy enforcement across hybrid cloud environments.",
    stack: ["WireGuard", "Cloudflare", "Terraform", "Falco"],
    outcome: "↓ 73% lateral-movement risk · 4 regions",
    accent: "cyan",
  },
  {
    name: "Helix Observability",
    tag: "Analytics · Infrastructure",
    img: infra,
    desc: "Unified logs, metrics and traces platform powering SLO-driven alerting for distributed workloads.",
    stack: ["OpenTelemetry", "Grafana", "Loki", "Tempo"],
    outcome: "99.99% uptime · 12s MTTD",
    accent: "violet",
  },
  {
    name: "Cortex Assist",
    tag: "AI · Automation",
    img: aiChip,
    desc: "Retrieval-augmented assistant that triages tickets, drafts runbooks and proposes remediation steps.",
    stack: ["Python", "LangChain", "pgvector", "FastAPI"],
    outcome: "↓ 41% mean handle time",
    accent: "magenta",
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
        {projects.map((p) => (
          <article key={p.name} className={`group relative overflow-hidden rounded-3xl glass transition hover:-translate-y-1 ${accentRing[p.accent]}`}>
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
        ))}
      </div>
    </Section>
  );
}