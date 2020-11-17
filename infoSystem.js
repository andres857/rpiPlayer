const si = require('systeminformation')

async function sendData(){
    // scope function
    let networkInterfaces = await si.networkInterfaces();
    let temperature = await si.cpuTemperature();
    let cpu = await si.cpu();
    let memory = await si.mem();
    let graphics = await si.graphics();
    let disk = await si.diskLayout();
    let osinfo = await si.osInfo()
    let currentLoad = await si.currentLoad();
    let chassis = await si.chassis();
    

    device = {
        osinfo,
        cpu,
        memory,
        disk,
        graphics,
        temperature,
        currentLoad,
        networkInterfaces,
        chassis
    }
    // console.log(device);
    return device;
}

                    

let currentTime = si.time()

module.exports ={
    currentTime,
    sendData
}








