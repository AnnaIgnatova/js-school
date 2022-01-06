import { transitionHideBlocks } from '../../base-functions';
import { getCurrentBlock } from '../../local-storage';
import { settings } from '../../main-blocks';

const closeSettings = () => {
  const currentBlock = getCurrentBlock();
  transitionHideBlocks(settings, currentBlock);
};

export default closeSettings;
