import {
  getCurrentCategory,
  getCategoryIndex,
  changeCurrentBlock,
  getCurrentBlock,
} from '../local-storage/index.js';
import { categories } from '../main-blocks/index.js';
import {
  transitionHideBlocks,
  showCard,
  addAnimationHide,
} from '../base-functions/index.js';
import PIC_CATEGORY from './constants/pic-categories.js';
import {
  cardsBlock,
  nextQuizBtn,
  modalHomeLink,
  modalEndGame,
} from './constants/elements';
import resetCategories from './functions/resetCategories.js';
import goHomePage from './functions/goHomePage.js';
import createCard from './functions/createCard.js';
import getRightAnswers from './functions/getRightAnswers.js';
import createCardImage from './functions/createCardImg.js';
import changeCategoryNum from './functions/changeCategoryNum.js';
import addScoreToCard from './functions/addScore.js';
import selectCard from './functions/selectCard.js';
import selectScore from './functions/selectScore.js';

const renderCard = (category, index) => {
  const categoryIndex = getCategoryIndex();
  const currentCategory = getCurrentCategory();
  const rightAnswers = getRightAnswers(currentCategory, index);
  const card = createCard(category, rightAnswers);
  const cardImage = createCardImage(card, categoryIndex, index);
  const cardScore = card.querySelector('.card-play-info');

  card.style.opacity = 0;

  changeCategoryNum(categoryIndex, currentCategory, index, cardImage);
  addScoreToCard(rightAnswers, cardImage, cardScore);

  cardImage.addEventListener('click', (e) => {
    selectCard(index, e, cardImage);
  });
  cardScore.addEventListener('click', (e) => {
    selectScore(e);
  });

  return card;
};

const renderCategories = () => {
  resetCategories();

  PIC_CATEGORY.map((category, index) => {
    const card = renderCard(category, index + 1);
    cardsBlock.append(card);
    setTimeout(() => {
      showCard(card);
    }, 200 * (index + 1));
    return card;
  });
};

nextQuizBtn.addEventListener('click', () => {
  const currentBlock = getCurrentBlock();
  addAnimationHide(modalEndGame);
  renderCategories(renderCard);

  transitionHideBlocks(currentBlock, categories);
  changeCurrentBlock(categories);
});

modalHomeLink.addEventListener('click', goHomePage);

export { resetCategories, renderCategories };
