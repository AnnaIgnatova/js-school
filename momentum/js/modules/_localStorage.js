const userName = document.querySelector('.name');
const city = document.querySelector('.city');

const setLocaleStorage = () => {
  localStorage.setItem('name', userName.value);
  localStorage.setItem('city', city.value);
};

const getLocaleStorage = () => {
  if (localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
};

window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocaleStorage);
