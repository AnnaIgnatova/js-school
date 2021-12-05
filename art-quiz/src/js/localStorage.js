import { welcome } from './main-blocks.js';

const images = [];

const url = 'images/images-en.json';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    images.push(...data);
  });

const gameInfo = {
  'artist-category': [[], [], [], [], [], [], [], [], [], [], [], []],
  'pic-category': [[], [], [], [], [], [], [], [], [], [], [], []],
};

let currentCategory = '';
let currentBlock = welcome;
let categoryIndex = 0;
let rightAnswers = 0;
let answers = 0;

function changeCategory(value) {
  currentCategory = value;
}

function changeCurrentBlock(block) {
  currentBlock = block;
}

function changeCategoryIndex(index) {
  categoryIndex = index;
}

function changeRightAnswers(answ) {
  rightAnswers = answ;
}

function getCurrentCategory() {
  return currentCategory;
}

function getCurrentBlock() {
  return currentBlock;
}

function getRightAnswers() {
  return rightAnswers;
}

function getCategoryIndex() {
  return categoryIndex;
}

function changeAnswers(value) {
  answers = value;
}

function getAnswers() {
  return answers;
}

export {
  images,
  gameInfo,
  changeCategory,
  changeCurrentBlock,
  changeCategoryIndex,
  changeRightAnswers,
  getCurrentCategory,
  getCurrentBlock,
  getRightAnswers,
  getCategoryIndex,
  changeAnswers,
  getAnswers,
};
