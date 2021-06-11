import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';


/**
 * Represents Auth logic.
 *@param {webex} global custom config
 * Inspired by https://github.com/webex/webex-js-sdk/blob/master/packages/node_modules/samples/browser-auth-implicit/index.html
 * @returns {html}
 */
const Auth = ({webex}) => {
  const dispatch = useDispatch();


  /**
 * On click handler Auth logic.
 * @param {Object} event Mouse click event.
 */
  function handleAuth(event) {
    event.preventDefault();

    // initiate the login sequence if not authenticated.
    webex.authorization.initiateLogin();
    dispatch({type: 'LOG_ON', Auth: true});
  }
  /**
 * On click handler Sign out auth logic.
 * @param {Object} event Mouse click event.
 */
  function handleLogout(event) {
    event.preventDefault();

    if (webex.canAuthorize) {
      // if already authenticated, logout on click
      webex.logout();
      dispatch({type: 'LOG_ON', Auth: false});
    }
    else {
      // No user is authenticated
      // Update the state b/c the user did not complete the sign in.
      // eslint-disable-next-line
      // TODO: leverage local storage
      dispatch({type: 'LOG_ON', Auth: false});
      // eslint-disable-next-line
      alert('Cannot logout when no user is authenticated');
    }
  }

  return (
    <div>
      <form>
        <input type="button" value="Log On" id="log-in-btn" onClick={handleAuth} />
        <label id="auth-on" htmlFor="log-in-btn" className="Apple" htmlFor="log-in-btn"> Click here to authenticate</label>
      </form>
      <form>
        <input type="button" value="Log Out" id="log-out-btn" onClick={handleLogout} />
        <label id="auth-off" className="Apple" htmlFor="log-out-btn"> Click here to logout</label>
      </form>
      <br />
    </div>
  );
};

Auth.propTypes = {
  webex: PropTypes.any.isRequired
};
export default Auth;
