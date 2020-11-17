
const systemInfo = require("./infoSystem.js")



async function main(){
    device = await systemInfo.sendData()
    console.log('/***************/**************/');
    // console.log(device);
    console.log('/***************/**************/');
    console.log(device.graphics.displays[1].connection);
}

main();

