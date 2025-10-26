import Image from "next/image";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import icon_1 from "@/assets/images/icon/icon_50.svg";
import icon_2 from "@/assets/images/icon/icon_51.svg";
import icon_3 from "@/assets/images/icon/icon_52.svg";

type BlockFeatureThreeProps = {
  assist: LocaleDictionary["sections"]["assist"];
  smart: LocaleDictionary["sections"]["smart"];
};

const icons = [icon_1, icon_2, icon_3];

const BlockFeatureThree = ({ assist, smart }: BlockFeatureThreeProps) => {
  return (
    <section className="block-feature-twentyFive mt-180 lg-mt-80" id={assist.id}>
      <div className="container lg">
        <div className="border-top border-bottom border-white border-2 pt-90 lg-pt-40 pb-90 lg-pb-40">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="text-uppercase text-white-50 letter-spacing-2 mb-20">
                {smart.title}
              </p>
              <h2>{assist.title}</h2>
              <p className="fs-20 text-white-50">{assist.subtitle}</p>
            </div>
          </div>
          <div className="row gx-xxl-5 mt-40">
            {assist.items.map((item, index) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <div className="card-style-twelve text-center mt-20 h-100">
                  <Image
                    src={icons[index % icons.length]}
                    alt={item.title}
                    className="m-auto"
                  />
                  <h4>{item.title}</h4>
                  <p className="pe-xxl-4 ps-xxl-4 text-white-50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockFeatureThree;
