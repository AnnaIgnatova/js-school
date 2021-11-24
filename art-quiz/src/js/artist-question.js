import {
  images,
  gameInfo,
  getCurrentCategory,
  getAnswers,
  changeAnswers,
  getRightAnswers,
  changeRightAnswers,
} from './localStorage.js';
import {
  shuffle,
  addAnimationShow,
  setImage,
  showCard,
} from './base-functions.js';
import { renderAnswerModal, modalAnswer } from './modal-window.js';
import { winGameSound, loseGameSound } from './audio.js';

const artistQuestionBtns = document.querySelector('.artist-question-btns');
const artistQuestionPic = document.querySelector('.artist-question-pic');
const rightIcon = document.querySelector('.right');
const wrongIcon = document.querySelector('.wrong');

function renderArtistQuestion(index, end, cardIndex) {
  let artArr = [];
  let num = index;

  let url = `./images/full/${index}full.jpg`;
  setImage(url, artistQuestionPic);
  artistQuestionPic.style.opacity = 0;

  setTimeout(() => {
    showCard(artistQuestionPic);
  }, 300);

  let artist = images[num].author;
  artArr.push({ artist, num });

  for (let i = 1; i < 4; i++) {
    let num = Math.floor(Math.random() * (241 - 0) + 0);
    let artist = images[num].author;
    while (num == index && artArr.indexOf({ artist, num }) !== -1) {
      artist = images[num].author;
      num = Math.floor(Math.random() * (241 - 0) + 0);
    }
    artArr.push({ artist, num });
  }

  artistQuestionBtns.innerHTML = '';

  let btnsArr = artArr.map(({ artist, num }) => {
    let btn = document.createElement('button');
    btn.className = 'question-btn';
    btn.dataset.index = num;
    btn.dataset.author = images[num].author;
    btn.dataset.name = images[num].name;
    btn.dataset.year = images[num].year;
    btn.textContent = artist;
    return btn;
  });

  let shuffledArr = shuffle(btnsArr);

  shuffledArr.forEach((btn) => {
    btn.addEventListener('click', () => {
      let currentCategory = getCurrentCategory();
      let answers = getAnswers();
      let rightAnswers = getRightAnswers();

      if (btn.dataset.index == num) {
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
      renderAnswerModal(num);
      answers++;
      changeAnswers(answers);
    });
  });

  shuffledArr.forEach((btn) => artistQuestionBtns.append(btn));
}

export { renderArtistQuestion };
