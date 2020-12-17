const si = require('systeminformation');
const {client} = require('./broker');

async function statusplayer(){
    

    try {
        let {main} = await si.cpuTemperature();
        let networkInterfaces = await si.networkInterfaces();
        let {avgload,currentload} = await si.currentLoad();

        idPlayer = networkInterfaces[1].mac
        temp = main;
        avgload = avgload*100;
        avgload = avgload.toFixed()
        currentload = currentload.toFixed(2)
        throw {}
        return status = {
            idPlayer,
            temp,
            avgload,
            currentload,
        }
        
    } catch (error) {
        console.log(`client`, client);
        console.error(error);
    }
    
}

async function player () {
    let osinfo = await si.osInfo();
    let cpu = await si.cpu();
    let networkInterfaces = await si.networkInterfaces();

    return status = {
        osinfo,
        cpu,
        networkInterfaces,
    }
}
statusplayer();
module.exports ={
    statusplayer,
}
