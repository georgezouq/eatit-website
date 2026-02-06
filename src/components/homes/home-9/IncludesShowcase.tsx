"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type IncludesShowcaseProps = {
  includes: LocaleDictionary["sections"]["includes"];
};

const AUTO_PLAY_MS = 5500;

const IncludesShowcase = ({ includes }: IncludesShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeFeatures = useMemo(() => includes.features ?? [], [includes.features]);

  useEffect(() => {
    if (safeFeatures.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeFeatures.length);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [safeFeatures.length]);

  if (safeFeatures.length === 0) {
    return null;
  }

  const activeFeature = safeFeatures[activeIndex] ?? safeFeatures[0];
  const imageSrc = `/assets/showcase/${activeFeature.key}.png`;

  return (
    <section
      className="eatibo-includes-section position-relative mt-150 lg-mt-80 mb-140 lg-mb-80"
      id={includes.id}
    >
      <div className="container lg">
        <div className="eatibo-includes-head text-center mb-45 lg-mb-30">
          <p className="eyebrow text-uppercase letter-spacing-2">{includes.badge}</p>
          <h2 className="font-Playfair">{includes.title}</h2>
          <p className="subtitle mb-0">{includes.subtitle}</p>
        </div>

        <div className="eatibo-includes-shell">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-6 d-flex">
              <div className="feature-rail w-100" role="tablist" aria-label={includes.autoplayLabel}>
                {safeFeatures.map((feature, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={feature.key}
                      type="button"
                      className={`feature-card text-start ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      role="tab"
                      aria-selected={isActive}
                      aria-expanded={isActive}
                      aria-controls={`include-panel-${feature.key}`}
                      id={`include-tab-${feature.key}`}
                    >
                      <div className="feature-head">
                        <span className="feature-index">0{index + 1}</span>
                        <h3>{feature.title}</h3>
                      </div>

                      <div className={`feature-details ${isActive ? "is-visible" : ""}`} aria-hidden={!isActive}>
                        <p>{feature.description}</p>
                        <ul className="style-none mb-0">
                          {feature.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-6 mt-35 mt-lg-0">
              <div
                className="phone-stage"
                role="tabpanel"
                id={`include-panel-${activeFeature.key}`}
                aria-labelledby={`include-tab-${activeFeature.key}`}
              >
                <div className="screen-wrap">
                  <Image
                    key={imageSrc}
                    src={imageSrc}
                    alt={activeFeature.image.alt}
                    width={758}
                    height={729}
                    className="feature-screen"
                    priority={activeIndex === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludesShowcase;
