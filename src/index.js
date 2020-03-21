import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/configureStore';
import Main from './views';
import ErrorBoundary from './views/components/ErrorBoundary';

const store = createStore();

const Wrapper = (props) => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </Provider>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));