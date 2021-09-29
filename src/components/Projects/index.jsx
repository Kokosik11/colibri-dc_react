import "./style.css";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Autoplay,
    Mousewheel,
    Navigation,
} from 'swiper';

SwiperCore.use([Autoplay, Mousewheel, Navigation]);

import ProjectCard from "./ProjectCard";
import OHL from "../../assets/imgs/projects/ohl.png";
import REUCareer from "../../assets/imgs/projects/REU-career.png";
import REUEnrollee from "../../assets/imgs/projects/REU-enrollee.png";

const Projects = () => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        setWindowWidth(window.innerHeight);
    })

    return (
        <section className="projects">
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
                    mousewheel={true}
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
                    <SwiperSlide>
                        <ProjectCard />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Projects;