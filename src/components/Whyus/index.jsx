import "./style.css";
import "../../assets/sass/stars.sass";
import "../../assets/css/meteors.css";

import PlanetBlue from "../../assets/imgs/planets/planet-blue.svg";
import PlanetPurple from "../../assets/imgs/planets/star.svg";
import PlanetPink from "../../assets/imgs/planets/planet-pink.svg";
import PlanetYellow from "../../assets/imgs/planets/planet-yellow.svg";

import IconFire from "../../assets/imgs/planets/icon-fire.svg";
import IconLightning from "../../assets/imgs/planets/icon-lightning.svg";
import IconRuby from "../../assets/imgs/planets/icon-ruby.svg";
import IconHeart from "../../assets/imgs/planets/icon-heart.svg";

import SunImg from "../../assets/imgs/planets/sun.svg";

let planets = [
    { id: 0, title: "Planet Blue", hiddenText: "Конкурентная стоимость", image: PlanetBlue, icon: IconFire },
    { id: 1, title: "Planet Purple", hiddenText: "Скорость разработки", image: PlanetPurple, icon: IconLightning },
    { id: 2, title: "Planet Pink", hiddenText: "Индивидуальность", image: PlanetPink, icon: IconRuby },
    { id: 3, title: "Planet Yellow", hiddenText: "Поддержка", image: PlanetYellow, icon: IconHeart },
]

const Planet = (props) => {

    return (
        <div className="planet">
            <div className="planet-image">
                <img src={props.image} alt={props.title}/>
            </div>

            <div class="planet-title">
                <img src={props.icon} alt={`${props.title} Icon`} />
                <span>{props.hiddenText}</span>
            </div>
        </div>
    )
}

const Whyus = () => {
    return (
        <section className="why-us">
            <div className="stars-wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>

            <div className="meteor-wrapper">
                <div class="meteor"></div>
                <div class="meteor"></div>
                <div class="meteor"></div>
            </div>
            
            <div className="why-us_title">
                <div className="prefix"></div>
                <h2>Почему колибри</h2>
            </div>

            <div className="why-us_content">
                <div className="why-us_text">Мы проектируем и создаем digital решения, которые нужны клиентам.</div>
                <div className="why-us_pink">И мы весьма хороши в своем деле</div>
            </div>

            <div className="planets">
                { planets.map(planet => (
                    <Planet {...planet} />
                )) }
            </div>
        </section>
    )
}

export default Whyus