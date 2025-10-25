import PricingOne from "@/components/pages/pricing/pricing-1";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Pricing | Signature Salon Packages",
  description:
    "Compare Hairwow's signature salon packages, transparent pricing, and value-added hair care services tailored to every style and budget.",
  keywords: [
    "Hairwow pricing",
    "salon packages",
    "hair service cost",
    "beauty pricing",
  ],
  path: "/pricing-v1",
});
const page = () => {
  return (
    <Wrapper>
      <PricingOne />
    </Wrapper>
  )
}

export default page