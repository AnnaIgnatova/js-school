import {
  changeAnswers,
  changeCategoryIndex,
  changeRightAnswers,
  getCurrentCategory,
} from '../../local-storage';
import { PICTURE_CATEGORY } from '../constants/card-classes';
import { cardsBlock } from '../constants/elements';

const resetCategories = () => {
  const currentCategory = getCurrentCategory();
  if (currentCategory === PICTURE_CATEGORY) {
    changeCategoryIndex(120);
  } else {
    changeCategoryIndex(0);
  }
  changeRightAnswers(0);
  changeAnswers(0);
  cardsBlock.innerHTML = '';
};

export default resetCategories;
