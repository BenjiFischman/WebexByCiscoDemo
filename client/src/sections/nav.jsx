import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../components/auth';
import Status from '../components/status';

const Navbar = ({webex}) => {
  return (
    <div className="Container">
      <h1 className="Content">Navigation</h1>
      <hr></hr>
      <Link className="Content" to="/" href="/">Home</Link>
      <br></br>
      <Link className="Content" to="/room" href="/room">Room Demo</Link>
      <br></br>
      <hr></hr>
      <h2 className="Content">Host Sign In</h2>
      <Auth webex={webex} />
      <Status />
      <hr></hr>
    </div>
  );
};

Navbar.propTypes = {
  webex: PropTypes.any.isRequired
};
export default Navbar;