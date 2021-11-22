import {
  getCurrentCategory,
  getCategoryIndex,
  changeAnswers,
  changeCategoryIndex,
  changeRightAnswers,
  gameInfo,
  changeCurrentBlock,
} from './localStorage.js';
import {
  picQuestion,
  score,
  categories,
  artistQuestion,
} from './main-blocks.js';
import { startGame } from './game.js';
import { setImage, transitionHideBlocks } from './base-functions.js';
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

const renderCard = (category, index) => {
  let categoryIndex = getCategoryIndex();
  let currentCategory = getCurrentCategory();
  let card = document.createElement('div');

  card.className = 'category-card';

  let rightAnswers = 0;

  gameInfo[currentCategory][index - 1].map((item) => {
    if (item) rightAnswers++;
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

  let cardImage = card.querySelector('.card-img');
  let cardScore = card.querySelector('.card-play-info');

  cardImage.dataset.start = categoryIndex;
  cardImage.dataset.end = categoryIndex + 9;
  cardImage.dataset.index = index;
  categoryIndex += 10;
  changeCategoryIndex(categoryIndex);
  setImage(`./images/${currentCategory}/${index}.jpg`, cardImage);
  // cardImage.style.backgroundImage = `url('./images/${currentCategory}/${index}.jpg')`;

  if (!rightAnswers) {
    cardImage.style.filter = 'grayscale(100%)';
    cardScore.classList.add('hidden');
  } else {
    cardImage.style.filter = 'grayscale(0%)';
    cardScore.classList.remove('hidden');
  }

  cardImage.addEventListener('click', (e) => {
    let currentCategory = getCurrentCategory();

    if (!e.target.classList.contains('card-play-info')) {
      if (currentCategory === 'pic-category') changeCurrentBlock(picQuestion);
      else changeCurrentBlock(artistQuestion);
      if (gameInfo[currentCategory][index - 1].length !== 0)
        gameInfo[currentCategory][index - 1] = [];
      startGame(e.target.dataset.start, e.target.dataset.end, cardImage);
    }
  });

  cardScore.addEventListener('click', (e) => {
    changeCurrentBlock(score);
    let start = +e.target.parentNode.dataset.start;
    let end = +e.target.parentNode.dataset.end;
    let index = +e.target.parentNode.dataset.index;
    transitionHideBlocks(categories, score);
    renderScore(start, end, index);
  });

  return card;
};

function resetCategories() {
  let currentCategory = getCurrentCategory();
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
    return cardsBlock;
  });
};

export { resetCategories, renderCategories };
