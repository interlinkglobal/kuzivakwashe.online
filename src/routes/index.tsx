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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K.C.T. — IT Specialist · Networks, Cloud, Security, AI" },
      { name: "description", content: "Portfolio of K.C.T., an IT specialist designing and operating resilient systems across networks, cloud, infrastructure, security, automation, data and AI." },
      { property: "og:title", content: "K.C.T. — IT Specialist" },
      { property: "og:description", content: "End-to-end technology: networking, cloud, infrastructure, cybersecurity, automation, analytics, and AI." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <Nav />
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
    </div>
  );
}
