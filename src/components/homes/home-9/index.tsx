import FooterEight from "@/layouts/footers/FooterEight";
import BlockFeatureOne from "./BlockFeatureOne";
import BlockFeatureThree from "./BlockFeatureThree";
import BlockFeatureTwo from "./BlockFeatureTwo";
import FancyBanner from "./FancyBanner";
import FAQ from "./FAQ";
import Feedback from "./Feedback";
import Hero from "./Hero";
import Pricing from "./Pricing";
import HeaderNine from "@/layouts/headers/HeaderNine";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type HomeNineProps = {
  dictionary: LocaleDictionary;
  locale: Locale;
};

const HomeNine = ({ dictionary, locale }: HomeNineProps) => {
  const anchors = {
    home: "home",
    features: dictionary.sections.why.id,
    tracking: dictionary.sections.core.id,
    pricing: dictionary.sections.pricing.id,
    download: dictionary.sections.download.id,
    faq: dictionary.sections.faq?.id ?? "faq",
  } as const;

  return (
    <div className="main-page-wrapper dark-bg-five" id={anchors.home}>
      <HeaderNine
        locale={locale}
        nav={dictionary.nav}
        anchors={anchors}
        blogHref={dictionary.nav.blog.href}
      />
      <main>
        <Hero hero={dictionary.hero} anchors={anchors} />
        <BlockFeatureOne content={dictionary.sections.why} smart={dictionary.sections.smart} />
        <Pricing pricing={dictionary.sections.pricing} />
        <BlockFeatureThree
          assist={dictionary.sections.assist}
          smart={dictionary.sections.smart}
        />
        <BlockFeatureTwo core={dictionary.sections.core} reviews={dictionary.sections.reviews} />
        <Feedback reviews={dictionary.sections.reviews} />
        <FancyBanner download={dictionary.sections.download} />
        {dictionary.sections.faq ? <FAQ faq={dictionary.sections.faq} /> : null}
      </main>
      <FooterEight
        footer={dictionary.footer}
        nav={dictionary.nav}
        locale={locale}
        anchors={anchors}
        blogHref={dictionary.nav.blog.href}
      />
    </div>
  );
};

export default HomeNine;
