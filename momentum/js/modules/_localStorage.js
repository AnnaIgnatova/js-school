const userName = document.querySelector('.name');

const setLocaleStorage = () => {
  localStorage.setItem('name', userName.value);
};

const getLocaleStorage = () => {
  if (localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
};

window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocaleStorage);
