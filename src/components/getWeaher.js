/**
 * Fetch data from API and return JSON
 * 
 * @param {string} city name
 * @param {string} units 
 */
const getWeaher = (city, units = 'metric') => {

  const openWeatherApiKey = 'a71cbacce1b2b9aa059f27a00094c380'; // мой ключ
  const weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${openWeatherApiKey}`;

  return fetch(weatherApiLink)
    .then(response => response.json())
    .then(result => {
      if (result.cod && result.cod === 400) {
        return result.message;
      }
      return result;
    });
};

export default getWeaher;