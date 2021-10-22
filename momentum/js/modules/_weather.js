const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

if (localStorage.getItem('city')) {
  city.value = localStorage.getItem('city');
} else {
  city.value = 'Minsk';
}

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=53eea9e652b87899262f6888e8a23fba&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.floor(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

getWeather();

city.addEventListener('change', () => {
  getWeather();
});
