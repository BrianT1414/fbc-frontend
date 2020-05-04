import React from 'react';
import moment from 'moment';
import YouTube from '../YouTube';
import AudioOptions from '../AudioOptions';

const SermonList = (props) => {
  return (
    <>
      {props.sermons.map((sermon, i) => {
        if (i === 0) {
          return (
            <CurrentSermon  key={sermon.id} sermon={sermon} />
          );
        } else {
          return (
            <PreviousSermon key={sermon.id} sermon={sermon} />
          );
        }
      })}
    </>
  );
}

export default SermonList;

function formatDate(value) {
  let date = moment(value, 'YYYY-MM-DD HH:mm:ss');

  return date.format('dddd, MMMM Do, YYYY');
}

const SermonAV = (props) => {
  const date = formatDate(props.sermon.published_on);

  return (
    <>
      <h3>{date}</h3>
      <div style={{ textAlign: 'center', margin: 15 }}>
        <YouTube url={props.sermon.video.youtube_id} />
        {props.sermon.audio_file ? 
          <AudioOptions audio={props.sermon.audio_file.public_path} />
        : null}
      </div>
      <hr/>
    </>
  );
}

const CurrentSermon = (props) => {
  return (
    <SermonAV {...props} />
  );
}

const PreviousSermon = (props) => {
  return (
    <div style={{ marginTop: 15, maxWidth: 500 }}>
      <SermonAV {...props} />
    </div>
  );
}