import {
  changeCategoryIndex,
  changeCategory,
  changeCurrentBlock,
} from './localStorage.js';
import { welcome, categories } from './main-blocks.js';
import { renderCategories, resetCategories } from './category.js';
import {
  showWelcome,
  setImage,
  transitionHideBlocks,
} from './base-functions.js';

const ARTIST_CATEGORY = 'artist-category';
const PICTURE_CATEGORY = 'pic-category';
const WELCOME_IMAGE_URL = './images/welcome.jpg';

const picturesBtn = document.querySelector('.pictures-btn');
const artistsBtn = document.querySelector('.artists-btn');

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
