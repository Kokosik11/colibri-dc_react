import React from 'react';

function TeamMember(props) {
    return (
        <div className="team-member">
            <img src={ props.member.image } alt="photo: team-member" />
            <span className="team-member__name">{ props.member.name }</span>
            <span className="team-member__position">{ props.member.position }</span>
        </div>
    )
}

export default TeamMember;