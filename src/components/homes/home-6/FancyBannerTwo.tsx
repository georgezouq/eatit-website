import Image from "next/image";
import Link from "next/link";

import img_1 from "@/assets/images/shape/shape_59.svg";
import img_2 from "@/assets/images/icon/apple.svg";
import img_3 from "@/assets/images/icon/playstore.svg";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type FancyBannerTwoProps = {
  downloadLabel: string;
  heroVisual: LocaleDictionary["hero"]["visual"];
};

const FancyBannerTwo = ({ downloadLabel, heroVisual }: FancyBannerTwoProps) => {
  return (
    <div
      id="download"
      className="fancy-banner-seven position-relative z-1 mt-150 lg-mt-80"
    >
      <div className="container">
        <Image src={img_1} alt="Decorative neon gradient" className="m-auto shape_01" />
        <div className="row">
          <div className="col-xxl-9 col-lg-8 m-auto text-center">
            <div className="title-four mt-40 lg-mt-20">
              <h2>{heroVisual.pill}</h2>
            </div>
            <p className="fs-28 mt-40 lg-mt-30 mb-40 lg-mb-30">
              {heroVisual.title}
            </p>
            <ul className="style-none ps-0 mb-30 text-white-50">
              {heroVisual.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="d-flex align-items-center justify-content-center flex-wrap platform-button-group">
              <Link
                href="https://apps.apple.com/us/app/hairwow-ai-makeover-analysis/id6752471667"
                className="d-flex align-items-center ios-button"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={img_2} alt="Download on the App Store" className="icon" />
                <div>
                  <span>{downloadLabel}</span>
                  <strong>App Store</strong>
                </div>
              </Link>
              <Link
                href="https://apps.apple.com/us/app/hairwow-ai-makeover-analysis/id6752471667"
                className="d-flex align-items-center windows-button"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={img_3} alt="Get it on Google Play" className="icon" />
                <div>
                  <span>{downloadLabel}</span>
                  <strong>Google Play</strong>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerTwo;
