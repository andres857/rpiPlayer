const si = require('systeminformation');

async function statusplayer(){
    let {main} = await si.cpuTemperature();
    
    let {avgload,currentload} = await si.currentLoad();
    let {current} =  si.time();

    temp = main;
    avgload = avgload*100;
    avgload = avgload.toFixed()
    currentload = currentload.toFixed(2)
    current = current/1000;

    return status = {
        temp,
        avgload,
        currentload,
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

async function id(){
    let networkInterfaces = await si.networkInterfaces();
    return networkInterfaces[1].mac;
}




module.exports ={
    id,
    statusplayer,
}

