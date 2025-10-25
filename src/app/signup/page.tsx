import Register from "@/components/pages/register";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Sign Up | Join Our Salon Community",
  description:
    "Create your Hairwow account to access exclusive offers, manage bookings, and receive personalized hair care recommendations.",
  keywords: [
    "Hairwow sign up",
    "join Hairwow",
    "salon membership",
    "beauty community",
  ],
  path: "/signup",
});
const page = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  )
}

export default page