import {
  changeCategoryIndex,
  changeCategory,
  changeCurrentBlock,
} from './localStorage.js';
import { welcome, categories } from './main-blocks.js';
import { renderCategories, resetCategories } from './category.js';
import { showWelcome, setImage, transitionHideBlocks } from './base-functions.js';

const picturesBtn = document.querySelector('.pictures-btn');
const artistsBtn = document.querySelector('.artists-btn');

setImage('./images/welcome.jpg', welcome);
setTimeout(() => {
  showWelcome(welcome);
}, 300);

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
