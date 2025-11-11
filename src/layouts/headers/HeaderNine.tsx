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
    // Close the mobile menu by removing the 'show' class and adding collapsing animation
    const navbar = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");
    
    if (navbar?.classList.contains("show")) {
      // Add collapsing class for animation
      navbar.classList.add("collapsing");
      navbar.classList.remove("collapse", "show");
      
      // Reset height for collapse animation
      navbar.style.height = `${navbar.scrollHeight}px`;
      
      // Trigger reflow (force browser repaint)
      void navbar.offsetHeight;
      
      // Set height to 0 to trigger collapse animation
      navbar.style.height = "0";
      
      // After animation completes, clean up classes
      setTimeout(() => {
        navbar.classList.remove("collapsing");
        navbar.classList.add("collapse");
        navbar.style.height = "";
      }, 350); // Bootstrap default transition time
      
      // Update toggler state
      toggler?.setAttribute("aria-expanded", "false");
      toggler?.classList.add("collapsed");
    }
  }, []);

  const handleNavLinkClick = useCallback(() => {
    // Don't close immediately, let the click event propagate first
    setTimeout(() => {
      closeMobileMenu();
    }, 100);
  }, [closeMobileMenu]);

  return (
    <header className={`theme-main-menu menu-style-nine sticky-menu menu-overlay ${sticky ? "fixed" : ""}`}>
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center w-100">
            <div className="logo order-0">
              <Link href={`/${locale}`} className="d-flex align-items-center">
                <Image src={logo_1} alt="Eatibo logo" height={60} />
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg p0 order-lg-1 ms-lg-5">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center">
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
            <div className="right-widget ms-auto order-2 d-flex align-items-center gap-3">
              <button
                className="navbar-toggler d-block d-lg-none p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label={nav.menuLabel}
              >
                <span></span>
              </button>
              <div className="d-none d-lg-block">
                <LanguageSwitcher
                  currentLocale={locale}
                  label={nav.language}
                  onSelect={closeMobileMenu}
                  onLocaleChange={onLocaleChange}
                />
              </div>
              <a href={`#${anchors.download}`} className="btn-eighteen d-none d-lg-block">
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
