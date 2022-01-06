import { addAnimationShow, transitionHideBlocks } from '../../base-functions';
import { changeCurrentBlock } from '../../local-storage';
import { artistQuestion, picQuestion, welcome } from '../../main-blocks';
import { chooseHeaderBlock, quitModal } from '../../modal-window';
import { WELCOME_BLOCK } from '../constants/default';

const selectWelcomeRoute = (target, currentBlock) => {
  if (
    target.classList.contains('score-home-link') ||
    target.parentNode.classList.contains('score-home-link')
  ) {
    if (currentBlock === picQuestion || currentBlock === artistQuestion) {
      addAnimationShow(quitModal);
      chooseHeaderBlock(WELCOME_BLOCK);
    } else {
      transitionHideBlocks(currentBlock, welcome);
      changeCurrentBlock(welcome);
    }
  }
};

export default selectWelcomeRoute;
