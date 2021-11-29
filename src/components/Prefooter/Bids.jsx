import React, { useState } from 'react';
import validator from 'validator';

import "./style.css"

import Telegram from '../../assets/imgs/Telegram.svg';

const Bids = () => {
    const [ email, setEmail ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ isPersonalData, setPersonalData ] = useState(false);
    const [ error, setError ] = useState('');

    const handleButtonClick = () => {
        // let numberReg = new RegExp("/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/");

        if(!isPersonalData || !email || !userName) {
            return setError('Заполните все поля!')
        }

        if(!validator.isEmail(email)) {
            return setError('Некорректный e-mail');
        }

        // if(!phoneNumber.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
        //     return setError('Некорректный номер телефона');
        // }

        let bidBody = {
            email,
            username: userName
        }

        fetch("/bid/create", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bidBody)
        })
        .then(response => {
            setError('');
            setEmail('');
            setUserName('');
            setPersonalData(false);
        })
    }

    const handleTelegramButtonClick = (e) => {
        e.preventDefault();
    }

    return (
        <aside className="bids">
            <div className="bids-recursive first"></div>
            <div className="bids-recursive second"></div>
            <div className="bids-content">
                <div className="bids-title">
                    <h2>Оставь заявку</h2>
                </div>
                
                <div className="bids-company">
                    Colibri Development Company
                </div>

                <button className="telegram-send" onClick={handleTelegramButtonClick}>
                    <img src={Telegram} alt="Telegram icon"/>
                    <span>Написать</span>
                </button>

                <div className="or-email">
                    <div className="hline"></div>
                    <div className="or-mail_title">или через email</div>
                    <div className="hline"></div>
                </div>

                <div className="bids-forms">
                    <div className="error-handler">{ error }</div>
                    <div className="bids-contacts">
                        <div className="bids-input">
                            <label htmlFor="email">Ваш email*</label>
                            <input 
                                id="email"
                                type="email" 
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="bids-input">
                            <label htmlFor="username">Ваше имя*</label>
                            <input 
                                id="username"
                                type="text" 
                                placeholder="Иванов Иван"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="bids-check">
                        <input 
                            type="checkbox" 
                            name="personal-data" 
                            id="personal-data"
                            checked={ isPersonalData ? "checked" : ""}
                            onChange={e => setPersonalData(!isPersonalData)}
                        />
                        <label htmlFor="personal-data">
                            соглашаюсь на обработку моих <span className="blue">персональных данных</span>
                        </label>
                    </div>

                    <button className="bids-submit" onClick={handleButtonClick}>Отправить заявку</button>
                </div>
            </div>
        </aside>
    )
}

export default Bids;