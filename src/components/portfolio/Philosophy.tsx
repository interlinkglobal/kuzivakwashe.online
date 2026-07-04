import { Section, SectionHeader } from "./Section";

const principles = [
  { n: "01", t: "Everything Can Be Modeled.", d: "Applications can be converted into information and information can be converted into applications." },
  { n: "02", t: "Systems Need Modules.", d: "Create the boxes first before thinking outside of them." },
  { n: "03", t: "Applications Are Features.", d: "Approach features as their own apps, applied to a bigger system." },
  { n: "04", t: "Errors Are Signals.", d: "System breakdowns are computer languages screaming about misconfigurations." },
  { n: "05", t: "Security Starts Psychologically.", d: "Build redundant systems that frustrate malicious intentions." },
  { n: "06", t: "Done Means Production Ready.", d: "Projects are never truly completed, there will always be room for improvement, so functionality over perfectionism." },
];

export function Philosophy() {
  return (
    <Section id="philosophy" reveal="rotate">
      <SectionHeader
        eyebrow="Philosophy"
        title={<>How I think about <span className="text-gradient-neon">technology.</span></>}
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p) => (
          <div key={p.n} className="philosophy-card p-8 transition">
            <div className="font-mono text-xs text-[oklch(0.78_0.18_220)]">{p.n}</div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}