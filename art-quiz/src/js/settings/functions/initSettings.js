import { switchTime, timeBlock, volumeInput } from '../constants/elements';

const initSettings = (settingsInfo) => {
  switchTime.checked = settingsInfo[2];
  volumeInput.style.background = settingsInfo[1];
  volumeInput.value = settingsInfo[0];
  timeBlock.querySelector('.time-to-answer-input').value = settingsInfo[3];
};

export default initSettings;
