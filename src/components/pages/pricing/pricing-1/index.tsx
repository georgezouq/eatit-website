import Pricing from "@/components/homes/home-9/Pricing"
import PricingArea from "./PricingArea"
import BlockFeature from "./BlockFeature"
import FAQ from "@/components/homes/home-9/FAQ"
import FooterEight from "@/layouts/footers/FooterEight"
import HeaderNine from "@/layouts/headers/HeaderNine"

import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type PricingOneProps = {
   dictionary: LocaleDictionary;
   locale: Locale;
};

const PricingOne = ({ dictionary, locale }: PricingOneProps) => {
   const anchors = {
      home: "home",
      features: dictionary.sections.why.id,
      tracking: dictionary.sections.core.id,
      pricing: dictionary.sections.pricing.id,
      download: dictionary.sections.download.id,
      faq: dictionary.sections.faq?.id ?? "faq",
   } as const;

   return (
      <div className="main-page-wrapper dark-bg-five">
         <HeaderNine
            locale={locale}
            nav={dictionary.nav}
            anchors={anchors}
            blogHref={dictionary.nav.blog.href}
         />
         <Pricing pricing={dictionary.sections.pricing} />
         <PricingArea />
         <BlockFeature />
         {dictionary.sections.faq ? <FAQ faq={dictionary.sections.faq} /> : null}
         <FooterEight
            footer={dictionary.footer}
            nav={dictionary.nav}
            locale={locale}
            anchors={anchors}
            blogHref={dictionary.nav.blog.href}
         />
      </div>
   )
}

export default PricingOne
