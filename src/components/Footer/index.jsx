import './style.css';

import Logo from '../../assets/imgs/colibri-logo_footer.png';

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

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-content">
                <div className="colibri-info">
                    <div className="colibri-logo">
                        <img src={ Logo } alt="Colibri DC logo" />
                        <h2>Colibri Development Company</h2>
                    </div>
                    <div className="colibri-social">
                        <ul>
                            <li><a href="#"><img src={ TwitterIcon } alt="Twitter icon" /></a></li>
                            <li><a href="#"><img src={ FacebookIcon } alt="Facebook icon" /></a></li>
                            <li><a href="#"><img src={ InstagramIcon } alt="Instagram icon" /></a></li>
                            <li><a href="#"><img src={ TiktokIcon } alt="Tiktok icon" /></a></li>
                            <li><a href="#"><img src={ VkIcon } alt="vk icon" /></a></li>
                            <li><a href="#"><img src={ LinkedinIcon } alt="Linkening icon" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-links">
                    <LinkList title="Colibri" className="links-group">
                        <CLink href="#">Наши услуги</CLink>
                        <CLink href="#">Принципы</CLink>
                        <CLink href="#">Партнеры</CLink>
                        <CLink href="#">Проекты</CLink>
                    </LinkList>

                    <LinkList title="Соискатели" className="links-group">
                        <CLink href="#">Вакансии</CLink>
                        <CLink href="#">О компании</CLink>
                    </LinkList>

                    <LinkList title="Документы" className="links-group">
                        <CLink href="#">Публичная оферта</CLink>
                        <CLink href="#">Политика конфиденциальности</CLink>
                        <CLink href="#">Регистрация</CLink>
                    </LinkList>
                </div>

                <div className="mailing">
                    <h3>Рассылка</h3>

                    <button>Подписаться</button>
                </div>
            </div>
        </section>
    )
}

export default Footer;