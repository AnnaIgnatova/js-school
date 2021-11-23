import {
  getCurrentCategory,
  getRightAnswers,
  changeCurrentBlock,
  changeRightAnswers,
  getAnswers,
  images,
  getCurrentBlock,
} from './localStorage.js';
import { modalAnswer } from './modal-window.js';
import {
  picQuestion,
  categories,
  welcome,
  artistQuestion,
} from './main-blocks.js';
import {
  transitionHideBlocks,
  addAnimationHide,
  addAnimationShow,
} from './base-functions.js';
import { renderPicQuestion } from './pic-question.js';
import { renderCategories } from './category.js';
import { renderArtistQuestion } from './artist-question.js';
import { endGameSound } from './audio.js';
import { getTime } from './settings.js';

const nextPictureBtn = document.querySelector('.next-picture');
const nextQuizBtn = document.querySelector('.modal-next-quiz');
const modalEndGame = document.querySelector('.modal-wrapper-end-game');
const modalHomeLink = document.querySelector('.modal-home-link');
const progressTime = document.querySelector('.progress-time');
const progressLine = document.querySelector('.progress-line');

function startGame(start, end, card) {
  let time = +getTime();
  let gameEnd = false;
  let percent = 100 / time;
  let totalPercent = 100;

  progressTime.textContent = `0:${String(time).padStart(2, '0')}`;
  progressLine.style.background = `linear-gradient(to right, #ffbca2 0%, #ffbca2 100%, #a4a4a4 100%, #a4a4a4 100%)`;

  let timer = setInterval(() => {
    time--;
    totalPercent -= percent;
    
    progressTime.textContent = `0:${String(time).padStart(2, '0')}`;
    progressLine.style.background = `linear-gradient(to right, #ffbca2 0%, #ffbca2 ${totalPercent}%, #a4a4a4 ${totalPercent}%, #a4a4a4 100%)`;
    if (
      getCurrentBlock() !== picQuestion &&
      getCurrentBlock() !== artistQuestion
    ) {
      gameEnd = true;
      clearInterval(timer);
    }
  }, 1000);

  setTimeout(() => {
    if (
      (getCurrentBlock() === picQuestion ||
        getCurrentBlock() === artistQuestion) &&
      !gameEnd
    ) {
      endGame(getRightAnswers());
      endGameSound();
      addAnimationHide(modalAnswer);
      gameEnd = false;
    }
    clearInterval(timer);
  }, time * 1000);

  let currentCategory = getCurrentCategory();

  if (currentCategory === 'pic-category') changeCurrentBlock(picQuestion);
  else changeCurrentBlock(artistQuestion);
  let questionText;
  let currentQuestion = start;

  changeRightAnswers(0);

  if (currentCategory === 'pic-category') {
    transitionHideBlocks(categories, picQuestion);
    questionText = document.querySelector('.pic-question-text');
    console.log(start);
    questionText.textContent = `What is ${images[start].author} picture`;
    renderPicQuestion(currentQuestion, end, card.dataset.index);
  } else {
    transitionHideBlocks(categories, artistQuestion);
    renderArtistQuestion(currentQuestion, end, card.dataset.index);
  }

  nextPictureBtn.addEventListener('click', () => {
    addAnimationHide(modalAnswer);
    let answers = getAnswers();
    let rightAnswers = getRightAnswers();
    let currentCategory = getCurrentCategory();

    if (answers === 10) {
      endGame(rightAnswers);
      endGameSound();
    } else {
      currentQuestion++;
      if (currentCategory === 'pic-category') {
        questionText.textContent = `What is ${images[currentQuestion].author} picture`;
        renderPicQuestion(currentQuestion, end, card.dataset.index);
      } else {
        renderArtistQuestion(currentQuestion, end, card.dataset.index);
      }
    }
  });
}

function endGame(rightAnswers) {
  addAnimationShow(modalEndGame);
  modalEndGame.querySelector('.points').textContent = `${rightAnswers}/10`;
}

nextQuizBtn.addEventListener('click', () => {
  let currentBlock = getCurrentBlock();
  addAnimationHide(modalEndGame);
  renderCategories();

  transitionHideBlocks(currentBlock, categories);
  changeCurrentBlock(categories);
});

modalHomeLink.addEventListener('click', () => {
  let currentBlock = getCurrentBlock();
  addAnimationHide(modalEndGame);
  transitionHideBlocks(currentBlock, welcome);
  changeCurrentBlock(welcome);
});

export { startGame };
