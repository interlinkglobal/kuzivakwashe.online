import { ExternalLink, Globe2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";

type FeaturedWebsite = {
  name: string;
  domain: string;
  url: string;
};

// Maintain the owner-supplied order. The iframe is a visual preview only:
// navigation and all interaction happen on the destination website.
const websites: FeaturedWebsite[] = [
  { name: "Grey Analytics", domain: "greyanalytics.co.za", url: "https://greyanalytics.co.za" },
  { name: "ACGC", domain: "acgc.site", url: "https://acgc.site" },
  { name: "Doclab", domain: "doclab.online", url: "https://doclab.online" },
  { name: "Cwenga Peter", domain: "cwengapeter.info", url: "https://cwengapeter.info" },
  { name: "Blogdel", domain: "blogdel.blog", url: "https://blogdel.blog" },
  { name: "Intermail", domain: "mail.interlinkgt.online", url: "https://mail.interlinkgt.online" },
  { name: "First Aid", domain: "firstaidapp.co.za", url: "https://firstaidapp.co.za" },
  { name: "Cosmic Memory", domain: "cosmicmemory.online", url: "https://cosmicmemory.online" },
  { name: "Selah", domain: "selah.website", url: "https://selah.website" },
  { name: "Interlink Global Technologies", domain: "interlinkgt.online", url: "https://interlinkgt.online" },
  { name: "Interlink Apps", domain: "interlinkapps.online", url: "https://interlinkapps.online" },
  { name: "SSPOS", domain: "sspos.interlinkapps.online", url: "https://sspos.interlinkapps.online" },
  { name: "Phesa Solutions", domain: "phesasolutions.co.za", url: "https://phesasolutions.co.za" },
  { name: "SA Learn", domain: "salearn.online", url: "https://salearn.online" },
];

function WebsiteCard({ website, index }: { website: FeaturedWebsite; index: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/40 glass transition duration-300 hover:-translate-y-1 hover:border-[oklch(0.66_0.27_305/0.55)] hover:shadow-neon">
      <div className="overflow-hidden border-b border-border/70 bg-white">
        <div className="flex h-9 items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-3">
          <span aria-hidden="true" className="flex shrink-0 items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          </span>
          <span className="mx-auto max-w-[72%] truncate rounded-md bg-white px-3 py-1 font-mono text-[10px] text-neutral-500">
            {website.domain}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
          <iframe
            src={website.url}
            title={website.name + " website thumbnail"}
            loading="lazy"
            tabIndex={-1}
            referrerPolicy="strict-origin-when-cross-origin"
            className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left border-0 bg-white"
            style={{ transform: "scale(0.25)" }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/75 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-white">
            Website preview
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl glass-strong text-[oklch(0.78_0.18_220)]">
            <Globe2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{website.name}</h3>
            <p className="mt-1 truncate font-mono text-xs text-muted-foreground">{website.domain}</p>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Open " + website.name + " website in a new tab"}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:opacity-85"
        >
          Open website
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title={<>Websites built.<br /><span className="text-gradient-neon">Experiences to explore.</span></>}
          description="Explore fourteen selected websites through live, scaled homepage previews. Open any website to interact with the full experience."
        />
        <span className="rounded-full border border-border/70 glass px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {websites.length} websites
        </span>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {websites.map((website, index) => (
          <WebsiteCard key={website.domain} website={website} index={index} />
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Some websites may restrict iframe embedding. If a preview is unavailable, use Open website to visit it directly.
      </p>
    </Section>
  );
}
