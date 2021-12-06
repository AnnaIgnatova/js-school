import { settings, welcome } from './main-blocks.js';
import { transitionHideBlocks } from './base-functions.js';
import { getCurrentBlock, changeCurrentBlock } from './localStorage.js';
import { changeVolume } from './audio.js';

const DEFAULT_SECONDS_VALUE = 20;
const DEFAUT_GAME_TIME = false;
const MUTED_VOLUME_VALUE = 0;
const MAX_VOLUME_VALUE = 100;
const MUTED_VOLUME_LINE =
  'linear-gradient(to right, #FFBCA2 0%, #FFBCA2 0%, #A4A4A4 0%, white 100%)';
const MAX_VOLUME_LINE =
  'linear-gradient(to right, #FFBCA2 0%, #FFBCA2 100%, #A4A4A4 100%, white 100%)';
const DEFAULT_VOLUME_LINE =
  'linear-gradient(to right, #FFBCA2 0%, #FFBCA2 50%, #A4A4A4 50%, white 100%)';
const DEFAULT_VOLUME_VALUE = 50;

const volumeInput = document.querySelector('.volume-input');
const settingsIcon = document.querySelectorAll('.welcome-settings');
const closeIcon = document.querySelector('.close-icon');
const switchTime = document.querySelector('.switch-time');
const muteSoundIcon = document.querySelector('.mute-sound');
const maxSoundIcon = document.querySelector('.max-sound');
const defaultBtn = document.querySelector('.settings-default-btn');
const saveBtn = document.querySelector('.setting-save-btn');
const timeBlock = document.querySelector('.settings-time-to-answer');

let settingsInfo;

if (JSON.parse(localStorage.getItem('settings-info'))) {
  settingsInfo = JSON.parse(localStorage.getItem('settings-info'));
} else {
  settingsInfo = [
    DEFAULT_VOLUME_VALUE,
    DEFAULT_VOLUME_LINE,
    DEFAUT_GAME_TIME,
    DEFAULT_SECONDS_VALUE,
  ];
  localStorage.setItem('settings-info', JSON.stringify(settingsInfo));
}

function initSettings() {
  switchTime.checked = settingsInfo[2];
  volumeInput.style.background = settingsInfo[1];
  volumeInput.value = settingsInfo[0];
  timeBlock.querySelector('.time-to-answer-input').value = settingsInfo[3];
}

initSettings();

function updateLocalStorage() {
  settingsInfo = [
    volumeInput.value,
    `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, #A4A4A4 ${volumeInput.value}%, white 100%)`,
    switchTime.checked,
    timeBlock.querySelector('.time-to-answer-input').value,
  ];
  localStorage.setItem('settings-info', JSON.stringify(settingsInfo));
}

volumeInput.addEventListener('input', (e) => {
  const { target } = e;
  const { value } = target;
  target.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 ${value}%, white 100%)`;
  changeVolume(value / 100);
  updateLocalStorage();
});

settings.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('settings-back') ||
    e.target.parentElement.classList.contains('settings-back')
  ) {
    changeCurrentBlock(welcome);
    transitionHideBlocks(settings, welcome);
  }
});

settingsIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    const currentBlock = getCurrentBlock();
    transitionHideBlocks(currentBlock, settings);
  });
});

closeIcon.addEventListener('click', () => {
  const currentBlock = getCurrentBlock();
  transitionHideBlocks(settings, currentBlock);
});

function defaultSettings() {
  switchTime.checked = DEFAUT_GAME_TIME;
  volumeInput.style.background = DEFAULT_VOLUME_LINE;
  volumeInput.value = DEFAULT_VOLUME_VALUE;
  timeBlock.querySelector('.time-to-answer-input').value =
    DEFAULT_SECONDS_VALUE;
  updateLocalStorage();
}

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

defaultBtn.addEventListener('click', defaultSettings);

saveBtn.addEventListener('click', () => {
  const currentBlock = getCurrentBlock();
  transitionHideBlocks(settings, currentBlock);
});

timeBlock.addEventListener('click', (e) => {
  const { target } = e;

  const input = timeBlock.querySelector('.time-to-answer-input');
  if (target.classList.contains('more-btn')) {
    if (+input.value >= 30) input.value = 30;
    else input.value = +input.value + 5;
  }
  if (target.classList.contains('less-btn')) {
    if (+input.value <= 5) input.value = 5;
    else input.value = +input.value - 5;
  }
  updateLocalStorage();
});

function getTime() {
  return timeBlock.querySelector('.time-to-answer-input').value;
}

function getSwitcher() {
  return switchTime.checked;
}
switchTime.addEventListener('input', updateLocalStorage);

export { getTime, getSwitcher };
