import { setImage } from '../../base-functions';
import { GRAY_FILTER, NO_FILTER } from '../../category/constants/card-filters';
import { gameInfo } from '../../local-storage';

const setScoreCardImg = (card, imageNum, currentCategory, cardIndex, index) => {
  const cardImage = card.querySelector('.score-card-img');
  setImage(`./images/img/${imageNum}.jpg`, cardImage);

  if (!gameInfo[currentCategory][index - 1][cardIndex]) {
    cardImage.style.filter = GRAY_FILTER;
  } else {
    cardImage.style.filter = NO_FILTER;
  }
  return cardImage;
};

export default setScoreCardImg;
