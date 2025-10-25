import Wrapper from "@/layouts/Wrapper";
import HomeNine from "@/components/homes/home-9";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    return createMetadata({
      title: "EatIt Multilingual Experience",
      description:
        "Discover localized nutrition coaching, allergy insights, and personalised meal guidance from EatIt in your preferred language.",
      path: "/",
    });
  }

  return createMetadata({
    title: `EatIt ${locale.toUpperCase()} | Personalised Nutrition Assistant`,
    description:
      "Explore EatIt's localized homepage with smart meal scanning, allergy protection, and pricing tailored to your language and goals.",
    path: `/${locale}`,
  });
}

const HairwowPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <Wrapper>
      <HomeNine dictionary={dictionary} locale={locale} />
    </Wrapper>
  );
};

export default HairwowPage;
