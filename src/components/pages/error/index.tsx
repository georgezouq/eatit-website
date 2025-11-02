import HeaderNine from "@/layouts/headers/HeaderNine";
import FooterEight from "@/layouts/footers/FooterEight";
import ErrorArea from "./ErrorArea";
import { createAnchors } from "@/lib/anchors";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type NotFoundProps = {
  dictionary: LocaleDictionary;
  locale: Locale;
  onLocaleChange?: (locale: Locale) => void;
};

const NotFound = ({ dictionary, locale, onLocaleChange }: NotFoundProps) => {
  const anchors = createAnchors(dictionary);
  const blogHref = dictionary.nav.blog.href;

  return (
    <div className="main-page-wrapper dark-bg-five">
      <HeaderNine
        locale={locale}
        nav={dictionary.nav}
        anchors={anchors}
        blogHref={blogHref}
        onLocaleChange={onLocaleChange}
      />
      <ErrorArea
        title={dictionary.notFound.title}
        description={dictionary.notFound.description}
        backButton={dictionary.notFound.backButton}
        locale={locale}
      />
      <FooterEight
        footer={dictionary.footer}
        nav={dictionary.nav}
        locale={locale}
        anchors={anchors}
        blogHref={blogHref}
      />
    </div>
  );
};

export default NotFound;
