import ProjectSix from "@/components/projects/project-six";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio | Editorial & Runway Looks",
  description:
    "Discover Hairwow's high-fashion portfolio capturing editorial shoots, runway styling, and avant-garde hair artistry.",
  keywords: [
    "Hairwow editorial",
    "runway hair",
    "fashion styling",
    "avant-garde hair",
  ],
  path: "/project-v6",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectSix />
    </Wrapper>
  )
}

export default page