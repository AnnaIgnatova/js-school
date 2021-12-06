import { welcome } from './main-blocks.js';

const HIDE_BLOCK_ANIMATION = 'hide 0.3s';
const SHOW_BLOCK_ANIMATION = 'show 0.3s';
const SHOW_WELCOME_ANIMATION = 'show 0.5s';
const SHOW_CARD_ANIMATION = 'showCard 0.5s';
const SHOW_MODAL_ANIMATION = 'showModal 0.3s';
const HIDE_MODAL_ANIMATION = 'hideModal 0.3s';
const HIDDEN_CLASS = 'hidden';

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
  notHiddenBlock.style.animation = HIDE_BLOCK_ANIMATION;
  setTimeout(() => {
    hiddenBlock.style.animation = SHOW_BLOCK_ANIMATION;
    notHiddenBlock.style.animation = '';
    blockShow.classList.remove(HIDDEN_CLASS);
    blockHide.classList.add(HIDDEN_CLASS);
    setTimeout(() => {
      hiddenBlock.style.animation = '';
    }, 200);
  }, 200);
}

function showCard(block) {
  const card = block;
  card.style.animation = SHOW_CARD_ANIMATION;

  setTimeout(() => {
    card.style.opacity = 1;
    card.style.animation = '';
  }, 500);
}

function showWelcome(block) {
  const card = block;
  card.style.animation = SHOW_WELCOME_ANIMATION;

  setTimeout(() => {
    card.style.opacity = 1;
    card.style.animation = '';
  }, 500);
}

function addAnimationShow(block) {
  const currentBlock = block;
  currentBlock.classList.remove(HIDDEN_CLASS);
  currentBlock.style.animation = SHOW_MODAL_ANIMATION;

  setTimeout(() => {
    currentBlock.style.animation = '';
  }, 200);
}

function addAnimationHide(block) {
  const currentBlock = block;
  currentBlock.style.animation = HIDE_MODAL_ANIMATION;
  setTimeout(() => {
    currentBlock.classList.add(HIDDEN_CLASS);
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
