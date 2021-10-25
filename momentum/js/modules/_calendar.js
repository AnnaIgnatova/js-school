import { lang } from './_translate.js';

const dateItem = document.querySelector('.date');

const showDate = () => {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  const currentDate = date.toLocaleDateString(
    `${lang}-${lang.toUpperCase()}`,
    options
  );

  dateItem.textContent = currentDate;
};

showDate();

export { showDate };
