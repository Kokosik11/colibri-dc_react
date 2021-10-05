import React, { useEffect, useRef, useState } from "react";
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
import Loader from '../Loader';

SwiperCore.use([Autoplay, Scrollbar]);

const Service = () => {
    const [ error, setError ] = useState("");
    const [ serviceData, setServiceData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setError("");

        const genericErrorMessage = "Упс... Не можем получить данные. Попробуйте позже";

        fetch("http://localhost:3010/service", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            if(response.ok) {
                const data = await response.json();
                setServiceData(data.services);
                setLoading(false);
            } else {
                setError(genericErrorMessage);
                setLoading(false);
            }
        }, async error => {
            setError(genericErrorMessage);
            setLoading(false);
        })
    }, [])

    const isFirefox = typeof InstallTrigger !== 'undefined';
    let Card = isFirefox ?  FirefoxCard : ServiceCard;
    return (
        <section className="service">
            <div className="service-title">
                <div className="prefix"></div>
                <h2>Мы предлагаем</h2>
            </div>

            { error ? (<div className="error-handler">{ error }</div>) 
            : loading ? <Loader /> : (

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
                { serviceData.map(card => (
                    <SwiperSlide key={ card._id } >
                        <Card 
                            title={ card.title } 
                            description={ card.description } 
                            term={ `от ${card.term} дней` }
                            priceLevel={ card.priceLevel }
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
                
            </div>) }
        </section>
    )
}

export default Service;