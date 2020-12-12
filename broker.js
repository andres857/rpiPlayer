const mqtt = require("mqtt");
const {id} = require('./device');
const {shutdown} = require('./controller/device')


const options = {
  connectTimeout:4000,
  // clientId:'test',
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

  client.on('message',function(topic, payload){
    console.log(`received from ${topic} : ${payload.toString()}`)
    let message = JSON.parse(payload)
      if (message.restart=="true"){
        // shutdown(function(output){
        // console.log(output);
        // });
        console.log('Simulando Reinicio 1')
      }else if(message.itsconnected == 'false'){
        console.log('---------Cliente Conectado-------');
        // console.log(topics);
        client.publish(topics.publish.connected, '{"itsconnected":"true"}',(e)=>{
          console.log(e || 'Publish Success to topic', topics.publish.connected);
      });
      }else{
        console.log('Peticiones no validas');
      }
  });
  return topics;
}

client.on('connect', function () {
  console.log(`Client Connected`);
})

if(!client.connected){
  console.log(`Client not Connected`);
}




module.exports={
    client,
    topic:main,
}



