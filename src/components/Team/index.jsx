import "./style.css";

import React, { useState } from "react";
import TeamMember from "../TeamMember";
import Michail from '../../assets/imgs/team-photos/michail.png';
import Kirill from '../../assets/imgs/team-photos/kirill.png';
import Tim from '../../assets/imgs/team-photos/tim.png'
import Kostya from '../../assets/imgs//team-photos/konstantin.png';

const Team = props => {

    const [members, setMembers] = useState([
        {id: 1, name: 'Михаил', position: "CEO", image: Michail},
        {id: 2, name: 'Кирилл', position: "Development Manager", image: Kirill},
        {id: 3, name: 'Тимофей', position: "Backend Engineer", image: Tim},
        {id: 4, name: 'Константин', position: "Frontend Engineer", image: Kostya},
    ])

    return (
        <section id="team" className="team">
            <div className="team-title">
                <div className="prefix"></div>
                <h2>Наша команда</h2>
            </div>
            <div className="team-content">
            {members.map(member =>
                <TeamMember member={member} key={member.id}/>
            )}
            </div>
            <button><a href="#">Заказать работу</a></button>
        </section>
    )
}

export default Team;