import FaqTwo from "@/components/pages/faqs/faq-two";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Support Center | Policies & Care Advice",
  description:
    "Get guidance on Hairwow's service policies, treatment preparations, and post-visit care routines with our comprehensive FAQ library.",
  keywords: [
    "Hairwow support",
    "salon policies",
    "hair care advice",
    "faq resources",
  ],
  path: "/faq-v2",
});
const page = () => {
  return (
    <Wrapper>
      <FaqTwo />
    </Wrapper>
  )
}

export default page