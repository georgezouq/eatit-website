import Image from "next/image";
import Link from "next/link";

import LanguageSwitcher from "@/components/hairwow/LanguageSwitcher";

import logo_1 from "@/assets/images/logo/logo_10.svg";
import icon_1 from "@/assets/images/icon/icon_57.svg";
import icon_2 from "@/assets/images/icon/icon_58.svg";
import icon_3 from "@/assets/images/icon/icon_59.svg";
import shape from "@/assets/images/shape/shape_82.svg";

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
};

const supportIconMap: Record<string, typeof icon_1> = {
  email: icon_1,
  phone: icon_2,
  chat: icon_3,
};

const FooterEight = ({ footer, nav, locale, anchors, blogHref }: FooterEightProps) => {
  const navLinks = [
    { label: nav.home, href: `#${anchors.home}` },
    { label: nav.features, href: `#${anchors.features}` },
    { label: nav.pricing, href: `#${anchors.pricing}` },
    { label: nav.download, href: `#${anchors.download}` },
    { label: footer.faqLabel, href: `#${anchors.faq}` },
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
          <div className="row justify-content-between">
            <div className="col-lg-3 order-lg-0 md-mb-40">
              <div className="logo mt-15">
                <Link href={`/${locale}`}>
                  <Image src={logo_1} alt="EatIt footer logo" />
                </Link>
              </div>
              <p className="fs-6 text-white mt-40 mb-15">{footer.tagline}</p>
              <LanguageSwitcher currentLocale={locale} label={nav.language} />
              <div className="fs-6 text-white mt-30 mb-15">{footer.socialsLabel}</div>
              <ul className="style-none d-flex align-items-center social-icon">
                {footer.socialLinks?.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="row g-4">
                {footer.navGroups?.map((group) => (
                  <div key={group.title} className="col-sm-4">
                    <div className="footer-nav">
                      <h6 className="text-white mb-3">{group.title}</h6>
                      <ul className="footer-nav-link style-none">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-2 order-lg-3 d-none d-lg-flex flex-column align-items-end">
              <div className="footer-nav mb-20 text-lg-end">
                <ul className="footer-nav-link style-none text-lg-end">
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
              </div>
            </div>
          </div>
          <p className="copyright-text text-center m0">{footer.rights}</p>
        </div>
      </div>
      <Image src={shape} alt="Decorative footer background shape" className="shapes shape_01" />
    </footer>
  );
};

export default FooterEight;
