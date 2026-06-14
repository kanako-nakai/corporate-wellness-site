import type { MetadataRoute } from "next";

const baseUrl = "https://for-corporate-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/community`,
      changeFrequency: "monthly",
      priority: 0.55
    }
  ];
}
