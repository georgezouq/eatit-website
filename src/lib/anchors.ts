import type { LocaleDictionary } from "@/i18n/dictionaries/types";

/**
 * Generate anchor configuration for navigation
 */
export const createAnchors = (dictionary: LocaleDictionary) => ({
  home: "home",
  features: dictionary.sections.why.id,
  tracking: dictionary.sections.core?.id ?? "tracking",
  pricing: dictionary.sections.pricing.id,
  download: dictionary.sections.download?.id ?? "download",
  faq: dictionary.sections.faq?.id ?? "faq",
} as const);

export type Anchors = ReturnType<typeof createAnchors>;

