import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime != null) {
  player.setCurrentTime(savedTime);

  console.log(savedTime);
}

player.on(
  'pause',
  throttle(function (data) {
    console.log('paused the video!');

    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(data.seconds)
      );
    });
  }),
  500
);
