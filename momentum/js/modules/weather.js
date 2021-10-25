import { Translation, lang } from './translate.js';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

const getWeatherInfo = () => {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  } else {
    city.value = Translation[lang].city;
  }

  if (
    city.value === Translation.en.city ||
    city.value === Translation.ru.city
  ) {
    city.value = Translation[lang].city;
  }
  getWeather();
};

const hideWeatherInfo = () => {
  humidity.style.display = 'none';
  wind.style.display = 'none';
  weatherDescription.style.display = 'none';
  temperature.style.display = 'none';
  weatherIcon.style.display = 'none';

  weatherError.style.display = 'block';
  weatherError.textContent = Translation[lang].error;
};

const addWeatherInfo = () => {
  humidity.style.display = 'block';
  wind.style.display = 'block';
  weatherDescription.style.display = 'block';
  temperature.style.display = 'block';
  weatherIcon.style.display = 'block';

  weatherError.style.display = 'none';
};

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=53eea9e652b87899262f6888e8a23fba&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.cod == 404 || city.value === '') {
    hideWeatherInfo();
  } else {
    addWeatherInfo();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${Translation[lang].weather[0]}: ${Math.floor(
      data.wind.speed
    )} ${Translation[lang].weather[1]}`;
    humidity.textContent = `${Translation[lang].weather[2]}: ${data.main.humidity}%`;
  }
}

getWeatherInfo();

city.addEventListener('input', () => {
  getWeather();
});

export { getWeatherInfo };
