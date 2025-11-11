import { NotFoundProvider } from "@/components/pages/error/NotFoundProvider";
import Wrapper from "@/layouts/Wrapper";
import { defaultLocale } from "@/i18n/config";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Eatibo 404 | Page Not Found",
  description:
    "The page you are looking for does not exist. Explore Eatibo's AI nutrition coaching and meal tracking features from our homepage.",
  keywords: [
    "Eatibo 404",
    "page not found",
    "eatibo error",
    "nutrition app",
  ],
  path: "/404",
});

const page = () => {
  return (
    <Wrapper>
      <NotFoundProvider initialLocale={defaultLocale} />
    </Wrapper>
  );
};

export default page;