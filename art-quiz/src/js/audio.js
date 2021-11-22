import { welcome } from './main-blocks.js';

const audioWin = document.createElement('audio');
const audioLose = document.createElement('audio');
const audioEnd = document.createElement('audio');

audioWin.src = './audio/win.mp3';
audioLose.src = './audio/lose.mp3';
audioEnd.src = './audio/end-game.mp3';

welcome.append(audioWin, audioLose, audioEnd);

function endGameSound() {
  audioEnd.play();
  setTimeout(() => {
    audioEnd.pause();
    audioEnd.currentTime = 0;
  }, 1000);
}

function winGameSound() {
  audioWin.play();
  setTimeout(() => {
    audioWin.pause();
    audioWin.currentTime = 0;
  }, 1000);
}
function loseGameSound() {
  audioLose.play();
  setTimeout(() => {
    audioLose.pause();
    audioLose.currentTime = 0;
  }, 1000);
}

function changeVolume(value) {
  [audioWin, audioLose, audioEnd].forEach((audio) => {
    audio.volume = value;
  });
}

changeVolume(0.5);

export { endGameSound, winGameSound, loseGameSound, changeVolume };
