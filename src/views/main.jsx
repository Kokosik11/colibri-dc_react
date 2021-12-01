import React, { useState } from 'react';
import Footer from '../components/Footer';

import {  Mainpage,
          Service, Whyus, Team, Projects, 
          Prefooter } from '../components';

function Main() {
  const [ refScroll, setRefScroll ] = useState({});

  const setRefScrollFuncion = (handleClick) => {
    setRefScroll({
      handleClick
    })

    console.log(refScroll)
  }


  return (
    <main className="App">
        <Mainpage articleRef={ refScroll } />
        <Service />
        <Whyus />
        <Team />
        <Projects setRefScroll={ setRefScrollFuncion } />
        <Prefooter />

        <Footer />

    </main>
  );
}

export default Main;
