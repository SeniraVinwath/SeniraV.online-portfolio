import React from 'react'
import {services} from '../../Data.jsx'
import { TiInputChecked } from "react-icons/ti";
import shapeThree from "../../assets/shape-3.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import './services.css'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title text-cs">What I Do</h2>
        <p className="section__subtitle">
            Capability <span>Snapshot</span>
        </p>

        <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
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
        modules={[Pagination, Autoplay]}
        className="services__container container mySwiper">
            {services.map(({name, title, description}, index) => {
                return (
                    <SwiperSlide key={index} className="services__item card card-one">
                        <span className="services__subtitle text-cs">{name}</span>

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>

                        <a href='#contact' className='link'>
                            Book Me
                            <TiInputChecked className='link__icon' size={24}></TiInputChecked>
                        </a>

                        <img src={shapeThree} alt="" className="shape c__shape" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Services