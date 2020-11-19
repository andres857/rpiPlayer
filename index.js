const si = require("./infoSystem.js")
const mqtt = require('mqtt')


const client  = mqtt.connect('mqtt://165.227.2.248')


const topicdevice = '/players/device'
const topic = '/players/monitoring'



async function main(){
    device = await si.device();
    console.log(device);
    
    client.on('connect', function () {
    //client.publish(topic, device.temperatura.main.toString())
    client.publish(topicdevice, JSON.stringify(device,null,4))
    client.end()
  })	
}

main();

