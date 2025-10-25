import ServiceThree from "@/components/pages/service/service-3";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Bridal & Event Styling | Services Page Three",
  description:
    "Plan flawless hair for weddings and events with Hairwow's dedicated stylists, on-location support, and luxury finishing services.",
  keywords: [
    "Hairwow bridal",
    "event hairstyling",
    "wedding hair",
    "salon events",
  ],
  path: "/service-v3",
});
const page = () => {
  return (
    <Wrapper>
      <ServiceThree />
    </Wrapper>
  )
}

export default page