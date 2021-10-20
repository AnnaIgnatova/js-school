import playList from './_playList.js';

const playPrevBtn = document.querySelector('.play-prev');
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

const audio = new Audio();

let isPlay = false;
let playNum = 0;

const initAudio = () => {
  isPlay = false;
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  playBtn.classList.remove('pause');
};

const playAudio = () => {
  isPlay = !isPlay;
  playBtn.classList.toggle('pause');
  resetActiveClass();
  playListContainer.children[playNum].classList.add('item-active');

  if (isPlay) {
    audio.play();
  } else {
    audio.pause();
  }
};

const resetActiveClass = () => {
  [...playListContainer.children].forEach((item) => {
    if (item.classList.contains('item-active')) {
      item.classList.remove('item-active');
    }
  });
};

const changeAudio = () => {
  initAudio();
  playAudio();
};

const playNext = () => {
  playNum = playNum === 3 ? 0 : playNum + 1;
  changeAudio();
};

const playPrev = () => {
  playNum = playNum === 0 ? 3 : playNum - 1;
  changeAudio();
};

const createPlaylist = () => {
  playList.forEach((item, index) => {
    const li = document.createElement('li');

    li.classList.add('play-item');
    li.textContent = item.title;

    playListContainer.append(li);
  });
};

createPlaylist();
initAudio();

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);
audio.addEventListener('ended', playNext, false);
