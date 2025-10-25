import NotFound from "@/components/pages/error";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow 404 | Page Not Found",
  description:
    "The page you are looking for does not exist. Explore Hairwow services, treatments, and stylist resources from our homepage.",
  keywords: [
    "Hairwow 404",
    "page not found",
    "hairwow error",
    "salon homepage",
  ],
  path: "/404",
});
const page = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  )
}

export default page