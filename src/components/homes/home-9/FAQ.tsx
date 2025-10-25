"use client";
import { useEffect, useState } from "react";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

type FAQProps = {
  faq: NonNullable<LocaleDictionary["sections"]["faq"]>;
};

type FaqItem = {
  id: number;
  title: string;
  desc: string;
};

const FAQ = ({ faq }: FAQProps) => {
  const [faqData, setFaqData] = useState<(FaqItem & { showAnswer: boolean })[]>([]);

  useEffect(() => {
    setFaqData(
      faq.items.map((item, index) => ({
        id: index,
        title: item.question,
        desc: item.answer,
        showAnswer: index === 0,
      }))
    );
  }, [faq.items]);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((faqItem) =>
        faqItem.id === faqId
          ? { ...faqItem, showAnswer: !faqItem.showAnswer }
          : { ...faqItem, showAnswer: false }
      )
    );
  };

  return (
    <section className="faq-section-three position-relative mt-180 lg-mt-80 mb-180 lg-mb-80" id={faq.id}>
      <div className="container lg">
        <div className="row">
          <div className="col-lg-5">
            <div className="title-eleven">
              <div className="text-uppercase mb-25 text-white-50">{faq.title}</div>
              <h2>{faq.subtitle}</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="accordion accordion-style-two style-two p0 bg-transparent shadow-none ms-xxl-4 md-mt-40" id="accordionFour">
              {faqData.map((item) => (
                <div key={item.id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => toggleAnswer(item.id)}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                    <div className="accordion-body">
                      <p className="fs-22">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
