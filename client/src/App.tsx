import React from 'react';

import RoomDemo from './demosPages/roomDemo';

/* eslint-disable  */
interface webex {
  webex: any;
}

const App = ({webex}: webex) => {
/* eslint-enable */
  return (
    <RoomDemo webex={webex}></RoomDemo>
  );
};

export default App;
