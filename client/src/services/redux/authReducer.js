import {ActionTypes} from './actionTypes';
import createReducer from './utilReducer';

const initialState = {
  loggedOn: false
};

export const AuthReducer = createReducer(
  {
    [ActionTypes.LoggedIn]: (
      state,
      action /* eslint-disable-line no-unused-vars */
    ) => {
      state.loggedOn = action.Auth;
    }
  },
  initialState
);
