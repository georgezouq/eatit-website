import Image from "next/image";
import Link from "next/link";

import img_1 from "@/assets/images/assets/avatar.png";
import img_2 from "@/assets/images/assets/card_13_new.png";
// import img_3 from "@/assets/images/assets/card_13.1.png";
// import img_4 from "@/assets/images/assets/card_13.2.png";
// import img_5 from "@/assets/images/assets/card_13.3.png";
import img_6 from "@/assets/images/assets/bg_09.png";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type HeroProps = {
  hero: LocaleDictionary["hero"];
  nav: LocaleDictionary["nav"];
};

const Hero = ({ hero, nav }: HeroProps) => {
  return (
    <div id="home" className="hero-banner-six z-1 position-relative">
      <div className="wrapper position-relative z-1 pt-250 xl-pt-200 md-pt-150 pb-180 xl-pb-100 lg-pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <h1 className="hero-heading pe-xxl-5">
                {hero.title} <span>{hero.highlight}</span>{hero.titleSuffix ? ` ${hero.titleSuffix}` : ''}
              </h1>
              <p className="fs-24 pt-35 pb-20 pe-xxl-5">{hero.description}</p>
              <ul className="style-none ps-0 mb-30">
                {hero.bullets.map((item) => (
                  <li key={item} className="d-flex align-items-start mb-2 text-white">
                    <i className="bi bi-check2-circle me-2 mt-1 text-primary"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white-50 mb-30">{hero.note}</p>

              <div className="d-flex align-items-center flex-wrap">
                <Link
                  href="http://hairlabapp.starseekai.com/app"
                  className="btn-seven color-two mt-10 me-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {hero.primaryCta}
                </Link>
                <Link className="btn-sixteen mt-10" href="#download">
                  {nav.download}
                </Link>
              </div>

              <div className="d-flex align-items-center mt-75 md-mt-40">
                <Image src={img_1} alt="Hairwow community avatars" />
                <div className="rating">
                  <div className="fw-600 text-white fs-24">{hero.rating.value}</div>
                  <div className="text-white fs-18">{hero.rating.label}</div>
                  <ul className="style-none d-flex align-items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill"></i>
                      </li>
                    ))}
                  </ul>
                  <div className="text-white-50 fs-14">{hero.rating.caption}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="illustration">
          <Image src={img_2} alt="Hairwow dashboard preview" className="w-100" />
          {/* <Image src={img_3} alt="Decorative graphic" className="shapes shape_01" />
          <Image src={img_4} alt="Decorative graphic" className="shapes shape_02" />
          <Image src={img_5} alt="Decorative graphic" className="shapes shape_03" /> */}
        </div>
        <Image src={img_6} alt="Gradient background highlight" className="shapes bg-shape" />
      </div>
    </div>
  );
};

export default Hero;
