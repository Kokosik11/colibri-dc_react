import React from 'react'
import "./style.css";

const RoadmapCard = (props) => {
    return (
        <div className="card-block">
            <div className={`card-block__front ${props.card.class ? props.card.class : "" }`}>
                <div className="card-block__front__title">
                    <span className="number">0{props.card.id}.</span>
                    <span className="title">{props.card.title}</span>
                </div>
                <span className="card-block__front__description">
                    {props.card.body}
                </span>
            </div>
        </div>
    );
};

export default RoadmapCard;
