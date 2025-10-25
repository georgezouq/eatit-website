import ProjectThree from "@/components/projects/project-three";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio | Texture & Treatment Highlights",
  description:
    "Explore Hairwow projects focused on texture enhancement, smoothing treatments, and protective styling that keep hair resilient.",
  keywords: [
    "Hairwow texture",
    "smoothing treatments",
    "protective styling",
    "salon results",
  ],
  path: "/project-v3",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectThree />
    </Wrapper>
  )
}

export default page