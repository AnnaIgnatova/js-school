const dateItem = document.querySelector('.date');

const showDate = () => {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString('en-EN', options);

  dateItem.textContent = currentDate;
};

showDate();

export { showDate };
