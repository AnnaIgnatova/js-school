const { endGameSound } = require('../../audio');
const { addAnimationHide } = require('../../base-functions');
const { HIDDEN_CLASS } = require('../../base-functions/constants/animation');
const { getCurrentBlock, getRightAnswers } = require('../../local-storage');
const { picQuestion, artistQuestion } = require('../../main-blocks');
const { modalAnswer } = require('../../modal-window');
const { getTime } = require('../../settings');
const { DEFAULT_TIME_LINE } = require('../constants/default');
const { default: endGame } = require('./endGame');

const createTimer = (progressBlock, timeLine, progress) => {
  const progressTime = timeLine;
  const progressLine = progress;

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
};

export default createTimer;
