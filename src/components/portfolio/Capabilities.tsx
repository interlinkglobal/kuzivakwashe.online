import { Section, SectionHeader } from "./Section";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    label: "Architect",
    title: "Design systems that hold under pressure.",
    points: [
      "Reference architectures for cloud, hybrid and on-prem",
      "Capacity planning and cost-aware sizing",
      "Failure-domain analysis and DR strategy",
    ],
  },
  {
    label: "Operate",
    title: "Run platforms that don't wake people up.",
    points: [
      "Observability with logs, metrics and traces",
      "Incident response, RCA and blameless reviews",
      "Patch, backup and lifecycle automation",
    ],
  },
  {
    label: "Secure",
    title: "Defense built into every layer.",
    points: [
      "Identity, access and secrets management",
      "Hardening baselines, vulnerability management",
      "Network segmentation and zero-trust controls",
    ],
  },
  {
    label: "Build",
    title: "Code, pipelines and intelligent tooling.",
    points: [
      "APIs, microservices and event-driven systems",
      "CI/CD, infrastructure as code, GitOps",
      "AI-assisted workflows and data products",
    ],
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionHeader
        eyebrow="Core Capabilities"
        title={<>How I move from <span className="text-gradient-neon">problem to platform.</span></>}
        description="Four disciplines, applied together, so the systems I deliver are not only built, but operable, defensible, and useful."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {pillars.map((p, i) => (
          <div key={p.label} className="glass relative overflow-hidden rounded-3xl p-8 lg:p-10">
            <div className="absolute right-6 top-6 font-mono text-xs text-muted-foreground">
              0{i + 1}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-neon px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-background">
              {p.label}
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              {p.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.78_0.18_220)]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}