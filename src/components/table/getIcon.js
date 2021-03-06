const getIcon = data => `<img class="weather-img"
  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
  alt="${data.weather[0].description}" title="${data.weather[0].description}">`;

export default getIcon;