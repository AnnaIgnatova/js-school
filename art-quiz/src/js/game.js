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
import { picQuestion, categories, artistQuestion } from './main-blocks.js';
import {
  transitionHideBlocks,
  addAnimationHide,
  addAnimationShow,
} from './base-functions.js';
import renderPicQuestion from './pic-question.js';
import renderArtistQuestion from './artist-question.js';
import { endGameSound } from './audio.js';
import { getSwitcher, getTime } from './settings.js';

const PICTURE_CATEGORY = 'pic-category';
const HIDDEN_CLASS = 'hidden';
const DEFAULT_TIME_LINE =
  'linear-gradient(to right, #ffbca2 0%, #ffbca2 100%, #a4a4a4 100%, #a4a4a4 100%)';

const nextPictureBtn = document.querySelector('.next-picture');
const modalEndGame = document.querySelector('.modal-wrapper-end-game');

let progressTime;
let progressLine;
let progressBlock;

function endGame(rightAnswers) {
  addAnimationShow(modalEndGame);
  modalEndGame.querySelector('.points').textContent = `${rightAnswers}/10`;
}

function startGame(start, end, card) {
  if (getCurrentCategory() === PICTURE_CATEGORY) {
    progressTime = picQuestion.querySelector('.progress-time');
    progressLine = picQuestion.querySelector('.progress-line');
    progressBlock = picQuestion.querySelector('.question-progress');
  } else {
    progressTime = artistQuestion.querySelector('.progress-time');
    progressLine = artistQuestion.querySelector('.progress-line');
    progressBlock = artistQuestion.querySelector('.question-progress');
  }
  if (getSwitcher()) {
    progressBlock.classList.remove(HIDDEN_CLASS);
    let time = +getTime();
    let gameEnd = false;
    const percent = 100 / time;
    let totalPercent = 100;

    progressTime.textContent = `0:${String(time).padStart(2, '0')}`;
    progressLine.style.background = DEFAULT_TIME_LINE;

    const timer = setInterval(() => {
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
  } else {
    progressBlock.classList.add(HIDDEN_CLASS);
  }

  const currentCategory = getCurrentCategory();

  if (currentCategory === PICTURE_CATEGORY) changeCurrentBlock(picQuestion);
  else changeCurrentBlock(artistQuestion);
  let questionText;
  let currentQuestion = start;

  changeRightAnswers(0);

  if (currentCategory === PICTURE_CATEGORY) {
    transitionHideBlocks(categories, picQuestion);
    questionText = document.querySelector('.pic-question-text');

    questionText.textContent = `What is ${images[start].author} picture`;
    renderPicQuestion(currentQuestion, end, card.dataset.index);
  } else {
    transitionHideBlocks(categories, artistQuestion);
    renderArtistQuestion(currentQuestion, end, card.dataset.index);
  }

  nextPictureBtn.addEventListener('click', () => {
    addAnimationHide(modalAnswer);
    const answers = getAnswers();
    const rightAnswers = getRightAnswers();
    const curCategory = getCurrentCategory();

    if (answers === 10) {
      endGame(rightAnswers);
      endGameSound();
    } else {
      currentQuestion++;
      if (curCategory === PICTURE_CATEGORY) {
        questionText.textContent = `What is ${images[currentQuestion].author} picture`;
        renderPicQuestion(currentQuestion, end, card.dataset.index);
      } else {
        renderArtistQuestion(currentQuestion, end, card.dataset.index);
      }
    }
  });
}

export default startGame;
