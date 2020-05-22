import ajax from '../../utils/ajax';
import types from './types';

const api = '/api';

export function getErrors() {
	return {
		types: [
			types.GET_ERRORS_REQUEST,
			types.GET_ERRORS_SUCCESS,
			types.GET_ERRORS_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/errors'
			})
		}
	}
}