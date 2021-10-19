const greetingItem = document.querySelector('.greeting');

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours > 4 && hours < 12) return 'morning';
  if (hours > 11 && hours < 18) return 'day';
  if (hours > 17 && hours < 23) return 'evening';
  if (hours >= 0 && hours < 5) return 'night';

  return;
};

const showGreeting = () => {
  greetingItem.textContent = `Good ${getTimeOfDay()},`;
};

showGreeting();

export { getTimeOfDay };
