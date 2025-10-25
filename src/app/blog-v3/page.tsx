import BlogThree from "@/components/blogs/blog-three";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Success Stories | Client Transformations",
  description:
    "Celebrate real Hairwow client makeovers, before-and-after highlights, and testimonials documenting the power of professional hair care.",
  keywords: [
    "Hairwow success stories",
    "client transformations",
    "hair testimonials",
    "before and after hair",
  ],
  path: "/blog-v3",
});
const page = () => {
  return (
    <Wrapper>
      <BlogThree />
    </Wrapper>
  )
}

export default page