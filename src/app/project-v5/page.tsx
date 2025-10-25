import ProjectFive from "@/components/projects/project-five";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio | Curly & Coily Expertise",
  description:
    "Celebrate Hairwow's work with curly and coily textures, from hydration rituals to shape-defining cuts and protective styling.",
  keywords: [
    "Hairwow curls",
    "coily hair",
    "protective styles",
    "textured haircare",
  ],
  path: "/project-v5",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectFive />
    </Wrapper>
  )
}

export default page