import playList from './playList.js';

const playPrevBtn = document.querySelector('.play-prev');
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const audioRange = document.querySelector('.audio-progress');
const audioCurrentTime = document.querySelector('.audio-current-time');
const currentAuthor = document.querySelector('.audio-author');
const audioVolume = document.querySelector('.volume-progress');
const volumeIcon = document.querySelector('.volume-type');

const audio = new Audio();

let isPlay = false;
let playNum = 0;
let buttonsArray = [];
let saveVolume = '';
let volume = 0.5;

const initAudio = () => {
  isPlay = false;
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.volume = saveVolume !== '' ? saveVolume : volume;
  playBtn.classList.remove('pause');
};

const resetBtns = (id = String(playNum)) => {
  buttonsArray.forEach((btn) => {
    if (btn.id !== id) btn.classList.remove('pause');
  });
  resetActiveClass();
};

const playAudioFromPlaylist = (e) => {
  resetBtns(e.target.id);

  e.target.classList.toggle('pause');
  if (+e.target.id !== playNum) {
    playNum = +e.target.id;
    initAudio();
  }

  isPlay = !isPlay;
  playBtn.classList.toggle('pause');
  playListContainer.children[playNum].classList.add('item-active');
  currentAuthor.textContent = playListContainer.children[playNum].textContent;

  if (isPlay) {
    audio.play();
  } else {
    audio.pause();
  }
};

const playAudio = () => {
  isPlay = !isPlay;
  playBtn.classList.toggle('pause');
  buttonsArray[playNum].classList.toggle('pause');
  resetActiveClass();
  resetBtns();
  playListContainer.children[playNum].classList.add('item-active');

  currentAuthor.textContent = playListContainer.children[playNum].textContent;

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
  playNum = playNum == 3 ? 0 : playNum + 1;
  changeAudio();
};

const playPrev = () => {
  playNum = playNum == 0 ? 3 : playNum - 1;
  changeAudio();
};

const createPlayListItem = (item, index) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.classList.add('play-item');
  button.classList.add('play', 'player-icon', 'player-small-icon');
  button.id = index;

  buttonsArray.push(button);
  button.addEventListener('click', playAudioFromPlaylist);

  span.textContent = item.title;
  li.append(button);
  li.append(span);
  return li;
};

const createPlaylist = () => {
  playList.forEach((item, index) => {
    let playlistItem = createPlayListItem(item, index);
    playListContainer.append(playlistItem);
  });
};

createPlaylist();
initAudio();

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

audio.addEventListener('ended', playNext, false);

audio.addEventListener('timeupdate', () => {
  audioRange.value = audio.currentTime;
  audioCurrentTime.textContent = `0:${String(
    Math.floor(audio.currentTime)
  ).padStart(2, '0')}`;
});

audioRange.addEventListener('input', () => {
  audio.currentTime = audioRange.value;
  audioCurrentTime.textContent = `0:${String(
    Math.floor(audio.currentTime)
  ).padStart(2, '0')}`;
});

audioVolume.addEventListener('input', () => {
  volume = audioVolume.value / 100;
  audio.volume = volume;
  if (audioVolume.value == 0) {
    volume = 0;
    audio.volume = volume;

    volumeIcon.classList.add('mute');
    volumeIcon.classList.remove('sound');
  } else {
    volumeIcon.classList.remove('mute');
    volumeIcon.classList.add('sound');
  }
});

volumeIcon.addEventListener('click', () => {
  volumeIcon.classList.toggle('mute');
  volumeIcon.classList.toggle('sound');
  if (audio.volume !== 0)  {
    audio.volume = 0;
    audioVolume.value = 0;
    saveVolume = audio.volume;
  } else {
    audioVolume.value = volume * 100;
    audio.volume = volume;
    saveVolume = audio.volume;
  }
  
});
