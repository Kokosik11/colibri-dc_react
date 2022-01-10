import React, {useState} from 'react';

import "./style.css";

import Close from '../../assets/imgs/close.svg';

const PreviewDoc = props => (
        <div className="modal">
            <div className="modal-preview" onClick={ () => props.openFunc(false) }>
                <div className="modal-content">
                    <div className="close" onClick={ () => props.openFunc(false) }>
                        <img src={ Close } alt="Close icon" />
                    </div>
                    <img className="preview-image" src={props.prevImg} alt="Preview image" />
                </div>
            </div>
        </div>
    )

function DocumentItem(props) {
    const [ isModalOpen, setModalOpen ] = useState(false);

    const handleModalClick = (state) => {
        setModalOpen(state)
    }

    return (
        <div className="document">
            <div className="extension">.pdf</div>
            <div className="document__content">
                <img src={ `${props.document.documentIconURL}` } alt="icon: shield" />
                <span className="document__title">{ props.document.title }</span>
                <div className="document-footer">
                    <span className="cta"><a target="_blank" href={`${props.document.documentURL}`}>Скачать</a></span>
                    <span className="cta muted">
                        <a 
                            onClick={() => handleModalClick(true)}
                        >
                            Предпросмотр
                        </a>
                    </span>

                </div>
            </div>
            { isModalOpen && 
            <PreviewDoc
                prevImg={`${props.document.prevURL}`} 
                open={isModalOpen} 
                openFunc={handleModalClick}
             /> }
        </div>
    )
}

export default DocumentItem;
