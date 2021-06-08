import { combineReducers } from 'redux';

import { AuthReducer } from './LogOn';

import { EmailReducer } from './EmailInput';

import { TitleReducer } from './TitleInput';

export const PersistReduxStates = [AuthReducer];

const baseReducer = combineReducers({
  AuthReducer,
  EmailReducer,
  TitleReducer,
});

export default baseReducer;
