import { images } from '../local-storage/index.js';
import scoreCards from './constants/elements.js';
import renderScoreCard from './functions/renderScoreCard.js';

const renderScore = (start, end, index) => {
  scoreCards.innerHTML = '';
  let counter = 0;
  for (let i = start; i <= end; i++) {
    const { author, name, year, imageNum } = images[i];
    renderScoreCard(author, name, year, imageNum, index, counter);
    counter++;
  }
};

export default renderScore;
