import FooterFive from "@/layouts/footers/FooterFive";
import BlockFeature from "./BlockFeature";
import BlockFeatureTwo from "./BlockFeatureTwo";
import FancyBanner from "./FancyBanner";
import FancyBannerTwo from "./FancyBannerTwo";
// import Feedback from "./Feedback";
import Hero from "./Hero";
import Pricing from "./Pricing";
import HeaderSix from "@/layouts/headers/HeaderSix";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type HomeSixProps = {
  dictionary: LocaleDictionary;
  locale: Locale;
};

const HomeSix = ({ dictionary, locale }: HomeSixProps) => {
  return (
    <div className="main-page-wrapper">
      <HeaderSix
        locale={locale}
        nav={dictionary.nav}
        primaryCta={dictionary.hero.primaryCta}
        anchors={{
          home: "home",
          features: dictionary.sections.why.id,
          pricing: dictionary.sections.pricing.id,
          download: "download",
        }}
      />
      <Hero hero={dictionary.hero} nav={dictionary.nav} />
      <FancyBanner smart={dictionary.sections.smart} />
      <BlockFeature section={dictionary.sections.why} />
      <BlockFeatureTwo
        core={dictionary.sections.core}
        assist={dictionary.sections.assist}
      />
      {/* <Feedback reviews={dictionary.sections.reviews} /> */}
      <Pricing pricing={dictionary.sections.pricing} />
      <FancyBannerTwo
        downloadLabel={dictionary.nav.download}
        heroVisual={dictionary.hero.visual}
      />
      <FooterFive
        footer={dictionary.footer}
        nav={dictionary.nav}
        locale={locale}
        anchors={{
          home: "home",
          features: dictionary.sections.why.id,
          pricing: dictionary.sections.pricing.id,
          download: "download",
        }}
      />
    </div>
  );
};

export default HomeSix;
