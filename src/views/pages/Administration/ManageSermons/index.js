import React from 'react';
import moment from 'moment';
import { Route, Switch } from 'react-router-dom';
import ManageTable from '../../../components/ManageTable';
import SermonForm from '../../../components/forms/SermonForm';
import EditSermon from './EditSermon';

const ManageSermons = (props) => {
	const [edit_id, setEdit] = React.useState(0);

	React.useEffect(() => {
		props.getSermons();
  }, []);
  
  React.useEffect(() => {
    if (props.createSermonMeta.success) {
      goToList();
      props.resetCreateSermonMeta();
    }
  }, [props.createSermonMeta.success]);
  
  React.useEffect(() => {
    if (props.deleteSermonMeta.success) {
      props.getSermons();
      props.resetDeleteSermonMeta();
    }
  }, [props.deleteSermonMeta.success]);

	const deleteSermon = (i) => {
		if (confirm('Are you sure you want to delete this sermon?')) {
			props.deleteSermon(i);
		}
	}

	const goToList = () => {
		props.changePage('/administration/sermons');
		setTimeout(() => {
			props.getSermons();
		},500);	
  }
  
  function formatDate(value) {
    let date = moment(value, 'YYYY-MM-DD HH:mm:ss');

    return date.format('MM/DD/YYYY h:mm a');
  }

	const sermonToEdit = () => (
		props.sermons.reduce((acc, cur) => {
			if (acc) {
				return acc;
			}
			if (cur.id == edit_id) {
				return cur;
			}
		}, null)
	);
  
  return (
    <div>
      <Switch>
        <Route exact path="/administration/sermons">
          <ManageTable 
            loading={props.getSermonsMeta.loading}
            data={props.sermons.map((sermon) => ({
              id: sermon.id,
              values: [
                formatDate(sermon.published_on),
                sermon.title
              ],
            }))} 
            add={() => props.changePage('/administration/sermons/add')}
            edit={(i) => {
              props.changePage('/administration/sermons/edit');
              setEdit(i);
            }} 
            delete={deleteSermon} 
          />
        </Route>
        <Route path="/administration/sermons/edit">
          <h3 style={{ marginBottom: 15 }}>Edit Sermon</h3>
          <EditSermon 
            meta={props.updateSermonMeta}
            resetMeta={props.resetUpdateSermonMeta}
            sermon={sermonToEdit()} 
            updateSermon={props.updateSermon} 
            goToList={goToList} 
          />
        </Route>
        <Route path="/administration/sermons/add">
          <div>
            <h3 style={{ marginBottom: 15 }}>Add Sermon</h3>
            <SermonForm 
              loading={props.createSermonMeta.loading}
              submit={props.createSermon}
              initialValues={{
                title: '',
                description: '',
                published_on: '',
                video_type: 'youtube',
                youtube_id: '',
                audio_file: ''
              }}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default ManageSermons;