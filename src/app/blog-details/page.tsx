import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Article Details | In-Depth Hair Expertise",
  description:
    "Dive into comprehensive Hairwow articles with detailed techniques, professional advice, and product breakdowns for every hair type.",
  keywords: [
    "Hairwow article",
    "hair expertise",
    "styling advice",
    "professional hair tips",
  ],
  path: "/blog-details",
});
const page = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}

export default page