import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SermonsPage from './Sermons';
import GoodFridayPage from './GoodFriday';

const PageRouter = (props) => {
  const history = useHistory();
  const changePage = (page) => {
    history.push(page);
  }

  return (
    <div>
      <Paper style={{ maxWidth: 1000, margin: 'auto', minHeight: 800 }}>
        <Header changePage={changePage} />
        <Switch>
          <Redirect exact from="/" to="/sermons" />
          <Route path="/sermons">
            <SermonsPage sermons={props.sermons} />
          </Route>
          <Route path="/good-friday">
            <GoodFridayPage />
          </Route>
        </Switch>
      </Paper>
    </div>  
  );
}

export default PageRouter;