import React from 'react';
import { connect } from 'react-redux';
import PageRouter from '../../pages';

const mapStateToProps = function(state) {
  return {
    sermons: state.sermon.sermons
  };
}

const App = (props) => {
  return (
    <PageRouter sermons={props.sermons} />
  );
}

export default connect(mapStateToProps, {})(App);