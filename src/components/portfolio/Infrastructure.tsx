import { Section, SectionHeader } from "./Section";
import infra from "@/assets/network-dashboard.png";
import { Activity, Cpu, HardDrive, Wifi } from "lucide-react";

const metrics = [
  { icon: Activity, label: "Systems Uptime", value: "90%", color: "text-[oklch(0.78_0.18_220)]" },
  { icon: HardDrive, label: "Costs Reduced", value: "50%", color: "text-[oklch(0.66_0.27_305)]" },
  { icon: Wifi, label: "Errors Resolved", value: "80%", color: "text-[oklch(0.70_0.32_340)]" },
  { icon: Cpu, label: "Updates Successful", value: "75%", color: "text-[oklch(0.75_0.20_195)]" },
];

const status = [
  { name: "Compute", state: "Operational" },
  { name: "Storage", state: "Operational" },
  { name: "Network", state: "Operational" },
  { name: "Identity", state: "Operational" },
  { name: "Observability", state: "Operational" },
  { name: "Edge / CDN", state: "Operational" },
];

export function Infrastructure() {
  return (
    <Section id="infrastructure" reveal="right">
      <SectionHeader
        eyebrow="Infrastructure & Systems"
        title={<>Fast, Secure and<br /><span className="text-gradient-neon">Affordable operations.</span></>}
        description="Technological mumbo jumbo in plain English."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl glass-strong">
          <img src={infra} alt="Server infrastructure visualization" loading="lazy" width={1024} height={1024}
            className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.06_270)] via-[oklch(0.13_0.06_270/0.2)] to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Live Topology</div>
            <div className="mt-1 font-display text-xl">Multi-region, multi-cloud, single pane of glass.</div>
          </div>
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
              <div className="font-display text-lg font-semibold">System Status</div>
              <span className="font-mono text-[10px] uppercase text-[oklch(0.75_0.2_150)]">● ALL GREEN</span>
            </div>
            <ul className="mt-4 divide-y divide-border/60">
              {status.map((s) => (
                <li key={s.name} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-[oklch(0.75_0.2_150)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.2_150)] shadow-[0_0_8px_oklch(0.75_0.2_150)]" />
                    {s.state}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}