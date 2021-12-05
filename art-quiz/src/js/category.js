import {
  getCurrentCategory,
  getCategoryIndex,
  changeAnswers,
  changeCategoryIndex,
  changeRightAnswers,
  gameInfo,
  changeCurrentBlock,
  getCurrentBlock,
} from './localStorage.js';
import {
  picQuestion,
  score,
  categories,
  artistQuestion,
  welcome,
} from './main-blocks.js';
import { startGame } from './game.js';
import { setImage, transitionHideBlocks, showCard, addAnimationHide} from './base-functions.js';
import { renderScore } from './score.js';

const PIC_CATEGORY = [
  'Portrait',
  'Landscape',
  'Still life',
  'Impressionism',
  'Expressionism',
  'Avant-garde',
  'Renaissance',
  'Surrealism',
  'Kitsch',
  'Minimalism',
  'Interior',
  'Nude',
];

const cardsBlock = document.querySelector('.categories-cards');
const nextQuizBtn = document.querySelector('.modal-next-quiz');
const modalHomeLink = document.querySelector('.modal-home-link');
const modalEndGame = document.querySelector('.modal-wrapper-end-game');

const renderCard = (category, index) => {
  let categoryIndex = getCategoryIndex();
  const currentCategory = getCurrentCategory();
  const card = document.createElement('div');

  card.className = 'category-card';

  let rightAnswers = 0;

  gameInfo[currentCategory][index - 1].map((item) => {
    if (item) rightAnswers++;
    return rightAnswers;
  });

  card.innerHTML = `
      <div class="card-info">
        <span class="card-name">${category}</span>
        <span class="card-points">${rightAnswers}/10</span>
      </div>
      <div class="card-img">
        <div class="card-play-info">Score</div>
      </div>
    `;

  const cardImage = card.querySelector('.card-img');
  const cardScore = card.querySelector('.card-play-info');

  cardImage.dataset.start = categoryIndex;
  cardImage.dataset.end = categoryIndex + 9;
  cardImage.dataset.index = index;
  categoryIndex += 10;
  changeCategoryIndex(categoryIndex);
  setImage(`./images/${currentCategory}/${index}.jpg`, cardImage);

  if (!rightAnswers) {
    cardImage.style.filter = 'grayscale(100%)';
    cardScore.classList.add('hidden');
  } else {
    cardImage.style.filter = 'grayscale(0%)';
    cardScore.classList.remove('hidden');
  }

  cardImage.addEventListener('click', (e) => {
    const curCategory = getCurrentCategory();

    if (!e.target.classList.contains('card-play-info')) {
      if (curCategory === 'pic-category') changeCurrentBlock(picQuestion);
      else changeCurrentBlock(artistQuestion);
      if (gameInfo[curCategory][index - 1].length !== 0) {
        gameInfo[curCategory][index - 1] = [];
      }
      startGame(e.target.dataset.start, e.target.dataset.end, cardImage);
    }
  });

  cardScore.addEventListener('click', (e) => {
    changeCurrentBlock(score);
    const start = +e.target.parentNode.dataset.start;
    const end = +e.target.parentNode.dataset.end;
    const i = +e.target.parentNode.dataset.index;
    transitionHideBlocks(categories, score);
    renderScore(start, end, i);
  });

  card.style.opacity = 0;

  return card;
};

function resetCategories() {
  const currentCategory = getCurrentCategory();
  if (currentCategory === 'pic-category') {
    changeCategoryIndex(120);
  } else {
    changeCategoryIndex(0);
  }
  changeRightAnswers(0);
  changeAnswers(0);
  cardsBlock.innerHTML = '';
}

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
  renderCategories();

  transitionHideBlocks(currentBlock, categories);
  changeCurrentBlock(categories);
});

modalHomeLink.addEventListener('click', () => {
  const currentBlock = getCurrentBlock();
  addAnimationHide(modalEndGame);
  transitionHideBlocks(currentBlock, welcome);
  changeCurrentBlock(welcome);
});

export { resetCategories, renderCategories };
