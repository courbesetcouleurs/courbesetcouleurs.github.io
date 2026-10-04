import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { projects } from "./projets/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://courbesetcouleurs.github.io";
  const updated = new Date("2026-10-02");
  return [
    {
      url: base,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/devis`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/a-propos`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...[
      "identite-visuelle",
      "strategie-de-marque",
      "creation-logo",
      "webdesign",
    ].map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...projects.map((project) => ({
      url: `${base}/projets/${project.slug}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/mentions-legales`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/cgv`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/confidentialite`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
