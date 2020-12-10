
const PlayerController = require('media-player-controller');
const url_Streaming = 'https://rtmp.windowschannel.us/hls/iptv.m3u8'

var player = new PlayerController({
  app: 'vlc',
  args: ['--fullscreen','--video-on-top', '--no-video-title-show'],
  media: url_Streaming
});

player.on('playback', console.log);

player.on('playback-started', () => {
  console.log('Playback started. Player can now be controlled');
});

player.on('app-exit', (code) => {
  console.log(`Media player closed. Exit code: ${code}`);
  if(code == 0){
    player.launch(err => {
      if(err) return console.error(err.message);
      console.log('Media player launched');
    });
  }
});



module.exports={
  player
}

