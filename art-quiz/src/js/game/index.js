import {
  getCurrentCategory,
  changeRightAnswers,
} from '../local-storage/index.js';
import { picQuestion, artistQuestion } from '../main-blocks/index.js';
import { getSwitcher } from '../settings/index.js';
import { nextPictureBtn } from './constants/elements';
import { PICTURE_CATEGORY } from './constants/default';
import getTimeLine from './functions/getTimeLine.js';
import createTimer from './functions/createTimer.js';
import goToNextPic from './functions/goToNextPic.js';
import hideTimer from './functions/hideTimer.js';
import setCurrentCategory from './functions/setCurrentCategory.js';
import setCategoryQuestion from './functions/setCategoryQuestion.js';

const startGame = (start, end, card) => {
  const [progressTime, progressBlock, progressLine] =
    getCurrentCategory() === PICTURE_CATEGORY
      ? getTimeLine(picQuestion)
      : getTimeLine(artistQuestion);

  if (getSwitcher()) createTimer(progressBlock, progressTime, progressLine);
  else hideTimer();

  const currentCategory = setCurrentCategory();
  let currentQuestion = start;

  changeRightAnswers(0);

  const questionText = setCategoryQuestion(
    currentCategory,
    currentQuestion,
    end,
    start,
    card
  );

  nextPictureBtn.addEventListener('click', () => {
    currentQuestion = goToNextPic(currentQuestion, questionText, end, card);
  });
};

export default startGame;
