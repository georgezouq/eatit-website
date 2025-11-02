import HeaderNine from "@/layouts/headers/HeaderNine";
import FooterEight from "@/layouts/footers/FooterEight";
import { createAnchors } from "@/lib/anchors";
import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type BlogLayoutProps = {
  locale: Locale;
  dictionary: LocaleDictionary;
  children: React.ReactNode;
  onLocaleChange?: (locale: Locale) => void;
};

const BlogLayout = ({ locale, dictionary, children, onLocaleChange }: BlogLayoutProps) => {
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
      {children}
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

export default BlogLayout;
