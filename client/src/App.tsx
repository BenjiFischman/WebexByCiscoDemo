import React from 'react';
import {useDispatch} from 'react-redux';
import RoomDemo from './demosPages/roomDemo';

/* eslint-disable  */
interface webex {
  webex: any;
}

const App = ({webex}: webex) => {
/* eslint-enable */
const dispatch = useDispatch();
if (webex.canAuthorize) {
  dispatch({type: 'LOG_ON', Auth: true});
}
  return (
    <RoomDemo webex={webex}></RoomDemo>
  );
};

export default App;
