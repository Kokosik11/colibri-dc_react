import "./style.css";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Autoplay,
    Navigation,
} from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

import ProjectCard from "./ProjectCard";
import OHL from "../../assets/imgs/projects/ohl.png";
import REUCareer from "../../assets/imgs/projects/REU-career.png";
import REUEnrollee from "../../assets/imgs/projects/REU-enrollee.png";

const Projects = props => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ refObject, setRefObject ] = useState({});

    const articleRef = useRef()

    function handleClick() {
        articleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        setWindowWidth(window.innerHeight);
    })


    useEffect(() => {
        setRefObject(props.setRefScroll(handleClick))

    }, [refObject])

    return (
        <section ref={ articleRef } id="projects" className="projects">
            <div className="projects-title">
                <div className="prefix"></div>
                <h2>Витрина проектов</h2>
            </div>
            
            

            <div className="projects-content">
                <Swiper 
                    slidesPerView={3} 
                    spaceBetween={93}
                    loop={true} 
                    autoplay={{
                        "delay": 6000,
                        "disableOnInteraction": false
                    }}
                    speed={500}
                    effect={'fade'}
                    centeredSlides={true} 
                    loopFillGroupWithBlank={true} 
                    className="mySwiper-project"
                    navigation={true}
                >
                    <SwiperSlide>
                        <ProjectCard 
                            img={OHL} 
                            alt="OHL website"
                            title="OHL website"
                            href="http://ohl.by/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard 
                            img={REUCareer} 
                            alt="REU Career website"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard 
                            img={REUEnrollee} 
                            alt="REU enrollee website"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Projects;