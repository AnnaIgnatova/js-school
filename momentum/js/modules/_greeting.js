import { Translation, lang } from './_translate.js';

const greetingItem = document.querySelector('.greeting');
const name = document.querySelector('.name');

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours > 5 && hours < 12) return Translation[lang].greeting[0];
  if (hours > 11 && hours < 18) return Translation[lang].greeting[1];
  if (hours > 17 && hours <= 23) return Translation[lang].greeting[2];
  if (hours >= 0 && hours < 6) return Translation[lang].greeting[3];

  return;
};

const showGreeting = () => {
  greetingItem.textContent = `${getTimeOfDay()},`;
  name.placeholder = Translation[lang].placeholder;
};

showGreeting();

export { showGreeting };
