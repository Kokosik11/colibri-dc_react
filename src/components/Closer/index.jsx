import React, { useState, useEffect } from 'react';

import Logo from '../../assets/imgs/colibri-logo-b.png';

import './style.css';

const Closer = props => {
    const [ isOpen, setIsOpen ] = useState(props.isOpen);

    useEffect(() => {
        setIsOpen(props.isOpen);
    }, [props.isOpen])

    return (
        <div className={ props.className }>
            <div className={ isOpen ? 'closer-down' : '' }></div>
            <img src={ Logo } className="colibri-logo-b" />
            <div className={ isOpen ? 'closer-up' : '' }></div>
        </div>
    )
}

export default Closer;