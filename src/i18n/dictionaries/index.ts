import type { Locale } from "../config";
import type { LocaleDictionary } from "./types";
import en from "./en";
import es from "./es";
import ja from "./ja";
import ko from "./ko";
import zhCN from "./zh-CN";
import zhTW from "./zh-TW";

const dictionaries: Record<Locale, LocaleDictionary> = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  es,
  ja,
  ko,
};

export const getDictionary = (locale: Locale): LocaleDictionary => dictionaries[locale];

export type { LocaleDictionary };
