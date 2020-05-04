import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SermonsPage from './Sermons';
import LoginPage from './Login';
import GoodFridayPage from './GoodFriday';
import Administration from '../containers/Administration';

const PageRouter = (props) => {
  const history = useHistory();
  const changePage = (page) => {
    history.push(page);
  }

  return (
    <div>
      <Paper style={{ maxWidth: 1000, margin: 'auto', minHeight: 800 }}>
        <Header 
          changePage={changePage} 
          user={props.user} 
          logout={props.logout}
        />
        <Switch>
          <Redirect exact from="/" to="/sermons" />
          <Route path="/sermons">
            <SermonsPage sermons={props.sermons} />
          </Route>
          <Route path="/login">
            <LoginPage 
              user={props.user} 
              login={props.login} 
              allowLogin={props.allowLogin} 
              changePage={changePage}
              login={props.login}
              loginMeta={props.loginMeta}
              resetLoginMeta={props.resetLoginMeta}
            />
          </Route>
          <Route path="/administration">
            <Administration 
              user={props.user} 
              changePage={changePage}
            />
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