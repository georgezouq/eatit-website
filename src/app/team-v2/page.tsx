import TeamTwo from "@/components/pages/Essential/team-two";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Experts | Specialists & Educators",
  description:
    "Meet Hairwow's specialist team including color educators, treatment experts, and guest artists who drive continuous innovation.",
  keywords: [
    "Hairwow experts",
    "salon educators",
    "hair specialists",
    "beauty innovation",
  ],
  path: "/team-v2",
});
const page = () => {
  return (
    <Wrapper>
      <TeamTwo />
    </Wrapper>
  )
}

export default page