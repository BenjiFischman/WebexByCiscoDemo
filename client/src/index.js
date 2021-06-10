import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import App from './App.tsx';
import './styles.css';


// Set redirect uri to match the cisco integration, we can configure this in our env files as well.
let redirect_uri = `${window.location.protocol}//${window.location.host}`;

if (window.location.pathname) {
  redirect_uri += window.location.pathname;
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
      client_id: process.env.WEBEX_CLIENT_ID,
      redirect_uri,
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
