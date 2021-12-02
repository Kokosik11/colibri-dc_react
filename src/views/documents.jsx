import React, { useState } from 'react'
import '../assets/css/documents.css';
import { Footer } from '../components';
import DocumentItem from '../components/DocumentItem';
import Shield from '../assets/imgs/shield.svg';
import Key from '../assets/imgs/key.svg'

const Documents = () => {

    const [documents, setDocuments] = useState([
        {id: 1, title: 'Политика конфиденциальности', image: Shield},
        {id: 2, title: 'Свидетельство о регистрации', image: Key},
        {id: 3, title: 'Государственная регистрация', image: Shield},
        {id: 4, title: 'Че то там чето тамное ага', image: Key},

    ])

    return (
        <div>
            <h1 className="h1-faq">Документы</h1>
            <div className="documents">
                {documents.map(document =>
                    <DocumentItem document={document} key={document.id}/>
                )}
            </div>
            <Footer color="pink" />
        </div>
    );
};

export default Documents;
