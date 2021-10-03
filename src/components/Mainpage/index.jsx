import react, { useState } from 'react';

import Triangle from '../../assets/imgs/bg-item-1.png';
import Closer from '../Closer';

import "./style.css"

const Mainpage = ({ articleRef }) => {
    const [ jobsClick, setJobsClick ] = useState(false);
    const [ closerOpen, setCloserOpen ] = useState(false);

    const handleJobsOnClick = () => {
        setJobsClick(true);

        setTimeout(() => {
            // window.location.assign('#projects');
            setCloserOpen(true);
            setJobsClick(false);
        }, 1500)

        setTimeout(() => articleRef.handleClick(), 3000)

        setTimeout(() => setCloserOpen(false), 5400);
    }

    return (
        <section className="main">
            <Closer className={ closerOpen ? "closer active" : "closer" } isOpen={ closerOpen } />

            <img className="triangle" src={ Triangle } alt="Background element"/>

            <h1 className="tagline">CОВЕРШЕНСТВО, РОЖДЕННОЕ <span className="purple">СТРАСТЬЮ</span></h1>

            <div className="jobs" onClick={ handleJobsOnClick }>
                <div className="jobs-content">
                    <div className="jobs-title">Смотреть наши работы</div>
                    <div className="line">
                        <div className={ jobsClick ? "active-line active" : "active-line" }></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainpage;