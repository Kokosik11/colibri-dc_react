import '../assets/css/roadmap.css';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import RoadmapCard from '../components/RoadmapCard';

export default function Roadmap() {

    const [cards, SetCards] = useState([
        {id: 1, title: 'Прототипирование макета', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
        {id: 2, title: 'Верстка макета', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
        {id: 3, title: 'Функциональная часть', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
        {id: 4, title: 'Тестирование', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
        {id: 5, title: 'Деплой', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
        {id: 6, title: 'SEO-продвижение', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
    ])

    return (
        <main className="App">
            <h1 className="h1-faq">ПРОЦЕСС РАЗРАБОТКИ</h1>
            <div className="roadmap-block">
                {cards.map(card =>
                    <RoadmapCard card={card} key={card.id}/>
                )}
            </div>
            <Footer color="pink" />
        </main>
    )
}
