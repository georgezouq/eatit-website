import AboutThree from "@/components/pages/Essential/about-three";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Innovation Story | About Page Three",
  description:
    "Follow Hairwow's journey of innovation with advanced treatment labs, stylist training programs, and salon technology featured in our third about layout.",
  keywords: [
    "Hairwow innovation",
    "salon technology",
    "hairwow training",
    "about page three",
  ],
  path: "/about-us-v3",
});
const page = () => {
  return (
    <Wrapper>
      <AboutThree />
    </Wrapper>
  )
}

export default page