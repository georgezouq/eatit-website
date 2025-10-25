import type { LocaleDictionary } from "@/i18n/dictionaries";

const HeroSection = ({ hero }: { hero: LocaleDictionary["hero"] }) => {
  return (
    <section className="hairwow-hero" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-copy">
              <span className="hero-badge">{hero.badge}</span>
              <h1>
                {hero.title} <span className="hero-highlight">{hero.highlight}</span>{hero.titleSuffix ? ` ${hero.titleSuffix}` : ''}
              </h1>
              <p className="lead">{hero.description}</p>
              <div className="hero-actions">
                <a className="btn-primary" href="#pricing">
                  {hero.primaryCta}
                </a>
                <a className="btn-link" href="#core">
                  {hero.secondaryCta}
                </a>
              </div>
              <ul className="hero-list">
                {hero.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="hero-rating">
                <span className="value">{hero.rating.value}</span>
                <div>
                  <div className="label">{hero.rating.label}</div>
                  <div className="caption">{hero.rating.caption}</div>
                </div>
              </div>
              <p className="hero-note">{hero.note}</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-visual" aria-hidden="true">
              <div className="visual-card">
                <div className="visual-title">{hero.visual.title}</div>
                <ul>
                  {hero.visual.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="visual-pill">{hero.visual.pill}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
