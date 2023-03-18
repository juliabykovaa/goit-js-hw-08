import Player from '@vimeo/player';
import trottle from 'lodash.throttle';
//  const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const current_time = 'videoplayer-current-time';
 
player.on('timeupdate', trottle(function (data) {
    localStorage.setItem(current_time, data.seconds);
}, 1000)
);

if (current_time > 0) {
   player.setCurrentTime(localStorage.getItem(current_time)); 
}

