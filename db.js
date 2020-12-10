const {id} = require('./device');
const db = require('mongoose');


db.Promise = global.Promise;
async function connect(url){
    await db.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    })
    console.log('[db conexion] successfull');
};

module.exports=connect



