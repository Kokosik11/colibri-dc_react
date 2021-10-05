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
import Loader from '../Loader';


const Projects = props => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ refObject, setRefObject ] = useState({});
    const [ error, setError ] = useState("");
    const [ projectData, setServiceData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setError("");

        const genericErrorMessage = "Упс... Не можем получить данные. Попробуйте позже";

        fetch("http://localhost:3010/project", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            if(response.ok) {
                const data = await response.json();
                setServiceData(data.projects);
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
            
            { error ? (<div className="error-handler">{ error }</div>) 
            : loading ? <Loader /> : (            

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
                    { projectData.map(project => (
                        <SwiperSlide key={project._id}>
                            <ProjectCard 
                                img={ `/src/assets/imgs/projects/${ project.imageURL }`}
                                alt={ project.title }
                                title={ project.title }
                                href={ project.link }
                            />
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
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
                    </SwiperSlide> */}
                </Swiper>
            </div>) }
        </section>
    )
}

export default Projects;