import React from 'react';
import moment from 'moment';
import SermonForm from '../../../components/forms/SermonForm';

const EditSermon = (props) => {
	React.useEffect(() => {
		if (props.meta.success) {
			props.goToList();
			props.resetMeta();
		}
	}, [props.meta.success]);

  const submit = (values) => {
    props.updateSermon(props.sermon.id, values);
	}

	if (props.sermon) {
		return (
			<div style={{ textAlign: 'center' }}>
				<SermonForm
					loading={props.meta.loading}
					submit={submit}
					initialValues={{
            title: props.sermon.title ? props.sermon.title : '',
						description: props.sermon.description ? props.sermon.description : '',
						published_on: moment(props.sermon.published_on),
            video_type: props.sermon.video_type,
            youtube_id: props.sermon.video_type === 'youtube' ? props.sermon.video.youtube_id : '',
            audio_file: props.sermon.audio_file
          }}
				/>
			</div>
		);
	} else {
		return null;
	}
}

export default EditSermon;