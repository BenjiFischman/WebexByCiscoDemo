import validateEmail from '../utils/utils';

import {ActionTypes} from './actionTypes';
import createReducer from './utilReducer';

const initialState = {
  title: '',
  emails: [],
  message: ''
};


export const InputReducer = createReducer(
  {
    [ActionTypes.InputEmails]: (
      state,
      action /* eslint-disable-line no-unused-vars */
    ) => {
      const temp = action.emails.split(',').map((email) => {
        email = email.trimStart();
        email = email.trimEnd();
        if (validateEmail(email)) {
          return email;
        }
        else {
          return null;
        }
      });
      const result = temp.filter((el) => {
        return el != null;
      });

      state.emails = result;
    },
    [ActionTypes.InputTitle]: (
      state,
      action /* eslint-disable-line no-unused-vars */
    ) => {
      const result = (state.Title = action.Title);

      state.title = result;
    },
    [ActionTypes.InputMessage]: (
      state,
      action /* eslint-disable-line no-unused-vars */
    ) => {
      // Bold message!
      const result = `**${action.message}**`;

      state.message = result;
    }
  },
  initialState
);
