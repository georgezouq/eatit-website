import { redirect } from "next/navigation";

import { defaultLocale } from "@/i18n/config";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "EatIt | AI Nutrition Coach for Smarter Eating",
  description:
    "EatIt instantly analyses meals, ingredients and nutrition labels so you always know the calories, macros, allergens and health risks that matter to you.",
  path: "/",
});

const Page = () => {
  redirect(`/${defaultLocale}`);
};

export default Page;
