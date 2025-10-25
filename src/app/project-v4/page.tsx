import ProjectFour from "@/components/projects/project-four";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio | Men's Grooming Collection",
  description:
    "See how Hairwow's grooming experts deliver sharp cuts, tailored treatments, and styling routines designed for men's hair goals.",
  keywords: [
    "Hairwow grooming",
    "men's hair",
    "barbering",
    "styling routines",
  ],
  path: "/project-v4",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectFour />
    </Wrapper>
  )
}

export default page