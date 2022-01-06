import {
  DEFAULT_SECONDS_VALUE,
  DEFAULT_VOLUME_LINE,
  DEFAULT_VOLUME_VALUE,
  DEFAUT_GAME_TIME,
} from '../constants/default';

const getItemsFromLocalStorage = () => {
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
  return settingsInfo;
};

export default getItemsFromLocalStorage;
