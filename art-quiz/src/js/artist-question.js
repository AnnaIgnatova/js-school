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

const HIDDEN_CLASS = 'hidden';
const BTN_CLASS = 'question-btn';
const BUTTON = 'button';

const artistQuestionBtns = document.querySelector('.artist-question-btns');
const artistQuestionPic = document.querySelector('.artist-question-pic');
const rightIcon = document.querySelector('.right');
const wrongIcon = document.querySelector('.wrong');

function renderArtistQuestion(index, end, cardIndex) {
  const artArr = [];
  const questionNumber = +index;
  let artistNum = +index;

  const url = `./images/full/${artistNum}full.jpg`;
  setImage(url, artistQuestionPic);
  artistQuestionPic.style.opacity = 0;

  setTimeout(() => {
    showCard(artistQuestionPic);
  }, 300);

  let artist = images[artistNum].author;
  artArr.push({ artist, artistNum });

  for (let i = 1; i < 4; i++) {
    artistNum = Math.floor(Math.random() * (241 - 0) + 0);
    artist = images[artistNum].author;
    while (
      +artistNum === +index &&
      artArr.indexOf({ artist, artistNum }) !== -1
    ) {
      artist = images[artistNum].author;
      artistNum = Math.floor(Math.random() * (241 - 0) + 0);
    }
    artArr.push({ artist, artistNum });
  }

  artistQuestionBtns.innerHTML = '';
  const btnsArr = artArr.map((art) => {
    const btn = document.createElement(BUTTON);
    btn.className = BTN_CLASS;
    btn.dataset.index = art.artistNum;
    btn.dataset.author = images[art.artistNum].author;
    btn.dataset.name = images[art.artistNum].name;
    btn.dataset.year = images[art.artistNum].year;
    btn.textContent = btn.dataset.author;
    return btn;
  });

  const shuffledArr = shuffle(btnsArr);

  shuffledArr.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentCategory = getCurrentCategory();
      let answers = getAnswers();
      let rightAnswers = getRightAnswers();

      if (+btn.dataset.index === +questionNumber) {
        winGameSound();
        rightIcon.classList.remove(HIDDEN_CLASS);
        wrongIcon.classList.add(HIDDEN_CLASS);

        rightAnswers++;
        changeRightAnswers(rightAnswers);
        gameInfo[currentCategory][cardIndex - 1].push(true);
      } else {
        loseGameSound();
        rightIcon.classList.add(HIDDEN_CLASS);
        wrongIcon.classList.remove(HIDDEN_CLASS);
        gameInfo[currentCategory][cardIndex - 1].push(false);
      }

      addAnimationShow(modalAnswer);
      renderAnswerModal(questionNumber);
      answers++;
      changeAnswers(answers);
    });
  });

  shuffledArr.forEach((btn) => artistQuestionBtns.append(btn));
}

export default renderArtistQuestion;
