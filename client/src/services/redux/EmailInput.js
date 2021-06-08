import { ActionTypes } from './actionTypes';
import createReducer from './utilReducer';

const initialState = {
  emails: [],
};

export const EmailReducer = createReducer(
  {
    [ActionTypes.InputEmails]: (
      state,
      action /* eslint-disable-line no-unused-vars */
    ) => {
      state.emails = action.emails.split(',');
    },
  },
  initialState
);
