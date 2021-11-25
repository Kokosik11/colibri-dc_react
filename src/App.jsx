import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Main from './views/main.jsx';

const App = () => {

  return(
    <div className="App">
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
        
      </Switch>
    </div>
  )
}

export default App;