import React, { useState } from 'react';

import "./style.css"

import Logo from '../../assets/imgs/colibri-logo.png';
import Phone from '../../assets/imgs/Calling.png';
import Close from '../../assets/imgs/close.png';

import LinkedinIcon from '../../assets/imgs/social/burger-linkedin.png';
import InstagramIcon from '../../assets/imgs/social/burger-instagram.png';
import TelegramIcon from '../../assets/imgs/social/burger-telegram.png';

import BgItem from '../../assets/imgs/burger-bg-item.png';

const CLink = props => <li><a href={ props.href }>{ props.children }</a></li>

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

const Burger = props => {
    const [ navigationBtn, setNavigationBtn ] = useState(false);

    const handleLeftButtonClick = () => {
        setNavigationBtn(false);
    }

    const handleRightButtonClick = () => {
        setNavigationBtn(true);
    }

    return (
        <div className={props.className}>
            <div className="burger-content_left">
                <header>
                    <div className="logo">
                        <img src={ Logo } alt="Colibri DC logo" />
                        <h2>Colibri Development Company</h2>
                    </div>
                </header>

                <div className="burger-left_content">
                    <div className="navigation">
                        <button className={ navigationBtn ? "bl-btn" : "bl-btn active" } onClick={ handleLeftButtonClick }>Навигация</button>
                        <button className={ navigationBtn ? "bl-btn active" : "bl-btn" } onClick={ handleRightButtonClick }>Наши услуги</button>
                        <div className={ navigationBtn ? "bl-selected right" : "bl-selected left" }></div>
                    </div>

                    <div className="burger-left_block">
                        <LinkGroup className="bl-links">
                            <CLink href="#">О компании</CLink>
                            <CLink href="#">Портфолио</CLink>
                            <CLink href="#">Услуги</CLink>
                            <CLink href="#">Свяжитесь с нами</CLink>
                        </LinkGroup>

                        <footer>
                            <div className="bl-footer">
                                <a href="#">Свидетельство о регистрации</a>
                                <div className="bl-dot"></div>
                                <a href="#">Карта сайта</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

            <div className="burger-content_right">
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
                        <a href="#">Почему нанять веб-агенство для своего проекта - это круто?</a>
                    </div>
                    <div className="burger-faq">
                        <a href="#">Часто задаваемые вопросы</a>
                    </div>

                    <div className="social-links">
                        <a href="#"><img src={ LinkedinIcon } alt="Linkedin icon" /></a>
                        <a href="#"><img src={ InstagramIcon } alt="Instagram icon" /></a>
                        <a href="#"><img src={ TelegramIcon } alt="Telegram icon" /></a>
                    </div>
                </div>

                <img className="burger-bg-item" src={ BgItem } alt="Background element" />
            </div>
        </div>
    )
}

export default Burger;
