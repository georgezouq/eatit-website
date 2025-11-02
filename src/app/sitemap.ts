import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { getAllPostSummaries } from "@/lib/blog/api";

export const runtime = "nodejs";
export const revalidate = 86400; // 24 hours

const baseRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },
  { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = baseRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  let posts: ReturnType<typeof getAllPostSummaries> = [];

  try {
    posts = getAllPostSummaries();
  } catch (error) {
    console.error("Failed to load blog posts for the sitemap:", error);
  }

  posts.forEach((post) => {
    entries.push({
      url: `${siteConfig.siteUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return entries;
}
