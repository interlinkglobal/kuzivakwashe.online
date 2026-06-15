import { Section, SectionHeader } from "./Section";
import globeAsset from "@/assets/globe-new.png.asset.json";
import { Activity, Cpu, HardDrive, Wifi } from "lucide-react";

const metrics = [
  { icon: Activity, label: "Client Satisfaction", value: "98%", color: "text-[oklch(0.78_0.18_220)]" },
  { icon: HardDrive, label: "On-time Delivery", value: "95%", color: "text-[oklch(0.66_0.27_305)]" },
  { icon: Wifi, label: "Projects Shipped", value: "50+", color: "text-[oklch(0.70_0.32_340)]" },
  { icon: Cpu, label: "Tech Domains", value: "12+", color: "text-[oklch(0.75_0.20_195)]" },
];

const status = [
  { name: "HTML / CSS", state: "96%" },
  { name: "JavaScript / TypeScript", state: "92%" },
  { name: "React / Next.js", state: "90%" },
  { name: "Python", state: "88%" },
  { name: "UI / UX Design", state: "85%" },
  { name: "DevOps & Cloud", state: "80%" },
];

export function Infrastructure() {
  return (
    <Section id="infrastructure" reveal="right">
      <SectionHeader
        eyebrow="Infrastructure & Systems"
        title={<>Built to scale<br /><span className="text-gradient-neon">from one user to many.</span></>}
        description="From a single landing page to a multi-region platform, I architect systems that grow with your business without breaking under pressure."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden min-h-[420px] flex items-center justify-center">
          <img
            src={globeAsset.url}
            alt="Global network of connected systems"
            loading="lazy"
            className="relative w-full max-w-[520px] animate-float"
          />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-5">
                <m.icon className={`h-5 w-5 ${m.color}`} />
                <div className={`mt-3 font-display text-3xl font-bold ${m.color}`}>{m.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="font-display text-lg font-semibold">Knowledge Bases</div>
              <span className="font-mono text-[10px] uppercase text-[oklch(0.75_0.2_150)]">● ALWAYS LEARNING</span>
            </div>
            <ul className="mt-4 divide-y divide-border/60">
              {status.map((s) => (
                <li key={s.name} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="font-mono text-[oklch(0.78_0.18_220)]">{s.state}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}