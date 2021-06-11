import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {store, persistor} from './store';
import App from './App.tsx';
import './styles.css';


// Set redirect uri to match the cisco integration, we can configure this in our env files as well.
let redirectUri = `${window.location.protocol}//${window.location.host}`;

if (window.location.pathname) {
  redirectUri += window.location.pathname;
}
// Uncomment this clause for deployment config if you please
// if (process.env && process.env.WEBEX_REDIRECT_URI){
//   redirect_uri = process.env.WEBEX_REDIRECT_URI;
// }

const webex = window.Webex.init({
  config: {
    logger: {
      level: 'debug'
    },
    credentials: {
      /* Create your own webex integration credentials: https://developer.webex.com/docs/integrations
      To create an your own integration checkout out the above docs.
      Configure this variable in a prod deployment by using a secret store.
      Webpack.prod.js will inject the variable at run time, otherwise add the variable in your local .env
      For learning purposes, consider .example.env and webpack.dev.js for local config.
      Note to devs, I have a different client Id configure in the deployed instance.
      */
      client_id: process.env.WEBEX_CLIENT_ID,
      redirect_uri: redirectUri,
      scope: 'spark:all spark:kms'
    }
  }
});
// Attach the React application to the DOM with some tools.

ReactDOM.render(

  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App webex={webex} />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);
