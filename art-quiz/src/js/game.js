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

function startGame(start, end, card) {
  let time = +getTime();
  console.log(time);

  setTimeout(() => {
    if (getCurrentBlock() === picQuestion || getCurrentBlock() === artistQuestion) {
      endGame(getRightAnswers());
      endGameSound();
      addAnimationHide(modalAnswer);
    }
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
