import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// import { 
// 	logger,
// 	fetchCount,
// } from './middleware';

export default function configureStore(initialState = {}) {
	const middleware = [ 
		thunk,
	];

	const store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(...middleware),	
	);

	return store;
}