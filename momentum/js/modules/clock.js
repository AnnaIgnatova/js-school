import { showDate } from './calendar.js';

const timeItem = document.querySelector('.time');

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeItem.textContent = currentTime;

  setTimeout(() => {
    showTime();
    showDate();
  }, 1000);
};

showTime();
