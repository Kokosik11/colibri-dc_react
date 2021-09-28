import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar"
import "./style.css";

import SwiperCore, {
    Autoplay,
    Scrollbar,
    Mousewheel
} from 'swiper';

import Noise from '../../assets/imgs/Noise.png';

import ServiceCard from '../ServiceCard';

SwiperCore.use([Autoplay, Scrollbar, Mousewheel]);

const Service = () => {
    return (
        <section className="service">
            <div className="service-title">
                <div className="prefix"></div>
                <h2>Мы предлагаем</h2>
            </div>

            <div className="cards-content">
            <Swiper 
                slidesPerView={4} 
                spaceBetween={93} 
                loop={true} 
                autoplay={{
                    "delay": 6000,
                    "disableOnInteraction": false
                }}
                speed={500}
                scrollbar={{
                    "hide": false,
                    "draggable": true,
                }}
                effect={'fade'}
                centeredSlides={true} 
                loopFillGroupWithBlank={true} 
                className="mySwiper"
                mousewheel={true}
            >
                <SwiperSlide>
                    <ServiceCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard 
                        title="Landing page"
                        description="Разработка сайта одностраничника"
                        term="от 7 дней"
                        cardClass="card-bg-1" 
                        priceLevel={1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard 
                        title="ECOMMERCE"
                        description="Разработка интернет магазина"
                        term="от 21 дней"
                        cardClass="card-bg-2" 
                        priceLevel={3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard />
                </SwiperSlide>
            </Swiper>
                
            </div>
        </section>
    )
}

export default Service;