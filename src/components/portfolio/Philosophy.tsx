import { Section, SectionHeader } from "./Section";

const principles = [
  { n: "01", t: "Understand the system before changing it.", d: "Read the topology, the data flow, the failure modes. Code comes after comprehension." },
  { n: "02", t: "Reliability is a feature.", d: "Boring infrastructure is the platform on which interesting products are built." },
  { n: "03", t: "Automate the second time.", d: "If a task is done twice, it should be codified by the third." },
  { n: "04", t: "Security is a posture, not a project.", d: "Layered defaults, least privilege, observability, every day." },
  { n: "05", t: "Optimize for clarity.", d: "Simple architectures, named primitives, and runbooks people actually read." },
  { n: "06", t: "Stay a beginner.", d: "Curiosity outperforms confidence over a long career." },
];

export function Philosophy() {
  return (
    <Section id="philosophy">
      <SectionHeader
        eyebrow="Philosophy"
        title={<>How I think about <span className="text-gradient-neon">technology.</span></>}
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p) => (
          <div key={p.n} className="bg-[oklch(0.13_0.06_270)] p-8 transition hover:bg-[oklch(0.18_0.08_278)]">
            <div className="font-mono text-xs text-[oklch(0.78_0.18_220)]">{p.n}</div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}