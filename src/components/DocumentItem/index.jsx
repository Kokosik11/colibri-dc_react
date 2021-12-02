import React from 'react';

function DocumentItem(props) {
    return (
        <div className="document">
            <div className="extension">.pdf</div>
            <div className="document__content">
                <img src={ props.document.image } alt="icon: shield" />
                <span className="document__title">{ props.document.title }</span>
                <div className="document-footer">
                    <span className="cta"><a href="#">Скачать</a></span>
                    <span className="cta muted"><a href="#">Предпросмотр</a></span>
                </div>
            </div>
        </div>
    )
}

export default DocumentItem;
