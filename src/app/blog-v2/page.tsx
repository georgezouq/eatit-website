import BlogTwo from "@/components/blogs/blog-two";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Insights | Industry Trends & Salon Growth",
  description:
    "Stay ahead with Hairwow insights covering salon business strategy, client retention ideas, and the evolving beauty industry landscape.",
  keywords: [
    "Hairwow insights",
    "salon trends",
    "beauty industry",
    "client retention",
  ],
  path: "/blog-v2",
});
const page = () => {
  return (
    <Wrapper>
      <BlogTwo />
    </Wrapper>
  )
}

export default page