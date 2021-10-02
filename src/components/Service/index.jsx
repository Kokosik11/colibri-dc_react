import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar"
import "./style.css";

import SwiperCore, {
    Autoplay,
    Scrollbar,
} from 'swiper';

import ServiceCard from '../ServiceCard/index.jsx';
import FirefoxCard from '../ServiceCard/FirefoxCard.jsx';

SwiperCore.use([Autoplay, Scrollbar]);

const Service = () => {
    const isFirefox = typeof InstallTrigger !== 'undefined';
    let Card = isFirefox ?  FirefoxCard : ServiceCard;
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
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="Landing page"
                        description="Разработка сайта одностраничника"
                        term="от 7 дней"
                        cardClass="card-bg-1" 
                        priceLevel={1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        title="ECOMMERCE"
                        description="Разработка интернет магазина"
                        term="от 21 дней"
                        cardClass="card-bg-2" 
                        priceLevel={3}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
            </Swiper>
                
            </div>
        </section>
    )
}

export default Service;