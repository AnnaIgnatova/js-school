import { welcome } from './main-blocks.js';

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

function transitionHideBlocks(blockHide, blockShow) {
  const notHiddenBlock = blockHide;
  const hiddenBlock = blockShow;
  notHiddenBlock.style.animation = 'hide 0.3s';
  setTimeout(() => {
    hiddenBlock.style.animation = 'show 0.3s';
    notHiddenBlock.style.animation = '';
    blockShow.classList.remove('hidden');
    blockHide.classList.add('hidden');
    setTimeout(() => {
      hiddenBlock.style.animation = '';
    }, 200);
  }, 200);
}

function showCard(block) {
  const card = block;
  card.style.animation = 'showCard 0.5s';

  setTimeout(() => {
    card.style.opacity = 1;
    card.style.animation = '';
  }, 500);
}

function showWelcome(block) {
  const card = block;
  card.style.animation = 'show 0.5s';

  setTimeout(() => {
    card.style.opacity = 1;
    card.style.animation = '';
  }, 500);
}

function addAnimationShow(block) {
  const currentBlock = block;
  currentBlock.classList.remove('hidden');
  currentBlock.style.animation = 'showModal 0.3s';

  setTimeout(() => {
    currentBlock.style.animation = '';
  }, 200);
}

function addAnimationHide(block) {
  const currentBlock = block;
  currentBlock.style.animation = 'hideModal 0.3s';
  setTimeout(() => {
    currentBlock.classList.add('hidden');
    currentBlock.style.animation = '';
  }, 200);
}

const setImage = (url, block) => {
  const currentBlock = block;
  if (currentBlock === welcome) welcome.style.opacity = 0;
  const img = new Image();
  img.src = url;

  img.onload = () => {
    currentBlock.style.backgroundImage = `url(${url})`;
  };
};

export {
  shuffle,
  transitionHideBlocks,
  addAnimationShow,
  addAnimationHide,
  setImage,
  showCard,
  showWelcome,
};
