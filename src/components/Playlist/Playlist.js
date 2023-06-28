import React, { useCallback, useEffect } from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";
import Time from "../Time/Time";

const computeTotalTime = tracks => {
  let totalTime = 0;

  tracks.forEach((track) => {
    totalTime += track.duration_ms;
  })

  const minutes = Math.floor(totalTime / 60000);
  const seconds = ((totalTime % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

  


const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  const totalTime = computeTotalTime(props.playlistTracks)
 
    return (
      <div className="Playlist">
        <input onChange={handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />
  <br/>
         <Time totalTime={totalTime} />
        <button className="Playlist-save" onClick={props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  };


export default Playlist;
