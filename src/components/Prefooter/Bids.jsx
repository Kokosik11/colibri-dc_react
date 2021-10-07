import React, { useState } from 'react';
import validator from 'validator';

import "./style.css"

const Bids = () => {
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ isPersonalData, setPersonalData ] = useState(false);
    const [ bidContent, setBidContent ] = useState('');
    const [ error, setError ] = useState('');

    const handleButtonClick = () => {
        // let numberReg = new RegExp("/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/");

        if(!isPersonalData || !email || !phoneNumber || !bidContent) {
            return setError('Заполните все поля!')
        }

        if(!validator.isEmail(email)) {
            return setError('Некорректный e-mail');
        }

        if(!phoneNumber.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
            return setError('Некорректный номер телефона');
        }

        let bidBody = {
            email,
            phone: phoneNumber,
            content: bidContent,
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
            setPhoneNumber('');
            setBidContent('');
            setPersonalData(false);
        })
    }

    return (
        <aside className="bids">
            <div className="bids-title">
                <h2>Оставь заявку</h2>
            </div>

            <div className="bids-forms">
                <div className="error-handler">{ error }</div>
                <div className="bids-contacts">
                    <input 
                        type="email" 
                        placeholder="Ваш e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Ваш номер телефона"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </div>

                <textarea 
                    className="bids-content" 
                    placeholder="Содержение заявки"
                    value={bidContent}
                    onChange={e => setBidContent(e.target.value)}
                ></textarea>
                
                <div className="bids-check">
                    <input 
                        type="checkbox" 
                        name="personal-data" 
                        id="personal-data"
                        checked={ isPersonalData ? "checked" : ""}
                        onChange={e => setPersonalData(!isPersonalData)}
                    />
                    <label htmlFor="personal-data">
                        соглашаюсь на обработку моих <span className="pink">персональных данных</span>
                    </label>
                </div>

                <button onClick={handleButtonClick}>Отправить заявку</button>
            </div>
        </aside>
    )
}

export default Bids;