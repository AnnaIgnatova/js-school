// const createImage = (src) => new Promise((res, rej) => {
//   const img = new Image();
//   img.onload = () => res(img);
//   img.onerror = rej;
//   img.src = src;
// });

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }

// render();

// ----------------------------- settings

const volumeInput = document.querySelector('.volume-input');

volumeInput.addEventListener('input', (e) => {
  const target = e.target;
  const value = target.value;
  target.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${value}%, #A4A4A4 ${value}%, white 100%)`;
});

// -------------------------- picture category

const cardsBlock = document.querySelector('.categories-cards');
const homeLink = document.querySelector('.home-link');
const welcome = document.querySelector('.welcome');
const categories = document.querySelector('.categories');
const picturesBtn = document.querySelector('.pictures-btn');
const settings = document.querySelector('.settings');
const settingsIcon = document.querySelectorAll('.welcome-settings');
const headerSettings = document.querySelector('.header-settings');
const closeIcon = document.querySelector('.close-icon');

const PIC_CATEGORY = [
  'Portrait',
  'Landscape',
  'Still life',
  'Impressionism',
  'Expressionism',
  'Avant-garde',
  'Renaissance',
  'Surrealism',
  'Kitsch',
  'Minimalism',
  'Interior',
  'Nude',
];

let currentBlock = welcome;

const renderCard = (category, index) => {
  let card = document.createElement('div');
  card.className = 'category-card';
  card.innerHTML = `
    <div class="card-info">
      <span class="card-name">${category}</span>
      <span class="card-points">5/10</span>
    </div>
    <div class="card-img">
      <div class="card-play-info">
        <span>Play</span>
        <span>Score</span>
      </div>
    </div>
  `;
  card.querySelector(
    '.card-img'
  ).style.backgroundImage = `url('./images/pic-category/${index}.jpg')`;
  return card;
};

const renderCategories = () => {
  cardsBlock.innerHTML = '';
  PIC_CATEGORY.map((category, index) => {
    let card = renderCard(category, index + 1);
    cardsBlock.append(card);
  });
};

renderCategories();

const addAnimation = (blockHide, blockShow) => {
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
};

homeLink.addEventListener('click', () => {
  addAnimation(categories, welcome);
  currentBlock = welcome;
});

picturesBtn.addEventListener('click', () => {
  addAnimation(welcome, categories);
  currentBlock = categories;
});

settings.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('settings-back') ||
    e.target.parentElement.classList.contains('settings-back')
  ) {
    addAnimation(settings, currentBlock);
  }
});

settingsIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    addAnimation(currentBlock, settings);
  });
});

closeIcon.addEventListener('click', () => {
  addAnimation(settings, currentBlock);
});
