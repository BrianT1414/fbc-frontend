import React from 'react';
import SermonList from '../../components/SermonList';

const SermonsPage = (props) => {
  return (
    <div style={{ margin: 15 }}>
      <SermonList sermons={props.sermons} />
    </div>
  );
}

export default SermonsPage;