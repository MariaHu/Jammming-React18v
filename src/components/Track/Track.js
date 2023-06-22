import React, { useCallback } from "react";

import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };
  const  durationInMins = (timeMs) => {
    const minutes = Math.floor(timeMs/60000);
    const seconds = ((timeMs % 60000) /1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0': '') + seconds;
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} || {props.track.album} || {durationInMins(props.track.duration_ms)}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
