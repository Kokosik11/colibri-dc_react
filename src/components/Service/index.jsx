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

        const genericErrorMessage = "Упс... Не можем получить данные. Попробуйте позже";
        setError("");

        fetch(process.env.NODE_ENV !== 'production' ? "http://localhost:3010/api/service" : "/api/service", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            if(response.status === 502) {
                setError("В Базе данных нет записей")
            } else if(response.ok) {
                const data = await response.json();
                setLoading(false);
                setServiceData(data.services);
            } else {
                setError(genericErrorMessage);
                setLoading(false);
            }
        }, async error => {
            setError(genericErrorMessage);
            setLoading(false);
        })
        .then(() => {
            console.log(serviceData)
        })
        .catch(error => {
            setError(genericErrorMessage);
        })
    }, [])


    // const isFirefox = typeof InstallTrigger !== 'undefined';
    // let Card = isFirefox ?  FirefoxCard : ServiceCard;
    let Card = FirefoxCard;
    return (
        <section className="service">
            <div className="service-title">
                <div className="prefix"></div>
                <h2>Мы предлагаем</h2>
            </div>

            <div className="service-pricelvl">$ - диапозон цен</div>

            { error ? (<div className="error-handler">{ error }</div>) 
            : loading ? <Loader /> : (

            <div className="cards-content">
            <Swiper 
                slidesPerView={4} 
                spaceBetween={93} 
                loop={true} 
                autoplay={{
                    "disableOnInteraction": false,
                    "pauseOnMouseEnter": true,
                    "delay": 6000
                }}
                speed={500}
                scrollbar={{
                    "hide": false,
                    "draggable": true,
                }}
                effect={'fade'}
                initialSlide="1"
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
                            cardClass={ card.background }
                            details={ card.details }
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
                
            </div>) }
        </section>
    )
}

export default Service;