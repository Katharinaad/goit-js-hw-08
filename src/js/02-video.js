import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
const currentTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(currentTime);

// let savedTime = localStorage.getItem('videoplayer-current-time');
// if (savedTime != null) {
//   player.setCurrentTime(savedTime);

//   console.log(savedTime);
// }

// player.on(
//   'pause',
//   throttle(function (data) {
//     player.getCurrentTime().then(function (seconds) {
//       localStorage.setItem(
//         'videoplayer-current-time',
//         JSON.stringify(data.seconds)
//       );
//     });
//   }),
//   500
// );
