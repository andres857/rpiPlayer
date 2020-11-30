const si = require('systeminformation');

async function statusplayer(){
    // scope function
    let {main} = await si.cpuTemperature();
    let {avgload,currentload} = await si.currentLoad();
    let {current,uptime} =  si.time();

    status = {
        main,
        avgload,
        currentload,
        current,
        uptime
    }
    
	return status;
}

async function player () {
    let osinfo = await si.osInfo();
    let cpu = await si.cpu();
    let networkInterfaces = await si.networkInterfaces();

    status = {
        osinfo,
        cpu,
        networkInterfaces,
    }
    return status;
}

async function getid(){
    let {serial} = await si.osInfo();
    return serial;
}


module.exports ={
    id:getid,
    statusplayer,
}

