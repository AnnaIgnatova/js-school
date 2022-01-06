import { addAnimationHide, transitionHideBlocks } from '../../base-functions';
import { changeCurrentBlock, getCurrentBlock } from '../../local-storage';
import { welcome } from '../../main-blocks';
import { modalEndGame } from '../constants/elements';

const goHomePage = () => {
  const currentBlock = getCurrentBlock();
  addAnimationHide(modalEndGame);
  transitionHideBlocks(currentBlock, welcome);
  changeCurrentBlock(welcome);
};

export default goHomePage;
