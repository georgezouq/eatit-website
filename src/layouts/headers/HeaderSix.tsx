"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

import UseSticky from "@/hooks/UseSticky";
import LanguageSwitcher from "@/components/hairwow/LanguageSwitcher";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

import logo_1 from "@/assets/images/logo/logo_01.new.svg";

type HeaderSixProps = {
  locale: Locale;
  nav: LocaleDictionary["nav"];
  primaryCta: string;
  anchors: {
    home: string;
    features: string;
    pricing: string;
    download: string;
  };
  landingHref?: string;
  activePath?: string;
  onLocaleChange?: (locale: Locale) => void;
};

const HeaderSix = ({
  locale,
  onLocaleChange,
  nav,
  primaryCta,
  anchors,
  landingHref,
  activePath,
}: HeaderSixProps) => {
  const { sticky } = UseSticky();

  const navLinks = [
    { key: "home", label: nav.home, anchor: anchors.home },
    { key: "features", label: nav.features, anchor: anchors.features },
    { key: "pricing", label: nav.pricing, anchor: anchors.pricing },
    { key: "download", label: nav.download, anchor: anchors.download },
  ] as const;

  const closeMobileMenu = useCallback(() => {
    const navbar = document.getElementById("navbarNav");
    if (!navbar) return;
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, []);

  const pathname = usePathname();
  const resolvedActivePath = activePath ?? pathname ?? "";

  const getAnchorHref = useCallback(
    (anchor: string) => (landingHref ? `${landingHref}#${anchor}` : `#${anchor}`),
    [landingHref],
  );

  const blogIsActive = useMemo(
    () => resolvedActivePath.startsWith(nav.blog.href),
    [resolvedActivePath, nav.blog.href],
  );

  return (
    <header
      className={`theme-main-menu menu-style-seven sticky-menu menu-overlay ${
        sticky ? "fixed" : ""
      }`}
    >
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div className="logo order-lg-0">
              <Link href={`/${locale}`} className="d-flex align-items-center">
                <Image src={logo_1} alt="HairWow" width={200} />
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg p0 order-lg-2 flex-grow-1">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center ms-lg-auto">
                  <li className="d-block d-lg-none mb-3">
                    <div className="logo">
                      <Link href={`/${locale}`} className="d-block" onClick={closeMobileMenu}>
                        <Image src={logo_1} alt="HairWow" width={160} />
                      </Link>
                    </div>
                  </li>
                  {navLinks.map((item) => (
                    <li key={item.key} className="nav-item">
                      <a
                        href={getAnchorHref(item.anchor)}
                        className="nav-link"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li key="blog" className="nav-item">
                    <Link
                      href={nav.blog.href}
                      className={`nav-link ${blogIsActive ? "active" : ""}`}
                      onClick={closeMobileMenu}
                    >
                      {nav.blog.label}
                    </Link>
                  </li>
                  {/* Mobile-only items */}
                  <li className="nav-item d-lg-none mt-4 px-3">
                    <LanguageSwitcher
                      currentLocale={locale}
                      label={nav.language}
                      onSelect={closeMobileMenu}
                      onLocaleChange={onLocaleChange}
                    />
                  </li>
                  <li className="nav-item d-lg-none mt-3 px-3">
                    <a
                      className="btn-seven color-two w-100 d-block text-center"
                      href="http://hairlabapp.starseekai.com/app"
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMobileMenu}
                    >
                      {primaryCta}
                    </a>
                  </li>
                  <li className="nav-item d-lg-none mt-2 px-3">
                    <a 
                      className="btn-sixteen w-100 d-block text-center" 
                      href={`#${anchors.download}`} 
                      onClick={closeMobileMenu}
                    >
                      {nav.download}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="right-widget d-none d-lg-flex align-items-center gap-3 order-lg-3">
              <LanguageSwitcher
                currentLocale={locale}
                label={nav.language}
                onSelect={closeMobileMenu}
                onLocaleChange={onLocaleChange}
              />
              <a
                className="btn-seven color-two"
                href="http://hairlabapp.starseekai.com/app"
                target="_blank"
                rel="noreferrer"
              >
                {primaryCta}
              </a>
              <a className="btn-sixteen" href={`#${anchors.download}`} onClick={closeMobileMenu}>
                {nav.download}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSix;
