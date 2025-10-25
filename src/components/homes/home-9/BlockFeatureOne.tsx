"use client";
import Image from "next/image";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import icon_1 from "@/assets/images/icon/icon_46.svg";
import icon_2 from "@/assets/images/icon/icon_47.svg";
import icon_3 from "@/assets/images/icon/icon_48.svg";
import btn_icon from "@/assets/images/icon/icon_49.svg";
import brand_1 from "@/assets/images/assets/d_n_01.png";
import brand_2 from "@/assets/images/assets/d_n_02.png";
import brand_3 from "@/assets/images/assets/d_n_03.png";
import brand_4 from "@/assets/images/assets/d_n_04.png";
import brand_5 from "@/assets/images/assets/d_n_05.png";

type BlockFeatureOneProps = {
  content: LocaleDictionary["sections"]["why"];
  smart: LocaleDictionary["sections"]["smart"];
};

const icons = [icon_1, icon_2, icon_3];

const BlockFeatureOne = ({ content, smart }: BlockFeatureOneProps) => {
  return (
    <section className="block-feature-twentyFour pb-80 lg-pb-40" id={content.id}>
      <div className="container lg">
        <div className="row mb-40">
          <div className="col-lg-8">
            <div className="title-eleven text-lg-start text-center">
              <p className="text-uppercase text-white-50 letter-spacing-2 mb-20">
                {smart.title}
              </p>
              <h2>{content.title}</h2>
              <p className="fs-20 mt-20 text-white-50">{content.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          {content.items.map((item, index) => (
            <div key={item.title} className="col-lg-4 col-md-6">
              <div className="card-style-eleven h-100">
                <Image src={icons[index % icons.length]} alt={item.title} />
                <h4>{item.title}</h4>
                <p className="m0 text-white-50">{item.description}</p>
                {item.bullets && item.bullets.length > 0 ? (
                  <ul className="style-none text-start mt-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-white-50 d-flex align-items-start gap-2">
                        <Image src={btn_icon} alt="Bullet" width={20} height={20} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="trusted-by text-center mt-70">
          <p className="text-white-50 mb-4">{smart.subtitle}</p>
          <div className="d-flex justify-content-center justify-content-md-between flex-wrap logos">
            {[brand_1, brand_2, brand_3, brand_4, brand_5].map((brand, idx) => (
              <div key={idx} className="m-2">
                <Image src={brand} alt="Partner logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockFeatureOne;
