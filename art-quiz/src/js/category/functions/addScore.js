import { HIDDEN_CLASS } from '../../base-functions/constants/animation';
import { GRAY_FILTER, NO_FILTER } from '../constants/card-filters';

const addScoreToCard = (rightAnswers, img, cardScore) => {
  const cardImage = img;

  if (!rightAnswers) {
    cardImage.style.filter = GRAY_FILTER;
    cardScore.classList.add(HIDDEN_CLASS);
  } else {
    cardImage.style.filter = NO_FILTER;
    cardScore.classList.remove(HIDDEN_CLASS);
  }
};

export default addScoreToCard;
