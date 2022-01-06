import { loseGameSound } from '../../audio';
import { gameInfo } from '../../local-storage';
import { HIDDEN_CLASS } from '../constants/blocks';
import { rightIcon, wrongIcon } from '../constants/elements';

const chooseWrongAnswer = (currentCategory, cardIndex) => {
  loseGameSound();
  rightIcon.classList.add(HIDDEN_CLASS);
  wrongIcon.classList.remove(HIDDEN_CLASS);
  gameInfo[currentCategory][cardIndex - 1].push(false);
};

export default chooseWrongAnswer;
