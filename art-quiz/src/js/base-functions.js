function shuffle(array) {
  const arr = [...array];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

function transitionHideBlocks(blockHide, blockShow) {
  blockHide.style.animation = 'hide 0.3s';
  setTimeout(() => {
    blockShow.style.animation = 'show 0.3s';
    blockHide.style.animation = '';
    blockShow.classList.remove('hidden');
    blockHide.classList.add('hidden');
    setTimeout(() => {
      blockShow.style.animation = '';
    }, 200);
  }, 200);
}

function addAnimationShow(block) {
  block.classList.remove('hidden');
  block.style.animation = 'showModal 0.3s';

  setTimeout(() => {
    block.style.animation = '';
  }, 200);
}
function addAnimationHide(block) {
  block.style.animation = 'hideModal 0.3s';
  setTimeout(() => {
    block.classList.add('hidden');
    block.style.animation = '';
  }, 200);
}

const setImage = (url, block) => {
  const img = new Image();
  img.src = url;

  img.onload = () => {
    block.style.backgroundImage = `url(${url})`;
  };
};

export {
  shuffle,
  transitionHideBlocks,
  addAnimationShow,
  addAnimationHide,
  setImage,
};
