"use client";

import { useEffect } from "react";

const SECTION_SELECTOR = ".eatibo-homepage main > section";
const HERO_CLASS = "hero-banner-nine";
const REVEAL_CLASS = "scroll-reveal-section";
const VISIBLE_CLASS = "is-visible";

const ScrollRevealController = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR)).filter(
      (section) => !section.classList.contains(HERO_CLASS),
    );

    if (sections.length === 0) {
      return;
    }

    sections.forEach((section, index) => {
      section.classList.add(REVEAL_CLASS);
      section.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
    });

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add(VISIBLE_CLASS));
      return;
    }

    const viewportThreshold = window.innerHeight * 0.88;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= viewportThreshold) {
        section.classList.add(VISIBLE_CLASS);
        return;
      }
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollRevealController;
