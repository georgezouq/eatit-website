import type { LocaleDictionary } from "@/i18n/dictionaries";

const ReviewsSection = ({ content }: { content: LocaleDictionary["sections"]["reviews"] }) => {
  return (
    <section className="hairwow-section" id={content.id}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{content.title}</p>
          <h2>{content.subtitle}</h2>
        </div>
        <div className="review-card">
          <blockquote>“{content.quote}”</blockquote>
          <div className="review-author">
            <span className="name">{content.author}</span>
            <span className="role">{content.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
