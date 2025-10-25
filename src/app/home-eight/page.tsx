import HomeEight from "@/components/homes/home-8";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Events & Offers | Home Eight",
  description:
    "Explore Hairwow's seasonal campaigns, exclusive salon events, and limited-time offers curated in our eighth homepage design for loyal guests.",
  keywords: [
    "Hairwow home eight",
    "salon promotions",
    "beauty events",
    "hair offers",
  ],
  path: "/home-eight",
});
const page = () => {
  return (
    <Wrapper>
      <HomeEight />
    </Wrapper>
  )
}

export default page