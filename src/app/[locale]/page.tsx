import Wrapper from "@/layouts/Wrapper";
import HomeSix from "@/components/homes/home-6";
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
      title: "Hairwow Multilingual Experience",
      description:
        "Explore Hairwow's localized salon experience featuring translated content, regional offers, and culturally tailored hair care guidance.",
      path: "/",
    });
  }

  return createMetadata({
    title: `Hairwow ${locale.toUpperCase()} | Personalized Salon Experience`,
    description:
      "Browse Hairwow's localized homepage with services, pricing, and stylist insights tailored to your language and region.",
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
      <HomeSix dictionary={dictionary} locale={locale} />
    </Wrapper>
  );
};

export default HairwowPage;
