import FooterFive from "@/layouts/footers/FooterFive";
import BlockFeature from "./BlockFeature";
import BlockFeatureTwo from "./BlockFeatureTwo";
import FancyBanner from "./FancyBanner";
import FancyBannerTwo from "./FancyBannerTwo";
import BlogPreview from "./BlogPreview";
// import Feedback from "./Feedback";
import Hero from "./Hero";
import Pricing from "./Pricing";
import HeaderSix from "@/layouts/headers/HeaderSix";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import type { PostSummary } from "@/lib/blog/types";

type HomeSixProps = {
  dictionary: LocaleDictionary;
  locale: Locale;
  onLocaleChange?: (locale: Locale) => void;
  latestPosts: PostSummary[];
};

const HomeSix = ({ dictionary, locale, onLocaleChange, latestPosts }: HomeSixProps) => {

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
        onLocaleChange={onLocaleChange}
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
      <BlogPreview posts={latestPosts} />
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
        onLocaleChange={onLocaleChange}
      />
    </div>
  );
};

export default HomeSix;
