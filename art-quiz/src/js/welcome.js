import {
  changeCategoryIndex,
  changeCategory,
  changeCurrentBlock,
} from './localStorage.js';
import { welcome, categories } from './main-blocks.js';
import { renderCategories, resetCategories } from './category.js';
import { transitionHideBlocks } from './base-functions.js';

const picturesBtn = document.querySelector('.pictures-btn');
const artistsBtn = document.querySelector('.artists-btn');

artistsBtn.addEventListener('click', () => {
  changeCategoryIndex(0);
  changeCategory('artist-category');
  resetCategories();
  renderCategories();
  transitionHideBlocks(welcome, categories);
  changeCurrentBlock(categories);
});

picturesBtn.addEventListener('click', () => {
  changeCategoryIndex(120);
  changeCategory('pic-category');
  resetCategories();
  renderCategories();
  transitionHideBlocks(welcome, categories);
  changeCurrentBlock(categories);
});
