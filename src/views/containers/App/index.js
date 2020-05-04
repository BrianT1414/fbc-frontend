import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { connectMeta } from 'redux-meta';
import PageRouter from '../../pages';
import { actions as userActions } from '../../../redux/user';
import { actions as sermonActions } from '../../../redux/sermon';
import cheatCodeListener from '../../../utils/cheatCodeListener';

const mapStateToProps = function(state) {
  return {
    sermons: state.sermon.sermons,
    user: state.user.user
  };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    login: userActions.login,
    logout: userActions.logout,
    checkUser: userActions.checkUser,
    getSermons: sermonActions.getSermons
  }, dispatch);
}

const App = (props) => {
  const [allowLogin, setAllowLogin] = React.useState(false);
  const history = useHistory();
  
  const checkUserLoading = props.getLoading(userActions.checkUser, true);
  const loginMeta = props.getMeta(userActions.login);
  const resetLoginMeta = () => props.resetMeta(userActions.login);

  React.useEffect(() => {
    props.checkUser();
  }, []);

  React.useEffect(() => {
    if (!checkUserLoading) {
      props.getSermons();
    }
  }, [checkUserLoading]);

  React.useEffect(() => {
    cheatCodeListener([
      // Show Login page
      {pattern: '/login', execute: () => {
        setAllowLogin(true);
        setTimeout(() => {
          history.push('/login');
        }, 200)
      }}
    ]);
  }, []);

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <PageRouter 
        sermons={props.sermons} 
        user={props.user} 
        allowLogin={allowLogin}
        login={props.login}
        logout={props.logout}
        loginMeta={loginMeta}
        resetLoginMeta={resetLoginMeta}
      />
    </MuiPickersUtilsProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(App));