import { changeCurrentBlock, getCurrentCategory } from '../../local-storage';
import { score } from '../../main-blocks';
import scoreCards from '../constants/elements';
import createScoreCard from './createScoreCard';
import hideScoreInfo from './hideScoreInfo';
import setScoreCardImg from './setScoreCardImg';
import showScoreInfo from './showScoreInfo';

const renderScoreCard = (author, name, year, imageNum, index, cardIndex) => {
  const currentCategory = getCurrentCategory();
  const card = createScoreCard(name, year, author);
  const cardImage = setScoreCardImg(
    card,
    imageNum,
    currentCategory,
    cardIndex,
    index
  );

  cardImage.addEventListener('click', () => {
    const cardInfo = cardImage.previousElementSibling;
    showScoreInfo(cardInfo);
    hideScoreInfo(cardInfo);
    changeCurrentBlock(score);
  });
  scoreCards.append(card);
};

export default renderScoreCard;
