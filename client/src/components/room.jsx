import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from '@momentum-ui/react';
import PropTypes from 'prop-types';

/**
 * Room logic.
 *@param {webex} global custom config
 * @returns {html} Button to run the code
 */
const Room = ({webex}) => {
  const people = useSelector((state) => state.InputReducer.emails);

  const title = useSelector((state) => state.InputReducer.title);

  const message = useSelector((state) => state.InputReducer.message);

  /**
 * Create a room, add users, and send a message.
 */
  function handleRoom() {
    if (webex.canAuthorize) {
      webex.rooms
        .create({
          title
        })
        // Make sure to log errors in case something goes wrong.
        .catch((reason) => {
          throw new Error(reason);
        })
        .then((room) =>
          Promise.all(
            people.map((person) =>
              webex.memberships.create({
                roomId: room.id,
                personEmail: person
              }))
          ).then(() => {
            webex.messages.create({
              markdown: message,
              roomId: room.id
            });
          }));
      // eslint-disable-next-line
      alert(
        `Room: ${title}, was created! Guests:${people}. Message: ${message}`
      );
    }
    else {
      // eslint-disable-next-line
      alert('You need to sign in to create a room!');
    }
  }

  return (
    <div>
      <Button ariaLabel="Create Room" onClick={handleRoom}>
        Create Rooms
      </Button>
    </div>
  );
};

Room.propTypes = {
  webex: PropTypes.any.isRequired
};
export default Room;
