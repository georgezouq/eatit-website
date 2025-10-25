import HomeThree from "@/components/homes/home-3";
import Wrapper from "@/layouts/Wrapper";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Trendsetting Styles | Home Three",
  description:
    "See how Hairwow curates cutting-edge hairstyles, product launches, and appointment highlights in our third homepage layout tailored to style-conscious clients.",
  keywords: [
    "Hairwow home three",
    "trending hairstyles",
    "salon marketing",
    "beauty landing page",
  ],
  path: "/home-three",
});
const page = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}

export default page