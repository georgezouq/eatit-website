const NON_ALPHANUMERIC = /[^a-z0-9]+/g;

export const toSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(NON_ALPHANUMERIC, "-")
    .replace(/(^-|-$)+/g, "");

export const normalizeForComparison = (value?: string | null) =>
  value ? toSlug(value) : "";
