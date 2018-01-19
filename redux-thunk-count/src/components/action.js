import {
	ADD_COUNT,
	SUB_COUNT,
	INIT_COUNT,
	SET_SPIN,
	URL,
} from './constants';

export const dispatchAddCount = (payload) => ({
	type: ADD_COUNT,
	payload,
});

export const dispatchSubCount = (payload) => ({
	type: SUB_COUNT,
	payload,
});

export const dispatchInitCount = (payload) => ({
	type: INIT_COUNT,
	payload,
});

export const dispatchSetSpin = (payload) => ({
	type: SET_SPIN,
	payload,
});

// dispatch(fetchCount(ADD_COUNT))

// promise()

export const fetchCount = (actionType) => {
	var httpMethod;
	var apiParams;
	if(actionType === INIT_COUNT) {
		httpMethod = 'get';
	}
	else {
		httpMethod = 'put';
	}

	if(actionType === ADD_COUNT) {
		apiParams = '/add';
	}
	else if (actionType === SUB_COUNT){
		apiParams = '/sub';
	}
	else {
		apiParams = '';
	}

	return (dispatch, getState) => {
		dispatch(dispatchSetSpin());
		dispatch(fetchAPI(actionType, httpMethod, apiParams, dispatch));
	};
}


function fetchAPI(actionType, httpMethod, apiParams, dispatch) {
	return (dispatch) => {
		return fetch(URL + apiParams, {method: httpMethod})
		.then(function(response) {
			if(response.ok) {
				response.json()
				.then(item => {
					if(actionType === INIT_COUNT){
						return dispatch(dispatchInitCount({
							count: item.count,
						}));
					}
					else if(actionType === ADD_COUNT){
						return dispatch(dispatchAddCount({
							count: item.count,
						}));
					}
					else if(actionType === SUB_COUNT){
						return dispatch(dispatchSubCount({
							count: item.count,
						}));
					}
				})
			} else {
				console.log('Network response was not ok.');
				throw new Error(response.statusText)
			}
		}).catch(function(error) {
			// Error :(
			console.log('There has been a problem with your fetch operation: ' + error.message);
		})
	}

}