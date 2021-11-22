import { settings, welcome } from './main-blocks.js';
import { transitionHideBlocks } from './base-functions.js';
import { getCurrentBlock, changeCurrentBlock } from './localStorage.js';

const volumeInput = document.querySelector('.volume-input');
const settingsIcon = document.querySelectorAll('.welcome-settings');
const closeIcon = document.querySelector('.close-icon');

volumeInput.addEventListener('input', (e) => {
  const { target } = e;
  const { value } = target;
  target.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 ${value}%, white 100%)`;
});

settings.addEventListener('click', (e) => {
  let currentBlock = getCurrentBlock();
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
});
