import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";
import { locales, defaultLocale } from "@/i18n/config";

// 有效的页面路由
const validRoutes: Array<{ 
  path: string; 
  priority: number; 
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  // 首页 - 最高优先级
  { path: "", priority: 1.0, changeFrequency: "daily" },
  
  // 博客列表页 - 高优先级,经常更新
  { path: "/blog-v1", priority: 0.8, changeFrequency: "weekly" },
  
  // 博客详情页 - 中等优先级
  { path: "/blog-details", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 为每个语言生成URL
  locales.forEach((locale) => {
    validRoutes.forEach(({ path, priority, changeFrequency }) => {
      const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
      const fullPath = `${localePrefix}${path}`;
      
      sitemapEntries.push({
        url: `${siteConfig.siteUrl}${fullPath}`,
        lastModified,
        changeFrequency,
        priority,
        // 添加多语言替代链接
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => {
              const altPrefix = l === defaultLocale ? "" : `/${l}`;
              return [l, `${siteConfig.siteUrl}${altPrefix}${path}`];
            })
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
