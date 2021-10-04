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

const SRCs = [
  './images/gallery-1.jpg',
  './images/gallery-2.jpg',
  './images/gallery-3.jpg',
  './images/gallery-4.jpg',
  './images/gallery-5.jpg',
  './images/gallery-6.jpg',
  './images/gallery-7.jpg',
  './images/gallery-8.jpg',
  './images/gallery-9.jpg',
  './images/gallery-10.jpg',
  './images/gallery-11.jpg',
  './images/gallery-12.jpg',
];

let slideIndex = 0;
let basicTickets = 1;
let seniorTickets = 1;

let shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

galleryImg.innerHTML = '';

shuffle(SRCs).map((src) => {
  const img = document.createElement('img');
  img.classList.add('gallery-img');
  img.src = src;
  img.alt = src.split('/')[2].slice(0, -4);
  galleryImg.append(img);
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

buyBtn.addEventListener('click', () => {
  formWrapper.classList.remove('hide');
  form.style.animation = 'form-animate-from 2s';
});

closeBtn.addEventListener('click', closeForm);

formWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-wrapper')) closeForm(e);
});

moreBtn[0].addEventListener('click', () => {
  if (basicTickets === 20) return;
  basicTickets++;
  basicNumber[0].value = basicTickets;
});

moreBtn[1].addEventListener('click', () => {
  if (seniorTickets === 20) return;
  seniorTickets++;
  basicNumber[1].value = seniorTickets;
});

lessBtn[0].addEventListener('click', () => {
  if (basicTickets === 0) return;
  basicTickets--;
  basicNumber[0].value = basicTickets;
});

lessBtn[1].addEventListener('click', () => {
  if (seniorTickets === 0) return;
  seniorTickets--;
  basicNumber[1].value = seniorTickets;
});

bookBtn.addEventListener('click', (e) => {
  e.preventDefault();
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

progressVideo.forEach((input) => {
  input.addEventListener('input', (e) => {
    const target = e.target;
    const value = target.value;
    target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`;
  });
});

// ----------------------------- burger-menu

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav');
const burgerCloseBtn = document.querySelector('.burger-close-btn');
const burgerContent = document.querySelector('.burger-wrapper');

window.addEventListener(`resize`, (event) => {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    menu.style.display = 'flex';
    burgerCloseBtn.style.display = 'none';
  }
  if (window.matchMedia('(max-width: 1024px)').matches) {
    menu.style.display = 'none';
    burgerContent.style.display = 'none';
  }
  if (window.matchMedia('(min-width: 781px)').matches) {
    burgerContent.style.display = 'none';
  }
});

let burgerAnimation = (block) => {
  if (block.style.display === 'block') {
    block.style.animation = 'burger-back 1s';
    setTimeout(() => {
      block.style.display = 'none';
    }, 1000);
  } else {
    block.style.animation = 'burger-from 0.5s';
    setTimeout(() => {
      block.style.display = 'block';
    }, 200);
  }
};

burger.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 1024px)').matches) {
    burgerAnimation(menu);
    if (window.matchMedia('(max-width: 780px)').matches) {
      setTimeout(() => {
        burgerContent.style.display =
          burgerContent.style.display === 'block' ? 'none' : 'block';
      }, 200);
    }
  }
  burgerCloseBtn.style.display =
    burgerCloseBtn.style.display === 'block' ? 'none' : 'block';
});

closeBtn.addEventListener('click', closeForm);

// if (window.matchMedia("(max-width: 1024px)").matches) {
//   console.log(1)
// } else {
//   /* the viewport is less than 400 pixels wide */
// }
