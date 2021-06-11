import React from 'react';
import PropTypes from 'prop-types';

import Input from '../components/input';
import Room from '../components/room';

const RoomDemo = ({webex}) => {

  return (
    <div className="App">
      <div className="Container">
        <h1 className="Cyan">Room Demo</h1>
        <Input />
        <div>
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
