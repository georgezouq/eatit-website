import BlogOne from "@/components/blogs/blog-one";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Eatibo Blog | Hair Care Tips & Salon News",
  description:
    "Read the latest Hairwow articles covering hair care science, salon trends, and step-by-step styling guides curated by our expert team.",
  keywords: [
    "Eatibo Blog",
    "hair care tips",
    "salon news",
    "styling guides",
  ],
  path: "/blog-v1",
});
const page = () => {
  return (
    <Wrapper>
      <BlogOne />
    </Wrapper>
  )
}

export default page