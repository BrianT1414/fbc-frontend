import ajax from '../../utils/ajax';
import types from './types';

const api = '/api';

export function getSermons() {
	return {
		types: [
			types.GET_SERMONS_REQUEST,
			types.GET_SERMONS_SUCCESS,
			types.GET_SERMONS_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/sermons'
			})
		}
	}
}

export function createSermon(values) {
	return {
		types: [
			types.CREATE_SERMON_REQUEST,
			types.CREATE_SERMON_SUCCESS,
			types.CREATE_SERMON_FAILURE,
		],
		promise: () => {
			return ajax({
        method: 'POST',
        url: api + '/sermons',
        data: values
			})
		}
	}
}

export function updateSermon(id, values) {
	return {
		types: [
			types.UPDATE_SERMON_REQUEST,
			types.UPDATE_SERMON_SUCCESS,
			types.UPDATE_SERMON_FAILURE,
		],
		promise: () => {
			return ajax({
        method: 'PUT',
        url: api + '/sermons/' + id,
        data: values
			})
		}
	}
}

export function deleteSermon(id) {
	return {
		types: [
			types.DELETE_SERMON_REQUEST,
			types.DELETE_SERMON_SUCCESS,
			types.DELETE_SERMON_FAILURE,
		],
		promise: () => {
			return ajax({
        method: 'DELETE',
        url: api + '/sermons/' + id
			})
		}
	}
}