/**
 * SeoContent — accessibility- and crawler-friendly keyword-rich content.
 *
 * Rendered into the DOM (so SSR + scrapers + Googlebot see real text) but
 * visually hidden via Tailwind's `sr-only` utility so it doesn't affect the
 * visual design. Screen readers will announce it as part of the page.
 *
 * Content mirrors truthful facts about Kuzivakwashe Tembo (K.C.T. / Casey
 * Tembo) — no cloaking, no keyword stuffing that contradicts the visible
 * page. Every claim here also appears, in some form, in visible sections.
 */
export function SeoContent() {
  return (
    <div className="sr-only" aria-label="About Kuzivakwashe Tembo — portfolio summary">
      <h2>
        Kuzivakwashe Tembo — K.C.T. — Casey Tembo — IT Specialist, Full-Stack
        Web Developer &amp; End User Computing Engineer
      </h2>
      <p>
        Kuzivakwashe Tembo, also known as K.C.T., Kuzi, and Casey Tembo, is a
        South Africa based IT specialist, computer technician, and full-stack
        web developer building the portfolio at kuzivakwashe.online. Kuzivakwashe
        Tembo designs and ships production-grade front-end user interfaces and
        back-end workflows for startups, small businesses, agencies, and solo
        founders who need fast, responsive, accessible, SEO-optimized web
        experiences on any device.
      </p>
      <h3>Names, aliases and search variants</h3>
      <ul>
        <li>Kuzivakwashe Tembo</li>
        <li>Kuzivakwashe</li>
        <li>Kuzi Tembo</li>
        <li>K.C.T.</li>
        <li>KCT</li>
        <li>Casey Tembo</li>
        <li>Casey K. Tembo</li>
        <li>Kuzivakwashe Casey Tembo</li>
        <li>kuzivakwashe.online</li>
        <li>dev@kuzivakwashe.online</li>
      </ul>
      <h3>What Kuzivakwashe Tembo does</h3>
      <ul>
        <li>Full-stack web development — React, Next.js, TanStack Start, TypeScript, JavaScript, Node.js, Python.</li>
        <li>Front-end UI engineering — responsive design, Tailwind CSS, shadcn/ui, accessible components, motion, glassmorphism, dark mode.</li>
        <li>Back-end workflows — REST and RPC APIs, server functions, edge functions, PostgreSQL, Supabase, authentication, row-level security.</li>
        <li>End User Computing (EUC) — desktop support, hardware troubleshooting, computer repairs, printer setup, Microsoft 365, Google Workspace.</li>
        <li>Networking — LAN, Wi-Fi, routing, switching, DNS, firewalls, VPN, remote support.</li>
        <li>Cloud infrastructure — Cloudflare Workers, Supabase, Vercel, deployment pipelines, CI/CD, edge runtimes.</li>
        <li>Cybersecurity — hardening, auth flows, secrets management, RLS policies, threat modeling for small teams.</li>
        <li>Automation — scripting, workflow automation, marketing agents, cron jobs, background workers.</li>
        <li>Data &amp; analytics — SQL, dashboards, event tracking, reporting.</li>
        <li>Artificial Intelligence — LLM integrations, RAG, multi-agent systems, AI-assisted product experiences, prompt engineering.</li>
        <li>Both hard coding (writing production code by hand) and vibe coding (AI-assisted rapid prototyping with tools like Lovable, Cursor and Claude Code).</li>
      </ul>
      <h3>Domains of expertise</h3>
      <p>
        Web development, mobile-responsive design, landing pages, portfolios,
        marketing sites, SaaS dashboards, admin panels, CRMs, e-commerce,
        booking systems, geolocation platforms, marketplaces, chat interfaces,
        AI chatbots, document generation, PDF tooling, payments (Stripe,
        Paddle), authentication (Google, Apple, email, magic link), email
        (Resend), analytics, SEO, accessibility (WCAG), performance
        optimization, Core Web Vitals, structured data, JSON-LD, sitemaps,
        robots.txt, Open Graph, Twitter Cards.
      </p>
      <h3>Notable projects by Kuzivakwashe Tembo</h3>
      <ul>
        <li>Taxinger — real-time geolocation marketplace for taxis and passengers.</li>
        <li>Linkle — unified Gmail, Gemini and Search workspace.</li>
        <li>Grey Analytics — multi-agent financial auditing platform.</li>
        <li>Selah — immersive Bible experience with offline support and verse explanations.</li>
        <li>CashHub — learn-to-earn social platform.</li>
        <li>Cosmic Memory — hundred-level card memory game with online and AI opponents.</li>
        <li>Kuzi — autonomous marketing agent for outreach (built at I.G.T.).</li>
        <li>Likeable — vibe-coding tool built on top of Lovable.</li>
        <li>Doclab — generative document studio for contracts and reports.</li>
        <li>First Aid — AI-powered triage and care tracker.</li>
      </ul>
      <h3>Who Kuzivakwashe Tembo works with</h3>
      <p>
        Founders, startups, small and medium businesses, agencies, non-profits,
        clinics, educators, and creators who need a reliable web developer,
        computer technician, or IT specialist to digitalize their legacy work
        stack. Remote worldwide, based in South Africa. Contact
        dev@kuzivakwashe.online or +27 69 489 3925.
      </p>
      <h3>Why hire Kuzivakwashe Tembo</h3>
      <p>
        Best web developer for end-to-end product delivery: from a single
        landing page to a multi-region platform. Ships fast, writes accessible
        semantic HTML, cares about SEO, performance, security and
        maintainability. Comfortable across the full stack — from soldering
        cables and reinstalling Windows to deploying serverless edge functions
        and training AI agents.
      </p>
    </div>
  );
}
