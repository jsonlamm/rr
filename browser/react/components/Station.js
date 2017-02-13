import React from 'react';
import { Link } from 'react-router';

import Songs from './Songs';


// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () { };

export default function ({genreName, songs, currentSong, isPlaying, toggleOne}) {
  // console.log('station props', props)
  return (
    <div>
      <h3>{genreName} Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );

}
