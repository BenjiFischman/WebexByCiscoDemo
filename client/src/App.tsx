import React from 'react';
import {useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './sections/nav';
import Home from './sections/home';
import RoomDemo from './demosPages/roomDemo';

/* eslint-disable */
//Example of inline typing a global CDN package 
type webex = {
  webex: any;
}

const App = ({webex}: webex) => {
 /* eslint-enable */
  const dispatch = useDispatch();

  if (webex.canAuthorize) {
    dispatch({type: 'LOG_ON', Auth: true});
  }

  return (

    <div className="App">
      <Navbar webex={webex}></Navbar>
      <Switch>
        <Route exact path="/"> <Home></Home></Route>
        <Route exact path="/room"><RoomDemo webex={webex}></RoomDemo></Route>
      </Switch>
    </div>);
};

App.propTypes = {
  webex: PropTypes.any.isRequired
};

export default App;