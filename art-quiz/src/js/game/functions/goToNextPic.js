import renderArtistQuestion from '../../artist-question';
import { endGameSound } from '../../audio';
import { addAnimationHide } from '../../base-functions';
import { PICTURE_CATEGORY } from '../../category/constants/card-classes';
import {
  getAnswers,
  getCurrentCategory,
  getRightAnswers,
  images,
} from '../../local-storage';
import { modalAnswer } from '../../modal-window';
import renderPicQuestion from '../../pic-question';
import endGame from './endGame';

const goToNextPic = (question, text, end, card) => {
  addAnimationHide(modalAnswer);
  const answers = getAnswers();
  const rightAnswers = getRightAnswers();
  const curCategory = getCurrentCategory();
  let currentQuestion = question;
  const questionText = text;

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

  return currentQuestion;
};

export default goToNextPic;
