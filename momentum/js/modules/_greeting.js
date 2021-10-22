import { greetingTranslation, lang } from './_translate.js';

const greetingItem = document.querySelector('.greeting');
const name = document.querySelector('.name');

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours > 5 && hours < 12) return greetingTranslation[lang].greeting[0];
  if (hours > 11 && hours < 18) return greetingTranslation[lang].greeting[1];
  if (hours > 17 && hours <= 23) return greetingTranslation[lang].greeting[2];
  if (hours >= 0 && hours < 6) return greetingTranslation[lang].greeting[3];

  return;
};

const showGreeting = () => {
  greetingItem.textContent = `${getTimeOfDay()},`;
  name.placeholder = greetingTranslation[lang].placeholder;
};

showGreeting();

export { lang };
