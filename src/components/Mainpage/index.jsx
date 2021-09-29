import Triangle from '../../assets/imgs/bg-item-1.png';

import "./style.css"

const Mainpage = () => {
    return (
        <section className="main">
            <img className="triangle" src={ Triangle } alt="Background element"/>

            <h1 className="tagline">CОВЕРШЕНСТВО, РОЖДЕННОЕ <span className="purple">СТРАСТЬЮ</span></h1>

            <div className="jobs">
                <div className="jobs-content">
                    <div className="jobs-title">Смотреть наши работы</div>
                    <div className="line">
                        <div className="active-line"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainpage;