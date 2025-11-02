import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers - allow everything for proper rendering, only block API routes
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",      // Only block API routes - no SEO value
        ],
      },
      // OpenAI GPT crawlers - for ChatGPT and GPT models
      {
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: "/",
        disallow: ["/api/"],
      },
      // Google's AI training crawler
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      // Anthropic (Claude) crawlers
      {
        userAgent: ["anthropic-ai", "Claude-Web"],
        allow: "/",
        disallow: ["/api/"],
      },
      // Common Crawl - used by many AI companies for training data
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Major search engines - full access for optimal SEO
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
