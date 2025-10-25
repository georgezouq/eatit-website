import type { LocaleDictionary } from "@/i18n/dictionaries";

const AssistSection = ({ content }: { content: LocaleDictionary["sections"]["assist"] }) => {
  return (
    <section className="hairwow-section" id={content.id}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{content.title}</p>
          <h2>{content.subtitle}</h2>
        </div>
        <div className="row g-4">
          {content.items.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistSection;
