import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import LocaleProvider from "@/i18n/LocaleProvider";
import { locales, type Locale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const openGraphLocaleMap: Record<Locale, string> = {
  en: "en_US",
  "zh-CN": "zh_CN",
  "zh-TW": "zh_TW",
  es: "es_ES",
  ja: "ja_JP",
  ko: "ko_KR",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#03090f",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  const isSupported = locales.includes(locale);
  const activeLocale = isSupported ? locale : defaultLocale;
  const dictionary = getDictionary(activeLocale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    icons: {
      icon: "/favicon.png",
    },
    alternates: {
      canonical: `/${activeLocale}`,
      languages: Object.fromEntries(locales.map((loc) => [loc, `/${loc}`])),
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      siteName: "HairWow",
      type: "website",
      locale: openGraphLocaleMap[activeLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
