function shout(string){
    return string.toUpperCase();//HELLO
}

function whisper(string){
    return string.toLowerCase();//hello
}

function logShout(string,spy){
    console.log(string.toUpperCase());
    return `${string},${spy}`;
    
}


function logWhisper(string){
    console.log(string.toLowerCase());
    return string;
    }


    function sayHiToHeadphonedRoommate(string) {
        var cantUnswer = "I can't hear you!";
        var yesUnswer = "YES INDEED!";
        var lovUnswer = "I would love to!";
        if (string.toLowerCase(string) === string) {
          return cantUnswer;
        }
        else if (string.toUpperCase(string) === string) {
          return yesUnswer;
        }
        else if ("Let\'s have dinner together!" === string) {
          return lovUnswer
        }
      }
