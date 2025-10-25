import ContactTwo from "@/components/pages/contacts/contact-2";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Support | Talk With Our Salon Experts",
  description:
    "Connect with Hairwow support specialists for partnership inquiries, corporate bookings, and personalized hair care recommendations.",
  keywords: [
    "Hairwow support",
    "salon experts",
    "partnership inquiry",
    "corporate booking",
  ],
  path: "/contact-v2",
});
const page = () => {
  return (
    <Wrapper>
      <ContactTwo />
    </Wrapper>
  )
}

export default page