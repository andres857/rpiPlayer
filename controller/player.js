const execSync = require('child_process').execSync;

let channel = 'https://www.youtube.com/watch?v=8j741TUIET0';

code = execSync(`vlc -I dummy ${channel}, --fullscreen --video-on-top --no-video-title-show`);
console.log(code);

