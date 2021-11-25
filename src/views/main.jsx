import React, { useState } from 'react';

import {  Header, Mainpage, Burger,
          Service, Whyus, Projects, 
          Prefooter, Footer } from '../components' ;

function Main() {
  const [ isBurgerOpened, setIsBurgerOpened ] = useState(false);
  const [ refScroll, setRefScroll ] = useState({});

  const setRefScrollFuncion = (handleClick) => {
    setRefScroll({
      handleClick
    })

    console.log(refScroll)
  }

  const handleBurgerOpenButtonClick = () => {
    setIsBurgerOpened(true);
    // document.querySelector('.burger').classList.add('active');

    setTimeout(() => {
      // document.querySelector('.burger').classList.remove('active');
      document.querySelector('.burger').classList.add('opened');
    }, 1500)

    setTimeout(() => {
      document.querySelector('.burger-content_left').style.display = 'block';
      document.querySelector('.burger-content_right').style.display = 'block';
      
    }, 1500)

    setTimeout(() => {
      document.querySelector('.burger-content_left').classList.add('active');
      document.querySelector('.burger-content_right').classList.add('active');
    }, 2000)
  }

  const handleBurgerCloseButtonClick = () => {
    setIsBurgerOpened(false);
  }

  return (
    <main className="App">
        <Header onBurgerOpen={ handleBurgerOpenButtonClick } />
        { isBurgerOpened ? <Burger onBurgerOpen={ handleBurgerCloseButtonClick } className='burger' /> : null }
        <Mainpage articleRef={ refScroll } />
        <Whyus />
        <Service />
        <Projects setRefScroll={ setRefScrollFuncion } />
        <Prefooter />
        <Footer />
    </main>
  );
}

export default Main;
