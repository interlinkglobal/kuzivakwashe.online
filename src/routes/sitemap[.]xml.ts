import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { OG_IMAGE, OG_IMAGE_ALT, PUBLIC_ROUTES, SITE_NAME, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = PUBLIC_ROUTES.map((e) =>
          [
            "  <url>",
            `    <loc>${SITE_URL}${e.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            "    <image:image>",
            `      <image:loc>${OG_IMAGE}</image:loc>`,
            `      <image:title>${SITE_NAME}</image:title>`,
            `      <image:caption>${OG_IMAGE_ALT}</image:caption>`,
            "    </image:image>",
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n"),
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
            "X-Robots-Tag": "noindex",
          },
        });
      },
    },
  },
});
