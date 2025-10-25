"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

import img_1 from "@/assets/images/assets/card_18.png"
import img_2 from "@/assets/images/assets/card_19.png"
import img_3 from "@/assets/images/assets/bg_10.png"
import img_4 from "@/assets/images/shape/shape_56.svg"
import img_5 from "@/assets/images/shape/shape_57.svg"
import type { LocaleDictionary } from "@/i18n/dictionaries/types";

const setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      clickable: true,
   },
   navigation: false,
};

type FeedbackProps = {
  reviews: LocaleDictionary["sections"]["reviews"];
};

const Feedback = ({ reviews }: FeedbackProps) => {
  const testimonials = [
    {
      quote: reviews.quote,
      author: reviews.author,
      role: reviews.role,
    },
  ];

  return (
    <div
      id={reviews.id}
      className="feedback-section-six text-center position-relative z-1 mt-200 xl-mt-150 lg-mt-100"
    >
      <div className="container">
        <Image src={img_1} alt="Hairwow testimonial card" className="mb-50 lg-mb-10" />
        <div className="text-uppercase mb-15 xs-mb-30 text-white">
          {reviews.title}
        </div>
        <p className="text-white-50 fs-20 mb-40">{reviews.subtitle}</p>
        <div className="row">
          <div className="col-lg-10 m-auto">
            <Swiper
              {...setting}
              modules={[Pagination]}
              className="feedback-slider-four"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.author} className="item">
                  <blockquote>{item.quote}</blockquote>
                  <h6 className="mb-10">{item.author}</h6>
                  <span className="text-white-50">{item.role}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Image src={img_2} alt="Hairwow review interface" className="mt-50 lg-mt-10" />
        <Image src={img_3} alt="Gradient testimonial backdrop" className="shapes shape_01" />
        <Image src={img_4} alt="Decorative dotted arc" className="shapes shape_02" />
        <Image src={img_5} alt="Decorative ring accent" className="shapes shape_03" />
      </div>
    </div>
  );
};

export default Feedback;
