import Link from "next/link";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type PricingProps = {
  pricing: LocaleDictionary["sections"]["pricing"];
};

const Pricing = ({ pricing }: PricingProps) => {
  return (
    <section className="pricing-section-six mt-180 lg-mt-80 mb-180 lg-mb-80" id={pricing.id}>
      <div className="container lg">
        <div className="row align-items-end mb-60">
          <div className="col-xl-6 col-lg-7">
            <div className="title-eleven text-lg-start text-center">
              <p className="text-uppercase text-white-50 letter-spacing-2 mb-20">
                {pricing.subtitle}
              </p>
              <h2>{pricing.title}</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 text-lg-end text-center">
            <p className="fs-20 text-white-50">{pricing.note}</p>
          </div>
        </div>
        <div className="row gx-xxl-5">
          {pricing.plans.map((plan) => (
            <div key={plan.name} className="col-lg-4 d-flex mb-4 mb-lg-0">
              <div className={`pr-column w-100 ${plan.popular ? "popular" : ""}`}>
                <div className="pr-header text-center mb-25">
                  <div className="plane-name">{plan.name}</div>
                  <div className="info1 fs-20 text-white-50">{plan.description}</div>
                  <div className="save-line fs-20 fw-500">{plan.period}</div>
                  <div className="price">{plan.price}</div>
                </div>
                <Link href={`#download`} className="btn-eleven w-100 d-flex justify-content-between align-items-center">
                  {plan.cta}
                  <span className="icon tran3s d-flex align-items-center justify-content-center">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </Link>
                <h6 className="mt-30">{plan.name}</h6>
                <ul className="style-none package-feature">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
