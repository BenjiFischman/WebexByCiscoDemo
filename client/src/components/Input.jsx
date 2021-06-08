import React from 'react';
import { useDispatch } from 'react-redux';

const ReduxInput = () => {
  const dispatch = useDispatch();

  function handleTitleChange(event) {
    dispatch({ type: 'TITLE_INPUT', Title: event.target.value });
  }

  function handlePeopleChange(event) {
    dispatch({ type: 'EMAIL_INPUT', emails: event.target.value });
  }

  return (
    <form>
      <label>Title:</label>
      <input type="text" id="title" name="title" onChange={handleTitleChange} />
      <br></br>
      <label>Emails (coma seperated):</label>
      <input
        type="text"
        id="guests"
        name="guests"
        onChange={handlePeopleChange}
      />
      <br></br>
    </form>
  );
};

export default ReduxInput;
