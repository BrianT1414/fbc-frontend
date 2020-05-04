import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { reducer as metaReducer } from 'redux-meta'
import promiseMiddleware from './middleware/promiseMiddleware';

const condenseReducers = (reducers) => {
  let condensed = {
    meta: metaReducer,
  };

  Object.keys(reducers).forEach(key => {
    condensed[key] = reducers[key]
  })

  return condensed
}

export default function() {
  const condensed = condenseReducers(reducers);
  const reducer = combineReducers(condensed)

  const store = createStore(
    reducer,
		applyMiddleware(thunk, promiseMiddleware)
  )

  return store;
}
