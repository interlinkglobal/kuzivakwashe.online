import heroImg from "@/assets/certificate.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-[oklch(0.55_0.27_305/0.25)] blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.65_0.22_220/0.2)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-mono">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[oklch(0.75_0.2_150)]" />
            <span className="text-muted-foreground">An End User Computing Pro</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Digitalizing the
            <br />
            <span className="text-gradient-neon">legacy work</span>
            <br />
            stack.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
            I'm <span className="font-medium">Kuzi</span>. A C.R.U.D computer specialist who creates workflows,
            reads code, updates versions and deletes errors. I have a broad understanding of information
            technology (IT) ranging from Responsive Web Design to End User Computing.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-neon px-6 py-3.5 text-sm font-semibold text-background shadow-neon transition hover:translate-y-[-2px]">
              Explore My Work →
            </a>
            <a href="#contact" className="glass rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-[oklch(0.3_0.1_285/0.4)]">
              Get in Touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "10+", v: "Domains" },
              { k: "50+", v: "Projects" },
              { k: "24/7", v: "Operations" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-gradient-neon">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-1 shadow-neon">
            <img
              src={heroImg}
              alt="Professional certificate awarded to K.C.T."
              width={1536}
              height={1152}
              className="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}