import { SCORE_SHOW_ANIMATION, SCORE_SHOW_BLOCK } from '../constants/default';
import scoreAnimation from './scoreAnimation';

const showScoreInfo = (info) => {
  const cardScoreInfo = info;
  cardScoreInfo.style.animation = SCORE_SHOW_ANIMATION;
  scoreAnimation(cardScoreInfo, SCORE_SHOW_BLOCK);
};

export default showScoreInfo;
