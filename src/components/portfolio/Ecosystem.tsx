import { Section, SectionHeader } from "./Section";

const groups = [
  {
    name: "Operating Systems & Software Programs",
    items: ["Windows", "macOS", "Linux", "Microsoft 365", "Adobe Suite", "Notion"],
    glow: "cyan",
  },
  {
    name: "Programming Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js"],
    glow: "violet",
  },
  {
    name: "Design Platforms & Libraries",
    items: ["Figma", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Lucide", "Canva"],
    glow: "magenta",
  },
  {
    name: "Databases & APIs",
    items: ["Supabase", "PostgreSQL", "Firebase", "REST", "GraphQL", "Stripe API"],
    glow: "cyan",
  },
  {
    name: "Networks & Security",
    items: ["Cloudflare", "DNS", "TLS/SSL", "VPN", "OAuth", "Zero Trust"],
    glow: "violet",
  },
  {
    name: "Automations & AI",
    items: ["OpenAI", "Gemini", "LangChain", "n8n", "Zapier", "Lovable AI"],
    glow: "magenta",
  },
];

const dot: Record<string, string> = {
  cyan: "bg-[oklch(0.78_0.18_220)] shadow-[0_0_10px_oklch(0.78_0.18_220)]",
  violet: "bg-[oklch(0.66_0.27_305)] shadow-[0_0_10px_oklch(0.66_0.27_305)]",
  magenta: "bg-[oklch(0.70_0.32_340)] shadow-[0_0_10px_oklch(0.70_0.32_340)]",
};

export function Ecosystem() {
  return (
    <Section id="ecosystem" reveal="down">
      <SectionHeader
        eyebrow="Technology Ecosystem"
        title={<>The toolkit, <span className="text-gradient-neon">battle-tested.</span></>}
        description="A curated set of platforms, languages, and frameworks I reach for, chosen for what they make possible, not what's loudest."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.name} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2.5">
              <span className={`h-2 w-2 rounded-full ${dot[g.glow]}`} />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider">{g.name}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="rounded-lg border border-border/60 bg-[oklch(0.2_0.08_278/0.4)] px-3 py-1.5 text-sm transition hover:border-[oklch(0.66_0.27_305/0.6)] hover:text-foreground">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}