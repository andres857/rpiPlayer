const si = require("./device.js");
const {client, topics} = require('./broker.js');
const {player} = require ('./controller/player');
const pub = require ('./publications');
const sub = require ('./subscriptions')
// const db = require('./db');



async function main(){
  // await db('mongodb+srv://desarrollo:xSaTdGjM2AIWvVDJ@iptv.ywncf.mongodb.net/players?retryWrites=true&w=majority');

  player.launch(err => {
    if(err) return console.error(err.message);
    console.log('Media player launched');
  });
}


main();







