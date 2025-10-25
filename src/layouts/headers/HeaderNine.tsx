"use client";

import Link from "next/link";
import Image from "next/image";

import UseSticky from "@/hooks/UseSticky";
import LanguageSwitcher from "@/components/hairwow/LanguageSwitcher";

import logo_1 from "@/assets/images/logo/logo_09.svg";
import icon from "@/assets/images/icon/icon_18.svg";

import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type HeaderNineProps = {
  locale: Locale;
  nav: LocaleDictionary["nav"];
  auth: LocaleDictionary["auth"];
  anchors: {
    home: string;
    features: string;
    tracking: string;
    pricing: string;
    download: string;
    faq: string;
  };
  blogHref: string;
};

const HeaderNine = ({ locale, nav, auth, anchors, blogHref }: HeaderNineProps) => {
  const { sticky } = UseSticky();

  const navLinks = [
    { label: nav.home, href: `#${anchors.home}` },
    { label: nav.features, href: `#${anchors.features}` },
    { label: nav.pricing, href: `#${anchors.pricing}` },
    { label: nav.download, href: `#${anchors.download}` },
    { label: nav.faq, href: `#${anchors.faq}` },
  ];

  return (
    <header className={`theme-main-menu menu-style-nine sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center w-100">
            <div className="logo order-lg-0 me-lg-5">
              <Link href={`/${locale}`} className="d-flex align-items-center">
                <Image src={logo_1} alt="EatIt logo" />
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg p0 order-lg-2 ms-lg-5 ms-3">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label={nav.menuLabel}
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <Link href={`/${locale}`} className="d-block">
                        <Image src={logo_1} alt="EatIt logo" />
                      </Link>
                    </div>
                  </li>
                  {navLinks.map((item) => (
                    <li key={item.href} className="nav-item">
                      <a href={item.href} className="nav-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="nav-item">
                    <a href={blogHref} target="_blank" rel="noreferrer" className="nav-link">
                      {nav.blog.label}
                    </a>
                  </li>
                  <li className="d-lg-none nav-item mt-3">
                    <LanguageSwitcher currentLocale={locale} label={nav.language} />
                  </li>
                </ul>
              </div>
            </nav>
            <div className="right-widget ms-auto order-lg-3 d-flex align-items-center gap-3">
              <LanguageSwitcher currentLocale={locale} label={nav.language} />
              <ul className="d-flex align-items-center style-none m-0">
                <li>
                  <Link href="/login" className="login-btn-one fw-500 d-flex align-items-center tran3s">
                    <Image src={icon} alt="Login icon" className="me-2" />
                    <span>{auth.login}</span>
                  </Link>
                </li>
                <li className="d-none d-md-inline-block ms-3">
                  <Link href="/signup" className="btn-eighteen">
                    {auth.signup}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNine;
