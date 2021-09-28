import Logo from '../../assets/imgs/colibri-logo.png';

import "./style.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={ Logo } alt="Colibri DC logo" />
                    <h2>Colibri Development Company</h2>
                </div>
    
                <div className="burger">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" width="34" height="5" rx="2.5" fill="#7D00FF"/>
                        <rect y="15" width="42" height="5" rx="2.5" fill="#7D00FF"/>
                        <rect y="29" width="42" height="5" rx="2.5" fill="#7D00FF"/>
                    </svg>                    
                </div>
            </div>
        </header>
    )
}

export default Header;