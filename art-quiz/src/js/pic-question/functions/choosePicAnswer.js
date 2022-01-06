import { addAnimationShow } from '../../base-functions';
import {
  changeAnswers,
  getAnswers,
  getCurrentCategory,
  getRightAnswers,
} from '../../local-storage';
import { modalAnswer, renderAnswerModal } from '../../modal-window';
import selectRightAnswer from './selectRightAnswer';
import selectWrongAnswer from './selectWrongAnswer';

const choosePicAnswer = (element, picIndex, cardIndex) => {
  const currentCategory = getCurrentCategory();
  const rightAnswers = getRightAnswers();
  let answers = getAnswers();

  if (Number(element.dataset.index) === Number(picIndex)) {
    selectRightAnswer(rightAnswers, currentCategory, cardIndex);
  } else {
    selectWrongAnswer(currentCategory, cardIndex);
  }

  addAnimationShow(modalAnswer);
  renderAnswerModal(picIndex);
  answers++;
  changeAnswers(answers);
};

export default choosePicAnswer;
