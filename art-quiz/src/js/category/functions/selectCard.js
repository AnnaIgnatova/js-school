import startGame from '../../game';
import {
  changeCurrentBlock,
  gameInfo,
  getCurrentCategory,
} from '../../local-storage';
import { artistQuestion, picQuestion } from '../../main-blocks';
import { CARD_INFO_CLASS, PICTURE_CATEGORY } from '../constants/card-classes';

const selectCard = (index, e, cardImage) => {
  const curCategory = getCurrentCategory();

  if (!e.target.classList.contains(CARD_INFO_CLASS)) {
    if (curCategory === PICTURE_CATEGORY) changeCurrentBlock(picQuestion);
    else changeCurrentBlock(artistQuestion);

    if (gameInfo[curCategory][index - 1].length !== 0) {
      gameInfo[curCategory][index - 1] = [];
    }
    startGame(e.target.dataset.start, e.target.dataset.end, cardImage);
  }
};

export default selectCard;
