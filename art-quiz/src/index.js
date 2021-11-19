// const createImage = (src) => new Promise((res, rej) => {
//   const img = new Image();
//   img.onload = () => res(img);
//   img.onerror = rej;
//   img.src = src;
// });

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }

// render();

// ----------------------------- settings
import images from './images/images-en.js';

const gameInfo = {
  'artist-category': [[], [], [], [], [], [], [], [], [], [], [], []],
  'pic-category': [[], [], [], [], [], [], [], [], [], [], [], []],
};
const volumeInput = document.querySelector('.volume-input');

volumeInput.addEventListener('input', (e) => {
  const { target } = e;
  const { value } = target;
  target.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 ${value}%, white 100%)`;
});

// -------------------------- picture category

const cardsBlock = document.querySelector('.categories-cards');
const homeLink = document.querySelectorAll('.home-link');
const modalHomeLink = document.querySelector('.modal-home-link');
const welcome = document.querySelector('.welcome');
const categories = document.querySelector('.categories');
const picturesBtn = document.querySelector('.pictures-btn');
const settings = document.querySelector('.settings');
const settingsIcon = document.querySelectorAll('.welcome-settings');
const closeIcon = document.querySelector('.close-icon');
const picQuestion = document.querySelector('.pic-question');
const artistsBtn = document.querySelector('.artists-btn');
const artistQuestion = document.querySelector('.artist-question');
const closeQuestionBtn = document.querySelectorAll('.close-question');
const quitModal = document.querySelector('.modal-wrapper-quit');
const imagesBlock = document.querySelector('.pic-question-pics');
const modalAnswer = document.querySelector('.modal-wrapper-answer');
const modalEndGame = document.querySelector('.modal-wrapper-end-game');
const nextPictureBtn = document.querySelector('.next-picture');
const rightIcon = document.querySelector('.right');
const wrongIcon = document.querySelector('.wrong');
const score = document.querySelector('.score');
const scoreCards = document.querySelector('.score-cards');
const scoreNav = document.querySelector('.score-header');

const PIC_CATEGORY = [
  'Portrait',
  'Landscape',
  'Still life',
  'Impressionism',
  'Expressionism',
  'Avant-garde',
  'Renaissance',
  'Surrealism',
  'Kitsch',
  'Minimalism',
  'Interior',
  'Nude',
];
let currentCategory = '';
let currentBlock = welcome;
let categoryIndex = 0;
let rightAnswers = 0;
let answers = 0;

function shuffle(array) {
  const arr = [...array];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

function startGame(start, end, card) {
  currentBlock = picQuestion;
  let questionText = '';
  let currentQuestion = start;
  rightAnswers = 0;
  if (currentCategory === 'pic-category') {
    transitionHideBlocks(categories, picQuestion);
    questionText = document.querySelector('.pic-question-text');
    questionText.textContent = `What is ${images[start].author} picture`;
    renderPicQuestion(currentQuestion, end, card.dataset.index);
  } else {
    transitionHideBlocks(categories, artistQuestion);
    // renderArtistQuestion(start);
  }

  nextPictureBtn.addEventListener('click', () => {
    addAnimationHide(modalAnswer);
    if (answers === 10) {
      endGame(rightAnswers);
    } else {
      currentQuestion++;
      questionText.textContent = `What is ${images[currentQuestion].author} picture`;
      renderPicQuestion(currentQuestion, end, card.dataset.index);
    }
  });
}

function renderAnswerModal(element) {
  modalAnswer.querySelector(
    '.answer-img'
  ).style.backgroundImage = `url(./images/img/${element.dataset.index}.jpg)`;
  modalAnswer.querySelector('.pic-name-answer').textContent =
    element.dataset.name;
  modalAnswer.querySelector(
    '.artist-answer'
  ).textContent = `${element.dataset.author}, ${element.dataset.year}`;
}

function renderPicQuestion(index, end, cardIndex) {
  let imgArr = [];
  let num = index;

  let url = `./images/full/${index}full.jpg`;
  imgArr.push({ num, url });

  for (let i = 1; i < 4; i++) {
    let num = Math.floor(Math.random() * (241 - 0) + 0);
    while (num == index) {
      num = Math.floor(Math.random() * (241 - 0) + 0);
    }

    let url = `./images/full/${num}full.jpg`;
    imgArr.push({ num, url });
  }
  imagesBlock.innerHTML = '';

  let picElementsArr = imgArr.map(({ num, url }) => {
    let pic = document.createElement('div');
    pic.dataset.index = num;
    pic.dataset.author = images[num].author;
    pic.dataset.name = images[num].name;
    pic.dataset.year = images[num].year;
    pic.className = 'pic-question-pic';
    pic.style.backgroundImage = `url(${url})`;
    return pic;
  });

  let shuffledArr = shuffle(picElementsArr);

  shuffledArr.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (element.dataset.index == num) {
        rightIcon.classList.remove('hidden');
        wrongIcon.classList.add('hidden');
        rightAnswers++;
        gameInfo[currentCategory][cardIndex - 1].push(true);
      } else {
        rightIcon.classList.add('hidden');
        wrongIcon.classList.remove('hidden');
        gameInfo[currentCategory][cardIndex - 1].push(false);
      }

      addAnimationShow(modalAnswer);
      renderAnswerModal(element);
      answers++;
    });
  });

  shuffledArr.forEach((img) => imagesBlock.append(img));
  picQuestion.append(imagesBlock);
}

function endGame(rightAnswers) {
  addAnimationShow(modalEndGame);
  modalEndGame.querySelector('.points').textContent = `${rightAnswers}/10`;
}

function renderArtistQuestion(index) {
  let img = `./images/full/${index}full.jpg`;
  imgArr.push(img);

  for (let i = 1; i < 4; i++) {
    let num = Math.floor(Math.random() * (241 - 0) + 0);

    // проверка на художника
    let img = `./images/full/${num}full.jpg`;
    imgArr.push(img);
  }
  imagesBlock.innerHTML = '';

  let picElementsArr = imgArr.map((url) => {
    let pic = document.createElement('div');
    pic.className = 'pic-question-pic';
    pic.style.backgroundImage = `url(${url})`;
    return pic;
  });
  picElementsArr[0].addEventListener('click', () => {
    alert(1);
  });
  shuffle(picElementsArr).forEach((img) => imagesBlock.append(img));
  picQuestion.append(imagesBlock);
}

const renderCard = (category, index) => {
  let card = document.createElement('div');
  card.className = 'category-card';

  let rightAnswers = 0;
  gameInfo[currentCategory][index - 1].map((item) => {
    if (item) rightAnswers++;
  });

  card.innerHTML = `
    <div class="card-info">
      <span class="card-name">${category}</span>
      <span class="card-points">${rightAnswers}/10</span>
    </div>
    <div class="card-img">
      <div class="card-play-info">Score</div>
    </div>
  `;

  let cardImage = card.querySelector('.card-img');
  cardImage.dataset.start = categoryIndex;
  cardImage.dataset.end = categoryIndex + 9;
  cardImage.dataset.index = index;
  categoryIndex += 10;
  cardImage.style.backgroundImage = `url('./images/${currentCategory}/${index}.jpg')`;

  if (!rightAnswers) {
    cardImage.style.filter = 'grayscale(100%)';
  } else {
    cardImage.style.filter = 'grayscale(0%)';
  }

  cardImage.addEventListener('click', (e) => {
    if (!e.target.classList.contains('card-play-info')) {
      if (gameInfo[currentCategory][index - 1].length !== 0)
        gameInfo[currentCategory][index - 1] = [];
      startGame(e.target.dataset.start, e.target.dataset.end, cardImage);
    }
  });

  let cardScore = card.querySelector('.card-play-info');

  cardScore.addEventListener('click', (e) => {
    console.log(e.target);
    currentBlock = score;
    let start = +e.target.parentNode.dataset.start;
    let end = +e.target.parentNode.dataset.end;
    let index = +e.target.parentNode.dataset.index;
    transitionHideBlocks(categories, score);
    renderScore(start, end, index);
  });

  return card;
};

function showScoreInfo(cardInfo) {
  cardInfo.style.animation = 'showCardInfoFrom 0.5s';
  cardInfo.addEventListener('animationend', () => {
    cardInfo.style.transform = 'translateY(0)';
    cardInfo.style.animation = '';
  });
}

function hideScoreInfo(cardInfo) {
  cardInfo.addEventListener('click', () => {
    cardInfo.style.animation = 'showCardInfoBack 0.5s';
    cardInfo.addEventListener('animationend', () => {
      cardInfo.style.transform = 'translateY(250px)';
      cardInfo.style.animation = '';
    });
  });
}

function renderScoreCard(author, name, year, imageNum, index, cardIndex) {
  let card = document.createElement('div');
  card.className = 'score-card';
  card.innerHTML = `
    <div class="score-card-info">
      <span>${name}</span>
      <span>${author}, ${year}</span>
    </div>
    <div class="score-card-img"></div>  
  `;

  let cardImage = card.querySelector('.score-card-img');
  cardImage.style.backgroundImage = `url(./images/img/${imageNum}.jpg)`;

  if (!gameInfo[currentCategory][index - 1][cardIndex]) {
    cardImage.style.filter = 'grayscale(100%)';
  } else {
    cardImage.style.filter = 'grayscale(0%)';
  }
  cardImage.addEventListener('click', () => {
    let cardInfo = cardImage.previousElementSibling;
    showScoreInfo(cardInfo);
    hideScoreInfo(cardInfo);
    currentBlock = score;
  });
  scoreCards.append(card);
}

function renderScore(start, end, index) {
  scoreCards.innerHTML = '';
  let counter = 0;
  for (let i = start; i <= end; i++) {
    let { author, name, year, imageNum } = images[i];

    renderScoreCard(author, name, year, imageNum, index, counter);
    counter++;
  }
  console.log(gameInfo[currentCategory][index - 1]);
  console.log(index - 1);
}

function resetCategories() {
  if (currentCategory === 'pic-category') {
    categoryIndex = 120;
  } else {
    categoryIndex = 0;
  }
  rightAnswers = 0;
  answers = 0;
  cardsBlock.innerHTML = '';
}

const renderCategories = () => {
  resetCategories();

  PIC_CATEGORY.map((category, index) => {
    const card = renderCard(category, index + 1);
    cardsBlock.append(card);
    return cardsBlock;
  });
};

function transitionHideBlocks(blockHide, blockShow) {
  blockHide.style.animation = 'hide 0.3s';
  setTimeout(() => {
    blockShow.style.animation = 'show 0.3s';
    blockHide.style.animation = '';
    blockShow.classList.remove('hidden');
    blockHide.classList.add('hidden');
    setTimeout(() => {
      blockShow.style.animation = '';
    }, 200);
  }, 200);
}

function addAnimationShow(block) {
  block.classList.remove('hidden');
  block.style.animation = 'show 0.3s';

  setTimeout(() => {
    block.style.animation = '';
  }, 200);
}
function addAnimationHide(block) {
  block.style.animation = 'hide 0.3s';
  setTimeout(() => {
    block.classList.add('hidden');
    block.style.animation = '';
  }, 200);
}

function openWelcomePage(currentBlock) {
  transitionHideBlocks(currentBlock, welcome);
  currentBlock = welcome;
}

modalHomeLink.addEventListener('click', () => {
  addAnimationHide(modalEndGame);
  transitionHideBlocks(picQuestion, welcome);
  currentBlock = welcome;
});

homeLink.forEach((link) => {
  link.addEventListener('click', () => {
    openWelcomePage(currentBlock);
  });
});

artistsBtn.addEventListener('click', () => {
  categoryIndex = 0;
  currentCategory = 'artist-category';
  resetCategories();
  renderCategories();
  transitionHideBlocks(welcome, categories);
  currentBlock = categories;
});

picturesBtn.addEventListener('click', () => {
  categoryIndex = 120;
  currentCategory = 'pic-category';
  resetCategories();
  renderCategories();
  transitionHideBlocks(welcome, categories);
  currentBlock = categories;
});

settings.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('settings-back') ||
    e.target.parentElement.classList.contains('settings-back')
  ) {
    transitionHideBlocks(settings, currentBlock);
  }
});

settingsIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    transitionHideBlocks(currentBlock, settings);
  });
});

closeIcon.addEventListener('click', () => {
  transitionHideBlocks(settings, currentBlock);
});

closeQuestionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    addAnimationShow(quitModal);
  });
});

quitModal.addEventListener('click', (event) => {
  let target = event.target;
  if (
    (target.tagName === 'BUTTON' && target.textContent === 'Cancel') ||
    target.classList.contains('close-modal') ||
    target.parentNode.classList.contains('close-modal') ||
    target.classList.contains('modal-wrapper-quit')
  ) {
    addAnimationHide(quitModal);
  }
  if (target.tagName === 'BUTTON' && target.textContent === 'Yes') {
    addAnimationHide(quitModal);
    if (currentCategory === 'pic-category')
      transitionHideBlocks(picQuestion, categories);
    else transitionHideBlocks(artistQuestion, categories);
  }
});

scoreNav.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('score-home-link')) {
    currentBlock = welcome;
    transitionHideBlocks(score, welcome);
  }
  if (target.classList.contains('score-category-link')) {
    currentBlock = categories;
    transitionHideBlocks(score, categories);
  }
});
