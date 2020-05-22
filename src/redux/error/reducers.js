import { combineReducers } from 'redux';
import types from './types';

const initialErrors = [];

const errors = (state = initialErrors, action) => {
  switch(action.type) {
    case types.GET_ERRORS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  errors
});
