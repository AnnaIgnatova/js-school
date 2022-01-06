const createScoreCard = (name, year, author) => {
  const card = document.createElement('div');
  card.className = 'score-card';
  card.innerHTML = `
      <div class="score-card-info">
        <span>${name}</span>
        <span>${author}, ${year}</span>
      </div>
      <div class="score-card-img"></div>  
    `;
  return card;
};

export default createScoreCard;
