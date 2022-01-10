import React, { useState } from 'react'

import Noise from '../../assets/imgs/Noise.png';

import "./style.css"

const priceLevelFunc = priceLevel => {
    let price = "";
    for(let i = 0; i < priceLevel; i++) {
        price += "$";
    }

    return price;
}

const FirefoxCard = props => {
    return !props.title ? (
        <div className={ props.cardClass ? `card-firefox ${ props.cardClass }` : "card-firefox"}>
            <div className="card-content">
                <img className="card-noise" src={ Noise } alt="Background noise" />
            </div>
        </div>
    ) : (
        <div className={ props.cardClass ? `card-firefox ${ props.cardClass }` : "card-firefox"}>
            <div className="card-content">
                <img className="card-noise" src={ Noise } alt="Background noise" />
                <div className="card-wrapper">
                    <div className="card-description">
                        {props.description ? props.description : "This text about this card"}
                    </div>
                    <h3 className="card-title">
                        {props.title ? props.title : "This text is title"}
                    </h3>
                    <div className="card-term">
                        {props.term ? props.term : "This text is term"}
                    </div>
                </div>

                {props.priceLevel ? 
                <div className="card-price">
                    <div className="card-price_level">{ priceLevelFunc(props.priceLevel) }</div>
                    <div className="card-price_bg">{ priceLevelFunc(props.priceLevel) }</div>
                </div> 
                : ""}
            </div>
        </div>
    )
}

export default FirefoxCard;