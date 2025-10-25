import ServiceTwo from "@/components/pages/service/service-2";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Advanced Color Studio | Services Page Two",
  description:
    "Experience Hairwow's advanced color studio featuring balayage, blonding, and corrective services backed by premium products and master stylists.",
  keywords: [
    "Hairwow color",
    "balayage services",
    "corrective color",
    "salon experts",
  ],
  path: "/service-v2",
});
const page = () => {
  return (
    <Wrapper>
      <ServiceTwo />
    </Wrapper>
  )
}

export default page