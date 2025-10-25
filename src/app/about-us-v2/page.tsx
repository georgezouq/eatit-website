import AboutTwo from "@/components/pages/Essential/about-two";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Culture & Values | About Page Two",
  description:
    "Dive into Hairwow's collaborative culture, salon innovation, and community initiatives that power our second about page narrative.",
  keywords: [
    "Hairwow culture",
    "salon values",
    "beauty community",
    "about hairwow",
  ],
  path: "/about-us-v2",
});
const page = () => {
  return (
    <Wrapper>
      <AboutTwo />
    </Wrapper>
  )
}

export default page