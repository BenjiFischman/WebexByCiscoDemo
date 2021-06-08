import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

const Auth = ({ webex }) => {
  const dispatch = useDispatch();

  function handleAuth(event) {
    event.preventDefault();
    // Now, let's set up the event listener for the Authenticate Button

    // initiate the login sequence if not authenticated.
    webex.authorization.initiateLogin();
    console.log(webex);
    dispatch({ type: 'LOG_ON', Auth: true });
  }

  function handleLogout(event) {
    event.preventDefault();

    if (webex.canAuthorize) {
      // if already authenticated, logout on click
      webex.logout();
      dispatch({ type: 'LOG_ON', Auth: false });
    } else {
      // No user is authenticated
      console.log('cannot logout when no user is authenticated');
    }
  }
  return (
    <div>
      <form id="authorization">
        <input
          id="authenticate-button"
          title="authenticate"
          type="submit"
          onClick={handleAuth}
        ></input>
        <label htmlFor="authenticate">click here to authenticate</label>
      </form>
      <form id="logout">
        <input
          id="logout-button"
          title="logout"
          type="submit"
          onClick={handleLogout}
        ></input>
        <label htmlFor="logout"> click here to logout</label>
      </form>{' '}
    </div>
  );
};
Auth.propTypes = {
  webex: PropTypes.any,
};
export default Auth;
