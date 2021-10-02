import React, { useState, useEffect } from 'react';

import './style.css';

const Closer = props => {
    const [ isOpen, setIsOpen ] = useState(props.isOpen);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen])

    return (
        <div className={ props.className }>
            <div className={ isOpen ? 'closer-down' : '' }></div>
            <div className={ isOpen ? 'closer-up' : '' }></div>
        </div>
    )
}

export default Closer;