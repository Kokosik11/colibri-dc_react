import '../assets/css/faq.css'
import ArrowDown from '../assets/imgs/arrow-down.svg';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

import Loader from '../components/Loader';

const Question = props => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleQuestClick = () => {
        setIsOpen(isOpen => !isOpen);
    } 

    return (
        <div className={`faq ${isOpen && "open" || ""}`}>
            <div className="faq-back_block"></div>
            <div onClick={handleQuestClick} className="faq-content">
                <div className="faq-title">
                    <h2 className="question">{ props.question.title }</h2>
                    <img className={`question-arrow ${isOpen && "open" || ""}`} src={ ArrowDown } alt="Arrow down icon" />
                </div>
                { isOpen && (
                    <span className="answer">
                        { props.question.content }
                    </span>
                )}
                
            </div>
        </div>
        
    )
}

function Faqpage() {
    const [ questions, setQuestions ] = useState([]);
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        const genericErrorMessage = "Упс... Не можем получить данные. Попробуйте позже";
        setError("");

        fetch(process.env.NODE_ENV !== 'production' ? "http://localhost:3010/api/faq" : "/api/faq", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            if(response.status === 502) {
                setError("В Базе данных нет записей")
            } else if(response.ok) {
                const data = await response.json();
                setLoading(false);
                setQuestions(data.faq);
            } else {
                setError(genericErrorMessage);
                setLoading(false);
            }
        }, async error => {
            setError(genericErrorMessage);
            setLoading(false);
        })
        .catch(error => {
            setError(genericErrorMessage);
            console.log(error);
        })
    }, [])

    return (
        <main className="App">
            <h1 className="h1-faq">Faq</h1>
            { error ? (<div className="error-handler">{ error }</div>) 
            : loading ? <Loader /> : (
                <div className="faq-block">
                    { questions.map(question => (
                        <Question question={question} key={question._id} />
                    ))}
                </div>
                ) }

            <Footer color="pink" />
        </main>
    )
}

export default Faqpage;