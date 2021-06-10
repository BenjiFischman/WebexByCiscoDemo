import {combineReducers} from 'redux';

import {AuthReducer} from './authReducer';
import {InputReducer} from './input';

const baseReducer = combineReducers({
  InputReducer,
  AuthReducer
});

export default baseReducer;
