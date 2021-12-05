import {
  images,
  gameInfo,
  getCurrentCategory,
  getRightAnswers,
  changeRightAnswers,
  getAnswers,
  changeAnswers,
} from './localStorage.js';
import {
  shuffle,
  addAnimationShow,
  setImage,
  showCard,
} from './base-functions.js';
import { modalAnswer, renderAnswerModal } from './modal-window.js';
import { winGameSound, loseGameSound } from './audio.js';

const rightIcon = document.querySelector('.right');
const wrongIcon = document.querySelector('.wrong');
const imagesBlock = document.querySelector('.pic-question-pics');

function renderPicQuestion(index, end, cardIndex) {
  const imgArr = [];
  const picIndex = index;

  let imageNum = picIndex;
  let imageURL = `./images/full/${picIndex}full.jpg`;
  imgArr.push({ imageNum, imageURL });

  for (let i = 0; i < 4; i++) {
    imageNum = Math.floor(Math.random() * (241 - 0) + 0);
    imageURL = `./images/full/${imageNum}full.jpg`;
    while (+imageNum === +index && imgArr.indexOf(imageURL) !== -1) {
      imageNum = Math.floor(Math.random() * (241 - 0) + 0);
      imageURL = `./images/full/${imageNum}full.jpg`;
    }
    imgArr.push({ imageNum, imageURL });
  }
  imagesBlock.innerHTML = '';

  const picElementsArr = imgArr.map((img) => {
    const pic = document.createElement('div');
    pic.dataset.index = img.imageNum;
    pic.dataset.author = images[img.imageNum].author;
    pic.dataset.name = images[img.imageNum].name;
    pic.dataset.year = images[img.imageNum].year;
    pic.style.opacity = 0;
    pic.classList.add('pic-question-pic');
    setImage(img.imageURL, pic);
    return pic;
  });

  const shuffledArr = shuffle(picElementsArr);

  shuffledArr.forEach((element) => {
    element.addEventListener('click', () => {
      const currentCategory = getCurrentCategory();
      let rightAnswers = getRightAnswers();
      let answers = getAnswers();

      if (+element.dataset.index === +picIndex) {
        winGameSound();
        rightIcon.classList.remove('hidden');
        wrongIcon.classList.add('hidden');
        rightAnswers++;
        changeRightAnswers(rightAnswers);
        gameInfo[currentCategory][cardIndex - 1].push(true);
      } else {
        loseGameSound();
        rightIcon.classList.add('hidden');
        wrongIcon.classList.remove('hidden');
        gameInfo[currentCategory][cardIndex - 1].push(false);
      }

      addAnimationShow(modalAnswer);
      renderAnswerModal(picIndex);
      answers++;
      changeAnswers(answers);
    });
  });

  shuffledArr.map((img, i) => {
    imagesBlock.append(img);
    setTimeout(() => {
      showCard(img);
    }, 300 * (i + 1));
    return img;
  });
}

export default renderPicQuestion;
