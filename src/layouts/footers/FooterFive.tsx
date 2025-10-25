"use client";

import Image from "next/image";
import Link from "next/link";

import LanguageSwitcher from "@/components/hairwow/LanguageSwitcher";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

import logo from "@/assets/images/logo/logo_01.new.svg";
import shape_1 from "@/assets/images/assets/bg_12.png";
import shape_2 from "@/assets/images/shape/shape_56.svg";
import shape_3 from "@/assets/images/shape/shape_57.svg";

type FooterFiveProps = {
  footer: LocaleDictionary["footer"];
  nav: LocaleDictionary["nav"];
  locale: Locale;
  anchors: {
    home: string;
    features: string;
    pricing: string;
    download: string;
  };
};

const FooterFive = ({ footer, nav, locale, anchors }: FooterFiveProps) => {
  const navLinks = [
    { key: "home", label: nav.home, href: `#${anchors.home}` },
    { key: "features", label: nav.features, href: `#${anchors.features}` },
    { key: "pricing", label: nav.pricing, href: `#${anchors.pricing}` },
    { key: "download", label: nav.download, href: `#${anchors.download}` },
  ] as const;

  return (
    <div className="footer-five">
      <div className="wrapper">
        <div className="container">
          <div className="position-relative">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="footer-intro mb-lg-70 mb-20">
                  <div className="logo mt-15 mb-20">
                    <Link href={`/${locale}`}>
                      <Image src={logo} alt="HairWow" width={200} />
                    </Link>
                  </div>
                  <p className="text-white-50 mb-3">{footer.tagline}</p>
                  <LanguageSwitcher currentLocale={locale} label={nav.language} />
                </div>
              </div>
              <div className="col-lg-5 col-md-7 d-none d-md-block">
                <div className="footer-nav mb-20">
                  <ul className="footer-nav-link style-none row gx-0 gy-2">
                    {navLinks.map((item) => (
                      <li key={item.key} className="col-sm-6">
                        <a href={item.href} className="tran3s">
                          {item.label}
                        </a>
                      </li>
                    ))}
                    <li className="col-sm-6">
                      <a
                        href={nav.blog.href}
                        target="_blank"
                        rel="noreferrer"
                        className="tran3s"
                      >
                        {nav.blog.label}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-5">
                <div className="footer-contact mb-20 text-md-end text-lg-start">
                  <div className="fw-500 text-white mb-3">{footer.socialsLabel}</div>
                  <div className="d-flex align-items-center gap-2 justify-content-md-end justify-content-lg-start flex-wrap">
                    <a
                      href="https://www.instagram.com/hairwowapp"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon-circle"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@hairwowapp"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon-circle"
                    >
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/@hairwowapp"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon-circle"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <div className="text-white-50 mt-3">
                    {footer.supportLabel}
                    <a
                      className="text-white ms-1"
                      href={`mailto:${footer.supportEmail}`}
                    >
                      {footer.supportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="copyright-text text-center m0">{footer.rights}</p>
          </div>
        </div>
      </div>
      <Image src={shape_1} alt="Decorative purple gradient shape" className="shapes bg_01" />
      <Image src={shape_2} alt="Decorative ring accent" className="shapes shape_02" />
      <Image src={shape_3} alt="Decorative dotted accent" className="shapes shape_03" />
    </div>
  );
};

export default FooterFive;
