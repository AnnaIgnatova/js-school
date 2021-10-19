const greetingItem = document.querySelector('.greeting');

const getTimeOfDay = (hours) => {
  if (hours > 4 && hours < 12) return 'Morning';
  if (hours > 11 && hours < 18) return 'Afternoon';
  if (hours > 17 && hours < 23) return 'Evening';
  if (hours >= 0 && hours < 5) return 'Night';

  return;
};

const showGreeting = () => {
  const date = new Date();
  const hours = date.getHours();
  greetingItem.textContent = `Good ${getTimeOfDay(hours)},`;
};

showGreeting();
