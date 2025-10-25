import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Modern Salon Experience | Home Two",
  description:
    "Explore Hairwow's second home page experience featuring signature salon services, customer success stories, and expert hair care resources designed for beauty-forward professionals.",
  keywords: [
    "Hairwow home two",
    "salon landing page",
    "hair styling services",
    "beauty professionals",
  ],
  path: "/home-two",
});
const page = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  )
}

export default page