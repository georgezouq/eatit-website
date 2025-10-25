import Image from "next/image";

import icon_1 from "@/assets/images/icon/icon_34.png";
import icon_2 from "@/assets/images/icon/icon_35.png";
import icon_3 from "@/assets/images/icon/icon_36.png";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

const icons = [icon_1, icon_2, icon_3];

type BlockFeatureProps = {
  section: LocaleDictionary["sections"]["why"];
};

const BlockFeature = ({ section }: BlockFeatureProps) => {
  return (
    <div
      id={section.id}
      className="block-feature-seventeen position-relative z-1 mt-150 lg-mt-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-6 m-auto">
            <div className="title-nine text-center mb-60 lg-mb-10">
              <div className="upper-title">{section.subtitle}</div>
              <h2>{section.title}</h2>
            </div>
          </div>
        </div>

        <div className="row gx-xxl-5 gy-4 gy-lg-0">
          {section.items.map((item, index) => (
            <div key={item.title} className="col-lg-3 col-sm-6">
              <div className="card-style-eight text-center mt-35 h-100">
                <Image
                  src={icons[index % icons.length]}
                  alt={`${item.title} icon`}
                  className="icon m-auto"
                />
                <h5>{item.title}</h5>
                <p className="ps-xxl-4 pe-xxl-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockFeature;
