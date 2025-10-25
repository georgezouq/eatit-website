import ServiceOne from "@/components/pages/service/service-1";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Services | Signature Hair Treatments",
  description:
    "Explore Hairwow's portfolio of signature cuts, color artistry, and restorative treatments crafted to deliver vibrant, healthy hair.",
  keywords: [
    "Hairwow services",
    "hair treatments",
    "salon color",
    "professional stylists",
  ],
  path: "/service-v1",
});
const page = () => {
  return (
    <Wrapper>
      <ServiceOne />
    </Wrapper>
  )
}

export default page