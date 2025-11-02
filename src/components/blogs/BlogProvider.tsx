"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALE_STORAGE_KEY } from "@/components/hairwow/LanguageSwitcher";
import BlogTwo from "./blog-two";
import type { CategoryWithCount, TagWithCount, PostSummary } from "@/lib/blog/types";

type BlogProviderProps = {
  initialLocale?: Locale;
  posts: PostSummary[];
  categories: CategoryWithCount[];
  tags: TagWithCount[];
  recentPosts: PostSummary[];
};

export const BlogProvider = ({ 
  initialLocale = defaultLocale, 
  posts,
  categories,
  tags,
  recentPosts 
}: BlogProviderProps) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved locale preference
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      if (savedLocale && locales.includes(savedLocale)) {
        setLocale(savedLocale);
      }
    }
    setMounted(true);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    const dictionary = getDictionary(initialLocale);
    return (
      <BlogTwo
        locale={initialLocale}
        dictionary={dictionary}
        posts={posts}
        categories={categories}
        tags={tags}
        recentPosts={recentPosts}
      />
    );
  }

  const dictionary = getDictionary(locale);

  return (
    <BlogTwo
      locale={locale}
      dictionary={dictionary}
      posts={posts}
      categories={categories}
      tags={tags}
      recentPosts={recentPosts}
      onLocaleChange={handleLocaleChange}
    />
  );
};

