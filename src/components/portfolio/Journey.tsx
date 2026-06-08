import { Section, SectionHeader } from "./Section";

const timeline = [
  { year: "Now", title: "IT Specialist · Multi-Domain Engineer", body: "Leading cross-functional initiatives across cloud, security, and intelligent automation." },
  { year: "2024", title: "Cloud & DevOps Lead", body: "Migrated production workloads to a multi-region Kubernetes platform with IaC and GitOps." },
  { year: "2023", title: "Infrastructure Architect", body: "Designed hybrid network and compute fabric for a 99.99% SLA observability stack." },
  { year: "2022", title: "Cybersecurity & Systems Engineer", body: "Rolled out zero-trust access, hardening baselines, and a SIEM/SOAR detection program." },
  { year: "2021", title: "Software & Automation Engineer", body: "Built internal platforms and pipelines that turned weeks of manual work into minutes." },
  { year: "Earlier", title: "Networking & Systems Foundations", body: "Hands-on with routing, switching, virtualization, and Linux at scale." },
];

const certs = ["AWS Solutions Architect", "CKA, Certified Kubernetes Admin", "CompTIA Security+", "CCNA", "Terraform Associate", "Azure Administrator"];

export function Journey() {
  return (
    <Section id="journey" reveal="left">
      <SectionHeader
        eyebrow="Experience & Journey"
        title={<>A continuous build. <span className="text-gradient-neon">Always shipping.</span></>}
        description="Roles change, technologies evolve, the throughline is curiosity and the will to make systems work better than they did yesterday."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <ol className="relative space-y-10 border-l border-border/60 pl-8">
          <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[oklch(0.78_0.18_220)] via-[oklch(0.66_0.27_305)] to-[oklch(0.70_0.32_340)] opacity-40" />
          {timeline.map((t) => (
            <li key={t.title} className="relative">
              <span className="absolute -left-[37px] top-1 grid h-4 w-4 place-items-center rounded-full bg-background">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-neon shadow-glow-violet" />
              </span>
              <div className="font-mono text-xs uppercase tracking-widest text-[oklch(0.78_0.18_220)]">{t.year}</div>
              <h3 className="mt-1 font-display text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>

        <aside className="space-y-6">
          <div className="glass-strong rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Certifications</div>
            <ul className="mt-4 space-y-3 text-sm">
              {certs.map((c) => (
                <li key={c} className="flex items-center gap-3 border-b border-border/60 pb-3 last:border-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-neon" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Continuous Learning</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I treat learning like a production system: planned, measurable, always running.
              Every quarter, one new depth and one new breadth.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}