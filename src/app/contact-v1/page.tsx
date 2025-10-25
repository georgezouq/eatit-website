import ContactOne from "@/components/pages/contacts/contact-1";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Hairwow | Book Your Salon Appointment",
  description:
    "Reach the Hairwow team to book appointments, request consultations, or ask questions about our professional hair services and products.",
  keywords: [
    "Hairwow contact",
    "book salon",
    "hair consultation",
    "salon inquiry",
  ],
  path: "/contact-v1",
});
const page = () => {
  return (
    <Wrapper>
      <ContactOne />
    </Wrapper>
  )
}

export default page