import { transitionHideBlocks } from '../../base-functions';
import { changeCurrentBlock } from '../../local-storage';
import { settings, welcome } from '../../main-blocks';

const openSettings = (e) => {
  if (
    e.target.classList.contains('settings-back') ||
    e.target.parentElement.classList.contains('settings-back')
  ) {
    changeCurrentBlock(welcome);
    transitionHideBlocks(settings, welcome);
  }
};

export default openSettings;
