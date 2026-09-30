import { MetadataRoute } from "next";
import { ProjectsContent } from "@/utils";

const BASE_URL = "https://dkadstudio.com";

// Equivalent user-facing routes per locale (locale prefix required, `prefixDefault: true`).
const routePairs: Array<{ fr: string; en: string; priority?: number }> = [
  { fr: "/fr", en: "/en", priority: 1 },
  { fr: "/fr/a-propos", en: "/en/about", priority: 0.8 },
  { fr: "/fr/galerie", en: "/en/gallery", priority: 0.8 },
  { fr: "/fr/projets", en: "/en/projects", priority: 0.8 },
  { fr: "/fr/services", en: "/en/services", priority: 0.8 },
  { fr: "/fr/contact", en: "/en/contact", priority: 0.8 },
];

// Project slugs are identical in both locales; only the section slug differs
// (/fr/projets vs /en/projects), matching the LanguageSelector toggle.

const languagesFor = (fr: string, en: string) => ({
  languages: { fr: `${BASE_URL}${fr}`, en: `${BASE_URL}${en}` },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = ProjectsContent.map(
    ({ slug }) => ({
      url: `${BASE_URL}/fr/projets/${slug}`,
      alternates: languagesFor(`/fr/projets/${slug}`, `/en/projects/${slug}`),
      priority: 0.7,
    })
  );

  const pageEntries: MetadataRoute.Sitemap = routePairs.map(
    ({ fr, en, priority }) => ({
      url: `${BASE_URL}${fr}`,
      alternates: languagesFor(fr, en),
      priority,
    })
  );

  return [...pageEntries, ...projectEntries];
}