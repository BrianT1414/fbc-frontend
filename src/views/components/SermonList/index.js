import React from 'react';
import YouTube from '../YouTube';
import AudioOptions from '../AudioOptions';

const SermonList = (props) => {
  return (
    <>
      {props.sermons.map((sermon) => (
        <SermonAV key={sermon.date} sermon={sermon} />
      ))}
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
    </>
  );
}