const galleryImg = document.querySelector('.gallery-img-inner');
const slides = document.querySelectorAll('.input-slide');
const sliderBtn = document.querySelectorAll('.slider-btn');
const slideNum = document.querySelector('.slide-number');
const formWrapper = document.querySelector('.form-wrapper');
const form = document.querySelector('form');
const buyBtn = document.querySelector('.amount-buy-btn');
const closeBtn = document.querySelector('.close-btn');

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
}

buyBtn.addEventListener('click', () => {
  formWrapper.classList.remove('hide');
  form.style.animation = 'form-animate-from 2s';
});

closeBtn.addEventListener('click', closeForm);

formWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-wrapper')) closeForm(e);
})

sliderBtn[1].addEventListener('click', changeSlideNext);
sliderBtn[0].addEventListener('click', changeSlidePrev);
