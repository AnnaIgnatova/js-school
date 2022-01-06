import { addAnimationShow, transitionHideBlocks } from '../../base-functions';
import { renderCategories } from '../../category';
import { changeCurrentBlock } from '../../local-storage';
import { artistQuestion, categories, picQuestion } from '../../main-blocks';
import { chooseHeaderBlock, quitModal } from '../../modal-window';
import { CATEGORIES_BLOCK } from '../constants/default';

const selectCategoryRoute = (target, currentBlock) => {
  if (
    target.classList.contains('score-category-link') ||
    target.parentNode.classList.contains('score-category-link')
  ) {
    renderCategories();
    if (currentBlock === picQuestion || currentBlock === artistQuestion) {
      addAnimationShow(quitModal);
      chooseHeaderBlock(CATEGORIES_BLOCK);
    } else {
      transitionHideBlocks(currentBlock, categories);
      changeCurrentBlock(categories);
    }
  }
};

export default selectCategoryRoute;
