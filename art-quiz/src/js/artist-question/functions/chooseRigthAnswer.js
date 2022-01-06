import { winGameSound } from '../../audio';
import { changeRightAnswers, gameInfo } from '../../local-storage';
import { HIDDEN_CLASS } from '../constants/blocks';
import { rightIcon, wrongIcon } from '../constants/elements';

const chooseRightAnswer = (count, currentCategory, cardIndex) => {
  let rightAnswers = count;

  winGameSound();
  rightIcon.classList.remove(HIDDEN_CLASS);
  wrongIcon.classList.add(HIDDEN_CLASS);
  rightAnswers++;
  changeRightAnswers(rightAnswers);
  gameInfo[currentCategory][cardIndex - 1].push(true);
};

export default chooseRightAnswer;
