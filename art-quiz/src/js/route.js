import { renderCategories } from './category.js';
import { getCurrentBlock, changeCurrentBlock } from './localStorage.js';
import {
  welcome,
  categories,
  picQuestion,
  artistQuestion,
} from './main-blocks.js';
import { quitModal, chooseHeaderBlock } from './modal-window.js';
import { addAnimationShow, transitionHideBlocks } from './base-functions.js';

const headerNav = document.querySelectorAll('.score-header');
const homeLink = document.querySelectorAll('.home-link');

function headerRoute(e) {
  const currentBlock = getCurrentBlock();
  const { target } = e;
  if (
    target.classList.contains('score-home-link')
    || target.parentNode.classList.contains('score-home-link')
  ) {
    if (currentBlock === picQuestion || currentBlock === artistQuestion) {
      addAnimationShow(quitModal);
      chooseHeaderBlock('welcome');
    } else {
      transitionHideBlocks(currentBlock, welcome);
      changeCurrentBlock(welcome);
    }
  }
  if (
    target.classList.contains('score-category-link')
    || target.parentNode.classList.contains('score-category-link')
  ) {
    renderCategories();
    if (currentBlock === picQuestion || currentBlock === artistQuestion) {
      addAnimationShow(quitModal);
      chooseHeaderBlock('category');
    } else {
      transitionHideBlocks(currentBlock, categories);
      changeCurrentBlock(categories);
    }
  }
}

headerNav.forEach((nav) => {
  nav.addEventListener('click', headerRoute);
});

homeLink.forEach((link) => {
  link.addEventListener('click', () => {
    const currentBlock = getCurrentBlock();
    transitionHideBlocks(currentBlock, welcome);
    changeCurrentBlock(welcome);
  });
});
