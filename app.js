const si = require("./infoSystem.js");
const {client, topics} = require('./broker.js');
const {playChannel} = require ('./controller/player');
const channels = require('./channels');


async function statusPlayer(){
    let status = await si.statusplayer();  
    client.on('connect', function () {
    //console.log(`publicando en el tema ${topics.publish.channel} el canal ${channels.Comercial.nombre}`);	    
      client.publish(topics.publish.channel, JSON.stringify(status));
      console.log(status);    
      client.end()
    });
}


//playChannel(channels.Comercial.url);

//statusPlayer();

//playChannel(channels.Comercial.url);

//statusPlayer();
