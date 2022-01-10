import React, { useState, useEffect } from 'react'
import '../assets/css/documents.css';
import { Footer } from '../components';
import DocumentItem from '../components/DocumentItem';
import Loader from '../components/Loader';
import Shield from '../assets/imgs/shield.svg';
import Key from '../assets/imgs/key.svg'

const Documents = () => {
    const [ error, setError ] = useState("");
    const [ documentData, setDocumentData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const genericErrorMessage = "Упс... Не можем получить данные. Попробуйте позже";
        setError("");

        fetch("/api/document", {
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
                setDocumentData(data.documents);
            } else {
                setError(genericErrorMessage);
                setLoading(false);
            }
        }, async error => {
            setError(genericErrorMessage);
            setLoading(false);
        })
        .then(() => {
        console.log(documentData)
        })
        .catch(error => {
            setError(genericErrorMessage);
        })
    }, [])


    // const [documents, setDocuments] = useState([
    //     {id: 1, title: 'Политика конфиденциальности', image: Shield},
    //     {id: 2, title: 'Свидетельство о регистрации', image: Key},
    //     {id: 3, title: 'Государственная регистрация', image: Shield},
    //     {id: 4, title: 'Че то там чето тамное ага', image: Key},
    // ])

    return (
        <div>
            <div className="document-content mg-1">
                <h1 className="h1-faq">Документы</h1>
                { error ? (<div className="error-handler">{ error }</div>) 
                : loading ? <Loader /> : (      
                <div className="documents">
                    {documentData.map(_document =>
                        <DocumentItem document={_document} key={_document._id}/>
                    )}
                </div>
                ) }
            </div>
            
            <Footer color="pink" />
        </div>
    );
};

export default Documents;
