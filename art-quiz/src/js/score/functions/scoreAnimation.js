const scoreAnimation = (card, block) => {
  const cardScoreInfo = card;
  cardScoreInfo.addEventListener('animationend', () => {
    cardScoreInfo.style.transform = block;
    cardScoreInfo.style.animation = '';
  });
};

export default scoreAnimation;
