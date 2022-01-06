import { rightIcon, wrongIcon } from '../../artist-question/constants/elements';
import { loseGameSound } from '../../audio';
import { HIDDEN_CLASS } from '../../base-functions/constants/animation';
import { gameInfo } from '../../local-storage';

const selectWrongAnswer = (currentCategory, cardIndex) => {
  loseGameSound();
  rightIcon.classList.add(HIDDEN_CLASS);
  wrongIcon.classList.remove(HIDDEN_CLASS);
  gameInfo[currentCategory][cardIndex - 1].push(false);
};

export default selectWrongAnswer;
