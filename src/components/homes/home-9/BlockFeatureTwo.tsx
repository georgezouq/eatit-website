import Image from "next/image";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import icon_1 from "@/assets/images/icon/icon_53.svg";
import icon_2 from "@/assets/images/icon/icon_54.svg";
import icon_3 from "@/assets/images/icon/icon_55.svg";
import thumb_1 from "@/assets/images/assets/card_23.png";
import avatar from "@/assets/images/assets/avatar_4.png";
import shape from "@/assets/images/shape/shape_80.svg";

type BlockFeatureTwoProps = {
  core: LocaleDictionary["sections"]["core"];
  reviews: LocaleDictionary["sections"]["reviews"];
};

const icons = [icon_1, icon_2, icon_3];

const BlockFeatureTwo = ({ core, reviews }: BlockFeatureTwoProps) => {
  const [firstCard, secondCard, thirdCard] = core.cards;
  return (
    <section className="block-feature-twentySix mt-180 xl-mt-150 lg-mt-80" id={core.id}>
      <div className="container lg">
        <div className="row">
          <div className="col-xl-7 col-lg-7 m-auto">
            <div className="title-eleven text-center mb-30 lg-mb-10">
              <p className="text-uppercase text-white-50 letter-spacing-2 mb-20">{core.subtitle}</p>
              <h2>{core.title}</h2>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          <div className="col-lg-4 d-flex">
            <div className="block-one d-flex flex-column justify-content-center w-100 mt-50 lg-mt-30">
              <div>
                <Image src={icons[0]} alt={firstCard.title} />
                <h3>{firstCard.title}</h3>
                <p className="text-white-50">{firstCard.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex">
            <div className="block-two w-100 mt-50 lg-mt-30">
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <h3 className="md-mt-20">{secondCard.title}</h3>
                  <p className="text-white-50">{secondCard.description}</p>
                </div>
              </div>
              <Image src={thumb_1} alt={secondCard.title} />
            </div>
          </div>
          <div className="col-lg-8 d-flex">
            <div className="block-three w-100 mt-50 lg-mt-30">
              <div className="row">
                <div className="col-md-8 ms-auto text-end">
                  <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                    <Image src={icons[1]} alt={reviews.title} />
                  </div>
                  <blockquote>“{reviews.quote}”</blockquote>
                  <div className="name color-dark fs-20 text-white">
                    <span className="fw-500">{reviews.author}</span> {reviews.role}
                  </div>
                </div>
              </div>
              <Image src={avatar} alt={reviews.author} className="shapes shape_01" />
              <Image src={shape} alt="Decorative shape" className="shapes shape_02" />
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="block-four d-flex flex-column justify-content-center w-100 mt-50 lg-mt-30">
              <div>
                <h3>{thirdCard.title}</h3>
                <p className="text-white-50">{thirdCard.description}</p>
                <Image src={icons[2]} alt={thirdCard.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockFeatureTwo;
