import AboutOne from "@/components/pages/Essential/about-one";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Hairwow | Passionate Stylists & Salon Vision",
  description:
    "Meet the Hairwow team, discover our mission-driven story, and learn how our stylists combine artistry with advanced treatments to craft unforgettable salon experiences.",
  keywords: [
    "Hairwow about",
    "salon team",
    "hairwow story",
    "beauty mission",
  ],
  path: "/about-us-v1",
});
const page = () => {
  return (
    <Wrapper>
      <AboutOne />
    </Wrapper>
  )
}

export default page