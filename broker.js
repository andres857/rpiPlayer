const mqtt = require("mqtt");
const {id} = require('./device');


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
    },
    publish:{
      status: `imbanaco/players/${idPlayer}/status`
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
  console.log(`received from ${topic} : ${payload.toString()}`);
  if (payload == 'restart'){
    shutdown(function(output){
    console.log(output);
    // console.log('[[[[[[[[[[[[[[[[[Simulando reinicio]]]]]]]]]]]]]]]]]]');
    });
  }else{
    console.log(`sin reiniciar`);
  }
});




module.exports={
    client,
    topic:main,
}



