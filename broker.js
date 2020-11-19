// iniciar la conexion con el broker
// datos de la autenticacion con el broker si la hay 

const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://165.227.2.248');

const topics = {
    device:'/players/device',
    monitoring:'/players/monitoring'
}

module.exports={
    client,
    topics
}