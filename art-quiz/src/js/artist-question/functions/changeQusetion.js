import { addAnimationShow } from '../../base-functions';
import { changeAnswers } from '../../local-storage';
import { modalAnswer, renderAnswerModal } from '../../modal-window';

const changeQuestion = (count, questionNumber) => {
  let answers = count;

  addAnimationShow(modalAnswer);
  renderAnswerModal(questionNumber);
  answers++;
  changeAnswers(answers);
};

export default changeQuestion;
