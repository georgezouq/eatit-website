import ProjectTwo from "@/components/projects/project-two";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Portfolio | Precision Cuts & Styling",
  description:
    "View Hairwow's precision cuts, editorial styling, and versatile looks crafted to complement each client's lifestyle.",
  keywords: [
    "Hairwow cuts",
    "precision styling",
    "salon portfolio",
    "hair inspiration",
  ],
  path: "/project-v2",
});
const page = () => {
  return (
    <Wrapper>
      <ProjectTwo />
    </Wrapper>
  )
}

export default page