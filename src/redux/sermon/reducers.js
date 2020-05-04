import { combineReducers } from 'redux';
import types from './types';

const initialSermons = [];

const sermons = (state = initialSermons, action) => {
  switch(action.type) {
    case types.GET_SERMONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  sermons
});
