import { setImage } from './base-functions.js';
import {
  gameInfo,
  getCurrentCategory,
  changeCurrentBlock,
  images,
} from './localStorage.js';
import { score } from './main-blocks.js';

const SCORE_HIDE_ANIMATION = 'showCardInfoBack 0.5s';
const SCORE_SHOW_ANIMATION = 'showCardInfoFrom 0.5s';
const SCORE_SHOW_BLOCK = 'translateY(0)';
const SCORE_HIDE_BLOCK = 'translateY(250px)';
const GRAY_FILTER = 'grayscale(100%)';
const NO_FILTER = 'grayscale(0%)';

const scoreCards = document.querySelector('.score-cards');

function showScoreInfo(info) {
  const cardScoreInfo = info;
  cardScoreInfo.style.animation = SCORE_SHOW_ANIMATION;
  cardScoreInfo.addEventListener('animationend', () => {
    cardScoreInfo.style.transform = SCORE_SHOW_BLOCK;
    cardScoreInfo.style.animation = '';
  });
}

function hideScoreInfo(info) {
  const cardScoreInfo = info;
  cardScoreInfo.addEventListener('click', () => {
    cardScoreInfo.style.animation = SCORE_HIDE_ANIMATION;
    cardScoreInfo.addEventListener('animationend', () => {
      cardScoreInfo.style.transform = SCORE_HIDE_BLOCK;
      cardScoreInfo.style.animation = '';
    });
  });
}

function renderScoreCard(author, name, year, imageNum, index, cardIndex) {
  const currentCategory = getCurrentCategory();

  const card = document.createElement('div');
  card.className = 'score-card';
  card.innerHTML = `
      <div class="score-card-info">
        <span>${name}</span>
        <span>${author}, ${year}</span>
      </div>
      <div class="score-card-img"></div>  
    `;

  const cardImage = card.querySelector('.score-card-img');
  setImage(`./images/img/${imageNum}.jpg`, cardImage);

  if (!gameInfo[currentCategory][index - 1][cardIndex]) {
    cardImage.style.filter = GRAY_FILTER;
  } else {
    cardImage.style.filter = NO_FILTER;
  }
  cardImage.addEventListener('click', () => {
    const cardInfo = cardImage.previousElementSibling;
    showScoreInfo(cardInfo);
    hideScoreInfo(cardInfo);
    changeCurrentBlock(score);
  });
  scoreCards.append(card);
}

function renderScore(start, end, index) {
  scoreCards.innerHTML = '';
  let counter = 0;
  for (let i = start; i <= end; i++) {
    const { author, name, year, imageNum } = images[i];
    renderScoreCard(author, name, year, imageNum, index, counter);
    counter++;
  }
}

export default { renderScore };
