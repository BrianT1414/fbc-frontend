import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectMeta } from 'redux-meta';
import { actions as sermonActions } from '../../../redux/sermon';
import { actions as errorActions } from '../../../redux/error';
import AdministrationPage from '../../pages/Administration';

const mapStateToProps = function(state) {
  return {
    sermons: state.sermon.sermons,
    errors: state.error.errors
  };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getSermons: sermonActions.getSermons,
    createSermon: sermonActions.createSermon,
    updateSermon: sermonActions.updateSermon,
    deleteSermon: sermonActions.deleteSermon,
    getErrors: errorActions.getErrors
  }, dispatch);
}

const Administration = (props) => {
  const getSermonsMeta = props.getMeta(sermonActions.getSermons);
  const createSermonMeta = props.getMeta(sermonActions.createSermon);
  const updateSermonMeta = props.getMeta(sermonActions.updateSermon);
  const deleteSermonMeta = props.getMeta(sermonActions.deleteSermon);
  const getErrorsMeta = props.getMeta(errorActions.getErrors);
  const resetCreateSermonMeta = () => props.resetMeta(sermonActions.createSermon);
  const resetUpdateSermonMeta = () => props.resetMeta(sermonActions.updateSermon);
  const resetDeleteSermonMeta = () => props.resetMeta(sermonActions.deleteSermon);
  const resetGetErrorsMeta = () => props.resetMeta(errorActions.getErrors);

  return (
    <AdministrationPage 
      user={props.user}
      errors={props.errors}
      changePage={props.changePage}
      sermons={props.sermons} 
      getSermons={props.getSermons} 
      createSermon={props.createSermon}
      updateSermon={props.updateSermon}
      deleteSermon={props.deleteSermon}
      getErrors={props.getErrors}
      getSermonsMeta={getSermonsMeta}
      createSermonMeta={createSermonMeta}
      updateSermonMeta={updateSermonMeta}
      deleteSermonMeta={deleteSermonMeta}
      getErrorsMeta={getErrorsMeta}
      resetUpdateSermonMeta={resetUpdateSermonMeta}
      resetCreateSermonMeta={resetCreateSermonMeta}
      resetDeleteSermonMeta={resetDeleteSermonMeta}
      resetGetErrorsMeta={resetGetErrorsMeta}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(Administration));