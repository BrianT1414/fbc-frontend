import React from 'react';

const YouTube = (props) => {
  return (
    <iframe 
      width={props.width || "560"}
      height={props.height || "315"}
      src={props.url}
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    >
    </iframe>
  );
}

export default YouTube;