const mqtt = require("mqtt");
const {id} = require('./device');
const {shutdown} = require('./controller/device')

const clientTV = 'imbanaco' 
const options = {
  connectTimeout:4000,
  clientId:`${clientTV}_player_a2:c5:9f:82:74:82`,
  username:'emqx',
  password: 'public',
  keepalive:60,
  clean:true
}

const client = mqtt.connect("mqtt://broker.windowschannel.us",options);

async function main(){
  const idPlayer = await id();

  const topics = {
    suscriber:{
      config:`imbanaco/players/${idPlayer}/config`,
      channel:`imbanaco/players/${idPlayer}/channel`,
      connected:`imbanaco/players/${idPlayer}`
    },
    publish:{
      status: `imbanaco/players/${idPlayer}/status`,
      connected:`imbanaco/players/${idPlayer}`
    }
  }

  
  return topics;
}

client.on('connect', function () {
  console.log(`Client Connected`);
})

if(!client.connected){
  console.log(`Client not Connected`);
}

client.on('message',function(topic, payload){
  console.log(`received from ${topic} : ${payload.toString()}`)
  let message = JSON.parse(payload)
    if (message.restart=="true"){
      shutdown(function(output){
      console.log(output);
      });
    }else{
      console.log('Peticiones no validas');
    }
});




module.exports={
    client,
    topic:main,
}



