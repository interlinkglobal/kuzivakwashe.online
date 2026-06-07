import { Section, SectionHeader } from "./Section";

const traffic = [
  { name: "Organic", val: 48 },
  { name: "Direct", val: 25 },
  { name: "Referral", val: 15 },
  { name: "Social", val: 7 },
  { name: "Other", val: 5 },
];

// pre-generated smooth sparkline points
const spark = "M0,40 C20,30 35,55 55,32 C75,12 95,48 120,28 C145,10 170,38 195,22 C220,8 245,30 270,18 C290,8 305,24 320,16";

export function Analytics() {
  return (
    <Section id="analytics">
      <SectionHeader
        eyebrow="Analytics & Intelligence"
        title={<>Decisions powered by <span className="text-gradient-neon">data you can trust.</span></>}
        description="Telemetry, dashboards, and AI-driven insights, turning the firehose of operational data into clear, actionable signal."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-12">
        {/* main chart */}
        <div className="glass-strong rounded-3xl p-6 lg:col-span-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Performance Over Time</div>
              <div className="mt-1 font-display text-2xl font-semibold">Platform Throughput</div>
            </div>
            <div className="flex gap-1 rounded-xl glass p-1 text-xs font-mono">
              {["1D", "7D", "30D", "90D"].map((t) => (
                <span key={t} className={`rounded-lg px-3 py-1.5 ${t === "30D" ? "bg-gradient-neon text-background" : "text-muted-foreground"}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="mt-6 h-64 w-full">
            <svg viewBox="0 0 320 80" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.66 0.27 305)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="oklch(0.66 0.27 305)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.78 0.18 220)" />
                  <stop offset="50%" stopColor="oklch(0.66 0.27 305)" />
                  <stop offset="100%" stopColor="oklch(0.70 0.32 340)" />
                </linearGradient>
              </defs>
              {[10, 25, 40, 55, 70].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="oklch(0.55 0.18 290 / 0.12)" strokeWidth="0.5" />
              ))}
              <path d={`${spark} L320,80 L0,80 Z`} fill="url(#g1)" />
              <path d={spark} fill="none" stroke="url(#g2)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4 border-t border-border/60 pt-5">
            {[
              { l: "Users", v: "128.4K", d: "+12.4%" },
              { l: "Sessions", v: "342.6K", d: "+8.1%" },
              { l: "Latency", v: "23 ms", d: "-4.3%" },
              { l: "Errors", v: "0.02%", d: "-2.1%" },
            ].map((m) => (
              <div key={m.l}>
                <div className="text-xs text-muted-foreground">{m.l}</div>
                <div className="mt-1 font-display text-xl font-semibold">{m.v}</div>
                <div className="font-mono text-[10px] text-[oklch(0.75_0.2_150)]">{m.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI insights */}
        <div className="glass-strong rounded-3xl p-6 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-neon shadow-glow-violet">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-background" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0-2 7v2a4 4 0 0 0 4 4h.5M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7v2a4 4 0 0 1-4 4h-.5M12 3v18" />
              </svg>
            </span>
            <div>
              <div className="font-display text-lg font-semibold">AI Insights</div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">Realtime</div>
            </div>
          </div>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="rounded-xl border-l-2 border-[oklch(0.78_0.18_220)] bg-[oklch(0.2_0.08_278/0.4)] p-3">
              Peak traffic clusters around <span className="font-medium text-foreground">Tue 10–11 AM</span>. Auto-scale schedule updated.
            </li>
            <li className="rounded-xl border-l-2 border-[oklch(0.66_0.27_305)] bg-[oklch(0.2_0.08_278/0.4)] p-3">
              Database p95 climbing, <span className="font-medium text-foreground">index hint</span> proposed for <code className="font-mono text-xs">orders.user_id</code>.
            </li>
            <li className="rounded-xl border-l-2 border-[oklch(0.70_0.32_340)] bg-[oklch(0.2_0.08_278/0.4)] p-3">
              Anomaly detected on <span className="font-medium text-foreground">edge-eu-3</span>. Mitigation runbook drafted.
            </li>
          </ul>
        </div>

        {/* traffic sources */}
        <div className="glass-strong rounded-3xl p-6 lg:col-span-5">
          <div className="font-display text-lg font-semibold">Traffic Sources</div>
          <div className="mt-6 space-y-3">
            {traffic.map((t, i) => (
              <div key={t.name}>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{t.name}</span>
                  <span className="font-mono">{t.val}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[oklch(0.2_0.08_278/0.6)]">
                  <div
                    className="h-full bg-gradient-neon"
                    style={{ width: `${t.val}%`, opacity: 1 - i * 0.12 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* connection health */}
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6 lg:col-span-7">
          <div className="font-display text-lg font-semibold">Connection Health</div>
          <div className="mt-4 grid grid-cols-2 items-center gap-6">
            <div className="relative grid place-items-center">
              <svg viewBox="0 0 120 120" className="h-40 w-40">
                <circle cx="60" cy="60" r="50" fill="none" stroke="oklch(0.2 0.08 278)" strokeWidth="10" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#ring)" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`} strokeDashoffset={`${2 * Math.PI * 50 * 0.02}`} transform="rotate(-90 60 60)" />
                <defs>
                  <linearGradient id="ring" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.18 220)" />
                    <stop offset="100%" stopColor="oklch(0.70 0.32 340)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <div className="font-display text-3xl font-bold">98%</div>
                <div className="font-mono text-[10px] uppercase text-[oklch(0.75_0.2_150)]">Excellent</div>
              </div>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                ["Packet Loss", "0.01%"],
                ["Jitter", "2 ms"],
                ["DNS Health", "Excellent"],
                ["Uptime", "99.99%"],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-mono">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}