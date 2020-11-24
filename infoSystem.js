const si = require('systeminformation');

async function monitoring(){
    // scope function
    let temperature = await si.cpuTemperature();
    let memory = await si.mem();
    let {avgload,currentload}=await si.currentLoad();

    monitor = {
        memory,
        temperature,
        currentload,
	    load:{
	        avgload,
	        currentload	
	    },    
	    currentTime: si.time(), 
    }
    console.log(monitor.currentTime);
	return monitor;
}

async function statusplayer(){
    // scope function
    let {main} = await si.cpuTemperature();
    // let temperature = temperatureobj.main;
    let {avgload,currentload} = await si.currentLoad();
    let {current,uptime} =  si.time()

    status = {
	//channel,    
        main,
        avgload,
        currentload,
        current,
        uptime
    }
    
	return status;
}



async function device(){
    let osinfo = await si.osInfo();
    let cpu = await si.cpu();
    let networkInterfaces = await si.networkInterfaces();

    device = {
        osinfo,
        cpu,
        networkInterfaces,
    }
    //console.log(device);
    return device;
}
                    

module.exports ={
    
   monitoring,
   device,
   statusplayer,
   
}








