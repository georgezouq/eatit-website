import HomeNine from "@/components/homes/home-9";
import Wrapper from "@/layouts/Wrapper";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";
import { getAllPostSummaries } from "@/lib/blog/api";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Product Showcase | Home Nine",
  description:
    "Browse Hairwow's curated selection of professional products, bundle recommendations, and salon retail tips in our ninth homepage layout.",
  keywords: [
    "Hairwow home nine",
    "hair products",
    "salon retail",
    "haircare bundles",
  ],
  path: "/home-nine",
});

const page = () => {
  const dictionary = getDictionary(defaultLocale);
  const latestPosts = getAllPostSummaries().slice(0, 3);
  
  return (
    <Wrapper>
      <HomeNine dictionary={dictionary} locale={defaultLocale} latestPosts={latestPosts} />
    </Wrapper>
  )
}

export default page