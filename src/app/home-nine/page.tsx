import HomeNine from "@/components/homes/home-9";
import Wrapper from "@/layouts/Wrapper";

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
  return (
    <Wrapper>
      <HomeNine />
    </Wrapper>
  )
}

export default page