const galleryImg = document.querySelector('.gallery-img-inner');
const slides = document.querySelectorAll('.input-slide');
const sliderBtn = document.querySelectorAll('.slider-btn');
const slideNum = document.querySelector('.slide-number');
const formWrapper = document.querySelector('.form-wrapper');
const form = document.querySelector('form');
const buyBtn = document.querySelector('.amount-buy-btn');
const closeBtn = document.querySelector('.close-btn');
const lessBtn = document.querySelectorAll('.less-btn');
const moreBtn = document.querySelectorAll('.more-btn');
const basicNumber = document.querySelectorAll('.basic-number');
const bookBtn = document.querySelector('.book-btn');

const basicNumberForm = document.querySelectorAll('.entry-basic-number');
const basicNumberSpan = document.querySelectorAll('.price-type-number');
const entryMoreBtn = document.querySelectorAll('.entry-more-btn');
const entryLessBtn = document.querySelectorAll('.entry-less-btn');
const priceTypeTotal = document.querySelectorAll('.price-type-total');
const totalFormPrice = document.querySelector('.total-price');
const priceLabels = document.querySelectorAll('.price-type-text-span');
const nameLabels = document.querySelectorAll('.entry-type-name-span');

const SRCs = [
  './images/gallery-1.webp',
  './images/gallery-2.webp',
  './images/gallery-3.webp',
  './images/gallery-4.webp',
  './images/gallery-5.webp',
  './images/gallery-6.webp',
  './images/gallery-7.webp',
  './images/gallery-8.webp',
  './images/gallery-9.webp',
  './images/gallery-10.webp',
  './images/gallery-11.webp',
  './images/gallery-12.webp',
];

let slideIndex = 0;
let basicTickets = localStorage.getItem('basicTickets') || 1;
let seniorTickets = localStorage.getItem('seniorTickets') || 1;

let ticketTypes = [
  'Permanent exhibition',
  'Temporary exhibition',
  'Combined Admission',
];
let optionType = ticketTypes[localStorage.getItem('typeIndex') || 0];

let shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

galleryImg.innerHTML = '';
let galleryImgs = [];

shuffle(SRCs).map((src) => {
  const img = document.createElement('img');
  img.classList.add('gallery-img');
  img.src = src;
  img.alt = src.split('/')[2].slice(0, -4);
  galleryImg.append(img);
  galleryImgs.push(img);
});

let resetSlides = (e) => {
  slides.forEach((slide) => (slide.checked = false));
  e.target.checked = true;
  slideNum.textContent = `0${+e.target.value + 1}`;
  slideIndex = +e.target.value;
};

let changeSlideNext = () => {
  slides.forEach((slide) => (slide.checked = false));
  slideIndex++;
  if (slideIndex === 5) slideIndex = 0;
  slides[slideIndex].checked = true;
  slideNum.textContent = `0${slideIndex + 1}`;
};

let changeSlidePrev = () => {
  slides.forEach((slide) => (slide.checked = false));
  slideIndex--;
  if (slideIndex === -1) slideIndex = 4;
  slides[slideIndex].checked = true;
  slideNum.textContent = `0${slideIndex + 1}`;
};

slides.forEach((slide) => {
  slide.addEventListener('click', resetSlides);
});

let closeForm = (e) => {
  e.preventDefault();
  form.style.animation = 'form-animate-back 2s';
  setTimeout(() => {
    formWrapper.classList.add('hide');
  }, 2000);
};

closeBtn.addEventListener('click', closeForm);

formWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-wrapper')) closeForm(e);
});

form.addEventListener('click', (e) => {
  e.preventDefault();
});

basicNumber[0].value = localStorage.getItem('basicTickets');
basicNumber[1].value = localStorage.getItem('seniorTickets');

moreBtn[0].addEventListener('click', () => {
  if (basicTickets === 20) return;
  basicTickets++;
  basicNumber[0].value = basicTickets;
  localStorage.setItem('basicTickets', basicTickets);
  console.log(basicTickets);
});

moreBtn[1].addEventListener('click', () => {
  if (seniorTickets === 20) return;
  seniorTickets++;
  basicNumber[1].value = seniorTickets;
  localStorage.setItem('seniorTickets', seniorTickets);
});

lessBtn[0].addEventListener('click', () => {
  if (basicTickets === 0) return;
  basicTickets--;
  basicNumber[0].value = basicTickets;
  localStorage.setItem('basicTickets', basicTickets);
});

lessBtn[1].addEventListener('click', () => {
  if (seniorTickets === 0) return;
  seniorTickets--;
  basicNumber[1].value = seniorTickets;
  localStorage.setItem('seniorTickets', seniorTickets);
});

bookBtn.addEventListener('click', (e) => {
  e.preventDefault();
});

closeBtn.addEventListener('click', closeForm);

buyBtn.addEventListener('click', () => {
  formWrapper.classList.remove('hide');
  form.style.animation = 'form-animate-from 2s';

  basicNumberForm[0].value = basicTickets;
  basicNumberSpan[0].textContent = basicTickets;
  basicNumberForm[1].value = seniorTickets;
  basicNumberSpan[1].textContent = seniorTickets;

  priceTypeTotal[0].textContent = `${basicNumberForm[0].value * 20} €`;
  priceTypeTotal[1].textContent = `${basicNumberForm[1].value * 10} €`;
  totalFormPrice.textContent = `${
    basicNumberForm[0].value * basicType[ticketTypes.indexOf(optionType)] +
    basicNumberForm[1].value * seniorType[ticketTypes.indexOf(optionType)]
  } €`;

  typePlaceholder.textContent = optionType;
  infoText.textContent = optionType;

  priceLabels[0].textContent = basicType[ticketTypes.indexOf(optionType)];
  priceLabels[1].textContent = seniorType[ticketTypes.indexOf(optionType)];

  nameLabels[0].textContent = basicType[ticketTypes.indexOf(optionType)];
  nameLabels[1].textContent = seniorType[ticketTypes.indexOf(optionType)];

  priceTypeTotal[0].textContent = `${
    basicNumberForm[0].value * +priceLabels[0].textContent
  } €`;
  priceTypeTotal[1].textContent = `${
    basicNumberForm[1].value * +priceLabels[1].textContent
  } €`;
});

sliderBtn[1].addEventListener('click', changeSlideNext);
sliderBtn[0].addEventListener('click', changeSlidePrev);

// ---------------------- ripple effect

bookBtn.onmousedown = function (e) {
  const x = e.target.pageX - e.target.offsetLeft;
  const y = e.target.pageY - e.target.offsetTop;
  const w = e.target.offsetWidth;

  const ripple = document.createElement('span');

  ripple.className = 'ripple';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.style.setProperty('--scale', w);

  bookBtn.appendChild(ripple);

  setTimeout(() => {
    ripple.parentNode.removeChild(ripple);
  }, 500);
};

// ------------------------- video progress

const progressVideo = document.querySelectorAll('.video-progress');

let changeProgress = (e) => {
  const target = e.target;
  const value = target.value;
  target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`;
};
progressVideo.forEach((input) => {
  input.addEventListener('input', (e) => {
    changeProgress(e);
  });
});

// ----------------------------- burger-menu

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav');
const burgerCloseBtn = document.querySelector('.burger-close-btn');
const burgerContent = document.querySelector('.burger-wrapper');
const welcomeWrapper = document.querySelector('.welcome-wrapper');

let classToggle = 'flex';

let changeMenuClasses = () => {
  classToggle = 'flex';
  menu.classList.remove('hide');
  menu.classList.remove('block');
  menu.classList.add(classToggle);
};

if (window.matchMedia('(min-width: 1025px)').matches) {
  changeMenuClasses();
} else {
  classToggle = 'block';
}

window.addEventListener('resize', () => {
  if (
    window.matchMedia('(max-width: 1024px)').matches &&
    !menu.classList.contains('block')
  ) {
    menu.classList.remove(classToggle);
    menu.classList.add('hide');
    classToggle = 'block';
    welcomeWrapper.classList.remove('opacity');
  }
  if (window.matchMedia('(min-width: 1025px)').matches) {
    changeMenuClasses();
    burgerCloseBtn.classList.add('hide');
    welcomeWrapper.classList.remove('opacity');
  }
  if (window.matchMedia('(min-width: 781px)').matches) {
    burgerContent.classList.add('hide');
  }
  if (
    window.matchMedia('(max-width: 780px)').matches &&
    menu.classList.contains('block')
  ) {
    burgerContent.classList.remove('hide');
  }
});

burger.addEventListener('click', () => {
  if (menu.classList.contains('hide')) {
    menu.style.animation = 'burger-from 0.5s';
    menu.classList.toggle('hide');
    menu.classList.toggle(classToggle);
  } else {
    menu.style.animation = 'burger-back 0.5s';
    setTimeout(() => {
      menu.classList.toggle('hide');
      menu.classList.toggle(classToggle);
    }, 500);
  }
  if (window.matchMedia('(max-width: 780px)').matches) {
    burgerContent.classList.toggle('hide');
  }
  burgerCloseBtn.classList.toggle('hide');
  welcomeWrapper.classList.toggle('opacity');
});

let closeMenu = () => {
  burgerCloseBtn.classList.add('hide');
  welcomeWrapper.classList.remove('opacity');
  burgerContent.classList.add('hide');
  menu.classList.add('hide');
  menu.classList.remove(classToggle);
};

menu.addEventListener('click', (e) => {
  let target = e.target;
  if (
    window.matchMedia('(max-width: 1024px)').matches &&
    (target.classList.contains('nav-li-link') ||
      target.classList.contains('nav-li-arrow'))
  ) {
    closeMenu();
  }
});

// --------------------------------------- welcome slider

$(function () {
  $('.welcome-slides').slick({
    dots: true,
  });
});

const sliderValue = document.querySelector('.slide-number');

let slideValue = 1;

document.addEventListener('touchend', (event) => {
  let bgs = document.querySelectorAll('.welcome-bg');
  bgs.forEach((bg) => {
    if (bg.classList.contains('slick-active')) {
      slideValue = +bg.id.slice(-1) + 1;
      sliderValue.textContent = `0${slideValue}`;
    }
  });
});

document.addEventListener('click', (e) => {
  let target = e.target;

  if (target.id.slice(0, -2) === 'slick-slide-control') {
    slideValue = +target.id.slice(-1) + 1;
    sliderValue.textContent = `0${slideValue}`;
  }

  if (
    target.classList.contains('slick-next') ||
    target.classList.contains('slick-prev')
  ) {
    slideValue =
      +target.parentNode.querySelector('.slick-active').id.slice(-1) + 1;
    sliderValue.textContent = `0${slideValue}`;
  }
});

// ------------------ scroll to gallery

let gallery = document.querySelector('.gallery');
let tickets = document.querySelector('.video');

window.addEventListener('scroll', () => {
  if (
    window.pageYOffset <
    window.pageYOffset + tickets.getBoundingClientRect().top
  ) {
    galleryImgs.forEach((img) => {
      img.style.animation = 'none';
    });
  }
  galleryImgs.forEach((img) => {
    if (
      Math.round(window.pageYOffset + 930) >
      Math.round(window.pageYOffset + img.getBoundingClientRect().top)
    ) {
      img.style.animation = 'gallery-from 1s';
    }
  });
});

// ------------------  explore slider

let overlayInput = document.querySelector('.overlay-input');
let overlay = document.querySelector('.explore-img-overlay');
let exploreImg = document.querySelector('.explore-img');
let explore = document.querySelector('.explore');

overlayInput.addEventListener('touchmove', (event) => {
  if (event.touches[0].clientX > 1700) {
    overlayInput.style.left = '701px';
    exploreImg.style.width = '720px';
  } else if (event.touches[0].clientX < 980) {
    overlayInput.style.left = '-15px';
    exploreImg.style.width = '0px';
  } else {
    overlayInput.style.left = `${event.touches[0].clientX - 1000}px`;
    exploreImg.style.width = `${event.touches[0].clientX - 980}px`;
  }
});

let mouseMove = (event) => {
  if (event.clientX > 1670) {
    overlayInput.style.left = '700px';
    exploreImg.style.width = '720px';
  } else if (event.clientX < 965) {
    overlayInput.style.left = '-15px';
    exploreImg.style.width = '0px';
  } else {
    overlayInput.style.left = `${event.clientX - 980}px`;
    exploreImg.style.width = `${event.clientX - 960}px`;
  }
};

overlayInput.addEventListener('mousedown', () => {
  explore.addEventListener('mousemove', mouseMove);
});
explore.addEventListener('mouseup', () => {
  explore.removeEventListener('mousemove', mouseMove);
});

// -----------------------------  tickets auto slider

let ticketsImg = document.querySelector('.tickets-img');

const ticketsImgs = [
  './images/welcome-bg-1.webp',
  './images/welcome-bg-2.jpg',
  './images/welcome-bg-3.jpg',
  './images/welcome-bg-4.jpg',
  './images/tickets-img.webp',
];

let imgIndex = 0;

setInterval(() => {
  ticketsImg.style.backgroundImage = `url(${ticketsImgs[imgIndex]})`;
  imgIndex++;

  if (imgIndex === ticketsImgs.length) {
    imgIndex = 0;
  }
}, 5000);

// ------------------ map

mapboxgl.accessToken =
  'pk.eyJ1IjoiY3JlbXNlYSIsImEiOiJja3VsYW13NHQxZms0MnduNmxhZmo3OGw1In0.Lr5XOXdnNc_zNDwD0hidWA';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [2.3363033334041, 48.8609865074615],
  zoom: 15.75,
});

const nav = new mapboxgl.NavigationControl();

map.addControl(nav, 'top-right');

const marker1 = new mapboxgl.Marker({ color: 'black' })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);
const marker2 = new mapboxgl.Marker({ color: 'grey' })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);
const marker3 = new mapboxgl.Marker({ color: 'grey' })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);
const marker4 = new mapboxgl.Marker({ color: 'grey' })
  .setLngLat([2.333, 48.8619])
  .addTo(map);
const marker5 = new mapboxgl.Marker({ color: 'grey' })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);

// --------------------------------- tickets sum

let typeInputs = document.querySelectorAll('.type-input');
let ticketsBlock = document.querySelector('.tickets');
let totalPriceElement = document.querySelector('.total-tickets-price');

let basicType = [20, 25, 40];
let seniorType = [10, 12.5, 20];

priceLabels[0].textContent = basicType[ticketTypes.indexOf(optionType)];
priceLabels[1].textContent = seniorType[ticketTypes.indexOf(optionType)];

nameLabels[0].textContent = basicType[ticketTypes.indexOf(optionType)];
nameLabels[1].textContent = seniorType[ticketTypes.indexOf(optionType)];

let totalSum = localStorage.getItem('totalSum') || 30;
let typeChecked = localStorage.getItem('typeIndex') || 1;

totalPriceElement.textContent = totalSum;
typeInputs[typeChecked].checked = true;

ticketsBlock.addEventListener('click', (e) => {
  typeInputs.forEach((input, index) => {
    if (input.checked) {
      totalSum =
        basicType[index] * basicTickets + seniorType[index] * seniorTickets;
      localStorage.setItem('typeIndex', index);
      localStorage.setItem('totalSum', totalSum);
      optionType = ticketTypes[index];
    }
    totalPriceElement.textContent = totalSum;
  });
});

// -------------------------------------- video player

let videoPlayer = document.querySelector('.video-media');
const videoButtonPlay = document.querySelector('.play-btn');
const videoPauseIcon = document.querySelector('.video-pause-icon');
const videoPlayIcon = document.querySelector('.video-play-icon');
const videoPlayBigIcon = document.querySelector('.play-btn-big');
const volumeIcon = document.querySelector('.video-volume-icon');
const muteIcon = document.querySelector('.video-volume-mute-icon');
let videoProgress = document.querySelector('.video-progress');
const videoVolume = document.querySelector('.volume-progress');
const videoFullscreen = document.querySelector('.screen-btn');

let changeMainVideo = () => {
  videoPlayer.currentTime = 0;
  videoPlayer.playbackRate = 1;

  videoPlayer.addEventListener('timeupdate', (e) => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100;
    videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress.value}%, #fff ${videoProgress.value}%, white 100%)`;

    if (duration === currentTime) {
      changePlayIcons();
      stopPlay();
    }

    // let minutePassed = Math.floor(currentTime / 60);
    // let secondsPassed = Math.floor(currentTime % 60);

    // let minuteTotal = Math.floor(duration / 60);
    // let secondsTotal = Math.floor(duration % 60);

    // videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(
    //   secondsPassed
    // )}`;
    // videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(
    //   secondsTotal
    // )}`;
  });

  videoPlayer.addEventListener('click', togglePlay);

  videoPlayer.addEventListener('volumechange', () => {
    videoVolume.value = Math.round(videoPlayer.volume * 100);
  });

  videoProgress.addEventListener('input', (e) => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
    videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`;
  });
};

videoFullscreen.addEventListener('click', () => {
  videoPlayer.requestFullscreen();
});

let changePlayIcons = () => {
  videoPlayIcon.classList.remove('hide');
  videoPauseIcon.classList.add('hide');
  videoPlayBigIcon.classList.remove('hide');
};

let changePauseIcons = () => {
  videoPlayIcon.classList.add('hide');
  videoPauseIcon.classList.remove('hide');
  videoPlayBigIcon.classList.add('hide');
};

const toggleIcon = () => {
  if (videoPlayer.paused) {
    changePlayIcons();
  } else {
    changePauseIcons();
  }
};

const togglePlay = (event) => {
  event.preventDefault();
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
  toggleIcon();
};

let saveVolume = 0;

const toggleVolumeIconDown = () => {
  let currentVolume = videoVolume.value;

  if (videoVolume.value != 0) {
    videoPlayer.volume = 0;
    videoVolume.value = 0;
    saveVolume = currentVolume;
  } else {
    videoVolume.value = saveVolume;
    videoPlayer.volume = saveVolume / 100;
  }
  toggleVolumeDown();
  videoVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoVolume.value}%, #fff ${videoVolume.value}%, white 100%)`;
};

const toggleVolumeDown = () => {
  if (videoVolume.value == 0) {
    muteIcon.classList.remove('hide');
    volumeIcon.classList.add('hide');
  } else {
    muteIcon.classList.add('hide');
    volumeIcon.classList.remove('hide');
  }
};

const stopPlay = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  videoPlayer.playbackRate = 1;
};

const changeValue = () => {
  const valueVolume = videoVolume.value;
  videoPlayer.volume = valueVolume / 100;
};

let speedUp = () => {
  videoPlayer.playbackRate += 2;
}

let speedDown = () => {
  if (videoPlayer.playbackRate - 2 > 0) {
    videoPlayer.playbackRate -= 2;
  }
  if (videoPlayer.playbackRate - 0.5 > 0) {
    videoPlayer.playbackRate -= 0.5;
  }
 
}

videoButtonPlay.addEventListener('click', togglePlay);
videoPlayBigIcon.addEventListener('click', togglePlay);

changeMainVideo();

volumeIcon.addEventListener('click', toggleVolumeIconDown);
muteIcon.addEventListener('click', toggleVolumeIconDown);
videoVolume.addEventListener('input', toggleVolumeDown);

videoVolume.addEventListener('input', changeValue);

changeValue();

let toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'Space': {
      togglePlay(e);
      break;
    }
    case 'KeyM': {
      toggleVolumeIconDown();
      break;
    }
    case 'KeyF': {
      toggleFullScreen();
      break;
    }
    default:
      break;
  }
});

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

runOnKeys(
  speedUp,
  "ShiftLeft",
  "Comma"
);

runOnKeys(
  speedDown,
  "ShiftLeft",
  "Period"
);

// ------------------------- youtube video & video slider

let videoSlider = document.querySelector('.small-videos-container');
let bulletSlider = document.querySelector('.round-btn-slider');

let activeVideo = 0;

$(function () {
  $(videoSlider).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.round-btn-slider'),
    arrows: true,
    nextArrow: $('.arrow-btn-next'),
    prevArrow: $('.arrow-btn-prev'),
  });
});

// function toggleVideo(state) {
//   let iframe = div.getElementsByTagName("iframe")[0].contentWindow;
//   div.style.display = state == 'hide' ? 'none' : '';
//   func = state == 'hide' ? 'pauseVideo' : 'playVideo';
//   iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
// }

// let iframes = document.querySelectorAll('iframe');

// var tag = document.createElement('script');

// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let VIDEOS = [
  './video/video0.mp4',
  './video/video1.mp4',
  './video/video2.mp4',
  './video/video3.mp4',
  './video/video4.mp4',
];

let videosContainer = document.querySelector('.round-btn-slider');
let videoArrowBtns = document.querySelectorAll('.arrow-btn');
let videoBlock = document.querySelector('.video-media-block');
let iframes = document.querySelectorAll('iframe');

let videoId = 0;

let stopAllYouTubeVideos = () => {
  Array.prototype.forEach.call(iframes, (iframe) => {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'stopVideo' }),
      '*'
    );
  });
};

let createVideoElement = () => {
  let video = document.createElement('video');

  video.src = `${VIDEOS[videoId]}`;
  video.poster = `./images/poster${videoId}.jpg`;
  video.classList.add('video-media');
  videoBlock.innerHTML = '';
  videoBlock.append(video);
};

videosContainer.addEventListener('click', (e) => {
  let target = e.target;
  stopAllYouTubeVideos();
  if (target.tagName === 'BUTTON') {
    videoId = target.id.slice(-1);
    createVideoElement();

    videoPlayer = document.querySelector('.video-media');

    changeMainVideo();
    changePlayIcons();
  }
});

videoArrowBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let target = e.target;
    stopAllYouTubeVideos();
    if (
      target.classList.contains('arrow-btn-prev') ||
      target.parentNode.classList.contains('arrow-btn-prev')
    ) {
      videoId--;
      createVideoElement();
      if (videoId <= 0) videoId = 4;
    }
    if (
      target.classList.contains('arrow-btn-next') ||
      target.parentNode.classList.contains('arrow-btn-next')
    ) {
      videoId++;
      createVideoElement();

      if (videoId >= 4) videoId = -1;
    }
    videoPlayer = document.querySelector('.video-media');

    changeMainVideo();
    changePlayIcons();
  });
});

// ------------------------------- form buy

const formSelect = document.querySelector('.form-select');
const typePlaceholder = document.querySelector('.ticket-type-placeholder');
const infoText = document.querySelector('.info-text-type');

const options = Array.from(formSelect.options);

typePlaceholder.textContent = optionType;
infoText.textContent = optionType;

formSelect.addEventListener('click', () => {
  options.map((option) => {
    if (option.selected === true) {
      optionType = option.textContent;
    }
  });
  typePlaceholder.textContent = optionType;
  infoText.textContent = optionType;
  totalFormPrice.textContent = `${
    basicNumberForm[0].value * basicType[ticketTypes.indexOf(optionType)] +
    basicNumberForm[1].value * seniorType[ticketTypes.indexOf(optionType)]
  } €`;
  priceLabels[0].textContent = basicType[ticketTypes.indexOf(optionType)];
  priceLabels[1].textContent = seniorType[ticketTypes.indexOf(optionType)];

  nameLabels[0].textContent = basicType[ticketTypes.indexOf(optionType)];
  nameLabels[1].textContent = seniorType[ticketTypes.indexOf(optionType)];

  priceTypeTotal[0].textContent = `${
    basicNumberForm[0].value * +priceLabels[0].textContent
  } €`;
  priceTypeTotal[1].textContent = `${
    basicNumberForm[1].value * +priceLabels[1].textContent
  } €`;
});

entryMoreBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0 && basicNumberForm[0].value < 20) {
      basicNumberForm[0].value++;
      basicNumberSpan[0].textContent = +basicNumberSpan[0].textContent + 1;
      priceTypeTotal[0].textContent = `${
        basicNumberForm[0].value * +priceLabels[0].textContent
      } €`;
    }
    if (index === 1 && basicNumberForm[1].value < 20) {
      basicNumberForm[1].value++;
      basicNumberSpan[1].textContent = +basicNumberSpan[1].textContent + 1;
      priceTypeTotal[1].textContent = `${
        basicNumberForm[1].value * +priceLabels[1].textContent
      } €`;
    }
    totalFormPrice.textContent = `${
      basicNumberForm[0].value * basicType[ticketTypes.indexOf(optionType)] +
      basicNumberForm[1].value * seniorType[ticketTypes.indexOf(optionType)]
    } €`;
  });
});

entryLessBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0 && basicNumberForm[0].value > 0) {
      basicNumberForm[0].value--;
      basicNumberSpan[0].textContent = +basicNumberSpan[0].textContent - 1;
      priceTypeTotal[0].textContent = `${basicNumberForm[0].value * 20} €`;
    }
    if (index === 1 && basicNumberForm[1].value > 0) {
      basicNumberForm[1].value--;
      basicNumberSpan[1].textContent = +basicNumberSpan[1].textContent - 1;
      priceTypeTotal[1].textContent = `${basicNumberForm[1].value * 10} €`;
    }

    totalFormPrice.textContent = `${
      basicNumberForm[0].value * basicType[ticketTypes.indexOf(optionType)] +
      basicNumberForm[1].value * seniorType[ticketTypes.indexOf(optionType)]
    } €`;
  });
});
