import PricingOne from "@/components/pages/pricing/pricing-1";
import Wrapper from "@/layouts/Wrapper";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hairwow Pricing | Signature Salon Packages",
  description:
    "Compare Hairwow's signature salon packages, transparent pricing, and value-added hair care services tailored to every style and budget.",
  keywords: [
    "Hairwow pricing",
    "salon packages",
    "hair service cost",
    "beauty pricing",
  ],
  path: "/pricing-v1",
});

const page = () => {
  const dictionary = getDictionary(defaultLocale);
  
  return (
    <Wrapper>
      <PricingOne dictionary={dictionary} locale={defaultLocale} />
    </Wrapper>
  )
}

export default page