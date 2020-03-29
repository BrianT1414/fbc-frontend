import React from 'react';
import YouTube from '../YouTube';
import AudioOptions from '../AudioOptions';

const SermonList = (props) => {
  return (
    <>
      {props.sermons.map((sermon, i) => {
        if (i === 0) {
          return (
            <CurrentSermon  key={sermon.date} sermon={sermon} />
          );
        } else {
          return (
            <PreviousSermon key={sermon.date} sermon={sermon} />
          );
        }
      })}
    </>
  );
}

export default SermonList;

function formatDate(value) {
  let d = new Date(Date.parse(value));

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString("en-US", options);
}

const SermonAV = (props) => {
  const date = formatDate(props.sermon.date);

  return (
    <>
      <h3>{date}</h3>
      <div style={{ textAlign: 'center', margin: 15 }}>
        <YouTube url={props.sermon.url} />
        <AudioOptions audio={props.sermon.audio} />
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
      <hr />
    </div>
  );
}