var exec = require('child_process').exec;
const {client} = require('../broker.js');


//function to restart rpi
function shutdown(callback){
					exec('sudo /sbin/shutdown -r now', function(error, stdout, stderr){ callback(stdout); });
			}

module.exports={
	shutdown
}


// // suscriber /imbanaco/players/config
// client.on('message',function(topic, message){
// 			if (message == 'restart'){
// 				shutdown(function(output){
// 					     console.log(output);
// 					});
// 			}else{
// 				console.log(`sin reiniciar`);
// 			}
// });
