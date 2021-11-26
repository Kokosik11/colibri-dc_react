import '../assets/css/faq.css'
import ArrowDown from '../assets/imgs/arrow-down.svg';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';


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

    useEffect(() => {
        let _questions = [
            { id: 0, title: "Почему стоит нанять веб-агенство?", content: "Сами не ебём" },
            { id: 1, title: "Как долго будет выполняться разработка", content: "Зависит от типа сайта. Лендинг от года, магазин - 10 лет" },
            { id: 2, title: "Как вы можете гарантировать качество?", content: "Бля буду, слово пацана. Зуб свой девушки отдам" },
            { id: 3, title: "Что будет после завершения разработки моего проекта?", content: "Сначала дождитесь. Некоторые не дожидались" },
            { id: 4, title: "Как я могу проверить этапы разработки моего проекта?", content: "На слово верь, уёбок (хероку)" },
            { id: 5, title: "Какие технологии вы используйте?", content: "Технология технологического прогресса 20-го века - ПК" },
            { id: 6, title: "Сколько будет стоить разработка?", content: "Лендинг - 10к зелёных, супер простой магазин - 15-20к зелёных" },
            { id: 7, title: "Какие сервисы вы можете подключить к моей разработке?", content: "Onlyfans/pornhub" },
        ]

        setQuestions(_questions);
    }, [])

    return (
        <main className="App">
            <h1 className="h1-faq">Faq</h1>
            <div className="faq-block">
                { questions.map(question => (
                    <Question question={question} key={question.id} />
                ))}
            </div>

            <Footer color="pink" />
        </main>
    )
}

export default Faqpage;