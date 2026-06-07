import { Section, SectionHeader } from "./Section";
import {
  Network, Cloud, Server, Shield, Database, Workflow,
  Code2, BarChart3, BrainCircuit, Cog,
} from "lucide-react";

const domains = [
  { icon: Network, name: "Networking", desc: "Routing, switching, VLANs, VPNs, SD-WAN, and end-to-end connectivity design.", glow: "cyan" },
  { icon: Cloud, name: "Cloud Platforms", desc: "AWS, Azure, GCP — architecting scalable, resilient cloud-native environments.", glow: "violet" },
  { icon: Server, name: "Infrastructure", desc: "Hypervisors, containers, storage, and bare-metal — built for uptime.", glow: "magenta" },
  { icon: Cog, name: "Systems Administration", desc: "Linux & Windows server fleets, hardening, monitoring, and patch lifecycles.", glow: "cyan" },
  { icon: Shield, name: "Cybersecurity", desc: "Defense-in-depth, IAM, zero-trust, threat detection and incident response.", glow: "magenta" },
  { icon: Database, name: "Databases", desc: "Relational and NoSQL — modeling, tuning, replication, and disaster recovery.", glow: "violet" },
  { icon: Workflow, name: "Automation", desc: "IaC with Terraform & Ansible, CI/CD pipelines, scripting that scales.", glow: "cyan" },
  { icon: Code2, name: "Software Development", desc: "Full-stack engineering, APIs, microservices, and developer tooling.", glow: "violet" },
  { icon: BarChart3, name: "Data & Analytics", desc: "Pipelines, warehouses, dashboards, and decision-grade insights.", glow: "magenta" },
  { icon: BrainCircuit, name: "Artificial Intelligence", desc: "LLM integration, RAG systems, ML workflows and intelligent automation.", glow: "violet" },
];

const glowClass: Record<string, string> = {
  cyan: "from-[oklch(0.78_0.18_220/0.4)] to-transparent text-[oklch(0.78_0.18_220)]",
  violet: "from-[oklch(0.66_0.27_305/0.4)] to-transparent text-[oklch(0.66_0.27_305)]",
  magenta: "from-[oklch(0.70_0.32_340/0.4)] to-transparent text-[oklch(0.70_0.32_340)]",
};

export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeader
        eyebrow="Technology Overview"
        title={<>A broad stack.<br /><span className="text-gradient-neon">Engineered depth.</span></>}
        description="Across ten core domains, I build systems that talk to each other — from the wire and the rack to the cloud, the dashboard, and the model."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {domains.map(({ icon: Icon, name, desc, glow }, i) => (
          <div
            key={name}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-[oklch(0.66_0.27_305/0.5)]"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${glowClass[glow]} opacity-0 blur-2xl transition group-hover:opacity-100`} />
            <div className={`relative mb-5 inline-grid h-12 w-12 place-items-center rounded-xl glass-strong ${glowClass[glow].split(" ").slice(-1)[0]}`}>
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-lg font-semibold">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              0{i + 1} / {domains.length}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}