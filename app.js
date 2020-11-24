const si = require("./infoSystem.js");
const {client, topics} = require('./broker.js');
const {playChannel} = require ('./controller/player');

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
      console.log(`publicando en el tema ${topics.publish.channel} el canal ${channels.Comercial.nombre}`);	    
      client.publish(topics.publish.channel, channels.Comercial.nombre.toString());
      client.end()
    });
}


//playChannel(channels.Comercial.url);

statusPlayer();


