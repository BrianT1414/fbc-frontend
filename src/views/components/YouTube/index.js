import React from 'react';

const YouTube = (props) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe 
        width={props.width || "560"}
        height={props.height || "315"}
        src={"https://www.youtube.com/embed/" + props.url}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="embed-responsive-item"
      >
      </iframe>
    </div>
  );
}

export default YouTube;