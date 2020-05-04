import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ManageSermons from './ManageSermons';
import MenuBar from './MenuBar';

const Administration = (props) => {
  if (Object.keys(props.user).length === 0) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="row">
      <div className="col-2">
        <MenuBar changePage={props.changePage} />
      </div>  
      <div className="col-10" style={{ borderLeft:'1px solid #DCDCDC', minHeight: 500 }}>
        <Switch>
          <Route exact path="/administration">
            <div style={{ textAlign: 'center', marginTop: 50 }}>
              <h3>Welcome to the Admin Area</h3>
              <p>You can manage parts of the website here by using the links to the left</p>
            </div>
          </Route>
          <Route path="/administration/sermons">
            <ManageSermons 
              changePage={props.changePage}
              sermons={props.sermons} 
              getSermons={props.getSermons} 
              createSermon={props.createSermon}
              updateSermon={props.updateSermon}
              deleteSermon={props.deleteSermon}
              getSermonsMeta={props.getSermonsMeta}
              createSermonMeta={props.createSermonMeta}
              updateSermonMeta={props.updateSermonMeta}
              deleteSermonMeta={props.deleteSermonMeta}
              resetCreateSermonMeta={props.resetCreateSermonMeta}
              resetUpdateSermonMeta={props.resetUpdateSermonMeta}
              resetDeleteSermonMeta={props.resetUpdateSermonMeta}
            />
          </Route>
        </Switch>
      </div>  
    </div>
  );
}

export default Administration;

