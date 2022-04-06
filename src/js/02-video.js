import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const lOCAL_TIME_SET = 'videoplayer-current-time';
const localTime = localStorage.getItem(lOCAL_TIME_SET);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localTime) {
  player.setCurrentTime(localTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  const time = e.seconds;
  localStorage.setItem(lOCAL_TIME_SET, time);
}
