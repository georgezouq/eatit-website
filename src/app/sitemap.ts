import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { getAllPostSummaries } from "@/lib/blog/api";

// 移除 runtime 和 revalidate，让 sitemap 在构建时静态生成
// 这样可以确保在生产环境中正确访问 _posts 目录

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

  // 在构建时生成，确保可以访问文件系统
  try {
    const posts = getAllPostSummaries();
    
    posts.forEach((post) => {
      entries.push({
        url: `${siteConfig.siteUrl}/posts/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
    
    console.log(`✓ Sitemap generated with ${posts.length} blog posts`);
  } catch (error) {
    console.error("❌ Failed to load blog posts for the sitemap:", error);
    // 即使失败也返回基础路由，确保sitemap不会完全失败
  }

  return entries;
}
