export const locales = ["en", "zh-CN", "zh-TW", "es", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  es: "Español",
  ja: "日本語",
  ko: "한국어",
};
