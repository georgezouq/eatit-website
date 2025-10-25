import type { LocaleDictionary } from "@/i18n/dictionaries";

const SmartSection = ({ content }: { content: LocaleDictionary["sections"]["smart"] }) => {
  return (
    <section className="hairwow-section highlight" id={content.id}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{content.title}</p>
          <h2>{content.subtitle}</h2>
        </div>
        <ul className="bullet-grid">
          {content.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SmartSection;
