import { Section, SectionHeader } from "./Section";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    label: "Spec",
    title: "Start with a markdown spec.",
    points: [
      "Outline the what, why, when and how of the objective",
      "Align stakeholders on scope before any code is written",
      "Single source of truth that the build runs against",
    ],
  },
  {
    label: "MVP",
    title: "Animated minimum viable product.",
    points: [
      "Show a visual of the final product immediately",
      "Motion communicates intent faster than documents",
      "Validate the experience before committing to logic",
    ],
  },
  {
    label: "Build",
    title: "Modular build along the animations.",
    points: [
      "Implement step by step following the MVP progressions",
      "Each module owns a clear responsibility and contract",
      "Composable pieces that plug into a larger system",
    ],
  },
  {
    label: "Test",
    title: "Beta test with humans and AI.",
    points: [
      "Simulated and real world operations against the spec",
      "Feedback loops from end users and AI evaluators",
      "Ship only after the experience holds up under pressure",
    ],
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" reveal="left">
      <SectionHeader
        eyebrow="How I Work"
        title={<>How I build <span className="text-gradient-neon">systems from scratch.</span></>}
        description="Four iterable steps applied to every workflow: a markdown spec outlines the what, why, when and how. The plan is followed by an animated MVP that shows the final product. Modular building follows the animation, then beta testing closes the loop with simulated and real world feedback from humans and AI."
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