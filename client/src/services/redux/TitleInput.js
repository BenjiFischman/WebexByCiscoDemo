import { ActionTypes } from './actionTypes';
import createReducer from './utilReducer';

const initialState = {
  Title: 'Cool New Room!',
};

export const TitleReducer = createReducer(
  {
    [ActionTypes.InputTitle]: (
      state,
      action /* eslint-disable-line no-unused-vars */
    ) => {
      state.Title = action.Title;
    },
  },
  initialState
);
