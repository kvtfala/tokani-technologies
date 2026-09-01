import type { MetadataRoute } from "next";

const base = "https://www.tokani.com.fj";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/case-studies/unravel-viti`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
