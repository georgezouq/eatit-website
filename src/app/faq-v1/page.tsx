import FaqOne from "@/components/pages/faqs/faq-one";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow FAQ | Answers to Your Hair Care Questions",
  description:
    "Discover detailed answers to frequently asked questions about Hairwow's salon services, treatments, and booking options to keep your hair healthy and stylish.",
  keywords: [
    "Hairwow FAQ",
    "hair care questions",
    "salon support",
    "treatment guidance",
  ],
  path: "/faq-v1",
});
const page = () => {
  return (
    <Wrapper>
      <FaqOne />
    </Wrapper>
  )
}

export default page