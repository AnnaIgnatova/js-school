import {
  getCurrentCategory,
  changeCurrentBlock,
  getCurrentBlock,
  images,
} from '../local-storage/index.js';
import {
  transitionHideBlocks,
  addAnimationHide,
} from '../base-functions/index.js';
import {
  picQuestion,
  artistQuestion,
  categories,
  welcome,
} from '../main-blocks/index.js';
import { PICTURE_CATEGORY, WELCOME_BLOCK } from './constants/default';
import { modalAnswer, quitModal } from './constants/elements';

let headerBlock = '';

const renderAnswerModal = (num) => {
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
};

const chooseCancelBtn = (target, currentCategory) => {
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
};

const chooseYesBtn = (target, currentCategory) => {
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
};

quitModal.addEventListener('click', (event) => {
  const { target } = event;
  const currentCategory = getCurrentCategory();

  chooseCancelBtn(target, currentCategory);
  chooseYesBtn(target, currentCategory);
});

const chooseHeaderBlock = (value) => {
  headerBlock = value;
};

export { modalAnswer, renderAnswerModal, quitModal, chooseHeaderBlock };
