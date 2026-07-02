// Central SEO config for the K.C.T. portfolio.
// Single-page site: values here are the source of truth for head metadata,
// JSON-LD, sitemap and robots.

export const SITE_URL = "https://kuzivakwashe.online";
export const SITE_NAME = "K.C.T. — Kuzivakwashe Tembo";
export const SITE_LOCALE = "en_ZA";
export const SITE_LANG = "en-ZA";
export const THEME_COLOR = "#0b0714";
export const BACKGROUND_COLOR = "#0b0714";

export const DEFAULT_TITLE =
  "K.C.T. — IT Specialist · Networks, Cloud, Security & AI";
export const DEFAULT_DESCRIPTION =
  "Portfolio of Kuzivakwashe Tembo (K.C.T.), an end-user computing and IT specialist digitalizing the legacy work stack across networks, cloud, infrastructure, cybersecurity, automation, data and AI.";

// Absolute social preview image (must be absolute for crawlers).
export const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fbb2fc2d-4e8b-433c-b942-6a659a9e3a8d/id-preview-204eebe1--34608f31-8c4d-4376-9cf8-b87c97cb042e.lovable.app-1780866531384.png";
export const OG_IMAGE_ALT =
  "K.C.T. portfolio — Digitalizing the legacy work stack";

export const CONTACT = {
  email: "dev@kuzivakwashe.online",
  phone: "+27694893925",
  phoneDisplay: "+27 69 489 3925",
  github: "https://github.com/kuzivakwashetembo8",
};

export const SAME_AS = [CONTACT.github];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Public, indexable routes for sitemap generation. */
export const PUBLIC_ROUTES: Array<{
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}> = [{ path: "/", changefreq: "weekly", priority: "1.0" }];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kuzivakwashe Tembo",
  alternateName: "K.C.T.",
  url: SITE_URL,
  jobTitle: "IT Specialist",
  description: DEFAULT_DESCRIPTION,
  email: `mailto:${CONTACT.email}`,
  telephone: CONTACT.phone,
  sameAs: SAME_AS,
  knowsAbout: [
    "End User Computing",
    "Networking",
    "Cloud Infrastructure",
    "Cybersecurity",
    "Automation",
    "Data & Analytics",
    "Artificial Intelligence",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: SITE_LANG,
  publisher: { "@type": "Person", name: "Kuzivakwashe Tembo" },
};