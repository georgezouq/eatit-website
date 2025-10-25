import type { LocaleDictionary } from "@/i18n/dictionaries";

const PrivacySection = ({ content }: { content: LocaleDictionary["sections"]["privacy"] }) => {
  return (
    <section className="hairwow-section privacy" id={content.id}>
      <div className="container">
        <div className="privacy-card">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <a className="btn-link" href="#pricing">
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
