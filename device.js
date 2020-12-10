const si = require('systeminformation');

async function statusplayer(){
    let {main} = await si.cpuTemperature();
    let {avgload,currentload} = await si.currentLoad();
    let {current,uptime} =  si.time();

    return status = {
        main,
        avgload,
        currentload,
        current,
        uptime
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

