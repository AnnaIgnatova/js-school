import { settings } from '../main-blocks/index.js';
import { transitionHideBlocks } from '../base-functions/index.js';
import { getCurrentBlock } from '../local-storage/index.js';
import { changeVolume } from '../audio/index.js';
import {
  DEFAULT_SECONDS_VALUE,
  DEFAUT_GAME_TIME,
  MUTED_VOLUME_VALUE,
  MAX_VOLUME_VALUE,
  MUTED_VOLUME_LINE,
  MAX_VOLUME_LINE,
  DEFAULT_VOLUME_LINE,
  DEFAULT_VOLUME_VALUE,
} from './constants/default';
import {
  volumeInput,
  settingsIcon,
  closeIcon,
  switchTime,
  muteSoundIcon,
  maxSoundIcon,
  defaultBtn,
  saveBtn,
  timeBlock,
} from './constants/elements';
import getItemsFromLocalStorage from './functions/getFromLS.js';
import initSettings from './functions/initSettings.js';
import updateLocalStorage from './functions/updateLS.js';
import openSettings from './functions/openSettings.js';
import closeSettings from './functions/closeSettings.js';
import changeTime from './functions/changeTime.js';

let settingsInfo = getItemsFromLocalStorage();

initSettings(settingsInfo);

volumeInput.addEventListener('input', (e) => {
  const { target } = e;
  const { value } = target;
  target.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 ${value}%, white 100%)`;
  changeVolume(value / 100);
  settingsInfo = updateLocalStorage();
});

settings.addEventListener('click', (e) => {
  openSettings(e);
});

settingsIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    const currentBlock = getCurrentBlock();
    transitionHideBlocks(currentBlock, settings);
  });
});

closeIcon.addEventListener('click', () => closeSettings);

const setDefaultSettings = () => {
  switchTime.checked = DEFAUT_GAME_TIME;
  volumeInput.style.background = DEFAULT_VOLUME_LINE;
  volumeInput.value = DEFAULT_VOLUME_VALUE;
  timeBlock.querySelector('.time-to-answer-input').value =
    DEFAULT_SECONDS_VALUE;
  settingsInfo = updateLocalStorage();
};

muteSoundIcon.addEventListener('click', () => {
  volumeInput.style.background = MUTED_VOLUME_LINE;
  volumeInput.value = MUTED_VOLUME_VALUE;
  changeVolume(0);
});

maxSoundIcon.addEventListener('click', () => {
  volumeInput.style.background = MAX_VOLUME_LINE;
  volumeInput.value = MAX_VOLUME_VALUE;
  changeVolume(1);
});

defaultBtn.addEventListener('click', setDefaultSettings);

saveBtn.addEventListener('click', () => {
  const currentBlock = getCurrentBlock();
  transitionHideBlocks(settings, currentBlock);
});

timeBlock.addEventListener('click', (e) => {
  const { target } = e;
  const input = timeBlock.querySelector('.time-to-answer-input');
  changeTime(target, input);
  settingsInfo = updateLocalStorage();
});

const getTime = () => timeBlock.querySelector('.time-to-answer-input').value;
const getSwitcher = () => switchTime.checked;

switchTime.addEventListener('input', () => {
  settingsInfo = updateLocalStorage();
});

export { getTime, getSwitcher };
