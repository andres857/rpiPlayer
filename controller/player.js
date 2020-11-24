const execSync = require('child_process').execSync;


function playChannel(channel){
    execSync(`vlc -I dummy ${channel}, --fullscreen --video-on-top --no-video-title-show`);
}


module.exports = {
    playChannel,
}
