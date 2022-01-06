const createCardImage = (card, categoryIndex, index) => {
  const cardImage = card.querySelector('.card-img');
  cardImage.dataset.start = categoryIndex;
  cardImage.dataset.end = categoryIndex + 9;
  cardImage.dataset.index = index;

  return cardImage;
};

export default createCardImage;
