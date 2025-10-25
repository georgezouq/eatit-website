import type { LocaleDictionary } from "@/i18n/dictionaries";

const CoreSection = ({ content }: { content: LocaleDictionary["sections"]["core"] }) => {
  return (
    <section className="hairwow-section alt" id={content.id}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{content.title}</p>
          <h2>{content.subtitle}</h2>
        </div>
        <div className="row g-4">
          {content.cards.map((card) => (
            <div className="col-lg-4" key={card.title}>
              <div className="feature-card outline">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.bullets && (
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSection;
