import { showDate } from './calendar.js';
import { showGreeting } from './greeting.js';
import { setQuote } from './quotes.js';
import { changeLang, lang } from './translate.js';
import { getWeatherInfo } from './weather.js';
import { Translation } from './translate.js';
import { changeImgURL } from './slider.js';

const settingsImg = document.querySelector('.settings-img');
const settings = document.querySelector('.settings');
const links = document.querySelector('.links-wrapper');
const player = document.querySelector('.player');
const weather = document.querySelector('.weather');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting-container');
const quote = document.querySelector('.footer');

let langInputs;
let imgInputs;
let imgTagsInputs;
let blocksInputs;
let blocksArr = [time, date, greeting, player, weather, quote, links];
const imgTypes = ['github', 'unsplash', 'flickr'];
let inputImgId;
let inputImgType;

let inputLangId = 0;

const initSettingsBlock = () => {
  let settingsBlocksArr;
  if (JSON.parse(localStorage.getItem('settings-blocks'))) {
    settingsBlocksArr = JSON.parse(localStorage.getItem('settings-blocks'));

    settingsBlocksArr.forEach((block, index) => {
      if (block) {
        blocksArr[index].classList.remove('hide');
      } else {
        blocksArr[index].classList.add('hide');
      }
    });
  } else {
    settingsBlocksArr = [true, true, true, true, true, true, true];
  }
  return settingsBlocksArr;
};

const initImagesBlock = () => {
  let settingsImagesBlock;
  let settingsTags;

  if (localStorage.getItem('settings-images-tags')) {
    settingsTags = localStorage.getItem('settings-images-tags');
  } else {
    localStorage.setItem('settings-images-tags', '');
  }

  if (JSON.parse(localStorage.getItem('settings-images'))) {
    settingsImagesBlock = JSON.parse(localStorage.getItem('settings-images'));
    settingsImagesBlock.forEach((block, index) => {
      if (block === true && index !== inputImgId) {
        inputImgId = index;
        inputImgType = imgTypes[index];
        changeImgURL(inputImgType, settingsTags);
      }
    });
  } else {
    localStorage.setItem(
      'settings-images',
      JSON.stringify([true, false, false])
    );
    changeImgURL('github');

  }
};

const initLangBlock = () => {
  let settingsLangBlock;
  if (localStorage.getItem('settings-lang')) {
    settingsLangBlock = localStorage.getItem('settings-lang');
    changeLang(settingsLangBlock);
    inputLangId = settingsLangBlock === 'en' ? 0 : 1;
    showGreeting();
    showDate();
    setQuote();
    getWeatherInfo();
  } else {
    localStorage.setItem('settings-lang', 'en');
  }
};

initSettingsBlock();
initImagesBlock();
initLangBlock();

const createSettingsNav = () => {
  return ` 
    <span class="nav-title">${Translation[lang].settingsNav[0]}</span>
    <ul>
      <li class="settings-item lang-item">${Translation[lang].settingsNav[1]}</li>
      <li class="settings-item img-item">${Translation[lang].settingsNav[2]}</li>
      <li class="settings-item blocks-item">${Translation[lang].settingsNav[3]}</li>
    </ul>
  `;
};

const createSettingsLangBlock = () => {
  return `
    <div class="settings-lang">
      <span class="nav-title">${Translation[lang].settingsLang[0]}</span>
      <div class="langs-select">
          <div class="select-lang">
          <img
              class="lang-img"
              src="./assets/img/en-flag.png"
              alt="en"
          /><label class="lang-title" for="en">${Translation[lang].settingsLang[1]}</label>
          <input type="radio" id="en" name="lang" value="en" />
          </div>
          <div class="select-lang">
          <img
              class="lang-img"
              src="./assets/img/ru-flag.png"
              alt="ru"
          /><label class="lang-title" for="ru">${Translation[lang].settingsLang[2]}</label>
          <input type="radio" id="ru" name="lang" value="ru" />
          </div>
      </div>
    </div>
    `;
};

const createSettingsImgBlock = () => {
  return `
  <div class="settings-img-source">
      <span class="nav-title">${Translation[lang].settingsImg[0]}</span>
      <div class="img-source-select">
        <input type="radio" name="images" id="github" checked/>
        <label for="github"
          ><img
            class="source-img"
            src="./assets/img/gihub.png"
            alt="github"
        /></label>
      </div>
      <div class="img-source-select">
        <input type="radio" name="images" id="unsplash" />
        <label for="unsplash"
          ><img
            class="source-img"
            src="./assets/img/unsplash.png"
            alt="unsplash"
        /></label>
        <input type="text" name="tags" id="unsplash-tags" placeholder="${Translation[lang].settingsImg[1]}">
      </div>
      <div class="img-source-select">
        <input type="radio" name="images" id="flickr" />
        <label for="flickr" class="img-source-label"
          ><img
            class="source-img"
            src="./assets/img/flickr.png"
            alt="flickr"
        /></label>
        <input type="text" name="tags" id="flickr-tags" placeholder="${Translation[lang].settingsImg[1]}">
      </div>
  </div>
  `;
};

const createSettingsHideBlocks = () => {
  return `
  <div class="nav-title">${Translation[lang].settingsBlocks[0]}</div>
  <div class="settings-hide-blocks">
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="time"/>
      <label for="time">${Translation[lang].settingsBlocks[1]}</label>
    </div>
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="date"/>
      <label for="date">${Translation[lang].settingsBlocks[2]}</label>
    </div>
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="greeting"/>
      <label for="greeting">${Translation[lang].settingsBlocks[3]}</label>
    </div>
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="music"/>
      <label for="music">${Translation[lang].settingsBlocks[4]}</label>
    </div>
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="weather"/>
      <label for="weather">${Translation[lang].settingsBlocks[5]}</label>
    </div>
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="quote"/>
      <label for="quote">${Translation[lang].settingsBlocks[6]}</label>
    </div>
    <div class="select-blocks">
      <input type="checkbox" name="blocks" id="links"/>
      <label for="links">${Translation[lang].settingsBlocks[7]}</label>
    </div>
  </div>
  `;
};

let currentRoute = 0;

const clearInputs = (inputs) => {
  inputs.forEach((input) => {
    input.value = '';
  });
};

const addNewEventsOnLang = () => {
  langInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      inputLangId = index;
      localStorage.setItem('settings-lang', input.value);
      changeLang(input.value);
      showGreeting();
      showDate();
      setQuote();
      getWeatherInfo();
      chooseRoute(currentRoute);
    });
  });
};

const addEventsOnImages = () => {
  let settingsImagesBlock = JSON.parse(localStorage.getItem('settings-images'));
  let settingsTags = localStorage.getItem('settings-images-tags');

  imgInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (index !== inputImgId) {
        inputImgId = index;
        inputImgType = input.id;
        clearInputs(imgTagsInputs);
        settingsTags = '';
        changeImgURL(inputImgType, settingsTags);
        localStorage.setItem('settings-images-tags', settingsTags);
      }

      [...settingsImagesBlock].forEach((item, index) => {
        if (index === inputImgId) {
          settingsImagesBlock[index] = true;
        } else {
          settingsImagesBlock[index] = false;
        }
      });
      localStorage.setItem(
        'settings-images',
        JSON.stringify(settingsImagesBlock)
      );
    });
  });

  imgTagsInputs.forEach((input, index) => {
    if (index + 1 === inputImgId) input.value = settingsTags;
  });

  imgTagsInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
      settingsTags = input.value;
      console.log(settingsTags);
      changeImgURL(inputImgType, input.value);
      localStorage.setItem('settings-images-tags', settingsTags);
    });
  });
};

const addEventsOnBlocks = () => {
  let settingsBlocksArr = initSettingsBlock();

  blocksInputs.forEach((input, index) => {
    if (settingsBlocksArr[index]) {
      input.checked = true;
      blocksArr[index].classList.remove('hide');
    } else {
      input.checked = false;
      blocksArr[index].classList.add('hide');
    }
  });

  blocksInputs.forEach((input, index) => {
    input.checked = settingsBlocksArr[index];
    input.addEventListener('input', () => {
      if (input.checked === true) {
        blocksArr[index].style.animation = 'showSettings 0.5s';
        settingsBlocksArr[index] = true;
        setTimeout(() => {
          blocksArr[index].classList.remove('hide');
        }, 500);
      } else {
        blocksArr[index].style.animation = 'hideSettings 0.5s';
        settingsBlocksArr[index] = false;
        setTimeout(() => {
          blocksArr[index].classList.add('hide');
        }, 500);
      }
      localStorage.setItem(
        'settings-blocks',
        JSON.stringify(settingsBlocksArr)
      );
    });
  });
};

const removeActiveRoute = (routes) => {
  routes.forEach((route) => {
    route.classList.remove('active-route');
  });
};

const createSettingsBlock = (createBlock) => {
  const nav = document.createElement('nav');
  const div = document.createElement('div');

  div.classList.add('settings-container');
  nav.classList.add('settings-nav');
  nav.innerHTML = createSettingsNav();
  div.innerHTML = createBlock;

  settings.innerHTML = '';
  settings.append(nav);
  settings.append(div);

  let routes = document.querySelectorAll('.settings-item');

  removeActiveRoute(routes);
  routes[currentRoute].classList.add('active-route');

  routes.forEach((route, index) => {
    route.addEventListener('click', () => {
      currentRoute = index;
      chooseRoute(currentRoute);
    });
  });
};

function chooseRoute(route = currentRoute) {
  switch (route) {
    case 0: {
      createSettingsBlock(createSettingsLangBlock());
      langInputs = document.querySelectorAll('input[name="lang"]');

      langInputs[inputLangId].checked = true;

      addNewEventsOnLang();

      break;
    }
    case 1: {
      createSettingsBlock(createSettingsImgBlock());
      imgInputs = document.querySelectorAll('input[name="images"]');
      imgTagsInputs = document.querySelectorAll('input[name="tags"]');
      imgInputs[inputImgId].checked = true;
      addEventsOnImages();
      break;
    }
    case 2: {
      createSettingsBlock(createSettingsHideBlocks());
      blocksInputs = document.querySelectorAll('input[name="blocks"]');
      addEventsOnBlocks();
      break;
    }
    default:
      break;
  }
}

chooseRoute();
settingsImg.addEventListener('click', () => {
  settings.classList.toggle('hide');
});


