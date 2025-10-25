import Image from "next/image";
import Link from "next/link";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import fancy_thumb from "@/assets/images/assets/ils_25.svg";

type FancyBannerProps = {
  privacy: LocaleDictionary["sections"]["privacy"];
  nav: LocaleDictionary["nav"];
};

const FancyBanner = ({ privacy, nav }: FancyBannerProps) => {
  return (
    <section className="fancy-banner-ten mt-250 xl-mt-200 md-mt-130" id="download">
      <div className="container lg">
        <div className="wrapper">
          <Image src={fancy_thumb} alt={privacy.title} className="illustration" />
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="d-flex flex-wrap align-items-center">
                <Link
                  className="video-btn tran3s rounded-circle d-flex align-items-center justify-content-center"
                  data-fancybox=""
                  href="https://www.youtube.com/embed/aXFSJTjVjw0"
                  aria-label={privacy.title}
                >
                  <i className="fa-sharp fa-solid fa-play"></i>
                </Link>
                <h2>{privacy.title}</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <p className="fs-24 text-white md-mt-30">{privacy.description}</p>
              <Link href={privacy.cta} className="btn-eighteen mt-30">
                {nav.download}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FancyBanner;
