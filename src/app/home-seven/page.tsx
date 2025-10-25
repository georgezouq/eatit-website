import HomeSeven from "@/components/homes/home-7";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Education Hub | Home Seven",
  description:
    "Learn how Hairwow empowers stylists with tutorials, product knowledge, and mentorship opportunities throughout our seventh homepage layout.",
  keywords: [
    "Hairwow home seven",
    "stylist education",
    "hair tutorials",
    "salon mentorship",
  ],
  path: "/home-seven",
});
const page = () => {
  return (
    <Wrapper>
      <HomeSeven />
    </Wrapper>
  )
}

export default page