import HomeTen from "@/components/homes/home-10";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Membership Benefits | Home Ten",
  description:
    "Uncover Hairwow's membership rewards, exclusive perks, and loyalty-driven experiences in our tenth homepage presentation.",
  keywords: [
    "Hairwow home ten",
    "salon membership",
    "beauty rewards",
    "loyalty benefits",
  ],
  path: "/home-ten",
});
const page = () => {
  return (
    <Wrapper>
      <HomeTen />
    </Wrapper>
  )
}

export default page