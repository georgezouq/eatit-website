import HomeFive from "@/components/homes/home-5";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Luxury Hair Spa | Home Five",
  description:
    "Experience Hairwow's luxurious spa-inspired homepage featuring immersive visuals, indulgent treatment packages, and effortless booking for transformative hair care.",
  keywords: [
    "Hairwow home five",
    "luxury hair spa",
    "hair treatment packages",
    "salon booking",
  ],
  path: "/home-five",
});
const page = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  )
}

export default page