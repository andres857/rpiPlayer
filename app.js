const si = require("./infoSystem.js");
const {client, topics} = require('./broker.js');
const {playChannel} = require ('./controller/player');
const {shutdown} = require ('./controller/device');


const channels={
  Comercial:{
    url:'https://www.youtube.com/watch?v=FWyiKvPg1oo',
    nombre:'EMcali',
    emision: true
  },
  Institucional:{
    url:'rtsp',
    nombre:'Imbanaco TV',
    emision: false
  }
}

async function statusPlayer(){
    let status = await si.statusplayer();
    client.on('connect', function () {
      //console.log(`publicando en el tema ${topics.publish.channel} el canal ${channels.Comercial.nombre}`);
      client.publish(topics.publish.channel, JSON.stringify(status));
	    console.log(status);
      client.end()
    });
}


// suscriber /imbanaco/players/config
client.on('message',function(topic, message){
			if (message == 'restart'){
				shutdown(function(output){
			  console.log(output);
					});
			}else{
				console.log(`sin reiniciar`);
			}
});

//playChannel(channels.Comercial.url);

//statusPlayer();
