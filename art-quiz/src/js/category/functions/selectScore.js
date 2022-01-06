import { transitionHideBlocks } from '../../base-functions';
import { changeCurrentBlock } from '../../local-storage';
import { categories, score } from '../../main-blocks';
import renderScore from '../../score';

const selectScore = (e) => {
  changeCurrentBlock(score);
  const start = Number(e.target.parentNode.dataset.start);
  const end = Number(e.target.parentNode.dataset.end);
  const i = Number(e.target.parentNode.dataset.index);
  transitionHideBlocks(categories, score);
  renderScore(start, end, i);
};

export default selectScore;
