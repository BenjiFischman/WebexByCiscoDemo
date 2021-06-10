import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Update the UI state without forcing a rerender, mapState to props example
 *@param {props} props isOnline bool status of auth
 * @returns {html} Status that indicates auth state
 */
const Status = (props) => (
  <div>
    <h3 className="Content">Status:</h3>
    {props.isOnline === true && <div className="Apple">Signed On</div>}
    {props.isOnline === false && <div className="CiscoRed">Signed Off</div>}{' '}
  </div>
);

Status.propTypes = {
  isOnline: PropTypes.bool.isRequired
};

/**
 * Handle email changes with redux
 * @param {state} state redux state mapped to prop of component
 * @returns {boolean} isOnline
 */
function mapStateToProps(state) {
  return {isOnline: state.AuthReducer.loggedOn};
}
export default connect(mapStateToProps)(Status);
