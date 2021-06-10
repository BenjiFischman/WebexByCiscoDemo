import {combineReducers} from 'redux';

import {AuthReducer} from './logOn';
import {InputReducer} from './input';

const baseReducer = combineReducers({
  InputReducer,
  AuthReducer
});

export default baseReducer;
