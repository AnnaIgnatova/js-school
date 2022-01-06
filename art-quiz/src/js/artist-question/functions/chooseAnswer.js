import {
  getAnswers,
  getCurrentCategory,
  getRightAnswers,
} from '../../local-storage';
import changeQuestion from './changeQusetion';
import chooseRightAnswer from './chooseRigthAnswer';
import chooseWrongAnswer from './chooseWrongAnswer';

const chooseAnswer = (btn, cardIndex, questionNumber) => {
  const currentCategory = getCurrentCategory();
  const answers = getAnswers();
  const rightAnswers = getRightAnswers();

  if (Number(btn.dataset.index) === Number(questionNumber)) {
    chooseRightAnswer(rightAnswers, currentCategory, cardIndex);
  } else {
    chooseWrongAnswer(currentCategory, cardIndex);
  }

  changeQuestion(answers, questionNumber);
};

export default chooseAnswer;
