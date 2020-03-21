import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

const Main = (props) => {
  return (
    <BrowserRouter>
      <App {...props} />
    </BrowserRouter>
  );
}

export default Main;