import React from 'react';
import Expand from '@material-ui/icons/ExpandMore';
import Colapse from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';

const AudioOptions = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <div>
      <Button 
        onClick={toggleExpanded}
        style={{ margin: 10 }}
      >
        View Audio Only Options {expanded ? <Colapse/> : <Expand/>}
      </Button>
      {expanded ?
        <div>
          <audio controls>
            <source src={props.audio} type="audio/mp3" />
          Your browser does not support the audio element.
          </audio>
          <div style={{ margin: 10 }}>
            <a href={props.audio} download>Or Download the Audio Here</a>
          </div>
        </div>
      : null}
    </div>
  );
}

export default AudioOptions;