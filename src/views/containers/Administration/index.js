import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectMeta } from 'redux-meta';
import { actions as sermonActions } from '../../../redux/sermon';
import AdministrationPage from '../../pages/Administration';

const mapStateToProps = function(state) {
  return {
    sermons: state.sermon.sermons,
  };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getSermons: sermonActions.getSermons,
    createSermon: sermonActions.createSermon,
    updateSermon: sermonActions.updateSermon,
    deleteSermon: sermonActions.deleteSermon,
  }, dispatch);
}

const Administration = (props) => {
  const getSermonsMeta = props.getMeta(sermonActions.getSermons);
  const createSermonMeta = props.getMeta(sermonActions.createSermon);
  const updateSermonMeta = props.getMeta(sermonActions.updateSermon);
  const deleteSermonMeta = props.getMeta(sermonActions.deleteSermon);
  const resetCreateSermonMeta = () => props.resetMeta(sermonActions.createSermon);
  const resetUpdateSermonMeta = () => props.resetMeta(sermonActions.updateSermon);
  const resetDeleteSermonMeta = () => props.resetMeta(sermonActions.deleteSermon);

  return (
    <AdministrationPage 
      user={props.user}
      changePage={props.changePage}
      sermons={props.sermons} 
      getSermons={props.getSermons} 
      createSermon={props.createSermon}
      updateSermon={props.updateSermon}
      deleteSermon={props.deleteSermon}
      getSermonsMeta={getSermonsMeta}
      createSermonMeta={createSermonMeta}
      updateSermonMeta={updateSermonMeta}
      deleteSermonMeta={deleteSermonMeta}
      resetUpdateSermonMeta={resetUpdateSermonMeta}
      resetCreateSermonMeta={resetCreateSermonMeta}
      resetDeleteSermonMeta={resetDeleteSermonMeta}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(Administration));