import { Section, SectionHeader } from "./Section";
import htmlIcon from "@/assets/tech-image.png.asset.json";
import cssIcon from "@/assets/tech-image-2.png.asset.json";
import jsIcon from "@/assets/tech-image-3.png.asset.json";
import vscodeIcon from "@/assets/tech-image-4.png.asset.json";
import cmdIcon from "@/assets/tech-image-5.png.asset.json";
import linuxIcon from "@/assets/tech-image-6.png.asset.json";
import supabaseIcon from "@/assets/tech-image-7.png.asset.json";
import vercelIcon from "@/assets/tech-image-8.png.asset.json";
import lovableIcon from "@/assets/tech-image-9.png.asset.json";

type Domain = {
  name: string;
  desc: string;
  glow: "cyan" | "violet" | "magenta";
  icon: string;
};

const domains: Domain[] = [
  { icon: cmdIcon.url, name: "Windows CMD", desc: "Managing the operating system, file directories, services and network diagnostics from the command line.", glow: "cyan" },
  { icon: vscodeIcon.url, name: "Visual Studio Code", desc: "Daily-driver editor for writing, debugging and shipping across every stack with extensions, Git and terminals built in.", glow: "violet" },
  { icon: htmlIcon.url, name: "HTML", desc: "Semantic, accessible markup that gives every interface a clear structure and a meaningful document outline.", glow: "magenta" },
  { icon: cssIcon.url, name: "CSS", desc: "Responsive layouts, design tokens, transitions and animations that bring interfaces to life across devices.", glow: "cyan" },
  { icon: jsIcon.url, name: "JavaScript", desc: "Interactive behavior, DOM control and modern ES syntax powering both browser and Node runtimes.", glow: "magenta" },
  { icon: linuxIcon.url, name: "Linux", desc: "Servers, shells, package managers and containers, the operating system underneath most of the modern web.", glow: "violet" },
  { icon: supabaseIcon.url, name: "Supabase", desc: "Postgres database, authentication, storage and edge functions wired up with row level security out of the box.", glow: "cyan" },
  { icon: vercelIcon.url, name: "Vercel", desc: "Frictionless deployment, preview environments and edge delivery for modern React and Next.js applications.", glow: "violet" },
  { icon: lovableIcon.url, name: "Lovable", desc: "AI-native build platform for shipping full stack products in hours, from prompt to production.", glow: "magenta" },
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
            <div className="relative mb-5 inline-grid h-14 w-14 place-items-center rounded-xl glass-strong">
              <img
                src={icon}
                alt={`${name} logo`}
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8 object-contain"
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
