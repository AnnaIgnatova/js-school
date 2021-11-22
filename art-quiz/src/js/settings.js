import { settings, welcome } from './main-blocks.js';
import { transitionHideBlocks } from './base-functions.js';
import { getCurrentBlock, changeCurrentBlock } from './localStorage.js';
import { changeVolume } from './audio.js';

const volumeInput = document.querySelector('.volume-input');
const settingsIcon = document.querySelectorAll('.welcome-settings');
const closeIcon = document.querySelector('.close-icon');
const switchTime = document.querySelector('.switch-time');
const muteSoundIcon = document.querySelector('.mute-sound');
const maxSoundIcon = document.querySelector('.max-sound');
const defaultBtn = document.querySelector('.settings-default-btn');
const saveBtn = document.querySelector('.setting-save-btn');
const timeBlock = document.querySelector('.settings-time-to-answer');

volumeInput.addEventListener('input', (e) => {
  const { target } = e;
  const { value } = target;
  target.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 ${value}%, white 100%)`;
  changeVolume(value / 100);
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
    let currentBlock = getCurrentBlock();
    transitionHideBlocks(currentBlock, settings);
  });
});

closeIcon.addEventListener('click', () => {
  let currentBlock = getCurrentBlock();
  transitionHideBlocks(settings, currentBlock);
  defaultSettings();
});

function defaultSettings() {
  switchTime.checked = false;
  volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 50%, #A4A4A4 50%, white 100%)`;
  volumeInput.value = 50;
  timeBlock.querySelector('.time-to-answer-input').value = 20;
}

muteSoundIcon.addEventListener('click', () => {
  volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 0%, #A4A4A4 0%, white 100%)`;
  volumeInput.value = 0;
  changeVolume(0);
});

maxSoundIcon.addEventListener('click', () => {
  volumeInput.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 100%, #A4A4A4 100%, white 100%)`;
  volumeInput.value = 100;
  changeVolume(1);
});

defaultBtn.addEventListener('click', defaultSettings);

saveBtn.addEventListener('click', () => {
  let currentBlock = getCurrentBlock();
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
});

function getTime() {
  return timeBlock.querySelector('.time-to-answer-input').value;
}

export { getTime };
