import {
  images,
  gameInfo,
  getCurrentCategory,
  getRightAnswers,
  changeRightAnswers,
  getAnswers,
  changeAnswers,
} from './localStorage.js';
import { shuffle, addAnimationShow, setImage } from './base-functions.js';
import { modalAnswer, renderAnswerModal } from './modal-window.js';

const rightIcon = document.querySelector('.right');
const wrongIcon = document.querySelector('.wrong');
const imagesBlock = document.querySelector('.pic-question-pics');

function renderPicQuestion(index, end, cardIndex) {
  let imgArr = [];
  let num = index;

  let url = `./images/full/${index}full.jpg`;
  imgArr.push({ num, url });

  for (let i = 1; i < 4; i++) {
    let num = Math.floor(Math.random() * (241 - 0) + 0);
    let url = `./images/full/${num}full.jpg`;
    while (+num === +index && imgArr.indexOf(url) !== -1) {
      num = Math.floor(Math.random() * (241 - 0) + 0);
      url = `./images/full/${num}full.jpg`;
    }
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
    setImage(url, pic);
    return pic;
  });

  let shuffledArr = shuffle(picElementsArr);

  shuffledArr.forEach((element) => {
    element.addEventListener('click', (e) => {
      let currentCategory = getCurrentCategory();
      let rightAnswers = getRightAnswers();
      let answers = getAnswers();

      if (element.dataset.index == num) {
        rightIcon.classList.remove('hidden');
        wrongIcon.classList.add('hidden');
        rightAnswers++;
        changeRightAnswers(rightAnswers);
        gameInfo[currentCategory][cardIndex - 1].push(true);
      } else {
        rightIcon.classList.add('hidden');
        wrongIcon.classList.remove('hidden');
        gameInfo[currentCategory][cardIndex - 1].push(false);
      }

      addAnimationShow(modalAnswer);
      renderAnswerModal(num);
      answers++;
      changeAnswers(answers);
    });
  });

  shuffledArr.forEach((img) => imagesBlock.append(img));
}

export { renderPicQuestion };
