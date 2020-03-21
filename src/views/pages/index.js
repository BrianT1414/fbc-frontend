import React from 'react';
import Paper from '@material-ui/core/Paper';
import Header from '../components/Header';
import SermonList from '../components/SermonList';

const PageRouter = (props) => {
  return (
    <div>
      <Paper style={{ maxWidth: 1000, margin: 'auto', minHeight: 800 }}>
        <Header />
        <div style={{ marginLeft: 15 }}>
          <SermonList sermons={props.sermons} />
        </div>
      </Paper>
    </div>  
  );
}

export default PageRouter;