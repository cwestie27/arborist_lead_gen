import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://treevalue.pro";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/calculator/results"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
