import Image from "next/image";

import img_1 from "@/assets/images/shape/shape_51.svg";
import img_2 from "@/assets/images/shape/shape_52.svg";
import img_3 from "@/assets/images/shape/shape_53.svg";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type FancyBannerProps = {
  smart: LocaleDictionary["sections"]["smart"];
};

const FancyBanner = ({ smart }: FancyBannerProps) => {
  return (
    <div
      id={smart.id}
      className="fancy-banner-six position-relative z-1 mt-60 lg-mt-30"
    >
      <div className="wrapper position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2>{smart.title}</h2>
            </div>
            <div className="col-xl-5 col-lg-6 ms-auto">
              <ul className="style-none ps-0 mb-0">
                {smart.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="d-flex align-items-start mb-3 text-white fs-20"
                  >
                    <i className="bi bi-lightning-charge-fill me-2 mt-1 text-warning"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-white-50 mt-40 mb-0 fs-18">{smart.subtitle}</p>
        </div>
      </div>
      <Image src={img_1} alt="Decorative ribbon accent" className="shapes shape_01" />
      <Image src={img_2} alt="Glowing orb accent" className="shapes shape_02" />
      <Image src={img_3} alt="Gradient swirl accent" className="shapes shape_03" />
    </div>
  );
};

export default FancyBanner;
