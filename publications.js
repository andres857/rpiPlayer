const {statusplayer} = require('./device');
const {client,topic} = require('./broker');


const interval = 10000;


  async function publish(){
    const topics = await topic();
    const status = await statusplayer();
    console.log(status);
    client.publish(topics.publish.status, JSON.stringify(status),(e)=>{
        console.log(e || 'Publish Success to topic', topics.publish.status);
    });
}



async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
  }


let run = async ()=>{
    while (true){
        publish();
        await delay(interval);
    }
  }

  try {
    run();
  } catch (error) {
    console.error(`Problema al publicar ${error}`);
  }

module.exports = {
  publishStatusPlayer:run
}
