import { Section, SectionHeader } from "./Section";

const timeline = [
  { year: "2026+", title: "Taxinger and Linkle", body: "Currently building a real time geolocation marketplace for taxis and passengers, alongside a unified Gmail, Gemini and Search workspace." },
  { year: "Late 2025", title: "Grey Analytics and Selah", body: "Shipped a multi agent financial auditing platform and an immersive Bible experience with offline support and verse explanations." },
  { year: "Mid 2025", title: "CashHub and Cosmic Memory", body: "Launched a learn to earn social platform and a hundred level card memory game with online and AI opponents." },
  { year: "Early 2025", title: "Web Developer at I.G.T.", body: "Joined I.G.T. as a web developer, building production interfaces and shipping Kuzi, an autonomous marketing agent for outreach." },
  { year: "Late 2024", title: "Likeable and Doclab", body: "Built a vibe coding tool on top of Lovable and a generative document studio that drafts contracts and reports from a single prompt." },
  { year: "Early 2024", title: "Freelancer, First Aid", body: "Started freelancing and shipped First Aid, an AI powered triage and care tracker connecting patients with clinicians." },
];

const certs = ["First Aid", "Doclab", "Likeable", "Kuzi", "CashHub", "Cosmic Memory", "Linkle", "Selah", "Grey Analytics", "Taxinger"];

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
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Projects</div>
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
              Some of these projects are still in progress and ship continuously on my GitHub.
            </p>
            <a
              href="https://github.com/kuzi-kct"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[oklch(0.78_0.18_220)] hover:text-foreground"
            >
              github.com/kuzi-kct →
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}