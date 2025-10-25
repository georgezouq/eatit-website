import ServiceDetails from "@/components/pages/service/service-details";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Service Details | What to Expect",
  description:
    "Review in-depth Hairwow service breakdowns, session timelines, and maintenance recommendations to prepare for your next salon appointment.",
  keywords: [
    "Hairwow service details",
    "salon preparation",
    "hair maintenance",
    "appointment guide",
  ],
  path: "/service-details",
});
const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page