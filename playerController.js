
const si = require("../infoSystem.js")
const {client, topics} = require('../broker');


async function sendinfodevice(){
    device = await si.device();    
    client.on('connect', function () {
    //client.publish(topic, device.temperatura.main.toString())
    client.publish(topics.device, JSON.stringify(device,null,4));
    client.end()
  })	
}

async function toweb(){
    let status = await si.statusplayer();   
    console.log(status);
    client.on('connect', function () {
    // client.publish(topics.monitoring,monitor.temperature.main.toString());
    // client.publish(topics.monitoring,monitor.currentTime.current.toString());

    client.publish(topics.monitoring, JSON.stringify(status,null,4));
    client.end()
  })	
}

// sendinfodevice();
toweb();
