import { CARD_CLASS } from '../constants/card-classes';

const createCard = (category, rightAnswers) => {
  const card = document.createElement('div');
  card.className = CARD_CLASS;
  card.innerHTML = `
      <div class="card-info">
        <span class="card-name">${category}</span>
        <span class="card-points">${rightAnswers}/10</span>
      </div>
      <div class="card-img">
        <div class="card-play-info">Score</div>
      </div>
    `;
  return card;
};

export default createCard;
