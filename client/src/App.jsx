import React, { useState } from 'react';

import { Button } from '@momentum-ui/react';
/*
import { useSelector } from 'react-redux';
import WelcomeAndJoin from './components/WelcomeAndJoin';
*/
import Auth from './components/Auth';

//Set redirect uri to match the cisco integration, we can configure this in our env files as well.
let redirect_uri = `${window.location.protocol}//${window.location.host}`;

if (window.location.pathname) {
  redirect_uri += window.location.pathname;
}
console.log('link', redirect_uri);
const App = () => {
  const [title, setTitle] = useState('Cool New Room!');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  const [people, setPeople] = useState(['benjiricefischman@gmail.com']);

  function handlePeopleChange(event) {
    let commaDelimed = event.target.value.split(',');
    setPeople(commaDelimed);
  }

  const webex = window.Webex.init({
    config: {
      logger: {
        level: 'debug',
      },
      credentials: {
        //access_token: process.env.WEBEX_ACCESS_TOKEN,
        client_id: process.env.CLIENT_ID,
        redirect_uri,
        scope: 'spark:all spark:kms',
      },
    },
  });

  function handleRoom() {
    if (webex.canAuthorize) {
      webex.rooms
        .create({
          title: title,
        })
        // Make sure to log errors in case something goes wrong.
        .catch(function (reason) {
          console.error(reason);
          throw reason;
        })
        .then((room) => {
          return Promise.all(
            people.map((person) => {
              return webex.memberships.create({
                roomId: room.id,
                personEmail: person,
              });
            })
          ).then(() => {
            console.log(room);
            webex.messages.create({
              markdown: `**Hi Everyone**`,
              roomId: room.id,
            });
          });
        });

      alert(`Room: ${title}, was created! `);
    } else {
      alert(`You need to sign in to create a room!`);
    }
  }

  const isAuthed = true;

  return (
    <div className="App">
      <h1>Cisco Webex Demo</h1>
      <h2>Host Sign In</h2>
      {/* Inspired by https://github.com/webex/webex-js-sdk/blob/master/packages/node_modules/samples/browser-auth-implicit/index.html */}
      <Auth webex={webex}></Auth>
      <h1>Room Demo</h1>
      <form>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
        />
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
      <p></p>
      {/* Niave redux auth */}
      {isAuthed && (
        <div>
          <h1>Invite a Guest and Join</h1>
          <Button ariaLabel="Create Rooms" onClick={handleRoom}>
            Create Rooms
          </Button>
          {/*TODO: future work <WelcomeAndJoin webex={webex}></WelcomeAndJoin> */}
        </div>
      )}

      {/* I tried to get this to work so many times, but decided to go with CDN
      instead <SpaceWidget {...spaceWidgetProps} /> */}
    </div>
  );
};

export default App;
