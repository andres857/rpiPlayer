var exec = require('child_process').exec
var connectionPlayer = false

function statusRedPlayer(){
    exec('ping -c 5 broker.windowschannel.us', function(error, stdout, stderr){
        if(error !== null){
            console.log("Not available")
            connectionPlayer = false
        }else{
            connectionPlayer = true
            console.log("Available")
         }
         return connectionPlayer;
    });
}

// statusRedPlayer()

module.exports = {
    statusRedPlayer
}