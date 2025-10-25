import Image from "next/image";

import img_1 from "@/assets/images/assets/card_14.png";
import img_2 from "@/assets/images/assets/card_15.png";
// import img_3 from "@/assets/images/shape/shape_54.svg";
import img_4 from "@/assets/images/assets/card_16.png";
import img_5 from "@/assets/images/assets/card_17.png";
import img_6 from "@/assets/images/assets/card_17.1.png";
import img_7 from "@/assets/images/shape/shape_55.svg";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type BlockFeatureTwoProps = {
  core: LocaleDictionary["sections"]["core"];
  assist: LocaleDictionary["sections"]["assist"];
};

const BlockFeatureTwo = ({ core, assist }: BlockFeatureTwoProps) => {
  const [hairstyle, analysis, beard] = core.cards;
  return (
    <div
      id={core.id}
      className="block-feature-eighteen pt-180 lg-pt-100"
    >
      <div className="container">
        <div className="row gx-xxl-5">
          <div className="col-12">
            <div className="feature-block block-one md-pt-30 w-100">
              <div className="row align-items-center">
                <div className="col-lg-5 order-lg-last">
                  <div className="ps-xxl-4 pe-xxl-3">
                    <h3>{hairstyle?.title}</h3>
                    <p className="fs-24 pt-35 lg-pt-20 pb-20">
                      {hairstyle?.description}
                    </p>
                    <ul className="style-none ps-0">
                      {hairstyle?.bullets?.map((bullet) => (
                        <li
                          key={bullet}
                          className="d-flex align-items-start mb-2 text-white-50"
                        >
                          <i className="bi bi-scissors me-2 mt-1 text-info"></i>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7">
                  <Image 
                    src={img_1} 
                    alt="Hairstyle Try-On" 
                    className="me-auto ms-auto" 
                    style={{
                      borderRadius: '10px',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="feature-block block-one w-100 mt-50 lg-mt-30 pt-55 lg-pt-30">
              <h3>{analysis?.title}</h3>
              <p className="fs-24 pt-30 md-pt-20">{analysis?.description}</p>
              <ul className="style-none ps-0">
                {analysis?.bullets?.map((bullet) => (
                  <li
                    key={bullet}
                    className="d-flex align-items-start mb-2 text-white-50"
                  >
                    <i className="bi bi-activity me-2 mt-1 text-success"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="position-relative mt-35">
                <Image 
                  src={img_2} 
                  alt="Hair Analysis" 
                  className="me-auto ms-auto" 
                  style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                />
                {/* <Image src={img_3} alt="Decorative graphic" className="shapes shape_01" /> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="feature-block block-one w-100 mt-50 lg-mt-30 pt-55 lg-pt-30 md-pb-40">
              <h3>{beard?.title}</h3>
              <p className="fs-24 pt-30 md-pt-20 pb-20">{beard?.description}</p>
              <ul className="style-none ps-0">
                {beard?.bullets?.map((bullet) => (
                  <li
                    key={bullet}
                    className="d-flex align-items-start mb-2 text-white-50"
                  >
                    <i className="bi bi-bezier me-2 mt-1 text-primary"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="position-relative">
                <Image 
                  src={img_4} 
                  alt="Beard Try-On" 
                  className="me-auto ms-auto card-three" 
                  style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="feature-block block-one w-100 mt-50 lg-mt-30 pt-70 lg-pt-40">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 m-auto text-center">
                  <h3>{assist.title}</h3>
                  <p className="fs-20 mt-20 text-white-50">{assist.subtitle}</p>
                </div>
              </div>
              <Image 
                src={img_5} 
                alt="Assist Tools" 
                className="me-auto ms-auto mt-70 xs-mt-40" 
                style={{width: '100%', height: 'auto', objectFit: 'contain'}}
              />
              <Image src={img_6} alt="Floating assist highlight" className="shapes shape_02" />
              <Image src={img_7} alt="Decorative assist outline" className="shapes shape_03" />
              <div className="row justify-content-center mt-40">
                {assist.items.map((item) => (
                  <div key={item.title} className="col-md-4 col-sm-6 mb-3">
                    <div className="text-white-50">
                      <h5 className="text-white">{item.title}</h5>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureTwo;
