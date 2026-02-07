"use client";

import Image from "next/image";
import Link from "next/link";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import shape from "@/assets/images/shape/shape_59.svg";
import appleIcon from "@/assets/images/icon/apple.svg";
import googleIcon from "@/assets/images/icon/playstore.svg";

type FancyBannerProps = {
  download: LocaleDictionary["sections"]["download"];
};

const FancyBanner = ({ download }: FancyBannerProps) => {
  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(download.comingSoon);
  };
  return (
    <section
      className="fancy-banner-seven position-relative z-1 mt-200 xl-mt-170 lg-mt-100"
      id={download.id}
    >
      <div className="container">
        <Image src={shape} alt="Vibrant gradient shape" className="m-auto shape_01" />
        <div className="row">
          <div className="col-xxl-9 col-lg-8 m-auto text-center">
            {/* {download.badge ? (
              <p className="text-uppercase text-white-50 letter-spacing-2 mb-20">
                {download.badge}
              </p>
            ) : null} */}
            <div className="title-four mt-40 lg-mt-20">
              <h2>{download.title}</h2>
            </div>
            <p className="fs-28 mt-40 lg-mt-30 mb-40 lg-mb-30 text-white opacity-75">
              {download.subtitle}
            </p>
            {/* {download.highlights?.length ? (
              <ul className="style-none ps-0 mb-40 text-white-50">
                {download.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null} */}
            <div className="d-flex align-items-center justify-content-center flex-wrap platform-button-group gap-3">
              <Link
                href={download.apple.href}
                className="d-flex align-items-center ios-button"
                target="_blank"
                rel="noreferrer"
                aria-label={download.apple.label}
              >
                <Image src={appleIcon} alt="Download on the App Store" className="icon" />
                <div>
                  <span>{download.storeLabel}</span>
                  <strong>{download.apple.label}</strong>
                </div>
              </Link>
              <Link
                href="javscript:void(0);"
                onClick={handleGooglePlayClick}
                className="d-flex align-items-center windows-button"
                target="_blank"
                rel="noreferrer"
                aria-label={download.google.label}
              >
                <Image src={googleIcon} alt="Get it on Google Play" className="icon" />
                <div>
                  <span>{download.storeLabel}</span>
                  <strong>{download.google.label}</strong>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FancyBanner;
