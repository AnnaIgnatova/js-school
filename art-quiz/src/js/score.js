import {
  gameInfo,
  getCurrentCategory,
  changeCurrentBlock,
  images,
} from './localStorage.js';
import { score } from './main-blocks.js';

const scoreCards = document.querySelector('.score-cards');

function renderScoreCard(author, name, year, imageNum, index, cardIndex) {
  let currentCategory = getCurrentCategory();

  let card = document.createElement('div');
  card.className = 'score-card';
  card.innerHTML = `
      <div class="score-card-info">
        <span>${name}</span>
        <span>${author}, ${year}</span>
      </div>
      <div class="score-card-img"></div>  
    `;

  let cardImage = card.querySelector('.score-card-img');
  cardImage.style.backgroundImage = `url(./images/img/${imageNum}.jpg)`;

  if (!gameInfo[currentCategory][index - 1][cardIndex]) {
    cardImage.style.filter = 'grayscale(100%)';
  } else {
    cardImage.style.filter = 'grayscale(0%)';
  }
  cardImage.addEventListener('click', () => {
    let cardInfo = cardImage.previousElementSibling;
    showScoreInfo(cardInfo);
    hideScoreInfo(cardInfo);
    changeCurrentBlock(score);
  });
  scoreCards.append(card);
}

function showScoreInfo(cardInfo) {
  cardInfo.style.animation = 'showCardInfoFrom 0.5s';
  cardInfo.addEventListener('animationend', () => {
    cardInfo.style.transform = 'translateY(0)';
    cardInfo.style.animation = '';
  });
}

function hideScoreInfo(cardInfo) {
  cardInfo.addEventListener('click', () => {
    cardInfo.style.animation = 'showCardInfoBack 0.5s';
    cardInfo.addEventListener('animationend', () => {
      cardInfo.style.transform = 'translateY(250px)';
      cardInfo.style.animation = '';
    });
  });
}

function renderScore(start, end, index) {
  scoreCards.innerHTML = '';
  let counter = 0;
  for (let i = start; i <= end; i++) {
    let { author, name, year, imageNum } = images[i];
    renderScoreCard(author, name, year, imageNum, index, counter);
    counter++;
  }
}

export { renderScore };
