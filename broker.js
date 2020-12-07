// iniciar la conexion con el broker
// datos de la autenticacion con el broker si la hay

const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://165.227.2.248");

const topics = {
	suscriber:{
		config:'imbanaco/players/config',
		channel:'imbanaco/players/channel',
	},
	publish:{
		status: 'imbanaco/players/status'
	}
}

client.on('connect', function () {
    client.subscribe(topics.suscriber.channel, function (err) {
      if (!err) {
        console.log(`conexion successfull to topic ${topics.suscriber.channel}`);
      }
    })
})

client.on('message',function(topic, message){
    let channel = message.toString();
    console.log(channel);
    return channel;
});

module.exports={
    client,
    topics
}