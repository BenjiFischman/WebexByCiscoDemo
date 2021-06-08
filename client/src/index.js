import ReactDOM from 'react-dom';
import React from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//const webex = require(`webex/env`);
import App from './App.jsx';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App></App>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
