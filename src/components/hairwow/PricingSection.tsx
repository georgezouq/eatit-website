import type { LocaleDictionary } from "@/i18n/dictionaries";

const PricingSection = ({ content }: { content: LocaleDictionary["sections"]["pricing"] }) => {
  return (
    <section className="hairwow-section alt" id={content.id}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{content.title}</p>
          <h2>{content.subtitle}</h2>
        </div>
        <div className="row g-4 align-items-stretch">
          {content.plans.map((plan) => (
            <div className="col-lg-6" key={plan.name}>
              <div className={`pricing-card${plan.popular ? " popular" : ""}`}>
                {plan.popular && <span className="tag">Pro</span>}
                <div className="pricing-head">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>
                <div className="pricing-price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="btn-primary" href="#hero">
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="pricing-note">{content.note}</p>
      </div>
    </section>
  );
};

export default PricingSection;
