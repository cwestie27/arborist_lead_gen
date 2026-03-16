import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_APP_URL || "https://www.arborvalue.com"
  ).trim();

  const now = new Date();

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // High-traffic content pages
    {
      url: `${baseUrl}/how-much-is-my-tree-worth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tree-appraisal-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tree-replacement-cost`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/most-valuable-trees`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tree-damage-insurance-claim`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/property-value-trees`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ctla-tree-appraisal-method`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Species-specific calculator pages
    {
      url: `${baseUrl}/black-walnut-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oak-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/maple-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cedar-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pecan-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/live-oak-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cypress-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fruit-tree-value-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Other content
    {
      url: `${baseUrl}/best-tree-value-calculator-apps`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Legal
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2025-01-29"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2025-01-29"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
