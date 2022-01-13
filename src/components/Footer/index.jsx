import './style.css';

import { Link, NavLink } from "react-router-dom";

import Logo from '../../assets/imgs/colibri-logo_footer.svg';
import LogoPink from '../../assets/imgs/colibri-logo.svg';

// import TwitterIcon from '../../assets/imgs/social/twitter.png';
// import TiktokIcon from '../../assets/imgs/social/tiktok.png';
// import FacebookIcon from '../../assets/imgs/social/facebook.png';
// import VkIcon from '../../assets/imgs/social/vk.png';
import TelegramIcon from '../../assets/imgs/social/telegram.svg';
import InstagramIcon from '../../assets/imgs/social/instagram.svg';
import LinkedinIcon from '../../assets/imgs/social/linkedin.svg';

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
                            <li><a href="https://t.me/MikhailColibri" target="_blank"><img src={ TelegramIcon } alt="Telegram icon" /></a></li>   
                            <li><a href="https://www.linkedin.com/company/colibri-development-company" target="_blank"><img src={ LinkedinIcon } alt="Linkening icon" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-links">
                <LinkList title="Colibri" className="links-group">
                        <CLink href="#">Главная</CLink>
                        <CLink href="#">Мы предлагаем</CLink>
                        <CLink href="#">Почему мы</CLink>
                    </LinkList>

                    <LinkList title="О нас" className="links-group">
                        <li><Link to="/faq">Вопрос-ответ</Link></li>
                        <li><Link to="/roadmap">Разработка</Link></li>
                        <li><Link to="/businesscard">Визитка</Link></li>
                        {/* <CLink href="#">Партнеры</CLink> */}
                    </LinkList>

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