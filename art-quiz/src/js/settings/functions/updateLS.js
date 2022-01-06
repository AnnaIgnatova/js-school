const { volumeInput, switchTime, timeBlock } = require('../constants/elements');

const updateLocalStorage = () => {
  const settingsInfo = [
    volumeInput.value,
    `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volumeInput.value}%, #A4A4A4 ${volumeInput.value}%, white 100%)`,
    switchTime.checked,
    timeBlock.querySelector('.time-to-answer-input').value,
  ];
  localStorage.setItem('settings-info', JSON.stringify(settingsInfo));
  return settingsInfo;
};

export default updateLocalStorage;
