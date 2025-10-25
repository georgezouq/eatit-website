import Login from "@/components/pages/login";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Login | Manage Your Salon Profile",
  description:
    "Sign in to your Hairwow account to manage appointments, track memberships, and access personalized hair care recommendations.",
  keywords: [
    "Hairwow login",
    "salon account",
    "manage appointments",
    "hair profile",
  ],
  path: "/login",
});
const page = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  )
}

export default page