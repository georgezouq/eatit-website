"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALE_STORAGE_KEY } from "./LanguageSwitcher";
import HomeNine from "@/components/homes/home-9";
import type { PostSummary } from "@/lib/blog/types";

type LocaleProviderProps = {
  children?: ReactNode;
  initialLocale?: Locale;
  latestPosts: PostSummary[];
};

export const LocaleProvider = ({ initialLocale = defaultLocale, latestPosts }: LocaleProviderProps) => {
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
    return <HomeNine dictionary={dictionary} locale={initialLocale} latestPosts={latestPosts} />;
  }

  const dictionary = getDictionary(locale);

  return <HomeNine dictionary={dictionary} locale={locale} onLocaleChange={handleLocaleChange} latestPosts={latestPosts} />;
};

