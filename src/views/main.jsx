import React, { useState } from 'react';

import {  Mainpage,
          Service, Whyus, Projects, 
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
        <Whyus />
        <Service />
        <Projects setRefScroll={ setRefScrollFuncion } />
        <Prefooter />
    </main>
  );
}

export default Main;
