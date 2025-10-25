import Image from "next/image";
import Link from "next/link";

import check from "@/assets/images/icon/check.svg";
import shape from "@/assets/images/shape/shape_58.svg";
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type PricingProps = {
  pricing: LocaleDictionary["sections"]["pricing"];
};

const Pricing = ({ pricing }: PricingProps) => {
  return (
    <div
      id={pricing.id}
      className="pricing-section-five position-relative z-1 mt-180 xl-mt-150 lg-mt-80 pt-130 lg-pt-80 pb-150 xl-pb-130 lg-pb-80"
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="title-nine">
              <h2 className="text-white">{pricing.title}</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 ms-auto">
            <p className="text-white fs-24 md-mt-20">{pricing.subtitle}</p>
          </div>
        </div>

        <div className="mt-50 lg-mt-20">
          <div className="row gx-xxl-5">
            {pricing.plans.map((plan, index) => (
              <div key={plan.name} className="col-lg-6 col-xl-4 d-flex mt-35">
                <div
                  className={`pr-column w-100 d-flex flex-column ${
                    plan.popular ? "active" : ""
                  }`}
                >
                  <div className="pr-header text-center">
                    <div className="plane-name fw-500 text-uppercase">
                      {plan.name}
                    </div>
                    <div className="price fw-500">
                      {plan.price}
                      <span className="fs-18 text-white-50">{plan.period}</span>
                    </div>
                  </div>
                  <p className="text-white-50 text-center px-4">
                    {plan.description}
                  </p>
                  <ul className="style-none package-feature mt-40 lg-mt-20 mb-35">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Image src={check} alt="Included feature" className="icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href="#download" className="btn-seven w-100">
                      {plan.cta}
                    </Link>
                  </div>
                  {plan.popular && (
                    <Image
                      src={shape}
                      alt="Featured plan highlight"
                      className={`shapes ${index === 0 ? "shape_01" : "shape_02"}`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white-50 text-center mt-60 mb-0">{pricing.note}</p>
      </div>
    </div>
  );
};

export default Pricing;
