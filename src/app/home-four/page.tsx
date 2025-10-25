import HomeFour from "@/components/homes/home-4";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Premium Treatments | Home Four",
  description:
    "Navigate Hairwow's fourth homepage layout featuring restorative treatments, client success metrics, and stylist spotlights that elevate every salon visit.",
  keywords: [
    "Hairwow home four",
    "premium hair treatments",
    "client success",
    "salon expertise",
  ],
  path: "/home-four",
});
const page = () => {
  return (
    <Wrapper>
      <HomeFour />
    </Wrapper>
  )
}

export default page