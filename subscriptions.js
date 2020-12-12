const {client,topic} = require('./broker');

async function subs(){
    const topics = await topic();

    client.subscribe(topics.suscriber.config, function (err) {
        if (!err) {
          console.log(`subscription successfull to topic ${topics.suscriber.config}`);
        }
      })
      
    client.subscribe(topics.suscriber.channel, function (err) {
        if (!err) {
            console.log(`subscription successfull to topic ${topics.suscriber.channel}`);
        }
    })

    client.subscribe(topics.suscriber.connected, function (err) {
      if (!err) {
          console.log(`subscription successfull to topic ${topics.suscriber.connected}`);
      }
  })
}

subs();
module.exports=subs



