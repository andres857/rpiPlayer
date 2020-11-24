const si = require("./infoSystem.js");
const {client, topics} = require('./broker.js');
//const {channel,play} = require ('./controller/player.js');

async function toweb(){
    let status = await si.statusplayer();   
    console.log(status);
    client.on('connect', function () {
    console.log(`publicando en el tema ${topics.publish.temp} la temperatura ${status.main}`);	    
    //client.publish(topics.publish.temp, status.main.toString());
    client.publish(topics.publish.temp,JSON.stringify(status,null,2));	    
    //client.publish(topics.monitoring,monitor.currentTime.current.toString());
    client.end()
  })
}

//play();

//toweb();





