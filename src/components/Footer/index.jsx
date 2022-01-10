import './style.css';

import { Link, NavLink } from "react-router-dom";

import Logo from '../../assets/imgs/colibri-logo_footer.png';
import LogoPink from '../../assets/imgs/colibri-logo.png';

import TwitterIcon from '../../assets/imgs/social/twitter.png';
import FacebookIcon from '../../assets/imgs/social/facebook.png';
import InstagramIcon from '../../assets/imgs/social/instagram.png';
import TiktokIcon from '../../assets/imgs/social/tiktok.png';
import VkIcon from '../../assets/imgs/social/vk.png';
import LinkedinIcon from '../../assets/imgs/social/linkedin.png';

const CLink = props => {
    return <li><a href={ props.href }>{ props.children }</a></li>
}

const LinkList = props => {
    return (
        <div className={ props.className }>
            <h3 className="links-title">{ props.title }</h3>
            <div className="links-list">
                <nav>
                    <ul>
                        { props.children }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const Footer = ({color = "blue"}) => {
    return (
        <section className={`footer ${color}`}>
            <div className="footer-content">
                <div className="colibri-info">
                    <div className="colibri-logo">
                        { color === "pink" ? (
                            <img src={ LogoPink } alt="Colibri DC logo" />
                        ) : (
                            <img src={ Logo } alt="Colibri DC logo" />
                        )}
                        <h2>Colibri Development Company</h2>
                    </div>
                    <div className="colibri-social">
                        <ul>
                            {/* <li><a href="#"><img src={ TwitterIcon } alt="Twitter icon" /></a></li> */}
                            {/* <li><a href="#"><img src={ FacebookIcon } alt="Facebook icon" /></a></li> */}
                            <li><a href="https://www.instagram.com/colibridevcom/" target="_blank"><img src={ InstagramIcon } alt="Instagram icon" /></a></li>
                            {/* <li><a href="#"><img src={ TiktokIcon } alt="Tiktok icon" /></a></li> */}
                            <li><a><img src={ VkIcon } alt="vk icon" /></a></li>   
                            <li><a href="https://www.linkedin.com/company/colibri-development-company" target="_blank"><img src={ LinkedinIcon } alt="Linkening icon" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-links">
                    <LinkList title="О нас" className="links-group">
                        <li><Link to="/faq">Вопрос-ответ</Link></li>
                        <li><Link to="/roadmap">Разработка</Link></li>
<<<<<<< HEAD
                        <li><Link to="/businesscard">Визитка</Link></li>
=======
>>>>>>> 55e65b916bdced350361962e0d6b7fdc03e871fa
                        {/* <CLink href="#">Партнеры</CLink> */}
                    </LinkList>

                    {/* <LinkList title="Соискатели" className="links-group">
                        <CLink href="#">Вакансии</CLink>
                        <CLink href="#">О компании</CLink>
                    </LinkList> */}

                    <LinkList title="Документы" className="links-group">
                        <li><Link to="/documents">Публичная оферта</Link></li>
                        <li><Link to="/documents">Политика конфиденциальности</Link></li>
                        <li><Link to="/documents">Государственная регистрация</Link></li>
                    </LinkList>
                </div>

                {/* <div className="mailing">
                    <h3>Рассылка</h3>

                    <button>Подписаться</button>
                </div> */}
            </div>
        </section>
    )
}

export default Footer;