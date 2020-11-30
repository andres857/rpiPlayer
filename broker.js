// iniciar la conexion con el broker
// datos de la autenticacion con el broker si la hay 

const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://165.227.2.248');

const topics = {
	suscriber:{
		config:'imbanaco/players/config'
	},
	publish:{
		channel:'imbanaco/players/channel',
		status: 'imbanaco/players/status'
	}
}

client.on('connect', function () {  
	client.subscribe(topics.suscriber.config, function (err) {
        if (!err) {
	  		console.log(`sucriber successfull to topic ${topics.suscriber.config}`);
	    }});
});

client.on('message',function(topic, message){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});


module.exports={
    client,
    topics
}