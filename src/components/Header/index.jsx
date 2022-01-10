import { Link, NavLink } from "react-router-dom";

import Logo from '../../assets/imgs/colibri-logo.png';

import "./style.css"


const Header = props => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <img src={ Logo } alt="Colibri DC logo" />
                    <h2>Colibri Development Company</h2>
                </Link>
    
                <div onClick={ props.onBurgerOpen } className="burger-btn">
                    <div></div>           
                    <div></div>           
                    <div></div>           
                </div>
            </div>
        </header>
    )
}

export default Header;