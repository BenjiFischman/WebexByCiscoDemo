import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist'; // imports from redux-persist
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunkMiddleware from 'redux-thunk';

import rootReducer from './services/redux/reducer';

const persistConfig = {
  // configuration object for redux-persist
  key: 'root',
  storage // define which storage to use, local storage works for this example
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  applyMiddleware(thunkMiddleware) // add any middlewares here
);

const persistor = persistStore(store); // Persist the store, see index.js to see the next step

export {store, persistor};
