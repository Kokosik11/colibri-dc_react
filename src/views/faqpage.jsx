import '../assets/css/faq.css'
import ArrowDown from '../assets/imgs/arrow-down.svg';
import React, { useState } from 'react';


function Faqpage() {
    return (
        <main className="App">
            <h1 className="h1-faq">Faq</h1>
            <div className="faq-block">
                <div className="faq">
                    <div className="faq-title">
                        <h2 className="question">Lorem ipsum dolores manata</h2>
                        <img src={ ArrowDown } alt="Arrow down icon" />
                    </div>
                    <span className="answer">
                        Lorem Ipsum is simply dummy text of the in printing 
                        and typesetting industry. Lorem on Ipsum has been the 
                        industry's standard and dummy text ever since the 1500s
                    </span>
                </div>
                <div className="faq">
                    <div className="faq-title">
                        <h2 className="question">Lorem ipsum dolores manata</h2>
                        <img src={ ArrowDown } alt="Arrow down icon" />
                    </div>
                    <span className="answer"></span>
                </div>
                <div className="faq">
                    <div className="faq-title">
                        <h2 className="question">Lorem ipsum dolores manata</h2>
                        <img src={ ArrowDown } alt="Arrow down icon" />
                    </div>
                    <span className="answer"></span>
                </div>
                <div className="faq">
                    <div className="faq-title">
                        <h2 className="question">Lorem ipsum dolores manata</h2>
                        <img src={ ArrowDown } alt="Arrow down icon" />
                    </div>
                    <span className="answer"></span>
                </div>
                <div className="faq">
                    <div className="faq-title">
                        <h2 className="question">Lorem ipsum dolores manata</h2>
                        <img src={ ArrowDown } alt="Arrow down icon" />
                    </div>
                    <span className="answer"></span>
                </div>
            </div>
        </main>
    )
}

export default Faqpage;