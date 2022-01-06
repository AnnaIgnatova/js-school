import { getCurrentBlock, changeCurrentBlock } from '../local-storage/index.js';
import { welcome } from '../main-blocks/index.js';
import { transitionHideBlocks } from '../base-functions/index.js';
import { headerNav, homeLink } from './constants/elements.js';
import selectWelcomeRoute from './functions/selectWelcomeRoute.js';
import selectCategoryRoute from './functions/selectCategoryRoute.js';

const headerRoute = (e) => {
  const currentBlock = getCurrentBlock();
  const { target } = e;
  selectWelcomeRoute(target, currentBlock);
  selectCategoryRoute(target, currentBlock);
};

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
