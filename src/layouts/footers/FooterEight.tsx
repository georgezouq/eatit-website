import Image from "next/image";
import Link from "next/link";

import LanguageSwitcher from "@/components/hairwow/LanguageSwitcher";

import logo_1 from "@/assets/images/logo/logo_10.svg";
import icon_1 from "@/assets/images/icon/icon_57.svg";
import icon_2 from "@/assets/images/icon/icon_58.svg";
import icon_3 from "@/assets/images/icon/icon_59.svg";
import blueskyIcon from "@/assets/images/icon/social-bluesky.svg";
import mastodonIcon from "@/assets/images/icon/social-mastodon.svg";
// import shape from "@/assets/images/shape/shape_82.svg";

import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type FooterEightProps = {
  footer: LocaleDictionary["footer"];
  nav: LocaleDictionary["nav"];
  locale: Locale;
  anchors: {
    home: string;
    features: string;
    pricing: string;
    download: string;
    faq: string;
  };
  blogHref: string;
  onLocaleChange?: (locale: Locale) => void;
};

const supportIconMap: Record<string, typeof icon_1> = {
  email: icon_1,
  phone: icon_2,
  chat: icon_3,
};

const socialIconMap: Record<string, typeof blueskyIcon> = {
  "brand-bluesky": blueskyIcon,
  "brand-mastodon": mastodonIcon,
};

const FooterEight = ({ footer, nav, locale, anchors, blogHref, onLocaleChange }: FooterEightProps) => {
  const navLinks = [
    { label: nav.home, href: `#${anchors.home}` },
    { label: nav.blog.label, href: blogHref, external: true },
  ];

  return (
    <footer className="footer-three dark-version">
      <div className="container lg">
        <div className="address-wrapper">
          <h2>{footer.supportLabel}</h2>
          <div className="row gx-xxl-5">
            {footer.supportChannels?.map((channel) => {
              const iconSrc = supportIconMap[channel.type] ?? icon_1;
              return (
                <div key={channel.label} className="col-lg-4 d-flex">
                  <div className="block d-flex w-100 align-items-center mt-25">
                    <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                      <Image src={iconSrc} alt={`${channel.label} icon`} />
                    </div>
                    <div className="text">
                      <div className="title">{channel.label}</div>
                      <span className="fs-20">{channel.value}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="position-relative">
          <div className="row align-items-center mb-40 mt-50">
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
              <div className="logo">
                <Link href={`/${locale}`}>
                  <Image src={logo_1} alt="Eatibo footer logo" height={60} />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="d-flex flex-wrap align-items-center justify-content-md-end gap-4 gap-lg-5">
                <nav className="footer-nav">
                  <ul className="footer-nav-link style-none d-flex gap-4 m-0">
                    {navLinks.map((item) => (
                      <li key={item.href}>
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noreferrer">
                            {item.label}
                          </a>
                        ) : (
                          <a href={item.href}>{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="d-flex align-items-center gap-3">
                  <span className="fs-6 text-white">{footer.socialsLabel}:</span>
                  <ul className="style-none d-flex align-items-center social-icon m-0 gap-2">
                    {footer.socialLinks?.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                          {socialIconMap[link.icon] ? (
                            <Image
                              src={socialIconMap[link.icon]}
                              alt={link.label}
                              width={18}
                              height={18}
                              className="social-brand-icon"
                            />
                          ) : (
                            <i className={link.icon}></i>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <LanguageSwitcher currentLocale={locale} label={nav.language} onLocaleChange={onLocaleChange} />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pt-4 border-top border-secondary">
            <p className="fs-6 text-white m-0">{footer.tagline}</p>
            <p className="copyright-text m-0">{footer.rights}</p>
          </div>
        </div>
      </div>
      {/* <Image src={shape} alt="Decorative footer background shape" className="shapes shape_01" /> */}
    </footer>
  );
};

export default FooterEight;
