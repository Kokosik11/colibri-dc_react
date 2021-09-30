import "./style.css"

import Logo from '../../assets/imgs/colibri-logo_burger.png';
import Phone from '../../assets/imgs/Calling.png';
import Close from '../../assets/imgs/close.png';

const Burger = props => {
    return (
        <div className="burger">
            <div className="burger-content_left">
                <header>
                    <div className="logo">
                        <img src={ Logo } alt="Colibri DC logo" />
                        <h2>Colibri Development Company</h2>
                    </div>
                </header>
            </div>

            <div className="burger-content_right">
                <header>
                    <div className="phone">
                        <img src={ Phone } alt="Phone icon" />
                        <a href="tel:+375295448533" className="number">375 29 544 85 33</a>
                    </div>

                    <div className="close" onClick={ props.onClickFunction }>
                        <img src={ Close } alt="Close icon" />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Burger;
