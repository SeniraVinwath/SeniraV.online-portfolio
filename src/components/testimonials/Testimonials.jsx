import React from 'react'
import { testimonials } from '../../Data';
import shapeFive from '../../assets/shape-5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialIcon from '../../assets/testimonials-icon-corrected.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonial">
            <h2 className="section__title text-cs">Testimonials</h2>
            <p className="section__subtitle">
                What <span>They Say</span>
            </p>
    
            <Swiper
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="testimonials__container container mySwiper">
                {testimonials.map(({img, name, author, description}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonials__item card card-one">
                            <div className="testimonial__header">
                                <div className="testimonial__icon">
                                    <img src={testimonialIcon} alt="" />
                                </div>

                                <img src={img} alt="" className="testimonial__img" />
                            </div>

                            <p className="testimonial__description">{description}</p>

                            <h3 className="testimonial__name">{name}</h3>
                            <p className="testimonial__author">{author}</p>

                            <img src={shapeFive} alt="" className="shape c__shape" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
  )
}

export default Testimonials