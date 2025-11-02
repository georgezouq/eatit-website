"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect } from "react";

import UseSticky from "@/hooks/UseSticky";
import LanguageSwitcher from "@/components/hairwow/LanguageSwitcher";

import logo_1 from "@/assets/images/logo/logo_09.svg";

import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type HeaderNineProps = {
  locale: Locale;
  nav: LocaleDictionary["nav"];
  anchors: {
    home: string;
    features: string;
    tracking: string;
    pricing: string;
    download: string;
    faq: string;
  };
  blogHref: string;
  onLocaleChange?: (locale: Locale) => void;
};

const HeaderNine = ({ locale, nav, anchors, blogHref, onLocaleChange }: HeaderNineProps) => {
  const { sticky } = UseSticky();

  const navLinks = [
    { label: nav.home, href: `/#${anchors.home}` },
    { label: nav.features, href: `/#${anchors.features}` },
    { label: nav.pricing, href: `/#${anchors.pricing}` },
    { label: nav.download, href: `/#${anchors.download}` },
    { label: nav.faq, href: `/#${anchors.faq}` },
  ];

  // Import Bootstrap JS on mount
  useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        try {
          // @ts-expect-error - Bootstrap JS doesn't have TypeScript types
          await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        } catch (error) {
          console.error("Failed to load Bootstrap JS:", error);
        }
      }
    };
    loadBootstrap();
  }, []);

  const closeMobileMenu = useCallback(() => {
    // Close the mobile menu by removing the 'show' class
    const navbar = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");
    
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
      toggler?.setAttribute("aria-expanded", "false");
      toggler?.classList.add("collapsed");
    }
  }, []);

  const handleNavLinkClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <header className={`theme-main-menu menu-style-nine sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center w-100">
            <div className="logo order-lg-0 me-lg-5 d-none d-lg-block">
              <Link href={`/${locale}`} className="d-flex align-items-center">
                <Image src={logo_1} alt="EatIt logo" height={60} />
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
                      <Link href={`/${locale}`} className="d-block" onClick={handleNavLinkClick}>
                        <Image src={logo_1} alt="EatIt logo" height={80} />
                      </Link>
                    </div>
                  </li>
                  {navLinks.map((item) => (
                    <li key={item.href} className="nav-item">
                      <a href={item.href} className="nav-link" onClick={handleNavLinkClick}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="nav-item">
                    <a href={blogHref} target="_blank" rel="noreferrer" className="nav-link" onClick={handleNavLinkClick}>
                      {nav.blog.label}
                    </a>
                  </li>
                  <li className="d-lg-none nav-item mt-3">
                    <LanguageSwitcher currentLocale={locale} label={nav.language} onSelect={closeMobileMenu} />
                  </li>
                </ul>
              </div>
            </nav>
            <div className="right-widget ms-auto order-lg-3 d-flex align-items-center gap-3">
              <div className="d-none d-lg-block">
                <LanguageSwitcher
                  currentLocale={locale}
                  label={nav.language}
                  onSelect={closeMobileMenu}
                  onLocaleChange={onLocaleChange}
                />
              </div>
              <a href={`#${anchors.download}`} className="btn-eighteen">
                {nav.download}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNine;
