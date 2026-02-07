const APP_ENTRY_URL = "https://app.eatibo.com";
const UTM_SOURCE = "official_website";

export const buildAppEntryUrl = (position: string): string => {
  const url = new URL(APP_ENTRY_URL);
  url.searchParams.set("utm_source", UTM_SOURCE);
  url.searchParams.set("position", position);
  return url.toString();
};

