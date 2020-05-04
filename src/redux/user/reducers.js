import { combineReducers } from 'redux';
import types from './types';

const initialUser = {

};

function user(state = initialUser, action) {
	switch(action.type) {
		case types.LOGIN_SUCCESS:
			return action.payload;
		case types.GET_USER_SUCCESS:
			if (action.payload.message && action.payload.message == 'Not logged in') {
				return {};
			}
			return action.payload;
		case types.LOGOUT_SUCCESS:
			return {};
		default:
			return state;
	}
}

export default combineReducers({
  user
});
