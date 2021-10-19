import { getTimeOfDay } from './_greeting.js';

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

let randomNum;

const getRandomNum = () => {
  randomNum = Math.floor(Math.random() * (21 - 1) + 1);
};

getRandomNum();

const getSlideNext = () => {
  randomNum = randomNum === 20 ? 1 : randomNum + 1;
  setBg();
};
const getSlidePrev = () => {
  randomNum = randomNum === 1 ? 20 : randomNum - 1;
  setBg();
};

const setBg = () => {
  const timeOfDay = getTimeOfDay();
  const bgNum = String(randomNum).padStart(2, '0');
  const imgUrl = `https://raw.githubusercontent.com/annaignatova/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.webp`;
  const img = new Image();

  img.src = imgUrl;
  img.onload = () => {
    body.style.backgroundImage = `url('${imgUrl}')`;
  };
};

setBg();

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);
