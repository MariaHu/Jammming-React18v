 
let array = [

{ 
  album
  :
"Mammoth",
artist
:
"Dimitri Vegas & Like Mike",
duration_ms
:
332289,
id
:
"76fqWMe0buqQoaNTIbLWmr",
name
:
"Mammoth"
},

    {
        album
        :
        "Mammoth",
        artist
        :
        "Dimitri Vegas & Like Mike",
        duration_ms
        :
        332289,
        id
        :
        "76fqWMe0buqQoaNTIbLWmr",
        name
        :
        "Mammoth"
    }


];


 const handleTotalTime = (arr)=> {
          let totalTime = 0;
         
           arr.forEach((track)=> {
              totalTime += track.duration_ms;
            })
         
       
          const minutes = Math.floor(totalTime/60000);
          const seconds = ((totalTime % 60000) /1000).toFixed(0);
           let newTime = minutes + ':' + (seconds < 10 ? '0': '') + seconds;
         return newTime
           
         
        
        };

        
        console.log(array[1].duration_ms);
        console.log(handleTotalTime(array));