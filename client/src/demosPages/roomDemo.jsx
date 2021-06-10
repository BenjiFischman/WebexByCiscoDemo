import React from 'react';
import PropTypes from 'prop-types';

import Input from '../components/input';
import Auth from '../components/auth';
import Status from '../components/status';
import Room from '../components/room';

const RoomDemo = ({webex}) => {

  return (
    <div className="App">
      <div className="Container">
        <h1 className="Cyan">Webex By Cisco Demo</h1>
        <h2 className="Content">Host Sign In</h2>
        <Auth webex={webex} />
        <Status />
        <h1 className="Cyan">Room Demo</h1>
        <Input />

        <div>
          <h1 className="Cyan">Start a Room!</h1>
          <Room webex={webex} />
        </div>
      </div>
    </div>
  );
};

RoomDemo.propTypes = {
  webex: PropTypes.any.isRequired
};
export default RoomDemo;
