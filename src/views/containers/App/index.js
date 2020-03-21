import React from 'react';
import PageRouter from '../../pages';
import sermons from '../../../sermons';

const App = (props) => {
    return <PageRouter sermons={sermons} />;
}

export default App;