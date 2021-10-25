const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

let randomNum;
let imgURLSelectFrom;
let tags;

const getRandomNum = (max, min) => {
  randomNum = Math.floor(Math.random() * (max - min) + min);
};

getRandomNum(21, 1);

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours > 5 && hours < 12) return 'morning';
  if (hours > 11 && hours < 18) return 'afternoon';
  if (hours > 17 && hours <= 23) return 'evening';
  if (hours >= 0 && hours < 6) return 'night';

  return;
};

const getSlideNext = () => {
  randomNum = randomNum === 20 ? 1 : randomNum + 1;
  getImage();
};
const getSlidePrev = () => {
  randomNum = randomNum === 1 ? 20 : randomNum - 1;
  getImage();
};

const setBg = (url) => {
  const img = new Image();
  img.src = url;

  img.onload = () => {
    body.style.backgroundImage = `url(${url})`;
  };
};

async function getLinkfromUnsplash() {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tags}&client_id=toPVUTUIetbhaEsQwuwlSYr6ZmGoiSaJnDNzIGQqTTg`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  setBg(data.urls.regular);
}

async function getLinkfromFlickr() {
  getRandomNum(99, 0);
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=203e996ee020066a79a11bdfaee6f867&tags=${tags}&extras=url_l&format=json&nojsoncallback=1`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  setBg(data.photos.photo[randomNum].url_l);
}

const getURLfromGitHub = () => {
  if (randomNum > 20) getRandomNum(21, 1);

  const timeOfDay = getTimeOfDay();
  const bgNum = String(randomNum).padStart(2, '0');
  const url = `https://raw.githubusercontent.com/annaignatova/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.webp`;
  setBg(url);
};

function getImage() {
  switch (imgURLSelectFrom) {
    case 'unsplash': {
      getLinkfromUnsplash();
      break;
    }
    case 'github': {
      getURLfromGitHub();
      break;
    }
    case 'flickr': {
      getLinkfromFlickr();
      break;
    }
    default:
      break;
  }
}

let changeImgURL = (imgURL, tag = getTimeOfDay()) => {
  tags = tag === '' ? getTimeOfDay() : tag;
  imgURLSelectFrom = imgURL;
  getImage();
};

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

export { changeImgURL };
