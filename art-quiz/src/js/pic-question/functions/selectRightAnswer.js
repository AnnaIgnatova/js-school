import { rightIcon, wrongIcon } from '../../artist-question/constants/elements';
import { winGameSound } from '../../audio';
import { HIDDEN_CLASS } from '../../base-functions/constants/animation';
import { changeRightAnswers, gameInfo } from '../../local-storage';

const selectRightAnswer = (right, currentCategory, cardIndex) => {
  let rightAnswers = right;
  winGameSound();
  rightIcon.classList.remove(HIDDEN_CLASS);
  wrongIcon.classList.add(HIDDEN_CLASS);
  rightAnswers++;
  changeRightAnswers(rightAnswers);
  gameInfo[currentCategory][cardIndex - 1].push(true);
};

export default selectRightAnswer;
