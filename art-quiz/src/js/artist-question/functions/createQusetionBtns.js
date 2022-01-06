const { shuffle } = require('../../base-functions');
const { images } = require('../../local-storage');
const { BTN_CLASS, BUTTON } = require('../constants/blocks');
const { artistQuestionBtns } = require('../constants/elements');

const createQusetionBtns = (artArr) => {
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

  return shuffle(btnsArr);
};

export default createQusetionBtns;
