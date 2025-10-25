"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import type { Locale } from "@/i18n/config";
import type { LocaleDictionary } from "@/i18n/dictionaries";

import LanguageSwitcher from "./LanguageSwitcher";

const HairwowHeader = ({ dictionary, locale }: { dictionary: LocaleDictionary; locale: Locale }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: dictionary.nav.home },
    { href: `#${dictionary.sections.why.id}`, label: dictionary.nav.features },
    { href: `#${dictionary.sections.pricing.id}`, label: dictionary.nav.pricing },
    { href: `#${dictionary.sections.privacy.id}`, label: dictionary.nav.download },
  ];

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`hairwow-header${isOpen ? " is-open" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <Link href={`/${locale}`} className="hairwow-logo" onClick={closeMenu}>
            HairWow
          </Link>
          <button
            type="button"
            className="hairwow-menu-toggle"
            aria-expanded={isOpen}
            aria-controls="hairwow-nav"
            aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.menuLabel}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav id="hairwow-nav" className={`hairwow-nav${isOpen ? " show" : ""}`} aria-label={dictionary.nav.menuLabel}>
            <div className="hairwow-nav__content">
              <div className="hairwow-nav__top">
                <div className="hairwow-nav__heading">
                  <p className="hairwow-nav__eyebrow">{dictionary.nav.menuLabel}</p>
                  <p className="hairwow-nav__intro">{dictionary.nav.menuIntro}</p>
                </div>
                <button type="button" className="hairwow-nav__close" aria-label={dictionary.nav.closeMenu} onClick={closeMenu}>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <ul className="hairwow-nav__list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={closeMenu}>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="hairwow-nav__footer">
                <LanguageSwitcher currentLocale={locale} label={dictionary.nav.language} onSelect={closeMenu} />
                <div className="nav-cta">
                  <a href="#pricing" className="btn-primary" onClick={closeMenu}>
                    {dictionary.nav.download}
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className={`hairwow-nav-overlay${isOpen ? " show" : ""}`} onClick={closeMenu} aria-hidden="true"></div>
    </header>
  );
};

export default HairwowHeader;
