"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALE_STORAGE_KEY } from "@/components/hairwow/LanguageSwitcher";
import NotFound from "./index";

type NotFoundProviderProps = {
  initialLocale?: Locale;
};

export const NotFoundProvider = ({ initialLocale = defaultLocale }: NotFoundProviderProps) => {
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
    return <NotFound dictionary={dictionary} locale={initialLocale} />;
  }

  const dictionary = getDictionary(locale);

  return <NotFound dictionary={dictionary} locale={locale} onLocaleChange={handleLocaleChange} />;
};

