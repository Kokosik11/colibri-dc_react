import './App.css';
import React, { useState } from 'react';

import {  Header, Mainpage, Burger,
          Service, Whyus, Projects, 
          Partners, Footer } from './components' ;

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const handleBurgerButtonClick = () => {
      setIsBurgerOpened(!isBurgerOpened);
  }

  return (
    <main className="App">
        <Header onClickFunction={handleBurgerButtonClick} />
        {isBurgerOpened ? <Burger onClickFunction={handleBurgerButtonClick} /> : null }
        <Mainpage />
        <Service />
        <Whyus />
        <Projects />
        <Partners />
        <Footer />
    </main>
  );
}

export default App;
