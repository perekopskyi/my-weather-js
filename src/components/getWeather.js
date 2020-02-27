/**
 * Fetch data from API and return JSON
 * 
 * @param {string} city name
 * @param {string} units 
 */
const getWeather = (city, units = 'metric') => {

  const openWeatherApiKey = '8a480d014fa9dd3c95d8fbf4531869d3'; // мой ключ
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

export default getWeather;