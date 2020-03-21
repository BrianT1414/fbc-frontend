import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const condenseReducers = (reducers) => {
  let condensed = {
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
    reducer
  )

  return store;
}
