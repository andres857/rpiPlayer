const {client, topic} = require('./broker.js');
const {player} = require ('./controller/player');
const publishStatusPlayer = require ('./publications');
const sub = require ('./subscriptions')
// const db = require('./db');



async function main(){
  // await db('mongodb+srv://desarrollo:xSaTdGjM2AIWvVDJ@iptv.ywncf.mongodb.net/players?retryWrites=true&w=majority');
  await client();
  await topic();
  await sub();
//   await publishStatusPlayer();
  await player();
}


// main();







