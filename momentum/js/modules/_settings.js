import { showDate } from './_calendar.js';
import { showGreeting } from './_greeting.js';
import { setQuote } from './_quotes.js';
import { changeLang, lang } from './_translate.js';
import { getWeatherInfo } from './_weather.js';
import { Translation } from './_translate.js';
import { changeImgURL } from './_slider.js';

const settingsImg = document.querySelector('.settings-img');
const settings = document.querySelector('.settings');
let langItem;
let langBlock;
let langInputs;
let imgItem;
let imgBlock;
let imgInputs;
let imgTagsInputs;

const createSettingsNav = () => {
  return ` 
    <span class="nav-title">${Translation[lang].settingsNav[0]}</span>
    <ul>
      <li class="settings-item lang-item">${Translation[lang].settingsNav[1]}</li>
      <li class="settings-item img-item">${Translation[lang].settingsNav[2]}</li>
      <li>${Translation[lang].settingsNav[3]}</li>
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
        <input type="radio" name="images" id="github"/>
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

let inputLangId = 0;
let inputImgId = 0;
let inputImgType;
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
  imgInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      inputImgId = index;
      inputImgType = input.id;
      clearInputs(imgTagsInputs);
      changeImgURL(inputImgType);
    });
  });
  imgTagsInputs.forEach((input) => {
    input.addEventListener('change', () => {
      changeImgURL(inputImgType, input.value);
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
      langItem = document.querySelector('.lang-item');
      langBlock = document.querySelector('.settings-lang');
      langInputs = document.querySelectorAll('input[name="lang"]');
      langInputs[inputLangId].checked = true;

      addNewEventsOnLang();

      break;
    }
    case 1: {
      createSettingsBlock(createSettingsImgBlock());
      imgItem = document.querySelector('.img-item');
      imgBlock = document.querySelector('.settings-img-source');
      imgInputs = document.querySelectorAll('input[name="images"]');
      imgTagsInputs = document.querySelectorAll('input[name="tags"]');
      imgInputs[inputImgId].checked = true;

      addEventsOnImages();
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
