import { Section, SectionHeader } from "./Section";

type Domain = {
  name: string;
  desc: string;
  glow: "cyan" | "violet" | "magenta";
  icon: string;
};

const domains: Domain[] = [
  { icon: "/tech-stack/windows-cmd.webp", name: "Windows CMD", desc: "Managing the operating system, file directories, services and network diagnostics from the command line.", glow: "cyan" },
  { icon: "/tech-stack/visual-studio-code.webp", name: "Visual Studio Code", desc: "Daily-driver editor for writing, debugging and shipping across every stack with extensions, Git and terminals built in.", glow: "violet" },
  { icon: "/tech-stack/html5.webp", name: "HTML", desc: "Semantic, accessible markup that gives every interface a clear structure and a meaningful document outline.", glow: "magenta" },
  { icon: "/tech-stack/css3.webp", name: "CSS", desc: "Responsive layouts, design tokens, transitions and animations that bring interfaces to life across devices.", glow: "cyan" },
  { icon: "/tech-stack/javascript.webp", name: "JavaScript", desc: "Interactive behavior, DOM control and modern ES syntax powering both browser and Node runtimes.", glow: "magenta" },
  { icon: "/tech-stack/linux.webp", name: "Linux", desc: "Servers, shells, package managers and containers, the operating system underneath most of the modern web.", glow: "violet" },
  { icon: "/tech-stack/supabase.webp", name: "Supabase", desc: "Postgres database, authentication, storage and edge functions wired up with row level security out of the box.", glow: "cyan" },
  { icon: "/tech-stack/vercel.webp", name: "Vercel", desc: "Frictionless deployment, preview environments and edge delivery for modern React and Next.js applications.", glow: "violet" },
  { icon: "/tech-stack/lovable.webp", name: "Lovable", desc: "Optional AI-based UI templates.", glow: "magenta" },
];

const glowClass: Record<string, string> = {
  cyan: "from-[oklch(0.78_0.18_220/0.4)] to-transparent text-[oklch(0.78_0.18_220)]",
  violet: "from-[oklch(0.66_0.27_305/0.4)] to-transparent text-[oklch(0.66_0.27_305)]",
  magenta: "from-[oklch(0.70_0.32_340/0.4)] to-transparent text-[oklch(0.70_0.32_340)]",
};

export function Expertise() {
  return (
    <Section id="expertise" reveal="up">
      <SectionHeader
        eyebrow="Technology Overview"
        title={<>A broad stack.<br /><span className="text-gradient-neon">Engineered depth.</span></>}
        description="Across nine core domains, I build systems that communicate clearly, abstracting the technical jargon from non-technical colleagues."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {domains.map(({ icon, name, desc, glow }, i) => (
          <div
            key={name}
            className="card-elevated group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-[oklch(0.66_0.27_305/0.5)]"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${glowClass[glow]} opacity-0 blur-2xl transition group-hover:opacity-100`} />
            <div className="relative mb-5 inline-grid h-16 w-16 place-items-center rounded-xl glass-strong">
              <img
                src={icon}
                alt={`${name} logo`}
                width={32}
                height={32}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
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
