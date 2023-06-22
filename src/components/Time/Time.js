import React, {useCallback} from "react";

const Time =(props) => {
   
    
      const handleTotalTime = useCallback(()=> {
          let totalTime = 0;
         
            props.playlistTracks.forEach((track)=> {
              totalTime += track.duration_ms;
            })
         
       
          const minutes = Math.floor(totalTime/60000);
          const seconds = ((totalTime % 60000) /1000).toFixed(0);
           let newTime = minutes + ':' + (seconds < 10 ? '0': '') + seconds;
        
            props.setTotalTime(newTime);
           
        
        
        }, [props.playlistTracks]); 
      
    

    return (

        <span>Your Playlist Total Time is currently: <input value={props.totalTime} onChange={handleTotalTime} /></span>
    );
}

export default Time;