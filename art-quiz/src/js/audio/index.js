import { welcome } from '../main-blocks/index.js';
import { audioWin, audioLose, audioEnd } from './constants/elements';
import DEFAULT_VOLUME from './constants/volume';

welcome.append(audioWin, audioLose, audioEnd);

const stopSound = (currentAudio) => {
  const audio = currentAudio;
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 1000);
};

const endGameSound = () => {
  audioEnd.play();
  stopSound(audioEnd);
};

const winGameSound = () => {
  audioWin.play();
  stopSound(audioWin);
};

const loseGameSound = () => {
  audioLose.play();
  stopSound(audioLose);
};

const changeVolume = (value) => {
  [audioWin, audioLose, audioEnd].forEach((audio) => {
    const audioRange = audio;
    audioRange.volume = value;
  });
};

changeVolume(DEFAULT_VOLUME);

export { endGameSound, winGameSound, loseGameSound, changeVolume };
