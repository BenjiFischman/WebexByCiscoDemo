import React from 'react';
import {useDispatch} from 'react-redux';


/**
 * Component to handle user input.
 * @returns {html}
 */
const Input = () => {
  // Example of redux on change handler instead of state to avoid re-render.
  const dispatch = useDispatch();

  /**
 * Handle title change with redux
 * @param {event} event Text change
 */
  function handleTitleChange(event) {
    dispatch({type: 'TITLE_INPUT', Title: event.target.value});
  }
  /**
 * Handle email changes with redux
 * @param {event} event Text change
 */
  function handlePeopleChange(event) {
    dispatch({type: 'EMAIL_INPUT', emails: event.target.value});
  }
  /**
 * Handle message changes with redux
 * @param {event} event Text change
 */
  function handleMessageChange(event) {
    dispatch({type: 'MESSAGE_INPUT', message: event.target.value});
  }

  return (
    <form className="Apple">
      <label id="title" htmlFor="title">Room Title:</label>
      <input type="text" id="title" name="input-title" onChange={handleTitleChange} />
      <br />
      <label id="email" htmlFor="guests">Guest Emails </label>
      <br />
      <label id="comma" htmlFor="guests">(comma separated):</label>
      <input
        type="text"
        id="guests"
        name="guests"
        onChange={handlePeopleChange}
      />
      <br />
      <label id="message" htmlFor="message">Room Message:</label>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleMessageChange}
      />
      <br />
    </form>
  );
};

export default Input;
