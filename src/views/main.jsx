import React, { useState } from 'react';
import Footer from '../components/Footer';

import {  Mainpage,
          Service, Whyus, Team, Projects, 
          Prefooter } from '../components';

function Main() {
  const [ refScroll, setRefScroll ] = useState({});
  const [ refBidsScroll, setRefBidsScroll ] = useState({});

  const setRefScrollFunction = (handleClick) => {
    setRefScroll({
      handleClick
    })

    console.log(refScroll)
  }

  const setRefBidsScrollFunction = (handleClick) => {
    setRefBidsScroll({
      handleClick
    })

    console.log(refBidsScroll)
  }


  return (
    <main className="App">
        <Mainpage articleRef={ refScroll } />
        <Service />
        <Whyus />
        <Team articleRef={ refBidsScroll } />
        <Projects setRefScroll={ setRefScrollFunction } />
        <Prefooter setRefScroll={ setRefBidsScrollFunction } />

        <Footer />

    </main>
  );
}

export default Main;
