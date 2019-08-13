import React from 'react';

const Song = (props) => {
  return(
    <div>

      <li>{props.position}. {props.song.title.label}</li>
    </div>
  );
}

export default Song;

// chart position, title and artist
