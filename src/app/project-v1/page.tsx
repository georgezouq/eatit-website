import ProjectOne from "@/components/projects/project-one";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio | Color Transformation Gallery",
  description:
    "Browse Hairwow's color transformation gallery featuring vibrant hues, dimensional techniques, and stylist insights that inspire new looks.",
  keywords: [
    "Hairwow portfolio",
    "hair color gallery",
    "salon transformations",
    "stylist work",
  ],
  path: "/project-v1",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectOne />
    </Wrapper>
  )
}

export default page