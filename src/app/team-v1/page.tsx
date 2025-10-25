import TeamOne from "@/components/pages/Essential/team-one";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Stylists | Meet Our Creative Team",
  description:
    "Get to know the Hairwow stylists, their specialties, certifications, and the inspiration behind their creative salon work.",
  keywords: [
    "Hairwow stylists",
    "salon team",
    "hair experts",
    "beauty professionals",
  ],
  path: "/team-v1",
});
const page = () => {
  return (
    <Wrapper>
      <TeamOne />
    </Wrapper>
  )
}

export default page