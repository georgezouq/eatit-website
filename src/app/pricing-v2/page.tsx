import PricingTwo from "@/components/pages/pricing/pricing-2";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Membership Pricing | Flexible Salon Plans",
  description:
    "Review Hairwow's membership tiers, recurring benefits, and flexible salon plans designed to reward your ongoing hair care routine.",
  keywords: [
    "Hairwow membership",
    "salon plans",
    "beauty subscriptions",
    "hair rewards",
  ],
  path: "/pricing-v2",
});
const page = () => {
  return (
    <Wrapper>
      <PricingTwo />
    </Wrapper>
  )
}

export default page