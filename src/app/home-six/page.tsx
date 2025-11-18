// import HomeSix from "@/components/homes/home-6";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Global Community | Home Six",
  description:
    "Discover Hairwow's multilingual home experience that brings together global clients, stylist education, and localized offers to celebrate every hair journey.",
  keywords: [
    "Hairwow home six",
    "multilingual salon",
    "global hair community",
    "beauty localization",
  ],
  path: "/home-six",
});
const page = () => {
  return (
    <Wrapper>
      123
      {/* <HomeSix /> */}
    </Wrapper>
  )
}

export default page