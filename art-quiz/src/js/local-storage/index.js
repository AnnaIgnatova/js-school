import { welcome } from '../main-blocks/index.js';
import { images, url } from './constants/images';
import gameInfo from './constants/gameInfo';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    images.push(...data);
  });

let currentCategory = '';
let currentBlock = welcome;
let categoryIndex = 0;
let rightAnswers = 0;
let answers = 0;

const changeCategory = (value) => {
  currentCategory = value;
};

const changeCurrentBlock = (block) => {
  currentBlock = block;
};

const changeCategoryIndex = (index) => {
  categoryIndex = index;
};

const changeRightAnswers = (answ) => {
  rightAnswers = answ;
};

const getCurrentCategory = () => currentCategory;

const getCurrentBlock = () => currentBlock;

const getRightAnswers = () => rightAnswers;

const getCategoryIndex = () => categoryIndex;

const changeAnswers = (value) => {
  answers = value;
};

const getAnswers = () => answers;

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
