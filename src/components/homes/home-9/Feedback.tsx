"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import type { LocaleDictionary } from "@/i18n/dictionaries/types";

import icon from "@/assets/images/icon/icon_56.svg";
import shape from "@/assets/images/shape/shape_81.svg";

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 700,
  autoplay: {
    delay: 5200,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".next_b",
    prevEl: ".prev_b",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

type FeedbackProps = {
  reviews: LocaleDictionary["sections"]["reviews"];
};

const Feedback = ({ reviews }: FeedbackProps) => {
  const items = reviews.items ?? [
    {
      quote: reviews.quote,
      author: reviews.author,
      role: reviews.role,
    },
  ];
  // Swiper docs: loop with centeredSlides requires slides >= slidesPerView + slidesPerGroup + 1.
  // Here max slidesPerView is 3 and slidesPerGroup is 1, so at least 5 slides are needed.
  const minSlidesForLoop = 5;
  const canUseLoop = items.length >= minSlidesForLoop;
  const canCenterSlides = items.length > 1;
  const defaultSlideIndex = items.length > 1 ? 1 : 0;

  return (
    <section
      className="feedback-section-nine position-relative z-1 pt-120 xl-pt-100 lg-pt-70 pb-130 lg-pb-80 mt-180 lg-mt-80"
      id={reviews.id}
    >
      <div className="container">
        <div className="text-center mb-70 lg-mb-30">
          <h2>{reviews.stats?.value}</h2>
          <p className="fs-28 text-white opacity-75">{reviews.stats?.label ?? reviews.subtitle}</p>
        </div>
      </div>
      <div className="wrapper">
        <Swiper
          {...setting}
          modules={[Autoplay, Navigation]}
          loop={canUseLoop}
          centeredSlides={canCenterSlides}
          centerInsufficientSlides={!canUseLoop}
          initialSlide={defaultSlideIndex}
          onSwiper={(swiper) => {
            if (items.length > 1) {
              if (canUseLoop) {
                swiper.slideToLoop(defaultSlideIndex, 0, false);
              } else {
                swiper.slideTo(defaultSlideIndex, 0, false);
              }
            }
          }}
          className="feedback-slider-six"
        >
          {items.map((item) => (
            <SwiperSlide key={`${item.author}-${item.quote}`} className="item">
              <div className="feedback-block">
                <blockquote>“{item.quote}”</blockquote>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="name text-white">
                    <div className="fw-500">{item.author}</div>
                    <div className="small text-white-50">{item.role}</div>
                  </div>
                  <Image src={icon} alt="Quote icon" className="icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none mt-50">
          <li className="prev_b slick-arrow" aria-label="Previous">
            <i className="fa-solid fa-arrow-left-long"></i>
          </li>
          <li className="next_b slick-arrow" aria-label="Next">
            <i className="fa-solid fa-arrow-right-long"></i>
          </li>
        </ul>
      </div>
      <Image src={shape} alt="Decorative background" className="shapes shape_01" />
    </section>
  );
};

export default Feedback;
