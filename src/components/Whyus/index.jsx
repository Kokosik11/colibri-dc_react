import "./style.css";

import ListIcon from "../../assets/imgs/list.png";
import Sphere from "../../assets/imgs/gb-circle.png";
import SphereSmall from "../../assets/imgs/bg-circle-s.png";

const ListGroup = props => <div className={props.className}>{props.children}</div> 

const List = props => (
    <div className={props.className}>
        <img src={ListIcon} alt="List icon" />
        {props.children}
    </div>
)

const Whyus = () => {
    return (
        <section className="why-us">
            <div className="why-us_title">
                <div className="prefix"></div>
                <h2>Почему колибри</h2>
            </div>

            <div className="why-us_content">
                <div className="why-us_text">Мы проектируем и создаем digital решения, которые нужны клиентам.</div>
                <div className="why-us_pink">И мы весьма хороши в своем деле</div>

                <ListGroup className="why-us_list">
                    <List>Скорость разработки</List>
                    <List>Индивидуальность</List>
                    <List>Поддержка</List>
                </ListGroup>
            </div>

            <img className="sphere-small" src={SphereSmall} alt="Background circle" />
            <img className="sphere" src={Sphere} alt="Background circle" />

        </section>
    )
}

export default Whyus