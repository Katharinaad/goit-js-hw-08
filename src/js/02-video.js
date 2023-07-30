import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = localStorage.getItem('videoplayer-current-time');
if (time != null) {
  player.setCurrentTime(time);
}

player.on(
  'pause',
  throttle(function (data) {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(data.seconds)
      );
    });
  }),
  500
);
