import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import {  Header, Footer, Burger } from './components';

import Main from './views/main.jsx';
import Faqpage from './views/faqpage.jsx';
import Roadmap from './views/roadmap.jsx';
import Documents from './views/documents';
import BusinessCard from './views/businesscard.jsx';

const App = () => {
  const [ isBurgerOpened, setIsBurgerOpened ] = useState(false);

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

  return(
    <div className="App">
      <Header onBurgerOpen={ handleBurgerOpenButtonClick } />
      { isBurgerOpened ? <Burger onBurgerOpen={ handleBurgerCloseButtonClick } className='burger' /> : null }
      <Switch>
        
<<<<<<< HEAD
        <Route path='/businesscard'>
          <BusinessCard />
        </Route>
=======
>>>>>>> 55e65b916bdced350361962e0d6b7fdc03e871fa
        <Route path='/documents'>
          <Documents />
        </Route>
        <Route path='/roadmap'>
          <Roadmap />
        </Route>
        <Route path='/faq'>
          <Faqpage />
        </Route>
        <Route exec path='/'>
          <Main />
        </Route>

        {/* <Redirect from='/' to='/home' /> */}
      </Switch>
    </div>
  )
}

export default App;