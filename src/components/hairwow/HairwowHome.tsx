import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries";

import HairwowHeader from "./HairwowHeader";
import HeroSection from "./HeroSection";
import WhySection from "./WhySection";
import CoreSection from "./CoreSection";
import AssistSection from "./AssistSection";
import SmartSection from "./SmartSection";
import PricingSection from "./PricingSection";
import ReviewsSection from "./ReviewsSection";
import PrivacySection from "./PrivacySection";
import HairwowFooter from "./HairwowFooter";

const HairwowHome = ({ dictionary, locale }: { dictionary: LocaleDictionary; locale: Locale }) => {
  return (
    <div className="hairwow-page">
      <HairwowHeader dictionary={dictionary} locale={locale} />
      <main>
        <HeroSection hero={dictionary.hero} />
        <WhySection content={dictionary.sections.why} />
        <CoreSection content={dictionary.sections.core} />
        <AssistSection content={dictionary.sections.assist} />
        <SmartSection content={dictionary.sections.smart} />
        <PricingSection content={dictionary.sections.pricing} />
        <ReviewsSection content={dictionary.sections.reviews} />
        <PrivacySection content={dictionary.sections.privacy} />
      </main>
      <HairwowFooter dictionary={dictionary} />
    </div>
  );
};

export default HairwowHome;
