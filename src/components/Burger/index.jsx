import React, { useState, useEffect } from 'react';

import { Link, NavLink } from "react-router-dom";

import "./style.css"

import Logo from '../../assets/imgs/colibri-logo.png';
import Phone from '../../assets/imgs/Calling.png';
import Close from '../../assets/imgs/close.png';

import LinkedinIcon from '../../assets/imgs/social/burger-linkedin.png';
import InstagramIcon from '../../assets/imgs/social/burger-instagram.png';
import TelegramIcon from '../../assets/imgs/social/burger-telegram.png';

import BgItem from '../../assets/imgs/burger-bg-item.png';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

// const CLink = props => <li><a href={ props.href }>{ props.children }</a></li>

const LinkGroup = props => {
    return (
        <nav className={ props.className }>
            <ul>
                { props.children }
            </ul>
        </nav>
    )
}

function Heading({ text, arc, radius }) {
    const characters = text.split('');
    const degree = arc / characters.length;

    return (
        <div>
            {characters.map((char, i) => (
            <span
                key={`heading-span-${i}`}
                style={{
                    position: 'absolute',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    height: `${radius}px`,
                    transform: `rotate(${degree * i - arc / 2}deg)`,
                    transformOrigin: `0 ${radius}px 0`,
                }}
            >
                {char}
            </span>
        ))}
        </div>
    );
}

const LeftContent = props => {
    const [ navigationBtn, setNavigationBtn ] = useState(false);

    const handleLeftButtonClick = () => {
        setNavigationBtn(false);
    }

    const handleRightButtonClick = () => {
        setNavigationBtn(true);
    }

    return  (
        <div className={ props.className }>
                <header>
                    <div className="logo">
                        <img src={ Logo } alt="Colibri DC logo" />
                        <h2>Colibri Development Company</h2>
                    </div>
                </header>

                <div className="burger-left_content">
                    <div className="navigation">
                        <button className={ navigationBtn ? "bl-btn" : "bl-btn active" } onClick={ handleLeftButtonClick }>??????????????????</button>
                        <button className={ navigationBtn ? "bl-btn active" : "bl-btn" } onClick={ handleRightButtonClick }>?? ??????</button>
                        <div className={ navigationBtn ? "bl-selected right" : "bl-selected left" }></div>
                    </div>

                    <div className="burger-left_block">
                        {!navigationBtn && 
                        <LinkGroup className="bl-links">
                            <NavLink to="/" onClick={ props.onBurgerOpen }>?? ????????????????</NavLink>
                            <NavLink to="/" onClick={ props.onBurgerOpen }>??????????????????</NavLink>
                            <NavLink to="/" onClick={ props.onBurgerOpen }>????????????</NavLink>
                            <NavLink to="/" onClick={ props.onBurgerOpen }>?????????? ????????????????????</NavLink>
                        </LinkGroup>
                        }

                        {navigationBtn && 
                        <div>
                            ?????? ??????????-???? ?????????? ?? ??????
                        </div>
                        }
                        <footer>
                            <div className="bl-footer">
                                <Link to="/" onClick={ props.onBurgerOpen }>?????????????????????????? ?? ??????????????????????</Link>
                                <div className="bl-dot"></div>
                                <Link to="/" onClick={ props.onBurgerOpen }>?????????? ??????????</Link>
                            </div>
                        </footer>
                    </div>

                    { props.Arrow ? <props.Arrow /> : null }
                </div>
            </div>
    )
}

const RightContent = props => {
    return (
        <div className={ props.className }>
            <header>
                <div className="burger_header-content">
                    <div className="phone">
                        <img src={ Phone } alt="Phone icon" />
                        <a href="tel:+375295448533" className="number">375 29 544 85 33</a>
                    </div>

                    <div className="close" onClick={ props.onBurgerOpen }>
                        <img src={ Close } alt="Close icon" />
                    </div>
                </div>
            </header>

            <div className="burger-right_content">
                <div className="burger-rotated-text">
                    <div className="rotate">
                        <Heading text="CompanyColibri" arc={330} radius={85} />
                    </div>
                </div>

                <div className="burger-info">
                    <NavLink to="/" onClick={ props.onBurgerOpen }>???????????? ???????????? ??????-???????????????? ?????? ???????????? ?????????????? - ?????? ???????????</NavLink>
                </div>
                <div className="burger-faq">
                    <NavLink to="/faq" onClick={ props.onBurgerOpen }>?????????? ???????????????????? ??????????????</NavLink>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/company/colibri-development-company/" target="_blank"><img src={ LinkedinIcon } alt="Linkedin icon" /></a>
                    <a href="https://www.instagram.com/colibridevcom/" target="_blank"><img src={ InstagramIcon } alt="Instagram icon" /></a>
                    <a href="#"><img src={ TelegramIcon } alt="Telegram icon" /></a>
                </div>
            </div>

            <img className="burger-bg-item" src={ BgItem } alt="Background element" />
        </div>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return [height, width];
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Arrow = () => {
    return (
        <div id="arrowAnim">
            <div className="arrowSliding">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
                <div className="arrow"></div>
            </div>
        </div>
    )
}

const Burger = props => {
    const [ height, width ] = useWindowDimensions();

    console.log(width);

    return width > 1100 ? (
        <div className={props.className}>
            <LeftContent className="burger-content_left" />
            <RightContent className="burger-content_right" onBurgerOpen={ props.onBurgerOpen } />
        </div>
    ) : (
        <div className={ props.className }>
            <Swiper pagination={true} className="mySwiper">
                <SwiperSlide><LeftContent Arrow={ Arrow } className="burger-content_left" /></SwiperSlide>
                <SwiperSlide><RightContent className="burger-content_right" onBurgerOpen={ props.onBurgerOpen } /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Burger;
