import {
  changeCategoryIndex,
  changeCategory,
  changeCurrentBlock,
} from '../local-storage/index.js';
import { welcome, categories } from '../main-blocks/index.js';
import { renderCategories, resetCategories } from '../category/index.js';
import {
  showWelcome,
  setImage,
  transitionHideBlocks,
} from '../base-functions/index.js';
import {
  ARTIST_CATEGORY,
  PICTURE_CATEGORY,
  WELCOME_IMAGE_URL,
} from './constants/default';
import { picturesBtn, artistsBtn } from './constants/elements';

setImage(WELCOME_IMAGE_URL, welcome);
setTimeout(() => {
  showWelcome(welcome);
}, 300);

artistsBtn.addEventListener('click', () => {
  changeCategoryIndex(0);
  changeCategory(ARTIST_CATEGORY);
  resetCategories();
  renderCategories();
  transitionHideBlocks(welcome, categories);
  changeCurrentBlock(categories);
});

picturesBtn.addEventListener('click', () => {
  changeCategoryIndex(120);
  changeCategory(PICTURE_CATEGORY);
  resetCategories();
  renderCategories();
  transitionHideBlocks(welcome, categories);
  changeCurrentBlock(categories);
});
