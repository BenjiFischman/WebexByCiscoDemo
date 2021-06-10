import React from 'react';
import {useDispatch} from 'react-redux';

import Navbar from './sections/nav'

import Home from './sections/home';
import RoomDemo from './demosPages/roomDemo';

import { Switch, Route } from "react-router-dom";

interface webex {
  webex: any;
}

const App = ({webex}: webex) => {
const dispatch = useDispatch();
if (webex.canAuthorize) {
  dispatch({type: 'LOG_ON', Auth: true});
}
  return (

    <div className="App">
    <Navbar></Navbar>
    <Switch>
      <Route exact path={"/"}> <Home></Home></Route>
      <Route exact path={"/room"}><RoomDemo webex={webex}></RoomDemo></Route>


    </Switch>

    </div>
    
  );
};

export default App;
