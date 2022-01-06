import { HIDDEN_CLASS } from '../../base-functions/constants/animation';

const hideTimer = (progressBlock) => {
  progressBlock.classList.add(HIDDEN_CLASS);
};

export default hideTimer;
