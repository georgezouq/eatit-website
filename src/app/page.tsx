import Wrapper from "@/layouts/Wrapper";
import { LocaleProvider } from "@/components/hairwow/LocaleProvider";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAllPostSummaries } from "@/lib/blog/api";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Eatibo | AI Nutrition Coach for Smarter Eating",
  description:
    "Eatibo instantly analyses meals, ingredients and nutrition labels so you always know the calories, macros, allergens and health risks that matter to you.",
  path: "/",
});

const Page = () => {
  // No redirect - use client-side locale detection via localStorage
  // Get latest blog posts on server side
  const latestPosts = getAllPostSummaries().slice(0, 3);
  const dictionary = getDictionary(defaultLocale);

  return (
    <Wrapper dictionary={dictionary}>
      <LocaleProvider initialLocale={defaultLocale} latestPosts={latestPosts} />
    </Wrapper>
  );
};

export default Page;
