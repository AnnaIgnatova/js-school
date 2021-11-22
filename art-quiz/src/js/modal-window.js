import { getCurrentCategory, changeCurrentBlock, getCurrentBlock } from "./localStorage.js";
import { transitionHideBlocks, addAnimationHide } from "./base-functions.js";
import { picQuestion, artistQuestion } from "./main-blocks.js";

const modalAnswer = document.querySelector('.modal-wrapper-answer');
const quitModal = document.querySelector('.modal-wrapper-quit');

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

quitModal.addEventListener('click', (event) => {
  let target = event.target;
  let currentCategory = getCurrentCategory();
  let currentBlock = getCurrentBlock();
  if (
    (target.tagName === 'BUTTON' && target.textContent === 'Cancel') ||
    target.classList.contains('close-modal') ||
    target.parentNode.classList.contains('close-modal') ||
    target.classList.contains('modal-wrapper-quit')
  ) {
    addAnimationHide(quitModal);
    if (currentCategory === 'pic-category') changeCurrentBlock(picQuestion);
    else changeCurrentBlock(artistQuestion);
  }
  if (target.tagName === 'BUTTON' && target.textContent === 'Yes') {
    addAnimationHide(quitModal);
    if (currentCategory === 'pic-category')
      transitionHideBlocks(picQuestion, currentBlock);
    else transitionHideBlocks(artistQuestion, currentBlock);
  }
});

export { modalAnswer, renderAnswerModal, quitModal };
