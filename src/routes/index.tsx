import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Expertise } from "@/components/portfolio/Expertise";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Projects } from "@/components/portfolio/Projects";
import { Infrastructure } from "@/components/portfolio/Infrastructure";
import { Analytics } from "@/components/portfolio/Analytics";
import { Ecosystem } from "@/components/portfolio/Ecosystem";
import { Journey } from "@/components/portfolio/Journey";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Contact } from "@/components/portfolio/Contact";
import { FloatingContact } from "@/components/portfolio/FloatingContact";
import { Toaster } from "@/components/ui/sonner";
import { SeoContent } from "@/components/portfolio/SeoContent";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_URL,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <Nav />
      <SeoContent />
      <main>
        <Hero />
        <Expertise />
        <Capabilities />
        <Projects />
        <Infrastructure />
        <Analytics />
        <Ecosystem />
        <Journey />
        <Philosophy />
        <Contact />
      </main>
      <FloatingContact />
      <Toaster richColors position="top-right" />
    </div>
  );
}
