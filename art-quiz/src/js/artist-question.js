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
    const btn = document.createElement('button');
    btn.className = 'question-btn';
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
      renderAnswerModal(questionNumber);
      answers++;
      changeAnswers(answers);
    });
  });

  shuffledArr.forEach((btn) => artistQuestionBtns.append(btn));
}

export default renderArtistQuestion;
