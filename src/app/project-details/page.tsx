import ProjectDetails from "@/components/projects/project-details";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio Case Study | Salon Project Details",
  description:
    "Examine a detailed Hairwow project case study featuring client goals, stylist execution, and the hair care regimens that delivered stunning results.",
  keywords: [
    "Hairwow project",
    "salon case study",
    "hair portfolio",
    "client results",
  ],
  path: "/project-details",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectDetails />
    </Wrapper>
  )
}

export default page