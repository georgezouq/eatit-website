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
import { createAnchors } from "@/lib/anchors";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { PostSummary } from "@/lib/blog/types";
import BlogPreview from "../home-6/BlogPreview";

type HomeNineProps = {
  dictionary: LocaleDictionary;
  locale: Locale;
  onLocaleChange?: (locale: Locale) => void;
  latestPosts: PostSummary[];
};

const HomeNine = ({ dictionary, locale, onLocaleChange, latestPosts }: HomeNineProps) => {
  const anchors = createAnchors(dictionary);

  return (
    <div className="main-page-wrapper dark-bg-five" id={anchors.home}>
      <HeaderNine
        locale={locale}
        nav={dictionary.nav}
        anchors={anchors}
        blogHref={dictionary.nav.blog.href}
        onLocaleChange={onLocaleChange}
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
        <BlogPreview posts={latestPosts} />
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
