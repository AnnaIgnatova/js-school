import {
  getCurrentCategory,
  changeCurrentBlock,
  getCurrentBlock,
  images,
} from './localStorage.js';
import { transitionHideBlocks, addAnimationHide } from './base-functions.js';
import {
  picQuestion,
  artistQuestion,
  categories,
  welcome,
} from './main-blocks.js';

const PICTURE_CATEGORY = 'pic-category';
const WELCOME_BLOCK = 'welcome';

const modalAnswer = document.querySelector('.modal-wrapper-answer');
const quitModal = document.querySelector('.modal-wrapper-quit');

let headerBlock = '';

function renderAnswerModal(num) {
  const { name } = images[num];
  const { author } = images[num];
  const { year } = images[num];

  modalAnswer.querySelector(
    '.answer-img'
  ).style.backgroundImage = `url(./images/img/${num}.jpg)`;
  modalAnswer.querySelector('.pic-name-answer').textContent = name;
  modalAnswer.querySelector(
    '.artist-answer'
  ).textContent = `${author}, ${year}`;
}

quitModal.addEventListener('click', (event) => {
  const { target } = event;
  const currentCategory = getCurrentCategory();

  if (
    (target.tagName === 'BUTTON' && target.textContent === 'Cancel') ||
    target.classList.contains('close-modal') ||
    target.parentNode.classList.contains('close-modal') ||
    target.classList.contains('modal-wrapper-quit')
  ) {
    addAnimationHide(quitModal);
    if (currentCategory === PICTURE_CATEGORY) changeCurrentBlock(picQuestion);
    else changeCurrentBlock(artistQuestion);
  }
  if (target.tagName === 'BUTTON' && target.textContent === 'Yes') {
    addAnimationHide(quitModal);
    changeCurrentBlock(categories);
    if (headerBlock === WELCOME_BLOCK) changeCurrentBlock(welcome);
    else changeCurrentBlock(categories);

    if (currentCategory === PICTURE_CATEGORY) {
      transitionHideBlocks(picQuestion, getCurrentBlock());
    } else {
      transitionHideBlocks(artistQuestion, getCurrentBlock());
    }
  }
});

function chooseHeaderBlock(value) {
  headerBlock = value;
}

export { modalAnswer, renderAnswerModal, quitModal, chooseHeaderBlock };
