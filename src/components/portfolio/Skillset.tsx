import { Section, SectionHeader } from "./Section";
import { FileText, FileUser } from "lucide-react";

export function Skillset() {
  return (
    <Section id="skillset" reveal="up">
      <SectionHeader
        eyebrow="Skillset"
        title={<>Skill acquisition over <span className="text-gradient-neon">knowledge hoarding.</span></>}
        description="Technology moves faster than any single reference can keep up with. I invest in the ability to learn, apply and ship, so the toolkit stays fresh as the field evolves around it[...]"
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="mx-auto w-full max-w-md">
          <img
            src="https://drive.google.com/uc?export=view&id=1ssqIhBVMMI2aW0XQ-VnoR6wQY0X-h_ba"
            alt="Kuzivakwashe Tembo skillset overview"
            loading="lazy"
            className="w-full h-auto object-contain shadow-neon"
            style={{ borderRadius: 0 }}
          />
        </div>

        <div>
          <p className="text-base leading-relaxed text-foreground/90">
            As technology is rapidly developing: knowledge bases are never stagnant; My objective is to focus on fundamentals & skill acquisition by staying on top of the latest versions of tools in tech. As old methods are replaced by new systems, I remain aligned with the current.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.66_0.27_305)]" /> Comfortable across hardware, software, cloud, security and AI.</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.78_0.18_220)]" /> Ships in weeks, not months, by combining products with products.</li>
            <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.70_0.32_340)]" /> Grows with the client, from a landing page to a multi-region platform.<[...]</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:dev@kuzivakwashe.online?subject=CV%20request"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-neon px-5 py-3 text-sm font-semibold text-background shadow-neon transition hover:translate-y-[-2px]"
            >
              <FileUser className="h-4 w-4" /> View CV
            </a>
            <a
              href="mailto:dev@kuzivakwashe.online?subject=Cover%20Letter%20request"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-[oklch(0.3_0.1_285/0.25)]"
            >
              <FileText className="h-4 w-4" /> View Cover Letter
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
