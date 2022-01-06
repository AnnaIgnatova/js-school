import { SCORE_HIDE_ANIMATION, SCORE_HIDE_BLOCK } from '../constants/default';
import scoreAnimation from './scoreAnimation';

const hideScoreInfo = (info) => {
  const cardScoreInfo = info;
  cardScoreInfo.addEventListener('click', () => {
    cardScoreInfo.style.animation = SCORE_HIDE_ANIMATION;
    scoreAnimation(cardScoreInfo, SCORE_HIDE_BLOCK);
  });
};

export default hideScoreInfo;
